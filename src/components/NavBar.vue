<script setup lang="ts">
import { isDark } from '~/logics'
</script>
<template>
  <div class="nav flex items-center">
    <nav class="nav__content">
      <router-link
        class="nav__logo w-8 h-8 lg:fixed select-none outline-none"
        to="/"
        focusable="false"
      >
        <img v-show="isDark" src="/logo-dark.svg?url" alt="logo">
        <img v-show="!isDark" src="/logo.svg?url" alt="logo">
      </router-link>

      <div class="nav__list sm:20">
        <router-link to="/posts" title="Posts" class="w-8 text-center">
          <div i-fa-solid:blog />
        </router-link>
        <router-link to="/projects" title="Projects" class="w-8 text-center">
          <div i-logos:producthunt />
        </router-link>
        <router-link to="/notes" title="Notes" class="w-8 text-center">
          <div i-emojione-v1:note-pad />
        </router-link>
        <router-link to="/bookmarks" title="Bookmarks" class="w-8 text-center">
          <div i-noto-v1:bookmark-tabs />
        </router-link>
        <router-link to="/photos" title="Photo" class="w-8 text-center">
          <div i-logos:google-photos />
        </router-link>
        <a
          href="https://twitter.com/Oyxiaoxi"
          target="_blank"
          title="Twitter"
          class="lt-md:hidden w-8 text-center"
        >
          <div i-logos:twitter />
        </a>
        <a
          href="https://github.com/Oyxiaoxi"
          target="_blank"
          title="GitHub"
          class="lt-md:hidden w-8 text-center"
        >
          <div i-el:github />
        </a>
      </div>
      <toggle-theme />
    </nav>
  </div>
</template>
