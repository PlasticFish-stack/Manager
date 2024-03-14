<script setup>
import { UseDarkState } from '@/store/darkState.js';
import mode from '@/components/mode'
import { ref } from 'vue'

const darkStore = UseDarkState()
const leftDrawerOpen = ref(false)
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
let link = ref('home')
function reComputedOffset(offset) {
  return { minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh' }
  console.log(offset, 'offset');
}


</script>

<template>
  <div class="acrylic">
    <q-layout view="hHr lpr lfr">
      <q-header class="text-grey q-ma-sm q-py-xs header" style="">
        <q-toolbar>
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
          <q-space />
          <q-space />
          <q-btn>更换端口</q-btn>
          <mode />

        </q-toolbar>
      </q-header>

      <q-drawer class="bg-grey "  :width="200" side="left">
        <!-- drawer content -->


        <q-list padding>
          <q-item>
            <q-btn dense flat round :icon="leftDrawerOpen ? 'menu_open' : 'menu'" @click="toggleLeftDrawer" />
          </q-item>
          <q-item clickable v-ripple active-class="my-menu-link" :active="link === 'home'" @click="link = 'home'"
            to="home">
            <q-item-section avatar>
              <q-icon name="cruelty_free" />
            </q-item-section>
            <q-item-section>首页</q-item-section>
          </q-item>
          <q-item clickable v-ripple active-class="my-menu-link" :active="link === 'robot'" @click="link = 'robot'">
            <q-item-section avatar>
              <q-icon name="smart_toy" />
            </q-item-section>
            <q-item-section class="text-">GPT Chat</q-item-section>
          </q-item>
          <q-item clickable v-ripple active-class="my-menu-link" :active="link === 'router'" @click="link = 'router'">
            <q-item-section avatar>
              <q-icon name="router" />
            </q-item-section>

            <q-item-section>Trojan管理</q-item-section>
          </q-item>
          <q-item clickable v-ripple active-class="my-menu-link" :active="link === 'group'" @click="link = 'group'">
            <q-item-section avatar>
              <q-icon name="groups" />
            </q-item-section>

            <q-item-section>用户管理</q-item-section>
          </q-item>
        </q-list>
      </q-drawer>

      <q-page-container>
        <q-page :style="[darkStore.dark?  '': 'background-color: rgba(255, 255, 255, 0.811)']">
          <div class="column q-py-lg q-pl-sm q-pr-sm" style="min-height: inherit">
            <div class="page">
              <router-view></router-view>
            </div>

          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>

</template>

<style lang='scss' scoped>
.acrylic {
  background-color: rgba(233, 233, 233, 0.4);
  background-image: url('/src/assets/pic/sss.svg');
  background-size: cover;
  background-repeat: no-repeat;
}

.page {
  flex: 1;
  border-radius: 8px;
  box-shadow: 7px 7px 12px rgba(0, 0, 0, .4),
             -7px -7px 12px rgba(133, 133, 133, 0.05);
  background-image: url('/src/assets/utils/food.png');
  overflow: hidden;
}

.header {
  background-color: rgba(0, 0, 0, 0.247);
  border-radius: 6px;
  transition: 0.6s ease-out;
}

.header:hover {
  background-color: rgba(0, 0, 0, 0.459);
}

:deep(aside) {
  background-color: transparent;
}
</style>