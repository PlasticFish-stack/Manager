<script setup>
import { UseDarkState } from '@/store/darkState.js';
import infoCard from '@/components/infoCard'
import board from '@/components/board'
import { serverInfo } from '@/api/common.js'
import { ref } from 'vue'
const darkStore = UseDarkState()
let systemInformation = ref(null)
async function linkServiceInfo() {
  let res  = await serverInfo()
  systemInformation.value = res.Data
}
linkServiceInfo()

let info = {
  title: 'CPU',
  content: '已使用率',
  data: 25
}
let serverInfoFetch = setInterval(() => {
  linkServiceInfo()
  
}, 10000)

</script>

<template>
  <div class="full-width row gt-sm">
    <div class="col-md-6 col-xs-12 row q-py-sm q-pr-sm">
      <div class="col-12  q-pa-lg blocks">
        <!-- <infoCard  v-for="(value, _key, index) in systemInformation" :info="value" :title="Object.keys(systemInformation)[index]"/> -->
        <board> </board>
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