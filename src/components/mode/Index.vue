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
  <q-btn round :text-color="$q.dark.isActive ? 'deep-orange-12' : 'amber-8'"
    :icon="store.dark ? 'wb_sunny' : 'nightlight_round'" :color="store.dark ? 'grey-3' : 'grey-8'"
    @click="store.ModeToggle(); reLoading()"></q-btn>
</template>

<style lang='scss' scoped></style>