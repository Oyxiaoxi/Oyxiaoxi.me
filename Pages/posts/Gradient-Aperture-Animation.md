---
title: 'Gradient Aperture Animation'
date: 2023-05-16T16:02:00Z
draft: false
lang: zh
duration: Read · 8min
description: Use TailwindCss to make gradient aperture animation.
plum: true
---

[[toc]]

### 效果展示
<div class="flex justify-center items-center">
  <button 
    type="button" 
    class="px-10 py-4 text-1xl font-bold conic animate-shimmer rounded-4 text-white"
  >
    Hi, I'm a button
  </button>
</div>

### 原理
conic gradient + animation

### 代码实现
```html
<div class="min-h-screen flex justify-center items-center w-full">
  <button
    type="button"
    class="
      px-24 py-8 font-bold bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.slate.950)_0%,theme(colors.slate.100)_10%,theme(colors.slate.950)_20%)] animate-[shimmer_2.5s_linear_infinite] rounded-[24px] relative

      after:flex after:absolute after:bg-slate.950 after:inset-[2px] after:rounded-[22px] after:content-[attr(aria-label)] after:items-center after:justify-center

      aria-label='Hi, I am a button'
    "
  >
    <span class="opacity-8">Hi, I'm a button</span>
  </button>
</div>
```

```css
@property --shimmer-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

@keyframes shimmer{
  0%{
    --shimmer-angle: 0deg;
  }
  100%{
    --shimmer-angle: 360deg;
  }
}
```
