---
title: Projects - Oyxiaoxi
display: Projects
subtitle: List of projects that I am proud of
description: List of projects that I am proud of
projects:
  Vue Ecosystem:
    - name: 'Vue Composables'
      link: 'https://github.com/Oyxiaoxi/Vue-Composables'
      desc: 'Vue3 Composition Api'
      icon: 'i-mdi:vuejs'
    - name: 'Nestjs'
      link: 'https://github.com/Oyxiaoxi/nestjs-practice'
      desc: 'NestJs 实践'
      icon: 'i-logos:nestjs'

  Api Docs:
    - name: 'King Glory'
      link: 'https://github.com/Oyxiaoxi/King-Glory'
      desc: '一个基于 node.js 的 Api 后台管理系统'
      icon: 'i-vscode-icons:file-type-node2'
    - name: 'GoHub Service'
      link: 'https://github.com/Oyxiaoxi/GoHub-Service'
      desc: '一个基于 GoLang 的 Api 后台管理系统'
      icon: 'i-fa6-brands:golang'

  Starter Templates:
    - name: 'DeDeCMS'
      link: 'https://github.com/Oyxiaoxi/DeDeCMS'
      desc: 'Opinionated DeDeCms Starter Template'
      icon: 'i-simple-icons:civicrm'

  Games:
    - name: 'Minesweeper'
      link: 'https://github.com/Oyxiaoxi/vue-minesweeper'
      desc: 'A Vue-based minesweeper game'
      icon: 'i-arcticons:minesweeper'

  TypeScript:
    - name: 'TypeScript-Tips'
      link: 'https://github.com/Oyxiaoxi/TypeScript-Tips'
      desc: 'A collection of TypeScript tips'
      icon: 'i-vscode-icons:file-type-typescript-official' 

  Configurations:
    - name: 'MAC-Configuration'
      link: 'https://github.com/Oyxiaoxi/MAC-Configuration'
      desc: 'MAC Configuration'
      icon: 'i-mdi:laptop-mac'
    - name: 'Script'
      link: 'https://github.com/Oyxiaoxi/script'
      desc: 'Unusual Linux commands and scripts'
      icon: 'i-logos:bash'

---

<ClientOnly>
  <Firefly/>
</ClientOnly>

<ListProjects :projects="frontmatter.projects"/>
