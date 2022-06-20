import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSetupStore = defineStore('setup-store', () => {
  const counter = ref(0)

  function doubleTheCounter() {
    counter.value *= 2
  }

  return { counter, doubleTheCounter }
})
