<script setup lang="ts">
import { ref,reactive,watch } from 'vue'
import { useMouse } from '../../../composables'
import { BT } from './button'

const buttonAttrs: BT = reactive({
  title: "+1",
  desc: {
    'x':1
  }
})

const { x, y } = useMouse()
function add() { 
  buttonAttrs.desc!.x ++ 
}
watch(x, (newVal) => {
  buttonAttrs.desc!.x = newVal
 })

</script>

<template>
  <button @click="add">{{buttonAttrs.title}}</button>
  <div>{{buttonAttrs.desc && buttonAttrs.desc.x}}</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
