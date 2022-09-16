<script setup lang="ts">
import { onMounted,ref, unref } from 'vue'

const button = ref()

onMounted(()=>{
  console.log(button.value!.firstName)
})
</script>

<template>
    <Button ref="button"></Button>
</template>

<style>
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>

<style scoped>
</style>
