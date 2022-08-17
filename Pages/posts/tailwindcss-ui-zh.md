---
title: 'TailWindCss & TailWind UI'
date: 2022-04-02T16:00:00Z
draft: false
lang: zh
duration: Read · 4min
description: TailWind CSS & TailWind UI。
---

## TailWindCss

Rapidly build modern websites without ever leaving your HTML.

A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

[TailWindCss Documentation](https://tailwindcss.com/docs/installation)

> 详细食用方法请看官网 ...

## TailWind UI

BY THE MAKERS OF TAILWIND CSS
Beautiful UI components, crafted with Tailwind CSS
Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content. Get started by checking out our free preview components, or browsing all of the examples in the categories you're most curious about.

[TailWind UI Documentation](https://tailwindui.com/documentation)

Vue 的 TailWind UI 依赖于 [Headless UI](https://headlessui.dev/) 来支持所有的交互行为和 [Heroicons](https://heroicons.com/) 图标

``` shell
npm install @headlessui/vue @heroicons/vue
```

## Resources & assets

#### 图标

在 Tailwind UI 中使用的所有图标都来自 Heroicons，这是我们在开始使用 Tailwind UI 时自行设计和开发的免费 MIT 许可图标集。

#### 图片

Tailwind UI 中的图像几乎完全来自 Unsplash。如果您的项目需要可免费使用的摄影，这是一个很好的资源。

#### 插图

Tailwind UI 中的一些示例使用 Pixsellz 提供的免费 Lucid 插图包中的插图。您可以在他们的网站上获取全套插图并查看他们的其他设计资源。

## TailWind UI Components

### Marketing

Landing page heroes, feature sections, newsletter sign up forms — everything you need to build beautiful marketing websites.

### Application UI

Form layouts, tables, modal windows — everything you need to build beautiful responsive web applications.

### Ecommerce

#### 500+ Examples

设计精美、制作精良的组件遵循所有可访问性最佳实践并且易于定制。

#### React, Vue, and HTML

由 Headless UI 提供支持的 React 和 Vue 的可访问、交互式示例，如果您愿意自己编写任何必要的 JS，还可以加上 vanilla HTML。

#### Fully Responsive

每个示例都是完全响应的，并且经过精心设计和实施，在任何屏幕尺寸下看起来都很棒。

### Application UI -> Stats Components Example

``` html
<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <h3 class="text-lg leading-6 font-medium text-gray-900">Last 30 days</h3>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div v-for="item in stats" :key="item.name" 
      class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
        <dt class="text-sm font-medium text-gray-500 truncate">
          {{ item.name }}
        </dt>
        <dd class="mt-1 text-3xl font-semibold text-gray-900">
          {{ item.stat }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
const stats = [
  { name: 'Total Subscribers', stat: '71,897' },
  { name: 'Avg. Open Rate', stat: '58.16%' },
  { name: 'Avg. Click Rate', stat: '24.57%' },
]

export default {
  setup() {
    return {
      stats,
    }
  },
}
</script>
```
