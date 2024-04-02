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
        <div class="q-mb-xs  row" style="width: 100%; display: flex;flex: 1 ">
          <infoCard class="full-height q-mr-md" :info="serverInfoStore.serverMsg['cpu']" :title="'cpu'" />
          <infoCard class="" style="flex: 1;" :info="serverInfoStore.serverMsg['memory']" :title="'memory'" />
        </div>
        <div class="q-mb-xs" style="width: 100%; display: flex;flex: 1">
          <infoCard class="fit" :info="serverInfoStore.serverMsg['disk']" :title="'disk'" />
        </div>
        <div class="q-mb-xs" style="width: 100%;display: flex; flex: 1;">
          <infoCard class="fit" :info="serverInfoStore.userMsg['userList']" :title="'user'" />
        </div>
        <div class="q-mb-xs row" style="width: 100%; display: flex;flex: 1 ">
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
      <div class="col-12 q-pa-lg blocks" style="display: flex; flex-direction: column;">
        <div class="">

          <q-btn class="q-mr-xs" color="primary" icon="directions_run" label="启动"></q-btn>
          <q-btn class="q-mr-xs" color="primary" icon="stop_circle" label="暂停"></q-btn>
          <q-btn class="q-mr-xs" color="primary" icon="restart_alt" label="重启"></q-btn>

        </div>
        <div class="q-pt-sm" style="flex: 1;">
          <textarea readonly name="" id="" class="q-pa-md fit log acrylic_light text-black ">[2024-04-01 14:38:33] [INFO] 183.62.62.171:8643 authenticated by authenticator (f8cdb04)
[2024-04-01 14:38:33] [INFO] 183.62.62.171:8643 requested connection to play.googleapis.com:443
[2024-04-01 14:40:11] [INFO] 183.62.62.171:8636 disconnected, 8598 bytes received, 2987 bytes sent, lasted for 536 seconds
[2024-04-01 14:40:11] [INFO] 183.62.62.171:8638 disconnected, 19009 bytes received, 1876 bytes sent, lasted for 241 seconds
[2024-04-01 14:40:12] [INFO] 183.62.62.171:8640 disconnected, 27509 bytes received, 3761 bytes sent, lasted for 240 seconds
[2024-04-01 14:40:13] [INFO] 183.62.62.171:8639 disconnected, 3889 bytes received, 8058 bytes sent, lasted for 242 seconds
[2024-04-01 14:40:15] [INFO] 183.62.62.171:8641 disconnected, 5840 bytes received, 2180 bytes sent, lasted for 241 seconds
[2024-04-01 14:40:15] [INFO] 183.62.62.171:8637 disconnected, 5770 bytes received, 7066 bytes sent, lasted for 245 seconds
[2024-04-01 14:38:33] [INFO] 183.62.62.171:8643 requested connection to play.googleapis.com:443
[2024-04-01 14:40:11] [INFO] 183.62.62.171:8636 disconnected, 8598 bytes received, 2987 bytes sent, lasted for 536 seconds
[2024-04-01 14:40:11] [INFO] 183.62.62.171:8638 disconnected, 19009 bytes received, 1876 bytes sent, lasted for 241 seconds
[2024-04-01 14:40:12] [INFO] 183.62.62.171:8640 disconnected, 27509 bytes received, 3761 bytes sent, lasted for 240 seconds
[2024-04-01 14:40:13] [INFO] 183.62.62.171:8639 disconnected, 3889 bytes received, 8058 bytes sent, lasted for 242 seconds
[2024-04-01 14:40:15] [INFO] 183.62.62.171:8641 disconnected, 5840 bytes received, 2180 bytes sent, lasted for 241 seconds
[2024-04-01 14:40:15] [INFO] 183.62.62.171:8637 disconnected, 5770 bytes received, 7066 bytes sent, lasted for 245 seconds
[2024-04-01 14:38:33] [INFO] 183.62.62.171:8643 requested connection to play.googleapis.com:443
[2024-04-01 14:40:11] [INFO] 183.62.62.171:8636 disconnected, 8598 bytes received, 2987 bytes sent, lasted for 536 seconds
[2024-04-01 14:40:11] [INFO] 183.62.62.171:8638 disconnected, 19009 bytes received, 1876 bytes sent, lasted for 241 seconds
[2024-04-01 14:40:12] [INFO] 183.62.62.171:8640 disconnected, 27509 bytes received, 3761 bytes sent, lasted for 240 seconds
[2024-04-01 14:40:13] [INFO] 183.62.62.171:8639 disconnected, 3889 bytes received, 8058 bytes sent, lasted for 242 seconds
[2024-04-01 14:40:15] [INFO] 183.62.62.171:8641 disconnected, 5840 bytes received, 2180 bytes sent, lasted for 241 seconds
[2024-04-01 14:40:15] [INFO] 183.62.62.171:8637 disconnected, 5770 bytes received, 7066 bytes sent, lasted for 245 seconds
[2024-04-01 14:38:33] [INFO] 183.62.62.171:8643 requested connection to play.googleapis.com:443
[2024-04-01 14:40:11] [INFO] 183.62.62.171:8636 disconnected, 8598 bytes received, 2987 bytes sent, lasted for 536 seconds
[2024-04-01 14:40:11] [INFO] 183.62.62.171:8638 disconnected, 19009 bytes received, 1876 bytes sent, lasted for 241 seconds
[2024-04-01 14:40:12] [INFO] 183.62.62.171:8640 disconnected, 27509 bytes received, 3761 bytes sent, lasted for 240 seconds
[2024-04-01 14:40:13] [INFO] 183.62.62.171:8639 disconnected, 3889 bytes received, 8058 bytes sent, lasted for 242 seconds
[2024-04-01 14:40:15] [INFO] 183.62.62.171:8641 disconnected, 5840 bytes received, 2180 bytes sent, lasted for 241 seconds
[2024-04-01 14:40:15] [INFO] 183.62.62.171:8637 disconnected, 5770 bytes received, 7066 bytes sent, lasted for 245 seconds
[2024-04-01 14:38:33] [INFO] 183.62.62.171:8643 requested connection to play.googleapis.com:443
[2024-04-01 14:40:11] [INFO] 183.62.62.171:8636 disconnected, 8598 bytes received, 2987 bytes sent, lasted for 536 seconds
[2024-04-01 14:40:11] [INFO] 183.62.62.171:8638 disconnected, 19009 bytes received, 1876 bytes sent, lasted for 241 seconds
[2024-04-01 14:40:12] [INFO] 183.62.62.171:8640 disconnected, 27509 bytes received, 3761 bytes sent, lasted for 240 seconds
[2024-04-01 14:40:13] [INFO] 183.62.62.171:8639 disconnected, 3889 bytes received, 8058 bytes sent, lasted for 242 seconds
[2024-04-01 14:40:15] [INFO] 183.62.62.171:8641 disconnected, 5840 bytes received, 2180 bytes sent, lasted for 241 seconds
[2024-04-01 14:40:15] [INFO] 183.62.62.171:8637 disconnected, 5770 bytes received, 7066 bytes sent, lasted for 245 seconds
          </textarea>
        </div>
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

.log {
  border-radius: 8px;
  // border: 2px solid rgb(226, 226, 226);
  border: none;
  box-shadow: none;
  font-size: 0.9rem;
  font-family: 'Segoe';
  color: white;
}
</style>