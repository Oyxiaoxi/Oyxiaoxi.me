<script setup lang="ts">
import { isDark } from '~/logics'
function toggleDark() {
  isDark.value = !isDark.value
}
</script>

<template>
  <div class="w-10 text-center py-9 lt-md:hidden">
    <a class="select-none" title="Toggle Color Scheme" @click="toggleDark">
      <div v-show="isDark" i-emojione-v1:waxing-gibbous-moon />
      <div v-show="!isDark" i-fxemoji:sunwithface />
    </a>
  </div>
</template>
