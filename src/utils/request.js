import { check, loginUser } from '@/api/permission.js'
import { UseTitleState } from '@/store/webTitle.js'
import { UseLoginState } from '@/store/loginState.js'
import router from '@/router'


export async function getTitle() {
  const titleStore = UseTitleState()
  try{
    let res = await check()
    document.title = res.data.title
    titleStore.titleManager(res.data.title)
    return 
  }catch{
    console.log('获取失败重新获取');
    getTitle()
  }
  
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