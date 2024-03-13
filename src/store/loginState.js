import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginStateReg } from '@/utils/request.js'
export const UseLoginState = defineStore('login', () => {
  let token = ref(null)
  if (localStorage.getItem('token')) {
    token.value = localStorage.getItem('token')
    setTimeout(() => { loginStateReg() }, 0)
  }
  let isAdmin = ref(false)
  function loginExit() {
    token.value = null
  }
  function localToken(user) {
    if (user) {
      token.value = user;
      localStorage.setItem('token', user)
    }
    return localStorage.getItem('token')
  }
  return { token, localToken, loginExit }
})