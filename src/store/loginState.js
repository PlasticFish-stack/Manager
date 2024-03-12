import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginUser } from '@/api/permission.js'
export const UseLoginState = defineStore('login', () => {
  let token = ref(null)
  // let cookieReg = /jwt=([\s\S]+)/g
  // if (cookieReg.test(document.cookie)) {
  //   let id = loginReg()
  //   cookieReg.lastIndex = 0
  //   token.value = cookieReg.exec(document.cookie)[1]
  // }
  let isAdmin = ref(false)
  function loginExit(){
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