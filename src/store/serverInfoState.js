import { defineStore } from "pinia";
import { reactive, ref } from 'vue'
import { serverInfo } from '@/api/common.js'
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
  async function InfoGet() {
    try {
      let res = await serverInfo()
      serverMsg.value = { ...res.Data }
    } catch {
      console.log('获取服务器资源失败');
    }
  }
  InfoGet()
  return { serverMsg, InfoGet }
})