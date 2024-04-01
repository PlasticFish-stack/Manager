<script setup>
import { UseDarkState } from '@/store/darkState.js';
import infoCard from '@/components/infoCard'
import { UseServerInfoState } from '@/store/serverInfoState.js'
import { ref, onMounted, computed } from 'vue'

const darkStore = UseDarkState()
const serverInfoStore = UseServerInfoState()
let userData = computed(() => {
  return serverInfoStore.userMsg.userList
})
let systemInformation = setInterval(() => {
  serverInfoStore.InfoGet()
}, 10000)
onMounted(() => {
  console.log(userData.value);
})
</script>

<template>

  <div class="full-width row" style="flex: 1;">
    <div class="col-md-6 col-xs-12 row q-py-sm q-pr-xs " style="flex: 1;">
      <div class="col-12 q-pa-lg blocks" style="display: flex; flex-direction: column;">
        <div class="q-mb-sm  row" style="width: 100%; display: flex;flex: 1 ">
          <infoCard class="full-height q-mr-md" :info="serverInfoStore.serverMsg['cpu']" :title="'cpu'" />
          <infoCard class="" style="flex: 1;" :info="serverInfoStore.serverMsg['memory']" :title="'memory'" />
        </div>
        <div class="q-mb-sm" style="width: 100%; display: flex;flex: 1">
          <infoCard class="fit" :info="serverInfoStore.serverMsg['disk']" :title="'disk'" />
        </div>
        <div class="q-mb-sm" style="width: 100%;display: flex; flex: 1;">
          <infoCard class="fit" :info="serverInfoStore.userMsg['userList']" :title="'user'" />
        </div>
        <div class="q-mb-sm row" style="width: 100%; display: flex;flex: 1 ">
          <infoCard class=" q-mr-md" style="flex: 1" :info="serverInfoStore.serverMsg['netCount']"
            :title="'netCount'" />
          <infoCard class=" q-mr-md" style="flex: 1" :info="serverInfoStore.serverMsg['load']" :title="'load'" />
          <infoCard style="flex: 1;" :info="serverInfoStore.serverMsg['speed']" :title="'speed'" />
        </div>
        <div style="width: 100%;display: flex; flex: 1;">
          <infoCard class="fit" :info="serverInfoStore.serverMsg['swap']" :title="'swap'" />
        </div>


      </div>
    </div>
    <div class="col-md-6 col-xs-12 row q-px-xs q-py-sm gt-sm">
      <div class="col-12 blocks">
        1
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.blocks {
  background-color: rgba(0, 0, 0, 0.247);
  border-radius: 8px;
  // border: 2px solid rgb(226, 226, 226);
  box-shadow: none;
  overflow: hidden;
}
</style>