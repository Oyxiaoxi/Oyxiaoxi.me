---
title: 'GoLang Gin CORS Policy '
date: 2022-04-10T16:00:00Z
draft: false
lang: zh
duration: Read · 2min
description: 利用中间件处理 GoLang Gin CORS 跨域。
---

[[toc]]

### CORS

全称 Cross-Origin Resource Sharing，是一种允许当前域 domain 的资源 web service 被其他域domain 的脚本请求访问的机制，通常由于同域安全策略 the same-origin security policy 浏览器会禁止这种跨域请求。

新项目是利用 gin 框架开发的，过程中遇到跨域问题
> Gin 默认是不允许跨域的

### 跨域固定报错格式

``` javascript
Access to XMLHttpRequest at 'http://localhost:3000/api/v1/auth/verify-codes/captcha' from origin 'http://localhost:8080' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

### 解决方案

在路由返回数据前加入 CORS 中间件，让其支持跨域

``` go
func Cors() gin.HandlerFunc {
 return func(c *gin.Context) {
  // 这里可以用*，也可以用你指定的域名
  c.Header("Access-Control-Allow-Origin", "*")
  // 允许头部参数
  c.Header("Access-Control-Allow-Headers", "Content-Type,AccessToken, X-CSRF-Token, Authorization, Token")
  // 允许的方法
  c.Header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT,  DELETE, UPDATE")
  c.Header("Access-Control-Expose-Headers", "Content-Length,  Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type")
  c.Header("Access-Control-Allow-Credentials", "true")

  method := c.Request.Method
  //放行OPTIONS方法
  if method == "OPTIONS" {
   c.AbortWithStatus(http.StatusOK)
  }
  // 处理请求
  c.Next()
 }
}
```

在其全局中间件里注册

```go
// SetupRoute 路由初始化
func SetupRoute(router *gin.Engine) {
 // 注册全局中间件
 registerGlobalMiddleWare(router)
 //  注册 API 路由
 routes.RegisterAPIRoutes(router)
 //  配置 404 路由
 setup404Handler(router)
}

func registerGlobalMiddleWare(router *gin.Engine) {
 router.Use(
  middlewares.Cors(),
 )
}
```
