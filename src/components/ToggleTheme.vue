<script setup lang="ts">
import { toggleDark } from '~/logics'
</script>

<template>
  <div class="w-8 text-center py-9 lt-md:hidden">
    <a class="select-none" title="Toggle Color Scheme" @click="toggleDark">
      <div i-ri-sun-line dark:i-ri-moon-line />
    </a>
  </div>
</template>
