<script setup lang="ts">
import { ref } from 'vue'
import { useMouse }  from '../composables'

export interface IButtonProps { 
  type: 'default' | 'primary' | 'success' | 'info'
}
const props = withDefaults(defineProps<IButtonProps>(), {
  type:'default'
})

const {x,y} = useMouse()

const count = ref(0)
</script>

<template>
  <button>{{props.type}}</button>
  <div>{{x}} {{y}}</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
