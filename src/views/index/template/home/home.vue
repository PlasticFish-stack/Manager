<script setup>
import { UseDarkState } from '@/store/darkState.js';
import infoCard from '@/components/infoCard';
const darkStore = UseDarkState()
</script>

<template>
  <div class="full-width row gt-sm">
    <div class="col-md-6 col-xs-12 row q-py-sm q-pr-sm">
      <div class="col-12 column blocks">
        <div class="bg-red col">
          <infoCard />
        </div>
        <div class="bg-blue col-8">

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
  border-radius: 8px;
  // border: 2px solid rgb(226, 226, 226);
  box-shadow: none;
  overflow: hidden;
}
</style>