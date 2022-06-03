<script setup lang="ts">
import { isDark } from '~/logics'
const inactiveStyle = 'opacity-50 hover:opacity-50'
const route = useRoute()
</script>
<template>
  <div class="nav flex items-center">
    <nav class="nav__content">
      <router-link class="nav__logo w-8 h-8 lg:fixed select-none outline-none" to="/" focusable="false">
        <img v-show="isDark" src="//cdn.3333120.com/static/logo-dark.svg?url" alt="logo">
        <img v-show="!isDark" src="//cdn.3333120.com/static/logo.svg?url" alt="logo">
      </router-link>

      <div class="nav__list sm:20">
        <router-link to="/posts" title="Posts" class="w-8 text-center" :class="route.path === '/posts' ? '' : inactiveStyle">
          <div i-fa-solid:blog />
        </router-link>
        <router-link to="/notes" title="Notes" class="w-8 text-center" :class="route.path === '/notes' ? '' : inactiveStyle">
          <div i-emojione-v1:note-pad />
        </router-link>
        <router-link to="/travel" title="Travel" class="w-8 text-center lt-md:hidden" :class="route.path === '/travel' ? '' : inactiveStyle">
          <div i-twemoji:small-airplane />
        </router-link>
        <router-link to="/prose" title="Travel" class="w-8 text-center lt-md:hidden" :class="route.path === '/prose' ? '' : inactiveStyle">
          <div i-emojione:rosette />
        </router-link>
        <router-link to="/projects" title="Projects" class="w-8 text-center" :class="route.path === '/projects' ? '' : inactiveStyle">
          <div i-logos:producthunt />
        </router-link>
        <router-link to="/bookmarks" title="Bookmarks" class="w-8 text-center" :class="route.path === '/bookmarks' ? '' : inactiveStyle">
          <div i-noto-v1:bookmark-tabs />
        </router-link>
        <router-link to="/photos" title="Photo" class="w-8 text-center" :class="route.path === '/photos' ? '' : inactiveStyle">
          <div i-logos:google-photos />
        </router-link>
        <router-link to="/reviews" title="Reviews" class="w-8 text-center lt-md:hidden" :class="route.path === '/reviews' ? '' : inactiveStyle">
          <div i-icon-park-outline:safe-retrieval />
        </router-link>
        <a href="https://oyxiaoxi.me/feed.xml" target="_blank" title="RSS" class="w-8 text-center lt-md:hidden" :class="Rss ? '' : inactiveStyle">
          <div i-carbon:rss />
        </a>
        <!-- <a href="https://twitter.com/Oyxiaoxi" target="_blank" title="Twitter" class="w-8 text-center lt-md:hidden" :class="twitter ? '' : inactiveStyle">
          <div i-logos:twitter />
        </a> -->
        <!-- <a href="https://github.com/Oyxiaoxi" target="_blank" title="GitHub" class="w-8 text-center lt-md:hidden" :class="github ? '' : inactiveStyle">
          <div i-el:github />
        </a> -->
      </div>
      <toggle-theme />
    </nav>
  </div>
</template>
