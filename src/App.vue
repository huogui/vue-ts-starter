<script setup lang="ts">
import { onMounted,ref } from 'vue'

const button = ref()

onMounted(()=>{
  console.log(button.value!.firstName)
})
</script>

<template>
  <el-row><Button ref="button" type="primary">my button</Button></el-row>
  <el-row><van-button type="primary">vant button</van-button></el-row>
  <el-row><el-button type="primary">element-plus button</el-button></el-row>
  <el-row><a-button type="primary">antd button</a-button></el-row>
  <el-row><n-button type="123">naive button</n-button></el-row>
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
