<script setup>
import { UseDarkState } from '@/store/darkState.js';
import infoCard from '@/components/infoCard'
import { UseServerInfoState } from '@/store/serverInfoState.js'
import { ref, onMounted, computed } from 'vue'
import { gsap } from "gsap";
const color = gsap.utils.random(['deep-purple-8', 'purple-7', 'red', 'teal', 'indigo', 'green-6', 'blue-7', 'deep-orange'])
const darkStore = UseDarkState()
const serverInfoStore = UseServerInfoState()
let userData = computed(() => {
  return serverInfoStore.userMsg.userList
})
let systemInformation = setInterval(() => {
  serverInfoStore.InfoGet()
}, 10000)
onMounted(() => {
  console.log(userData.value);
})
</script>

<template>

  <div class="full-width row" style="flex: 1;">
    <div class="col-md-5 col-xs-12 row q-py-sm q-pr-xs " style="flex: 1;">
      <div class="col-12 q-pa-lg blocks" style="display: flex; flex-direction: column;">
        <div class="q-mb-xs  row" style="width: 100%; display: flex;flex: 1 ">
          <infoCard class="full-height q-mr-md" :info="serverInfoStore.serverMsg['cpu']" :title="'cpu'" />
          <infoCard class="" style="flex: 1;" :info="serverInfoStore.serverMsg['memory']" :title="'memory'" />
        </div>
        <div class="q-mb-xs" style="width: 100%; display: flex;flex: 1">
          <infoCard class="fit" :info="serverInfoStore.serverMsg['disk']" :title="'disk'" />
        </div>
        <div class="q-mb-xs" style="width: 100%;display: flex; flex: 1;">
          <infoCard class="fit" :info="serverInfoStore.userMsg['userList']" :title="'user'" />
        </div>
        <div class="q-mb-xs row" style="width: 100%; display: flex; height: 150px; ">
          <infoCard class=" q-mr-md" style="flex: 1" :info="serverInfoStore.serverMsg['netCount']"
            :title="'netCount'" />
          <infoCard class=" q-mr-md" style="flex: 1" :info="serverInfoStore.serverMsg['load']" :title="'load'" />
          <infoCard style="flex: 1;" :info="serverInfoStore.serverMsg['speed']" :title="'speed'" />
        </div>
        <div style="width: 100%;display: flex; flex: 1;">
          <infoCard class="fit" :info="serverInfoStore.serverMsg['swap']" :title="'swap'" />
        </div>


      </div>
    </div>
    <div class="col-md-7 col-xs-12 row q-px-xs q-py-sm gt-sm">
      <div class="col-12 q-pa-lg blocks" style="display: flex; flex-direction: column;">
        <div class="">
          <q-btn class="q-mr-xs" :color="color" label="启动"></q-btn>
          <q-btn class="q-mr-xs" :color="color" label="暂停"></q-btn>
          <q-btn class="q-mr-xs" :color="color" label="重启"></q-btn>
        </div>
        <div class="q-pt-sm" style="flex: 1;">
          <textarea readonly name="" id="" class="q-pa-md fit log text-white form">[2024-04-02 11:56:13] [INFO] 219.136.45.33:53427 requested connection to www.googleapis.com:443
[2024-04-02 11:56:13] [INFO] 219.136.45.33:53428 authenticated by authenticator (25426f1)
[2024-04-02 11:56:13] [INFO] 219.136.45.33:53428 requested connection to www.googleapis.com:443
[2024-04-02 11:57:10] [INFO] 58.248.180.226:63215 authenticated by authenticator (82b7915)
[2024-04-02 11:57:10] [INFO] 58.248.180.226:63215 requested connection to content-autofill.googleapis.com:443
[2024-04-02 11:57:30] [INFO] 112.96.49.42:35725 disconnected, 856 bytes received, 992 bytes sent, lasted for 7427 seconds
[2024-04-02 11:58:14] [INFO] 58.248.180.226:62467 disconnected, 16746 bytes received, 17848 bytes sent, lasted for 127 seconds
[2024-04-02 11:58:14] [INFO] 58.248.180.226:64059 authenticated by authenticator (82b7915)
[2024-04-02 11:58:14] [INFO] 58.248.180.226:64059 requested connection to activity.windows.com:443
[2024-04-02 11:58:20] [INFO] 58.248.180.226:64108 authenticated by authenticator (82b7915)
[2024-04-02 11:58:20] [INFO] 58.248.180.226:64108 requested connection to www.gravatar.com:443
[2024-04-02 11:58:50] [INFO] 58.248.180.226:64108 disconnected, 4746 bytes received, 1147 bytes sent, lasted for 31 seconds
[2024-04-02 12:00:12] [INFO] 219.136.45.33:53419 disconnected, 2350 bytes received, 3135 bytes sent, lasted for 240 seconds
[2024-04-02 12:00:13] [INFO] 219.136.45.33:53422 disconnected, 19212 bytes received, 1930 bytes sent, lasted for 241 seconds
[2024-04-02 12:00:14] [INFO] 219.136.45.33:53428 disconnected, 26685 bytes received, 3814 bytes sent, lasted for 241 seconds
[2024-04-02 12:00:14] [INFO] 219.136.45.33:53427 disconnected, 1803 bytes received, 20244 bytes sent, lasted for 241 seconds
[2024-04-02 12:00:36] [INFO] 58.248.180.226:64059 disconnected, 11691 bytes received, 9946 bytes sent, lasted for 142 seconds
[2024-04-02 12:01:11] [INFO] 58.248.180.226:63215 disconnected, 6579 bytes received, 1537 bytes sent, lasted for 241 seconds
[2024-04-02 12:01:24] [INFO] 58.248.180.226:45124 disconnected, 19476 bytes received, 714889 bytes sent, lasted for 1644 seconds
[2024-04-02 12:02:51] [INFO] 58.248.180.226:48292 authenticated by authenticator (82b7915)
[2024-04-02 12:02:51] [INFO] 58.248.180.226:48292 requested connection to update.code.visualstudio.com:443
[2024-04-02 12:02:52] [INFO] 58.248.180.226:45658 authenticated by authenticator (82b7915)
[2024-04-02 12:02:52] [INFO] 58.248.180.226:45658 requested connection to self.events.data.microsoft.com:443
[2024-04-02 12:02:53] [INFO] 58.248.180.226:48319 authenticated by authenticator (82b7915)
[2024-04-02 12:02:53] [INFO] 58.248.180.226:48319 requested connection to edge.microsoft.com:443
[2024-04-02 12:02:53] [INFO] 58.248.180.226:48324 authenticated by authenticator (82b7915)
[2024-04-02 12:02:53] [INFO] 58.248.180.226:48324 requested connection to www.googleapis.com:443
[2024-04-02 12:02:54] [INFO] 58.248.180.226:45707 authenticated by authenticator (82b7915)
[2024-04-02 12:02:54] [INFO] 58.248.180.226:45707 requested connection to mobile.events.data.microsoft.com:443
[2024-04-02 12:02:57] [INFO] 58.248.180.226:45658 disconnected, 7286 bytes received, 3484 bytes sent, lasted for 5 seconds
[2024-04-02 12:03:18] [INFO] 58.248.180.226:46015 authenticated by authenticator (82b7915)
[2024-04-02 12:03:18] [INFO] 58.248.180.226:46015 requested connection to services.gfe.nvidia.com:443
[2024-04-02 12:03:18] [INFO] 58.248.180.226:46015 disconnected, 4975 bytes received, 576 bytes sent, lasted for 1 seconds
[2024-04-02 12:03:18] [INFO] 58.248.180.226:48653 authenticated by authenticator (82b7915)
[2024-04-02 12:03:18] [INFO] 58.248.180.226:48653 requested connection to services.gfe.nvidia.com:443
[2024-04-02 12:03:19] [INFO] 58.248.180.226:48653 disconnected, 4975 bytes received, 575 bytes sent, lasted for 1 seconds
[2024-04-02 12:03:19] [INFO] 58.248.180.226:48660 authenticated by authenticator (82b7915)
[2024-04-02 12:03:19] [INFO] 58.248.180.226:48660 requested connection to services.gfe.nvidia.com:443
[2024-04-02 12:03:20] [INFO] 58.248.180.226:48660 disconnected, 4975 bytes received, 603 bytes sent, lasted for 1 seconds
[2024-04-02 12:03:20] [INFO] 58.248.180.226:48667 authenticated by authenticator (82b7915)
[2024-04-02 12:03:20] [INFO] 58.248.180.226:48667 requested connection to services.gfe.nvidia.com:443
[2024-04-02 12:03:20] [INFO] 58.248.180.226:48667 disconnected, 4975 bytes received, 601 bytes sent, lasted for 0 seconds
[2024-04-02 12:03:21] [INFO] 58.248.180.226:46061 authenticated by authenticator (82b7915)
[2024-04-02 12:03:21] [INFO] 58.248.180.226:46061 requested connection to services.gfe.nvidia.com:443
[2024-04-02 12:03:21] [INFO] 58.248.180.226:46061 disconnected, 4975 bytes received, 572 bytes sent, lasted for 0 seconds
[2024-04-02 12:03:22] [INFO] 58.248.180.226:46070 authenticated by authenticator (82b7915)
[2024-04-02 12:03:22] [INFO] 58.248.180.226:46070 requested connection to services.gfe.nvidia.com:443
[2024-04-02 12:03:22] [INFO] 58.248.180.226:46070 disconnected, 4975 bytes received, 580 bytes sent, lasted for 0 seconds
[2024-04-02 12:03:23] [INFO] 58.248.180.226:48692 authenticated by authenticator (82b7915)
[2024-04-02 12:03:23] [INFO] 58.248.180.226:48692 requested connection to services.gfe.nvidia.com:443
[2024-04-02 12:03:23] [INFO] 58.248.180.226:48692 disconnected, 4975 bytes received, 582 bytes sent, lasted for 1 seconds
[2024-04-02 12:03:23] [INFO] 58.248.180.226:48696 authenticated by authenticator (82b7915)
[2024-04-02 12:03:23] [INFO] 58.248.180.226:48696 requested connection to services.gfe.nvidia.com:443
[2024-04-02 12:03:24] [INFO] 58.248.180.226:48696 disconnected, 4975 bytes received, 588 bytes sent, lasted for 1 seconds
[2024-04-02 12:03:24] [INFO] 58.248.180.226:48700 authenticated by authenticator (82b7915)
[2024-04-02 12:03:24] [INFO] 58.248.180.226:48700 requested connection to services.gfe.nvidia.com:443
[2024-04-02 12:03:25] [INFO] 58.248.180.226:48700 disconnected, 4976 bytes received, 591 bytes sent, lasted for 1 seconds
[2024-04-02 12:03:25] [INFO] 58.248.180.226:48711 authenticated by authenticator (82b7915)
[2024-04-02 12:03:25] [INFO] 58.248.180.226:48711 requested connection to services.gfe.nvidia.com:443
[2024-04-02 12:03:25] [INFO] 58.248.180.226:48711 disconnected, 4975 bytes received, 577 bytes sent, lasted for 0 seconds
[2024-04-02 12:03:26] [INFO] 58.248.180.226:48725 authenticated by authenticator (82b7915)
[2024-04-02 12:03:26] [INFO] 58.248.180.226:48725 requested connection to services.gfe.nvidia.com:443
[2024-04-02 12:03:26] [INFO] 58.248.180.226:48725 disconnected, 4975 bytes received, 587 bytes sent, lasted for 0 seconds
[2024-04-02 12:03:27] [INFO] 58.248.180.226:46108 authenticated by authenticator (82b7915)
[2024-04-02 12:03:27] [INFO] 58.248.180.226:46108 requested connection to services.gfe.nvidia.com:443
[2024-04-02 12:03:27] [INFO] 58.248.180.226:46108 disconnected, 4975 bytes received, 588 bytes sent, lasted for 0 seconds
[2024-04-02 12:03:28] [INFO] 58.248.180.226:46119 authenticated by authenticator (82b7915)
[2024-04-02 12:03:28] [INFO] 58.248.180.226:46119 requested connection to services.gfe.nvidia.com:443
[2024-04-02 12:03:28] [INFO] 58.248.180.226:46119 disconnected, 4975 bytes received, 581 bytes sent, lasted for 1 seconds
[2024-04-02 12:03:28] [INFO] 58.248.180.226:46126 authenticated by authenticator (82b7915)
[2024-04-02 12:03:28] [INFO] 58.248.180.226:46126 requested connection to services.gfe.nvidia.com:443
[2024-04-02 12:03:29] [INFO] 58.248.180.226:46126 disconnected, 4975 bytes received, 592 bytes sent, lasted for 1 seconds
[2024-04-02 12:03:29] [INFO] 58.248.180.226:48776 authenticated by authenticator (82b7915)
[2024-04-02 12:03:29] [INFO] 58.248.180.226:48776 requested connection to services.gfe.nvidia.com:443
[2024-04-02 12:03:30] [INFO] 58.248.180.226:48776 disconnected, 4975 bytes received, 595 bytes sent, lasted for 1 seconds
[2024-04-02 12:03:30] [INFO] 58.248.180.226:60835 disconnected, 3356 bytes received, 3249 bytes sent, lasted for 580 seconds
[2024-04-02 12:03:30] [INFO] 58.248.180.226:48785 authenticated by authenticator (82b7915)
[2024-04-02 12:03:30] [INFO] 58.248.180.226:48785 requested connection to services.gfe.nvidia.com:443
[2024-04-02 12:03:31] [INFO] 58.248.180.226:48785 disconnected, 4877 bytes received, 490 bytes sent, lasted for 1 seconds
[2024-04-02 12:03:47] [INFO] 58.248.180.226:48939 authenticated by authenticator (82b7915)
[2024-04-02 12:03:47] [INFO] 58.248.180.226:48939 requested connection to v20.events.data.microsoft.com:443
[2024-04-02 12:03:48] [INFO] 58.248.180.226:48939 disconnected, 4936 bytes received, 2709 bytes sent, lasted for 1 seconds
[2024-04-02 12:04:22] [INFO] 58.248.180.226:48292 disconnected, 7668 bytes received, 1373 bytes sent, lasted for 91 seconds
[2024-04-02 12:04:33] [INFO] 58.248.180.226:49559 authenticated by authenticator (82b7915)
[2024-04-02 12:04:33] [INFO] 58.248.180.226:49559 requested connection to v10.events.data.microsoft.com:443
[2024-04-02 12:04:34] [INFO] 58.248.180.226:49559 disconnected, 4936 bytes received, 2451 bytes sent, lasted for 1 seconds
[2024-04-02 12:04:34] [INFO] 58.248.180.226:47029 authenticated by authenticator (82b7915)
[2024-04-02 12:04:34] [INFO] 58.248.180.226:47029 requested connection to www.gravatar.com:443
[2024-04-02 12:05:00] [INFO] 58.248.180.226:48319 disconnected, 2157 bytes received, 1897 bytes sent, lasted for 127 seconds
[2024-04-02 12:05:01] [INFO] 58.248.180.226:49859 authenticated by authenticator (82b7915)
[2024-04-02 12:05:01] [INFO] 58.248.180.226:49859 requested connection to edge.microsoft.com:443
[2024-04-02 12:05:01] [INFO] 58.248.180.226:49869 authenticated by authenticator (82b7915)
[2024-04-02 12:05:01] [INFO] 58.248.180.226:49869 requested connection to copilot.microsoft.com:443
[2024-04-02 12:05:01] [INFO] 58.248.180.226:49870 authenticated by authenticator (82b7915)
[2024-04-02 12:05:01] [INFO] 58.248.180.226:49870 requested connection to www.bing.com:443
[2024-04-02 12:05:04] [INFO] 58.248.180.226:47029 disconnected, 927 bytes received, 1215 bytes sent, lasted for 30 seconds
[2024-04-02 12:05:11] [INFO] 58.248.180.226:50005 authenticated by authenticator (82b7915)
[2024-04-02 12:05:11] [INFO] 58.248.180.226:50005 requested connection to activity.windows.com:443
[2024-04-02 12:06:14] [INFO] 58.248.180.226:50005 disconnected, 9036 bytes received, 5184 bytes sent, lasted for 63 seconds
[2024-04-02 12:06:14] [INFO] 58.248.180.226:50778 authenticated by authenticator (82b7915)
[2024-04-02 12:06:14] [INFO] 58.248.180.226:50778 requested connection to activity.windows.com:443
[2024-04-02 12:06:54] [INFO] 58.248.180.226:48324 disconnected, 115733 bytes received, 1456 bytes sent, lasted for 241 seconds
[2024-04-02 12:07:02] [INFO] 58.248.180.226:49870 disconnected, 2535 bytes received, 3629 bytes sent, lasted for 121 seconds
[2024-04-02 12:07:08] [INFO] 58.248.180.226:49859 disconnected, 9984 bytes received, 5286 bytes sent, lasted for 128 seconds
[2024-04-02 12:07:10] [INFO] 58.248.180.226:49869 disconnected, 7874 bytes received, 3419 bytes sent, lasted for 129 seconds
[2024-04-02 12:07:40] [INFO] 219.136.45.33:56833 authenticated by authenticator (25426f1)
[2024-04-02 12:07:40] [INFO] 219.136.45.33:56833 requested connection to securitydomain-pa.googleapis.com:443
[2024-04-02 12:07:41] [INFO] 219.136.45.33:56850 authenticated by authenticator (25426f1)
[2024-04-02 12:07:41] [INFO] 219.136.45.33:56850 requested connection to securitydomain-pa.googleapis.com:443
[2024-04-02 12:07:42] [INFO] 219.136.45.33:56833 disconnected, 5420 bytes received, 2138 bytes sent, lasted for 2 seconds
[2024-04-02 12:08:36] [INFO] 58.248.180.226:49698 authenticated by authenticator (82b7915)
[2024-04-02 12:08:36] [INFO] 58.248.180.226:49698 requested connection to content-autofill.googleapis.com:443
[2024-04-02 12:08:49] [INFO] 58.248.180.226:52410 authenticated by authenticator (82b7915)
[2024-04-02 12:08:49] [INFO] 58.248.180.226:52410 requested connection to v20.events.data.microsoft.com:443
[2024-04-02 12:08:49] [INFO] 58.248.180.226:52410 disconnected, 4936 bytes received, 2714 bytes sent, lasted for 1 seconds
[2024-04-02 12:09:01] [INFO] 183.62.62.171:9435 authenticated by authenticator (f8cdb04)
[2024-04-02 12:09:01] [INFO] 183.62.62.171:9435 requested connection to dns.google:443
[2024-04-02 12:09:45] [INFO] 58.248.180.226:50778 disconnected, 26300 bytes received, 35440 bytes sent, lasted for 211 seconds
[2024-04-02 12:09:46] [INFO] 58.248.180.226:53010 authenticated by authenticator (82b7915)
[2024-04-02 12:09:46] [INFO] 58.248.180.226:53010 requested connection to activity.windows.com:443
[2024-04-02 12:11:14] [INFO] 58.248.180.226:53863 authenticated by authenticator (82b7915)
[2024-04-02 12:11:14] [INFO] 58.248.180.226:53863 requested connection to self.events.data.microsoft.com:443
[2024-04-02 12:11:17] [INFO] 58.248.180.226:51271 authenticated by authenticator (82b7915)
[2024-04-02 12:11:17] [INFO] 58.248.180.226:51271 requested connection to g.live.com:443
[2024-04-02 12:11:18] [INFO] 58.248.180.226:53902 authenticated by authenticator (82b7915)
[2024-04-02 12:11:18] [INFO] 58.248.180.226:53902 requested connection to oneclient.sfx.ms:443
[2024-04-02 12:11:19] [INFO] 58.248.180.226:53908 authenticated by authenticator (82b7915)
[2024-04-02 12:11:19] [INFO] 58.248.180.226:53908 requested connection to ecs.office.com:443
[2024-04-02 12:11:22] [INFO] 58.248.180.226:53925 authenticated by authenticator (82b7915)
[2024-04-02 12:11:22] [INFO] 58.248.180.226:53925 requested connection to self.events.data.microsoft.com:443
[2024-04-02 12:11:31] [INFO] 58.248.180.226:53908 disconnected, 7450 bytes received, 606 bytes sent, lasted for 12 seconds
[2024-04-02 12:11:31] [INFO] 58.248.180.226:53863 disconnected, 9175 bytes received, 19882 bytes sent, lasted for 17 seconds
[2024-04-02 12:11:36] [INFO] 58.248.180.226:53010 disconnected, 11501 bytes received, 9758 bytes sent, lasted for 110 seconds
[2024-04-02 12:11:36] [INFO] 58.248.180.226:45707 disconnected, 9135 bytes received, 76419 bytes sent, lasted for 522 seconds
[2024-04-02 12:11:42] [INFO] 219.136.45.33:56850 disconnected, 6359 bytes received, 2312 bytes sent, lasted for 241 seconds
[2024-04-02 12:12:15] [INFO] 58.248.180.226:54551 authenticated by authenticator (82b7915)
[2024-04-02 12:12:15] [INFO] 58.248.180.226:54551 requested connection to ctldl.windowsupdate.com:80
[2024-04-02 12:12:41] [INFO] 58.248.180.226:49698 disconnected, 2129 bytes received, 1917 bytes sent, lasted for 245 seconds
[2024-04-02 12:12:52] [INFO] 58.248.180.226:52382 authenticated by authenticator (82b7915)
[2024-04-02 12:12:52] [INFO] 58.248.180.226:52382 requested connection to self.events.data.microsoft.com:443
[2024-04-02 12:12:58] [INFO] 58.248.180.226:52382 disconnected, 7288 bytes received, 3460 bytes sent, lasted for 6 seconds
[2024-04-02 12:13:01] [INFO] 183.62.62.171:9435 disconnected, 6123 bytes received, 933 bytes sent, lasted for 240 seconds
[2024-04-02 12:13:07] [INFO] 58.248.180.226:53902 disconnected, 168049 bytes received, 1964 bytes sent, lasted for 109 seconds
[2024-04-02 12:13:07] [INFO] 58.248.180.226:51271 disconnected, 7309 bytes received, 907 bytes sent, lasted for 110 seconds
[2024-04-02 12:13:12] [INFO] 58.248.180.226:53925 disconnected, 6845 bytes received, 2464 bytes sent, lasted for 110 seconds
[2024-04-02 12:13:15] [INFO] 58.248.180.226:54551 disconnected, 201 bytes received, 285 bytes sent, lasted for 61 seconds
[2024-04-02 12:13:27] [INFO] 58.248.180.226:55358 authenticated by authenticator (82b7915)
[2024-04-02 12:13:27] [INFO] 58.248.180.226:55358 requested connection to mobile.events.data.microsoft.com:443
[2024-04-02 12:14:07] [INFO] 58.248.180.226:53226 authenticated by authenticator (82b7915)
[2024-04-02 12:14:07] [INFO] 58.248.180.226:53226 requested connection to content-autofill.googleapis.com:443
[2024-04-02 12:14:11] [INFO] 58.248.180.226:55844 authenticated by authenticator (82b7915)
[2024-04-02 12:14:11] [INFO] 58.248.180.226:55844 requested connection to passwordsleakcheck-pa.googleapis.com:443
[2024-04-02 12:14:13] [INFO] 58.248.180.226:53273 authenticated by authenticator (82b7915)
[2024-04-02 12:14:13] [INFO] 58.248.180.226:53273 requested connection to content-autofill.googleapis.com:443
[2024-04-02 12:15:16] [INFO] 58.248.180.226:54022 authenticated by authenticator (82b7915)
[2024-04-02 12:15:16] [INFO] 58.248.180.226:54022 requested connection to activity.windows.com:443
[2024-04-02 12:15:35] [INFO] 58.248.180.226:47386 disconnected, 7791 bytes received, 1224 bytes sent, lasted for 21997 seconds
[2024-04-02 12:15:35] [INFO] 58.248.180.226:53273 disconnected, 7031 bytes received, 2179 bytes sent, lasted for 82 seconds
[2024-04-02 12:15:35] [INFO] 58.248.180.226:55358 disconnected, 6908 bytes received, 5970 bytes sent, lasted for 128 seconds
[2024-04-02 12:15:35] [INFO] 58.248.180.226:53226 disconnected, 2069 bytes received, 1906 bytes sent, lasted for 88 seconds
[2024-04-02 12:15:35] [INFO] 58.248.180.226:54022 disconnected, 8956 bytes received, 5104 bytes sent, lasted for 19 seconds
[2024-04-02 12:15:35] [INFO] 58.248.180.226:55844 disconnected, 9352 bytes received, 1174 bytes sent, lasted for 84 seconds
[2024-04-02 12:15:46] [INFO] 183.62.62.171:9436 authenticated by authenticator (f8cdb04)
[2024-04-02 12:15:46] [INFO] 183.62.62.171:9436 requested connection to dns.google:443
[2024-04-02 12:19:43] [INFO] 183.62.62.171:9436 disconnected, 5941 bytes received, 999 bytes sent, lasted for 237 seconds
[2024-04-02 12:27:55] [INFO] 219.136.45.33:54007 authenticated by authenticator (25426f1)
[2024-04-02 12:27:55] [INFO] 219.136.45.33:54007 requested connection to play.googleapis.com:443
[2024-04-02 12:31:56] [INFO] 219.136.45.33:54007 disconnected, 2047 bytes received, 3587 bytes sent, lasted for 241 seconds
[2024-04-02 12:35:01] [INFO] 219.136.45.33:54280 authenticated by authenticator (25426f1)
[2024-04-02 12:35:01] [INFO] 219.136.45.33:54280 requested connection to play-fe.googleapis.com:443
[2024-04-02 12:35:02] [INFO] 219.136.45.33:54286 authenticated by authenticator (25426f1)
[2024-04-02 12:35:02] [INFO] 219.136.45.33:54286 requested connection to play.googleapis.com:443
[2024-04-02 12:35:03] [INFO] 219.136.45.33:54291 authenticated by authenticator (25426f1)
[2024-04-02 12:35:03] [INFO] 219.136.45.33:54291 requested connection to rr4---sn-a5msenl7.gvt1.com:443
[2024-04-02 12:35:03] [INFO] 219.136.45.33:54291 disconnected, 468578 bytes received, 1444 bytes sent, lasted for 0 seconds
[2024-04-02 12:35:13] [INFO] 219.136.45.33:53368 authenticated by authenticator (25426f1)
[2024-04-02 12:35:13] [INFO] 219.136.45.33:53368 requested connection to rr4---sn-j5o7dn7e.xn--ngstr-lra8j.com:443
[2024-04-02 12:35:42] [INFO] 219.136.45.33:53368 disconnected, 0 bytes received, 525 bytes sent, lasted for 30 seconds
[2024-04-02 12:35:43] [INFO] 219.136.45.33:53896 authenticated by authenticator (25426f1)
[2024-04-02 12:35:43] [INFO] 219.136.45.33:53896 requested connection to rr3---sn-j5o76n7e.xn--ngstr-lra8j.com:443
[2024-04-02 12:36:13] [INFO] 219.136.45.33:53896 disconnected, 0 bytes received, 589 bytes sent, lasted for 30 seconds
[2024-04-02 12:36:13] [INFO] 219.136.45.33:55671 authenticated by authenticator (25426f1)
[2024-04-02 12:36:13] [INFO] 219.136.45.33:55671 requested connection to rr4---sn-j5o7dn7e.xn--ngstr-lra8j.com:443
[2024-04-02 12:36:27] [INFO] 219.136.45.33:55671 disconnected, 0 bytes received, 525 bytes sent, lasted for 14 seconds
[2024-04-02 12:36:27] [INFO] 219.136.45.33:54280 disconnected, 52977 bytes received, 11996 bytes sent, lasted for 86 seconds
[2024-04-02 12:36:27] [INFO] 219.136.45.33:55672 authenticated by authenticator (25426f1)
[2024-04-02 12:36:27] [INFO] 219.136.45.33:55672 requested connection to people-pa.googleapis.com:443
[2024-04-02 12:37:35] [INFO] 219.136.45.33:56593 authenticated by authenticator (25426f1)
[2024-04-02 12:37:35] [INFO] 219.136.45.33:56593 requested connection to android.clients.google.com:443
[2024-04-02 12:37:35] [INFO] 219.136.45.33:56600 authenticated by authenticator (25426f1)
[2024-04-02 12:37:35] [INFO] 219.136.45.33:56600 requested connection to play.googleapis.com:443
[2024-04-02 12:37:35] [INFO] 219.136.45.33:56618 authenticated by authenticator (25426f1)
[2024-04-02 12:37:35] [INFO] 219.136.45.33:56618 requested connection to rr4---sn-j5o7dn7e.xn--ngstr-lra8j.com:443
[2024-04-02 12:38:05] [INFO] 219.136.45.33:56618 disconnected, 0 bytes received, 557 bytes sent, lasted for 30 seconds
[2024-04-02 12:38:06] [INFO] 219.136.45.33:56048 authenticated by authenticator (25426f1)
[2024-04-02 12:38:06] [INFO] 219.136.45.33:56048 requested connection to rr3---sn-j5o76n7e.xn--ngstr-lra8j.com:443
[2024-04-02 12:38:35] [INFO] 219.136.45.33:56048 disconnected, 0 bytes received, 589 bytes sent, lasted for 29 seconds
[2024-04-02 12:38:36] [INFO] 219.136.45.33:53908 authenticated by authenticator (25426f1)
[2024-04-02 12:38:36] [INFO] 219.136.45.33:53908 requested connection to rr2---sn-j5o76n7l.xn--ngstr-lra8j.com:443
[2024-04-02 12:39:03] [INFO] 219.136.45.33:54286 disconnected, 2858 bytes received, 1856 bytes sent, lasted for 241 seconds
[2024-04-02 12:39:06] [INFO] 219.136.45.33:53908 disconnected, 0 bytes received, 589 bytes sent, lasted for 30 seconds
[2024-04-02 12:39:07] [INFO] 219.136.45.33:55074 authenticated by authenticator (25426f1)
[2024-04-02 12:39:07] [INFO] 219.136.45.33:55074 requested connection to rr3---sn-j5o7dn7e.xn--ngstr-lra8j.com:443
[2024-04-02 12:39:09] [INFO] 219.136.45.33:56924 authenticated by authenticator (25426f1)
[2024-04-02 12:39:09] [INFO] 219.136.45.33:56924 requested connection to mtalk.google.com:5228
[2024-04-02 12:39:36] [INFO] 219.136.45.33:55074 disconnected, 0 bytes received, 621 bytes sent, lasted for 30 seconds
[2024-04-02 12:39:37] [INFO] 219.136.45.33:55374 authenticated by authenticator (25426f1)
[2024-04-02 12:39:37] [INFO] 219.136.45.33:55374 requested connection to rr4---sn-j5o7dn7e.xn--ngstr-lra8j.com:443
[2024-04-02 12:40:06] [INFO] 219.136.45.33:55374 disconnected, 0 bytes received, 621 bytes sent, lasted for 29 seconds
[2024-04-02 12:40:07] [INFO] 219.136.45.33:56046 authenticated by authenticator (25426f1)
[2024-04-02 12:40:07] [INFO] 219.136.45.33:56046 requested connection to rr3---sn-j5o76n7e.xn--ngstr-lra8j.com:443
[2024-04-02 12:40:29] [INFO] 219.136.45.33:55672 disconnected, 6055 bytes received, 3406 bytes sent, lasted for 242 seconds
[2024-04-02 12:40:37] [INFO] 219.136.45.33:56046 disconnected, 0 bytes received, 621 bytes sent, lasted for 30 seconds
[2024-04-02 12:40:37] [INFO] 219.136.45.33:55197 authenticated by authenticator (25426f1)
[2024-04-02 12:40:37] [INFO] 219.136.45.33:55197 requested connection to rr2---sn-j5o7dn7l.xn--ngstr-lra8j.com:443
[2024-04-02 12:41:07] [INFO] 219.136.45.33:55197 disconnected, 0 bytes received, 621 bytes sent, lasted for 30 seconds
[2024-04-02 12:41:07] [INFO] 219.136.45.33:54765 authenticated by authenticator (25426f1)
[2024-04-02 12:41:07] [INFO] 219.136.45.33:54765 requested connection to rr4---sn-j5o7dn7l.xn--ngstr-lra8j.com:443
[2024-04-02 12:41:16] [INFO] 219.136.45.33:55609 authenticated by authenticator (25426f1)
[2024-04-02 12:41:16] [INFO] 219.136.45.33:55609 requested connection to dns.google:443
[2024-04-02 12:41:17] [INFO] 219.136.45.33:57108 authenticated by authenticator (25426f1)
[2024-04-02 12:41:17] [INFO] 219.136.45.33:57108 requested connection to dns.google:443
[2024-04-02 12:41:18] [INFO] 219.136.45.33:54083 authenticated by authenticator (25426f1)
[2024-04-02 12:41:18] [INFO] 219.136.45.33:54083 requested connection to dns.google:443
[2024-04-02 12:41:23] [INFO] 219.136.45.33:55609 disconnected, 5851 bytes received, 917 bytes sent, lasted for 7 seconds
[2024-04-02 12:41:27] [INFO] 219.136.45.33:55881 authenticated by authenticator (25426f1)
[2024-04-02 12:41:27] [INFO] 219.136.45.33:55881 requested connection to dns.google:443
[2024-04-02 12:41:35] [INFO] 219.136.45.33:56593 disconnected, 8641 bytes received, 1247 bytes sent, lasted for 241 seconds
[2024-04-02 12:41:37] [INFO] 219.136.45.33:54765 disconnected, 0 bytes received, 557 bytes sent, lasted for 30 seconds
[2024-04-02 12:41:38] [INFO] 219.136.45.33:53513 authenticated by authenticator (25426f1)
[2024-04-02 12:41:38] [INFO] 219.136.45.33:53513 requested connection to rr4---sn-j5o7dn7e.xn--ngstr-lra8j.com:443
[2024-04-02 12:41:39] [INFO] 219.136.45.33:56600 disconnected, 7507 bytes received, 4070 bytes sent, lasted for 244 seconds
[2024-04-02 12:42:07] [INFO] 219.136.45.33:53513 disconnected, 0 bytes received, 589 bytes sent, lasted for 30 seconds
[2024-04-02 12:42:08] [INFO] 219.136.45.33:54565 authenticated by authenticator (25426f1)
[2024-04-02 12:42:08] [INFO] 219.136.45.33:54565 requested connection to rr3---sn-j5o76n7e.xn--ngstr-lra8j.com:443
[2024-04-02 12:42:08] [INFO] 219.136.45.33:54566 authenticated by authenticator (25426f1)
[2024-04-02 12:42:08] [INFO] 219.136.45.33:54566 requested connection to rr2---sn-j5o76n7l.xn--ngstr-lra8j.com:443
[2024-04-02 12:42:35] [INFO] 219.136.45.33:54006 authenticated by authenticator (25426f1)
[2024-04-02 12:42:35] [INFO] 219.136.45.33:54006 requested connection to play.googleapis.com:443
[2024-04-02 12:42:38] [INFO] 219.136.45.33:54565 disconnected, 0 bytes received, 557 bytes sent, lasted for 30 seconds
[2024-04-02 12:42:38] [INFO] 219.136.45.33:54566 disconnected, 0 bytes received, 525 bytes sent, lasted for 30 seconds
[2024-04-02 12:45:18] [INFO] 219.136.45.33:57108 disconnected, 6093 bytes received, 932 bytes sent, lasted for 241 seconds
[2024-04-02 12:45:19] [INFO] 219.136.45.33:54083 disconnected, 6136 bytes received, 932 bytes sent, lasted for 241 seconds
[2024-04-02 12:45:27] [INFO] 219.136.45.33:55881 disconnected, 6100 bytes received, 893 bytes sent, lasted for 240 seconds
[2024-04-02 12:46:13] [INFO] 183.62.62.171:9439 authenticated by authenticator (f8cdb04)
[2024-04-02 12:46:13] [INFO] 183.62.62.171:9439 requested connection to dns.google:443
[2024-04-02 12:46:15] [INFO] 183.62.62.171:9440 authenticated by authenticator (f8cdb04)
[2024-04-02 12:46:15] [INFO] 183.62.62.171:9440 requested connection to dns.google:443
[2024-04-02 12:46:16] [INFO] 183.62.62.171:9441 authenticated by authenticator (f8cdb04)
[2024-04-02 12:46:16] [INFO] 183.62.62.171:9441 requested connection to dns.google:443
[2024-04-02 12:46:24] [INFO] 183.62.62.171:9442 authenticated by authenticator (f8cdb04)
[2024-04-02 12:46:24] [INFO] 183.62.62.171:9442 requested connection to dns.google:443
[2024-04-02 12:46:35] [INFO] 219.136.45.33:54006 disconnected, 7376 bytes received, 3892 bytes sent, lasted for 240 seconds
[2024-04-02 12:50:14] [INFO] 183.62.62.171:9439 disconnected, 6063 bytes received, 933 bytes sent, lasted for 241 seconds
[2024-04-02 12:50:15] [INFO] 183.62.62.171:9440 disconnected, 6156 bytes received, 933 bytes sent, lasted for 241 seconds
[2024-04-02 12:50:16] [INFO] 183.62.62.171:9441 disconnected, 6013 bytes received, 933 bytes sent, lasted for 241 seconds
[2024-04-02 12:50:24] [INFO] 183.62.62.171:9442 disconnected, 6032 bytes received, 933 bytes sent, lasted for 240 seconds
[2024-04-02 12:51:39] [INFO] 112.96.49.42:19598 authenticated by authenticator (25426f1)
[2024-04-02 12:51:39] [INFO] 112.96.49.42:19598 requested connection to mtalk.google.com:5228
[2024-04-02 12:51:42] [INFO] 112.96.49.42:19599 authenticated by authenticator (25426f1)
[2024-04-02 12:51:42] [INFO] 112.96.49.42:19599 requested connection to clients3.google.com:80
[2024-04-02 12:51:42] [INFO] 112.96.49.42:19599 disconnected, 127 bytes received, 161 bytes sent, lasted for 1 seconds
[2024-04-02 12:52:40] [INFO] 112.96.49.42:35741 authenticated by authenticator (25426f1)
[2024-04-02 12:52:40] [INFO] 112.96.49.42:35741 requested connection to play.googleapis.com:443
[2024-04-02 12:53:04] [INFO] 219.136.45.33:54451 disconnected, 1580 bytes received, 1740 bytes sent, lasted for 10672 seconds
[2024-04-02 12:56:40] [INFO] 112.96.49.42:35741 disconnected, 1640 bytes received, 3756 bytes sent, lasted for 240 seconds
[2024-04-02 13:01:45] [INFO] 219.136.45.33:54033 authenticated by authenticator (25426f1)
[2024-04-02 13:01:45] [INFO] 219.136.45.33:54033 requested connection to clients3.google.com:80
[2024-04-02 13:01:46] [INFO] 219.136.45.33:54033 disconnected, 127 bytes received, 161 bytes sent, lasted for 1 seconds
[2024-04-02 13:05:22] [INFO] 219.136.45.33:53577 authenticated by authenticator (25426f1)
[2024-04-02 13:05:22] [INFO] 219.136.45.33:53577 requested connection to mtalk.google.com:5228
[2024-04-02 13:05:41] [INFO] 219.136.45.33:53577 disconnected, 856 bytes received, 986 bytes sent, lasted for 20 seconds
[2024-04-02 13:05:47] [INFO] 112.96.49.42:19598 disconnected, 906 bytes received, 1049 bytes sent, lasted for 849 seconds
[2024-04-02 13:06:09] [INFO] 219.136.45.33:56647 authenticated by authenticator (25426f1)
[2024-04-02 13:06:09] [INFO] 219.136.45.33:56647 requested connection to mtalk.google.com:5228
[2024-04-02 13:06:17] [INFO] 219.136.45.33:56344 authenticated by authenticator (25426f1)
[2024-04-02 13:06:17] [INFO] 219.136.45.33:56344 requested connection to people-pa.googleapis.com:443
[2024-04-02 13:06:17] [INFO] 219.136.45.33:56345 authenticated by authenticator (25426f1)
[2024-04-02 13:06:17] [INFO] 219.136.45.33:56345 requested connection to android.clients.google.com:443
[2024-04-02 13:07:30] [INFO] 219.136.45.33:56647 disconnected, 856 bytes received, 985 bytes sent, lasted for 81 seconds
[2024-04-02 13:07:30] [INFO] 219.136.45.33:56344 disconnected, 5802 bytes received, 2638 bytes sent, lasted for 73 seconds
[2024-04-02 13:07:30] [INFO] 219.136.45.33:56345 disconnected, 8793 bytes received, 1247 bytes sent, lasted for 73 seconds
[2024-04-02 13:08:04] [INFO] 219.136.45.33:56710 authenticated by authenticator (25426f1)
[2024-04-02 13:08:04] [INFO] 219.136.45.33:56710 requested connection to mtalk.google.com:5228
[2024-04-02 13:08:26] [INFO] 219.136.45.33:56710 disconnected, 856 bytes received, 986 bytes sent, lasted for 22 seconds
[2024-04-02 13:13:34] [INFO] 183.62.62.171:9443 authenticated by authenticator (f8cdb04)
[2024-04-02 13:13:34] [INFO] 183.62.62.171:9443 requested connection to dns.google:443
[2024-04-02 13:13:40] [INFO] 183.62.62.171:9444 authenticated by authenticator (f8cdb04)
[2024-04-02 13:13:40] [INFO] 183.62.62.171:9444 requested connection to 43.129.115.243:443
[2024-04-02 13:13:41] [INFO] 183.62.62.171:9444 disconnected, 27585 bytes received, 1523 bytes sent, lasted for 1 seconds
[2024-04-02 13:16:46] [INFO] 183.62.62.171:9443 disconnected, 5809 bytes received, 894 bytes sent, lasted for 192 seconds
[2024-04-02 13:21:17] [INFO] 219.136.45.33:55955 authenticated by authenticator (25426f1)
[2024-04-02 13:21:17] [INFO] 219.136.45.33:55955 requested connection to www.googleapis.com:443
[2024-04-02 13:21:20] [INFO] 219.136.45.33:54345 authenticated by authenticator (25426f1)
[2024-04-02 13:21:20] [INFO] 219.136.45.33:54345 requested connection to deviceintegritytokens-pa.googleapis.com:443
[2024-04-02 13:21:22] [INFO] 219.136.45.33:56990 authenticated by authenticator (25426f1)
[2024-04-02 13:21:22] [INFO] 219.136.45.33:56990 requested connection to mtalk.google.com:5228
[2024-04-02 13:25:18] [INFO] 219.136.45.33:55955 disconnected, 56770 bytes received, 2402 bytes sent, lasted for 241 seconds
[2024-04-02 13:25:18] [INFO] 219.136.45.33:56990 disconnected, 856 bytes received, 989 bytes sent, lasted for 237 seconds
[2024-04-02 13:25:18] [INFO] 219.136.45.33:54345 disconnected, 5889 bytes received, 41110 bytes sent, lasted for 239 seconds
[2024-04-02 13:33:08] [INFO] 219.136.45.33:54569 authenticated by authenticator (25426f1)
[2024-04-02 13:33:08] [INFO] 219.136.45.33:54569 requested connection to mtalk.google.com:5228
[2024-04-02 13:33:17] [INFO] 219.136.45.33:54569 disconnected, 856 bytes received, 989 bytes sent, lasted for 9 seconds
[2024-04-02 13:35:35] [INFO] 183.62.62.171:9445 authenticated by authenticator (f8cdb04)
[2024-04-02 13:35:35] [INFO] 183.62.62.171:9445 requested connection to play.googleapis.com:443
[2024-04-02 13:39:36] [INFO] 183.62.62.171:9445 disconnected, 3147 bytes received, 6004 bytes sent, lasted for 242 seconds
          </textarea>
        </div>
      </div>
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
.form {

  background-repeat: repeat;
  background-color: #1e1e1e;
}
.log {
  border-radius: 8px;
  // border: 2px solid rgb(226, 226, 226);
  border: none;
  box-shadow: none;
  font-size: 0.95rem;
  font-family: 'Segoe';
  color: white;
}
</style>