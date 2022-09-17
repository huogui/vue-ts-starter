<script lang="ts">
  export default {
    name:"RButton",
    inheritAttrs:false
  }
</script>


<script setup lang="ts">
import { ref,reactive,computed,watch,useAttrs } from 'vue'
import { useMouse } from '../../../composables'
// import type { ButtonType } from './button'
// import { ButtonType } from './button';


type  ButtonType =  'default' | 'primary' | 'success' | 'warning' | 'danger'

const buttonProps = defineProps<{
  type:ButtonType
}>()


const buttonAttrs = reactive({
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



 const count1 = ref<number>(0)

 const obj = {
   foo: ref<number>(1)
 }


let { foo } = obj


const count = ref(0)
const state = reactive({
  count
})


state.count = 1

const otherCount = ref(2)



const books = reactive([ref('Vue 3 Guide')])
// 这里需要 .value

const map = reactive(new Map([['count', ref(0)]]))
// 这里需要 .value


const now = computed(()=>Date.now())


const firstName = ref('John')
const lastName = ref('Doe')

let fullName = computed<string>({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue:string) {
    // 注意：我们这里使用的是解构赋值语法
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})
fullName.value = '123 456'


function increment(){
  buttonAttrs.desc!.x ++ 
}

const a = 1
const b = ref(2)

defineExpose({
  firstName,
  lastName,
})



</script>

<template>
  <button @click="add">{{buttonAttrs.title}}</button>
  <div>{{buttonAttrs.desc && buttonAttrs.desc.x}}</div>
  <div>ref:{{count1}} {{foo + 1}}</div>
  <div @click="increment">count3:{{count1}}</div>
  <div>{{now}}</div>
  <div>fullName:{{fullName}}</div>
  <div>{{buttonProps.type}}</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
