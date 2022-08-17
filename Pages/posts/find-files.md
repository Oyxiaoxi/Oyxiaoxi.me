---
title: 'Flush MAC Dns cache'
date: 2019-08-19T09:00:00Z
draft: false
lang: en
type: notes
duration: Read · 1min
description: Flush MAC Dns cache。
---

```bash
sudo dscacheutil -flushcache
# 配合 nslookup
nslookup www.github.com
```
