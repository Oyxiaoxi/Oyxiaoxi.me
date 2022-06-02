<script setup lang="ts">
useHead({
  meta: [
    { property: 'og:title', content: 'Oyxiaoxi' },
    { property: 'og:image', content: 'https://oyxiaoxi.me/avatar.jpeg' },
    { name: 'description', content: 'Oyxiaoxi\'s Portfolio' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:creator', content: '@Oyxiaoxi' },
  ],
})
</script>

<template>
  <NavBar />
  <main class="container px-10 py-10">
    <router-view />
    <Footer />
  </main>
</template>
