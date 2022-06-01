<script setup lang="ts">
useHead({
  meta: [
    { property: 'og:title', content: 'Oyxiaoxi' },
    { property: 'og:image', content: 'https://oyxiaoxi.me/avatar.png' },
    { name: 'description', content: 'Oyxiaoxi\'s Portfolio' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:creator', content: '@Oyxiaoxi' },
  ],
})
</script>

<template>
  <NavBar />
  <main class="container px-7 py-10">
    <router-view />
  </main>
</template>

<style>
</style>
