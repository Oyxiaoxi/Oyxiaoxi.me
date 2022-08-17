---
title: 'Zshrc Alias'
date: 2022-05-29T15:41:00Z
draft: false
lang: en
type: notes
duration: Read · 3min
description: Zshrc Alias。
---

```bash

# --------------------------------------------------------- #
# Git Aliases
# --------------------------------------------------------- #

# Go To Project Root
alias grt='cd "$(git rev-parse --show-toplevel)"'

# Git Commit
alias gs='git status'
alias gp='git push -u origin master'
alias gpf='git push --force'
alias gpft='git push --follow-tags'
alias gpl='git pull --rebase'
alias gcl='git clone'
alias gst='git stash'
alias grm='git rm'
alias gmv='git mv'

# Git Branch
alias master='git checkout master'
alias main='git checkout main'
alias develop='git checkout develop'
alias gco='git checkout'
alias gcob='git checkout -b'

alias grb='git rebase'
alias grbomerge='git rebase origin/master'
alias grbc='git rebase --continue'

alias gl='git log'
alias glo='git log --oneline --graph --decorate --all'

alias grh='git reset HEAD'

alias ga='git add'
alias gA='git add -A'

alias gc='git commit'
alias gcm='git commit -m'
alias gca='git commit -a'
alias gcam='git add -A && git commit -m'
alias gfrb='git fetch origin && git rebase origin/master'
alias grao='git remote add origin'

alias gxn='git clean -dn'
alias gx='git clean -df'

alias gsha='git rev-parse HEAD | pbcopy'

alias ghci='gh run list -L 1'

alias gfa='git fetch --all'
alias grhom='git reset --hard origin/master'

# --------------------------------------------------------- #
# Directories
# Iput
# `~/Desktop/Projects/` for my projects
# `~/Desktop/Projects/Documents/` for my documents
# --------------------------------------------------------- #
function P() {
  cd ~/Desktop/Projects/$1
}

function D() {
  cd ~/Desktop/Projects/Documents/$1
}

# --------------------------------------------------------- #
# Node Package Manager
# https://github.com/antfu/ni
# --------------------------------------------------------- #
alias nio='ni --prefer-offline'
alias s='nr start'
alias d='nr dev'
alias b='nr build'
alias bw='nr build --watch'
alias t='nr test'
alias tu='nr test -u'
alias tw='nr test --watch'
alias w='nr watch'
alias p='nr play'
alias c='nr typecheck'
alias lint='nr lint'
alias lintf='nr lint --fix'
alias release='proxy; nr release'
```
