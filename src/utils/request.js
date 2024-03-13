import { check, loginUser } from '@/api/permission.js'
import { UseTitleState } from '@/store/webTitle.js'
import { UseLoginState } from '@/store/loginState.js'
import router from '@/router'


export async function getTitle() {
  const titleStore = UseTitleState()
  let res = await check()
  document.title = res.data.title
  titleStore.titleManager(res.data.title)
}
export async function loginStateReg() {
  const loginStore = UseLoginState()
  try {
    const reg = await loginUser()
  } catch (error) {
    localStorage.setItem('token', '')
    router.push('/login')
  }
}