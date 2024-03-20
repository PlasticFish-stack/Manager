<script setup>
import { UseDarkState } from '@/store/darkState.js';
import infoCard from '@/components/infoCard'
import board from '@/components/board'
import { UseServerInfoState } from '@/store/serverInfoState.js'
import { ref, onMounted } from 'vue'
const darkStore = UseDarkState()
const serverInfoStore = UseServerInfoState()

let systemInformation = ref()

// linkServiceInfo();
// let serverInfoFetch = setInterval(() => {
//   linkServiceInfo()
// }, 10000)
</script>

<template>
  
  <div class="full-width row gt-sm">
    <div class="col-md-6 col-xs-12 row q-py-sm q-pr-sm">
      <div class="col-12  q-pa-lg blocks">
          <div class="q-mb-md" style="width: 100%;display: flex;">
            <infoCard class="q-mr-md" v-if="serverInfoStore.serverMsg != null" :info="serverInfoStore.serverMsg['cpu']" :title="'cpu'" />
            <infoCard class="full-width"  v-if="serverInfoStore.serverMsg != null" :info="serverInfoStore.serverMsg['memory']" :title="'memory'" />
          </div>
          <div class="bg-red" style="width: 100%;display: flex;">
            <infoCard class="fit" v-if="serverInfoStore.serverMsg != null" :info="serverInfoStore.serverMsg['disk']" :title="'disk'" />
            
          </div>
          <div class="bg-red" style="width: 100%;display: flex;">
            <infoCard class="fit" v-if="serverInfoStore.serverMsg != null" :info="serverInfoStore.serverMsg['load']" :title="'load'" />
          </div>
          <div class="bg-red" style="width: 100%;display: flex;">
            <infoCard class="fit" v-if="serverInfoStore.serverMsg != null" :info="serverInfoStore.serverMsg['swap']" :title="'swap'" />
            
          </div>
          
        <div class="col-6 bg-blue"></div>
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
  border-radius: 8px;
  // border: 2px solid rgb(226, 226, 226);
  box-shadow: none;
  overflow: hidden;
}
</style>