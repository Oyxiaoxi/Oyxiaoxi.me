---
title: 'Find Files'
date: 2022-05-16T09:00:00Z
draft: false
lang: zh
duration: Read · 1min
description: Forced Cross Domain。
plum: true
---

[[toc]]

```bash
查找当前目录下以tar.gz结尾的文件：find . -name '*tar.gz'

查找当前目录及子目录下所有以.txt和.pdf结尾的文件：find . -name "*.txt" -o -name "*.pdf"

查找当前目录下不以txt结尾的文件：find . ! -name "*.txt"

查找当前目录下以.txt结尾的文件并删除：find . -type f -name "*.txt" -delete

查找当前目录下权限不是644的php文件：find . -type f -name "*.php" ! -perm 644

查找长度为0的文件：find . -empty

*.html:表示查找所在目录下的所有扩展名为html的文件;
SEARCHSTRING:要查找搜索的字符;
REPLACESTRING:替换后的字符。
记住: 如果替换的字符包括 ()[]/"'!? 等等这样的特殊字符，你必须在字符前加上反斜杠 \ 。

find .|xargs grep -ri "SEARCHSTRING"
find . -name '*.html,*.htm,*.js' -print0 | xargs -0 perl -pi -e 's/SEARCHSTRING/REPLACESTRING/g'

// 查找当前目录下的 .DS_Store 文件并删除
sudo find ./ -name ".DS_Store" -depth -exec rm {} \;
// 关闭在转移保存文件时生成的 .DS_Store 文件
defaults write com.apple.desktopservices DSDontWriteNetworkStores true
```
