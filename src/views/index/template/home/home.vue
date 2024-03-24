<script setup>
import { UseDarkState } from '@/store/darkState.js';
import infoCard from '@/components/infoCard'
import board from '@/components/board'
import { UseServerInfoState } from '@/store/serverInfoState.js'
import { ref, onMounted } from 'vue'

const darkStore = UseDarkState()
const serverInfoStore = UseServerInfoState()
let systemInformation = setInterval(() => {
  serverInfoStore.InfoGet()
}, 10000)
</script>

<template>

  <div class="full-width row gt-sm">
    <div class="col-md-6 col-xs-12 full-height  q-py-sm q-pr-sm">
      <div class="col-12 row q-pa-lg blocks full-height">
        <div class="q-mb-md  row" style="width: 100%; display: flex; ">
          <infoCard class="full-height q-mr-md" :info="serverInfoStore.serverMsg['cpu']" :title="'cpu'" />
          <infoCard class="" style="flex: 1;"  :info="serverInfoStore.serverMsg['memory']" :title="'memory'" />
        </div>
        <div class="q-mb-md" style="width: 100%; display: flex;">
          <infoCard class="fit" :info="serverInfoStore.serverMsg['disk']" :title="'disk'" />
        </div>
        <div class="q-mb-md" style="width: 100%; display: flex;">
          <infoCard class="fit" :info="serverInfoStore.serverMsg['swap']" :title="'swap'" />
        </div>
        <div class="q-mb-md" style="width: 100%;display: flex;">
          <infoCard class="fit" :info="serverInfoStore.serverMsg['swap']" :title="'swap'" />
        </div>
        <div class="q-mb-md row" style="width: 100%; display: flex; ">
          <infoCard class=" q-mr-md" style="flex: 1" :info="serverInfoStore.serverMsg['netCount']" :title="'netCount'" />
          <infoCard class=" q-mr-md" style="flex: 1" :info="serverInfoStore.serverMsg['load']" :title="'load'" />
          <infoCard style="flex: 1;" :info="serverInfoStore.serverMsg['speed']" :title="'speed'" />
        </div>
        
      </div>
    </div>
    <div class="col-md-6 col-xs-12 row q-py-sm ">
      <div class="col-12 blocks">
        1
      </div>
    </div>
  </div>
  <div class="full-width  row lt-md">
    <div class="fit bg-red blocks">
      123
    </div>

  </div>

</template>

<style lang='scss' scoped>
.blocks {
  background-color: rgba(0, 0, 0, 0.247);
  max-height: 100%;
  border-radius: 8px;
  // border: 2px solid rgb(226, 226, 226);
  box-shadow: none;
  overflow: hidden;
}
</style>