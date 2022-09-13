<script setup lang="ts">
import { ref } from 'vue'


defineProps<{ type: 'primary' | 'success' | 'info' }>()

const count = ref(0)
</script>

<template>
  <h1>{{ type }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
