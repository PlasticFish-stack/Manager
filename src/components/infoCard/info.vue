<script setup>
import { computed, ref } from 'vue'
import { UseDarkState } from '@/store/darkState.js'
import { gsap } from "gsap";
const color = gsap.utils.random(['deep-purple-8', 'purple-7', 'red', 'teal', 'indigo', 'green-6', 'blue-7', 'deep-orange'])
const props = defineProps(['info', 'title'])
console.log(props.info, 'info');
const darkStore = UseDarkState()
function byte(data) {
  return +(data / 1024 / 1024).toFixed(2)
}
let title = ref(null)
let ratio = ref('')

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
      title.value = "负载"
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
      title.value = "交换空间"
      res = (props.info['used'] != 0 && props.info['total'] != 0) ? +(((props.info['used'] / props.info['total']) * 100).toFixed(2)) : 0
      break;
    default:
      break;
  }
  if (res == null) {
    return
  }
  return res
})


</script>

<template>
  <div class="overflow-hidden q-pa-lg" style="border-radius: 8px;" :style="{'border': darkStore.dark ? '': 'border: 1px solid white'}"
    :class="darkStore.dark ? 'acrylic_gery' : 'acrylic_light', props.title">
    <q-skeleton type="QRange" v-if="props.info == null" size="100%" />
    <div v-if="props.info != null">
      <div class="row items-center">
        <div class="text-overline">{{ props.title }}</div>
        <q-space></q-space>
      </div>
      <div class="row items-center">
        <div class="text-subtitle1">{{ title }}</div>
        <q-space></q-space>
        <div class="text-body1">{{ information }}%</div>
      </div>
      <div class="row items-center">
        <div v-if="props.title === 'memory'" class="text-caption text-grey-8">
          已用{{ byte(props.info['used']) }}MB/{{ byte(props.info['total']) }}MB</div>
        <div v-if="props.title === 'disk'" class="text-caption text-grey-8">
          已用{{ byte(props.info['used']) }}MB/{{ byte(props.info['used'] + props.info['free']) }}MB</div>
        <div v-if="props.title === 'swap'" class="text-caption text-grey-8">
          已用{{ byte(props.info['used']) }}MB/{{ byte(props.info['used'] + props.info['free']) }}MB<span v-if="props.info['used'] == 0 && props.info['total'] == 0" class="text-red">(未启用)</span></div>
      </div>
      <div>
        <q-linear-progress stripe rounded size="20px" :value="information / 100" :color="color" class="q-mt-sm" />
      </div>
      <div></div>
    </div>

  </div>

</template>

<style lang='scss' scoped>
.cpu {
  max-width: 30%;
  min-height: 180px;
  aspect-ratio: 1/1;

}

.memory {}

.disk {
  width: 100%;
}
</style>
