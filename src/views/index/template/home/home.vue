<script setup>
import { UseDarkState } from '@/store/darkState.js';
const darkStore = UseDarkState()
</script>

<template>
  <div class="full-width column">
    <div class="col-4  q-pa-sm q-py-xs">
      <div class="fit row block bg-black q-pa-lg"  >
        <div class="col-3 bg-red ">123</div>
        <div class="col-3 bg-blue "></div>
        <div class="col-3 bg-green "></div>
        <div class="col-3 bg-orange "></div>
      </div>
      
    </div>
    <div class="col-2">
      2
    </div>
    <div class="col-2">
      3
    </div>
    <div class="col-2">
      4
    </div>
    <div class="col-2">
      5
    </div>
  </div>

</template>

<style lang='scss' scoped>
.block {
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  border: 2px solid rgb(226, 226, 226);
  box-shadow: none;
  // background-image: url('/src/assets/utils/flowers.png');
}
</style>