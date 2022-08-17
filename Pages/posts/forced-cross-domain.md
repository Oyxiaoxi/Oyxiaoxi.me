---
title: 'Forced Cross Domain'
date: 2022-05-16T09:00:00Z
draft: false
lang: zh
type: notes
duration: Read · 1min
description: Forced Cross Domain。
---

Chrome 93版本以前跨域

```bash
open -a /Applications/Google| Chrome.app --args--disable-web-security--user-data-dir=/User/Oyxiaoxi/Documents/MyChromeDevUserData
```

Chrome 93版本以后跨域

```bash
open -a /Applications/Google | Chrome.app --args--disable-web-security--disable-features=SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure--user-data-dir=/
User/Oyxiaoxi/Documents/MyChromeDevUserData
```
