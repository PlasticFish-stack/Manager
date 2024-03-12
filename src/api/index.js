import axios from "axios";
import { UseLoginState } from "@/store/loginState.js"
import { UseProgressState } from "@/store/progressState.js";
import { set } from "nprogress";
const instance = axios.create({
  timeout: 8000,
  baseURL: "/api",
  validateStatus
})



instance.interceptors.response.use(
  function (config) {
    return config.data
  }
)

instance.interceptors.request.use(
  function (config) {
    const progressStore = UseProgressState()
    const loginStore = UseLoginState()
    progressStore.progress = 0
    progressStore.timer = null
    if (loginStore.token) {
      config.headers.Authorization = `Bearer ${loginStore.token}`
    }
    if (progressStore.status == true) {
      config.onUploadProgress = (e) => {
        const complete = (e.loaded / e.total) * 100
        if (complete >= 80) {
          if (progressStore.timer) return
          progressStore.timer = window.setInterval(() => {
            if (progressStore.status == false) {
              console.log(123);
              window.clearInterval(progressStore.timer)
              return progressStore.progress = 100
            }
            progressStore.progress += (100 - progressStore.progress) * 0.2
            if (progressStore.progress > 99) {
              progressStore.timer && window.clearInterval(progressStore.timer)
            }
          }, 100)
        } else {
          progressStore.progress = complete
        }
      }
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)




function validateStatus(status) {
  const loginStore = UseLoginState()
  switch (status) {
    case 400:
      break
    case 401:
      loginStore.token = null
      return
    case 403:
      break
    case 404:
      break
    case 500:
      break
  }
  return status >= 200 && status < 300
}
export default instance