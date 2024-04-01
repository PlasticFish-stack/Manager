<script setup>
import { useQuasar } from 'quasar';
import { UseDarkState } from '@/store/darkState.js'
import { onBeforeUnmount } from 'vue'
const store = UseDarkState()
const $q = useQuasar()
let timer
function reLoading() {
  $q.loading.show({
    message: '切换中......',
    spinnerColor: 'red',
  })
  timer = setTimeout(() => {
    $q.loading.hide()
    timer = void 0
  }, 500)
}
onBeforeUnmount(() => {
  clearTimeout(timer)
  $q.loading.hide()
})


</script>

<template>
  <q-btn round :text-color="$q.dark.isActive ? 'yellow-8' : 'amber-8'" class="mode"
    :icon="store.dark ? 'wb_sunny' : 'nightlight_round'"
    @click="store.ModeToggle(); reLoading()"></q-btn>
</template>
<style lang='scss' scoped>
.mode{
  background-image: url('/src/assets/utils/graphcoders-lil-fiber.png');
  height: 30px;
  width: 30px;
}
</style>