<template>
  <router-view></router-view>
</template>
<script setup>
import { nextTick } from "vue"
import { getTitle } from "@/utils/request";
import { debounce } from 'quasar'
import { UseSizeState } from '@/store/sizeState.js'
const sizeStore = UseSizeState()
window.addEventListener('resize', debounce((e) => {
  sizeStore.sizeGet(e.target.innerHeight, e.target.innerWidth)
  nextTick()
}))
getTitle()
</script>