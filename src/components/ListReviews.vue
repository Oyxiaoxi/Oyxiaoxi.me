<script setup lang="ts">
defineProps<{ comments: Record<string, any[]> }>()
</script>

<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
    <div v-for="person in comments" :key="person.name" class="relative rounded-lg px-2 py-2 shadow-sm flex items-center space-x-3">
      <div class="flex-shrink-0">
        <img class="h-15 w-15 rounded-full" :src="person.imageUrl" alt="">
      </div>
      <div class="flex-1 min-w-0">
        <span class="absolute inset-0" aria-hidden="true" />
        <p class="text-sm font-medium text-gray-600">
          {{ person.name }}
        </p>
        <p class="text-sm text-gray-500 text-ellipsis">
          {{ person.desc }}
        </p>
      </div>
    </div>
  </div>
</template>
