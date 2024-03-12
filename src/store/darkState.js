import { defineStore } from "pinia"
import { computed } from 'vue'
import { useQuasar } from 'quasar';


export const UseDarkState = defineStore('dark', () => {
  const $q = useQuasar()
  let dark = computed(() => {
    return $q.dark.isActive
  })
  function ModeToggle() {
    $q.dark.toggle()
  }
  return { dark, ModeToggle }
})