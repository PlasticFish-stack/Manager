//路由认证
import router from "@/router"
import { UseLoginState } from "@/store/loginState.js"




const whiteList = ['login'];
router.beforeEach((to, from) => {
  const loginStore = UseLoginState()
  if (!whiteList.includes(to.name)) {
    if (loginStore.token === null) {
      return { name: 'login' }
    }
  } else {
    // if (loginStore.token !== null) {
    //   return { name: 'index' }
    // }
  }
})