import { defineStore } from 'pinia'
import { ref } from 'vue'

export const UseTitleState = defineStore('title', () => {
  let webTitle = ref(null)
  function titleManager(title) {
    if (title) {
      localStorage.setItem('title', title)
      webTitle.value = title
      document.title = title
    }
    return localStorage.getItem('title')
  }
  return { webTitle, titleManager }
})