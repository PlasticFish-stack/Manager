<script setup>
  
</script>

<template>
  <div id="test" class="bg-red">
    <div v-for="item in 100" class="a bg-green ">1</div>
  </div>
</template>

<style lang='scss' scoped>
  #test{
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .a{
    flex: 1;
  }
</style>