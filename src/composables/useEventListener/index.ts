import { onMounted, onUnmounted } from 'vue'

export type Fn = (...args: any) => any

export type Target = Window | Document 

export function useEventListener(target:Target, event:keyof WindowEventMap, callback:(...args:any)=>any) { 
  onMounted(() => target.addEventListener(event, callback))
  onUnmounted(() => target.removeEventListener(event, callback))
}