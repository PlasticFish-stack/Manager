<template>
  <router-view></router-view>
</template>
<script setup>
import { getTitle } from "@/utils/request";

getTitle()


</script>