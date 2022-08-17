---
title: 'JSON 相关小需求的解决过程与思路'
date: 2021-07-01T12:36:00Z
draft: false
lang: zh
duration: Read · 18min
description: JSON related small requirements solution process and ideas。
---

[[toc]]

![JSON ideas](//cdn.3333120.com/article/json-ideas/wLPWKEkZR8.jpg)

## 起因

昨天同事问我，能不能在接口返回中不要将中文转成 Unicode 编码，因为这是 Laravel 框架做的事情，所以我们要实现这个效果无非就是在 json_encode 第二个参数中加入常量 `JSON_UNESCAPED_UNICODE` 选项即可，但是我们在控制器返回的是对象，或者是数组，这个 encode 动作是框架最后输出前完成的。应该是一个非常小小小的需求了。

## 啃源码

我花了 5 分钟跟完源代码，发现它在 `Illuminate\Http\Response` 中有这么一段来完成 JSON 转化的：

*vendor/laravel/framework/src/Illuminate/Http/Response.php*

```php
if ($this->shouldBeJson($content)) {
    $this->header('Content-Type', 'application/json');

    $content = $this->morphToJson($content);
}
```

其中通过 `shouldBeJson` 这个方法来判断当前的响应内容是否需要转化成 JSON 格式：

*vendor/laravel/framework/src/Illuminate/Http/Response.php*

```php
protected function shouldBeJson($content)
{
    return $content instanceof Arrayable ||
           $content instanceof Jsonable ||
           $content instanceof ArrayObject ||
           $content instanceof JsonSerializable ||
           is_array($content);
}
```

最后通过 `morphToJson` 完成了转化动作：

*vendor/laravel/framework/src/Illuminate/Http/Response.php*

```php
protected function morphToJson($content)
{
    if ($content instanceof Jsonable) {
        return $content->toJson();
    } elseif ($content instanceof Arrayable) {
        return json_encode($content->toArray());
    }

    return json_encode($content);
}
```

所以聪明的你已经发现了，这里的 `json_encode` 没有传递任何选项，所以我们无法通过简单的方法调用来实现它。

## 解决方案1

既然最终出口是这么干的，那我立即想到一个简单的处理方式：在 `public/index.php` 中输出响应值前处理：

*public/index.php*

```php
$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
);

// 取到内容
$content = $response->original;

// 检查原始内容的类型是否需要转 json
if ($content instanceof Arrayable ||
    $content instanceof Jsonable ||
    $content instanceof ArrayObject ||
    $content instanceof JsonSerializable ||
    is_array($content)) {
    // 重新设置响应内容
    $response->setContent(json_encode($content, JSON_UNESCAPED_UNICODE));
}

$response->send();
```

就这样轻松的搞定了这个需求。

## 强迫症犯了

虽然问题解决了，始终觉得这种改入口文件的骚操作不太能接受，总觉得应该有更科学一点的方法，哪怕更科学一丢丢都行。

## 继续探索

突然想到，我们的接口都是返回的是 Api Resource 模式，也就是说最后返回的都是 `Illuminate\Http\Resources\Json\JsonResource` 实例或者集合，那可否在这里支持选项定义呢？

答案是可以：

在 `Illuminate\Http\Resources\Json\JsonResource` 中有一个 `toResponse` 方法：

*vendor/laravel/framework/src/Illuminate/Http/Resources/Json/JsonResource.php*

```php
public function toResponse($request)
{
    return (new ResourceResponse($this))->toResponse($request);
}
```

它实例化并调用了 `Illuminate\Http\Resources\Json\ResourceResponse` 的 `toResponse` 的方法做为返回值：

*vendor/laravel/framework/src/Illuminate/Http/Resources/Json/ResourceResponse.php*

```php
public function toResponse($request)
{
    return tap(response()->json(
        $this->wrap(
            $this->resource->resolve($request),
            $this->resource->with($request),
            $this->resource->additional
        ),
        $this->calculateStatus()
    ), function ($response) use ($request) {
        $response->original = $this->resource->resource;

        $this->resource->withResponse($request, $response);
    });
}
```

这个方法最后返回了 `Illuminate\Http\JsonResponse`，终于，我们发现这个类是支持选项定义的：

*vendor/symfony/http-foundation/JsonResponse.php*

```php
protected $encodingOptions = self::DEFAULT_ENCODING_OPTIONS;
```

可以通过它的方法：`setEncodingOptions($encodingOptions)` 来传递我们想要的 json_encode 选项，所以，我们只需要在我们的 Resource 基类（我们接口返回值都使用了一个 Resource 基类 `App\Http\Resources\Resource`）中添加如下方法即可：

*app/Http/Resources/Resource.php*

```php
/**
 * @param \Illuminate\Http\Request $request
 *
 * @return \Illuminate\Http\JsonResponse
 */
public function toResponse($request)
{
    return parent::toResponse($request)->setEncodingOptions(\JSON_UNESCAPED_UNICODE);
}
```

可是，我还没来得及高兴，问题又来了，某个接口由于不是标准的模型格式，没有返回 Resource 实例，所以最后觉得这么干还是不行，必须得在 Laravel 输出前统一处理。

### 终极解决方案

我想到了 Laravel 的 ternimate 中间件特性，然后发现不可行，因为你会发现在 `public/index.php` 中，ternimate 中间件的最后在响应输出之后：

*public/index.php*

```php
//...
$response->send();

$kernel->terminate($request, $response);
```

所以时机不合适。

那么在这三行代码里寻找答案吧：

*public/index.php*

```php
$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
);
```

我发现在这个逻辑的最后，在 `Illuminate\Foundation\Http\Kernel` 中有一个 `handle` 方法：

*vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php*

```php
public function handle($request)
{
    try {
        $request->enableHttpMethodParameterOverride();

        $response = $this->sendRequestThroughRouter($request);
    } catch (Exception $e) {
        $this->reportException($e);

        $response = $this->renderException($request, $e);
    } catch (Throwable $e) {
        $this->reportException($e = new FatalThrowableError($e));

        $response = $this->renderException($request, $e);
    }

    $this->app['events']->dispatch(
        new Events\RequestHandled($request, $response)
    );

    return $response;
}
```

上面最后部分有一个事件 `Illuminate\Foundation\Http\Events\RequestHandled` 被触发，所以这里就是突破口了：监听这个事件，修改 `$response` 的内容。

创建一个事件监听器：

```bash
./artisan make:listener SetResponseEncodingOptions --event=Illuminate\Foundation\Http\Events\RequestHandled
```

代码如下：

*app/Listensers/SetResponseEncodingOptions*

```php
<?php

namespace App\Listeners;

use ArrayObject;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Contracts\Support\Jsonable;
use Illuminate\Foundation\Http\Events\RequestHandled;

class SetResponseEncodingOptions
{
    /*...*/
    public function handle(RequestHandled $event)
    {
        $content = $event->response->original;

        if ($content instanceof Arrayable ||
            $content instanceof Jsonable ||
            $content instanceof ArrayObject ||
            $content instanceof \JsonSerializable ||
            is_array($content)) {
            $event->response->setContent(json_encode($content, \JSON_UNESCAPED_UNICODE));
        }
    }
}
```

配置监听规则：

*app/Providers/EventServiceProvider.php*

```php
protected $listen = [
    //...
    \Illuminate\Foundation\Http\Events\RequestHandled::class => [
        \App\Listeners\SetResponseEncodingOptions::class,
    ],
];
```

终于，找到了一个看起来合理的做法解决了这个小小小需求。
