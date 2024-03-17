<script setup>
import { computed, ref } from 'vue'
const props = defineProps(['info', 'title'])
import { UseDarkState } from '@/store/darkState.js'
console.log(props.info);
function byte(data) {
  return +(data / 1024 / 1024).toFixed(2)
}
console.log(byte(763125760));
let title = ref(null)
let information = computed(() => {
  let res = null
  switch (props.title) {
    case "cpu":
      title.value = "处理器"
      res = +props.info[0].toFixed(2)
      break;
    case "disk":
      title.value = "磁盘"
      res = +(props.info['usedPercent'].toFixed(2))
      break;
    case "load":

      break;
    case "memory":
      title.value = "运行内存"
      res = +(((props.info['used'] / props.info['total']) * 100).toFixed(2))
      break;
    case "netCount":
      break;
    case "speed":
      break;
    case "swap":
      break;
    default:
      break;
  }
  if (res == null) {
    return
  }
  return res
})

const darkStore = UseDarkState()
</script>

<template>
  <div class="card ">
    <div class="acrylic_light q-pa-lg" style="border-radius: 8px;"
      :class="darkStore.dark ? 'acrylic_dark' : 'acrylic_light'">
      <div>
        <div class="text-overline">{{ props.title }}</div>
      </div>
      <div  class="row items-center">
        <div class="text-subtitle1">{{ title }}</div>
        <q-space></q-space>
        <div class="text-body1">{{ information }}%</div>
      </div>
      <div>
        <q-linear-progress stripe rounded size="20px" :value="information / 100" color="red" class="q-mt-sm" />
      </div>
      <div></div>
    </div>

  </div>
</template>

<style lang='scss' scoped>

</style>