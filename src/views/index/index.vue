<script setup>
import { UseDarkState } from '@/store/darkState.js';
import mode from '@/components/mode'
import { ref } from 'vue'

const darkStore = UseDarkState()
const leftDrawerOpen = ref(false)
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
let drawer = ref(true);
let miniState = ref(true);

let link = ref('home')
function drawerClick(e) {
  if (miniState.value) {
    miniState.value = false
    e.stopPropagation()
  }
}


</script>

<template>
  <div :class="darkStore.dark? 'acrylic_dark': 'acrylic_light'">
    <div>

    </div>
    <q-layout view="hHr lpr lfr">
      <q-header class="text-grey q-ma-sm q-py-xs header">
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

      <q-drawer class="q-py-lg" persistent v-model="drawer" show-if-above @click.capture="drawerClick"
        :mini="!drawer || miniState" :mini-width="56" :width="200" side="left">
        <q-list padding>
          <q-item>
            <Transition>
              <q-btn dense flat round :icon="leftDrawerOpen ? 'menu_open' : 'menu'" @click="miniState = true" />
            </Transition>

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
          <q-item clickable v-ripple active-class="my-menu-link" :active="link === 'group'" @click="link = 'group'">
            <q-item-section avatar>
              <q-icon name="groups" />
            </q-item-section>
            <q-item-section>用户管理</q-item-section>
          </q-item>
        </q-list>
      </q-drawer>

      <q-page-container>
        <q-page>
          <div class="column q-pt-lg q-pb-sm q-pl-sm q-pr-sm" style="min-height: inherit">
            <div :class="[darkStore.dark ? 'page_dark' : 'page_light']" class="row">
              <router-view></router-view>
            </div>

          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>

</template>

<style lang='scss' scoped>


.page_light {
  flex: 1;
  border-radius: 8px;
}


.page_dark {
  flex: 1;
  border-radius: 8px;

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