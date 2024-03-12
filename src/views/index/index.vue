<script setup>
import { UseDarkState } from '@/store/darkState.js';
import mode from '@/components/mode'
import { ref } from 'vue'

const darkStore = UseDarkState()
const leftDrawerOpen = ref(false)
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}




</script>

<template>
  <q-layout view="hHr lpr lfr">
    <q-header class="bg-primary text-white ">
      <q-toolbar>
        <q-btn dense flat round :icon="leftDrawerOpen ? 'menu_open' : 'menu'" @click="toggleLeftDrawer" />
        <q-space></q-space>
        <mode />
        <q-avatar rounded>
          <img src="@/assets/pic/404.png">
          <q-menu :offset="[0, 20]">
            <div class="column q-pa-xl no-wrap items-center justify-between">
              <q-avatar size="120px">
                <img src="@/assets/pic/401.jpg">
              </q-avatar>
              <div class="text-h6">
                管理员
              </div>
              

              <q-btn color="primary" label="Logout" push size="sm" v-close-popup />
            </div>
          </q-menu>
        </q-avatar>

      </q-toolbar>
    </q-header>

    <q-drawer persistent v-model="leftDrawerOpen" side="left" :class="[darkStore.dark ? 'shadow-1' : 'shadow-6']">
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang='scss' scoped></style>