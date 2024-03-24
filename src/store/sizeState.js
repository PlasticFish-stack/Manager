import { defineStore } from 'pinia'
import { ref } from 'vue'

export const UseSizeState = defineStore('size', () => {
  let height = ref()
  let width = ref()
  let zoom = ref()
  function sizeGet(h, w) {
    height.value = h
    width.value = w
  }
  
  return { height, width, sizeGet }
})