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



</script>

<template>
  <q-layout view="hHr lpr lfr" class="acrylic flower">
    <q-header class="text-grey " style="background-color: transparent;">
      <q-toolbar>

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

    <q-drawer mini-to-overlay breakpoint="500" :mini="!leftDrawerOpen" model-value :mini-width="56" side="left">
      <!-- drawer content -->
      <q-btn dense flat round :icon="leftDrawerOpen ? 'menu_open' : 'menu'" @click="toggleLeftDrawer" />
      <q-list padding>
        <q-item clickable v-ripple active-class="my-menu-link" :active="link === 'home'" @click="link = 'home'">
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
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang='scss' scoped>
.acrylic {
  background-color: rgba(233, 233, 233, 0.4);
  mask-image: url('/src/assets/pic/sss.svg');
  background-size: cover;
  background-repeat: no-repeat;
}

.flower {
  background-image: url('/src/assets/pic/flowers.png');
  background-size: auto;
  background-repeat: repeat;
}

:deep(aside) {
  background-color: transparent;
}
</style>