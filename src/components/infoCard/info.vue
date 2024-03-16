<script setup>
const props = defineProps(['info'])
let card = props.info
</script>

<template>
  <q-card class="my-card" flat bordered>
    <q-card-section horizontal>
      <q-card-section class="q-pt-xs">
        <div class="text-overline">{{ card.title }}</div>
        <div class="text-h6 q-mt-sm q-mb-xs">{{ card.content }}:{{ card.data }}%</div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </div>
      </q-card-section>


    </q-card-section>

    


  </q-card>
</template>

<style lang='scss' scoped>
.my-card {

  max-width: 300px
}
</style>