import { defineStore } from "pinia"
import { computed } from 'vue'
import { useQuasar } from 'quasar';


export const UseDarkState = defineStore('dark', () => {
  const $q = useQuasar()
  if(localStorage.getItem('dark') != null){
    $q.dark.set(JSON.parse(localStorage.getItem('dark')))
  }
  let dark = computed(() => {
    return $q.dark.isActive
  })
  function ModeToggle() {
    $q.dark.toggle()
    localStorage.setItem('dark', $q.dark.isActive)
  }
  return { dark, ModeToggle }
})