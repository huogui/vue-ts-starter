<script setup lang="ts">
import { onMounted,ref,provide } from 'vue'
import {RButton} from './components/button/index';


provide('message','hello')
const button = ref()

onMounted(()=>{
  console.log(button.value!.firstName)
})
</script>

<template>
  <el-row><r-button ref="button" type="primary">my button</r-button></el-row>
  <el-row><van-button type="primary">vant button</van-button></el-row>
  <el-row><el-button type="primary">element-plus button</el-button></el-row>
  <el-row><a-button type="primary">antd button</a-button></el-row>
  <el-row><n-button type="primary">naive button</n-button></el-row>
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
