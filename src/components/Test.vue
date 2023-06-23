<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores, defineStore, mapState } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
  }),
})

export default defineComponent({
  computed: {
    ...mapState(useCounterStore, ['counter']),
  },

  methods: {
    debug() {
      console.log(this)
    },
  },
})
</script>

<template>
  <p @click="debug">Test: {{ counter }} ;</p>
</template>
