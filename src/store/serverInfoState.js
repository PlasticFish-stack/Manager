import { defineStore } from "pinia";
import { reactive, ref, computed } from 'vue'
import { serverInfo } from '@/api/common.js'
import { userList } from '@/api/user.js'
export const UseServerInfoState = defineStore('server', () => {
  let serverMsg = ref({
    cpu: null,
    disk: null,
    load: null,
    memory: null,
    netCount: null,
    speed: null,
    swap: null
  })
  let userMsg = ref({
    domain: null,
    port: null,
    userList: null
  })
  async function InfoGet() {
    try {
      let res = await serverInfo()
      let user = await userList()
      serverMsg.value = { ...res.Data }
      userMsg.value = user.Data
    } catch {
      console.log('获取服务器资源失败');
    }
  }
  InfoGet()
  return { serverMsg, userMsg, InfoGet }
})