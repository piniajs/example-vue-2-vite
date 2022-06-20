<script>
import { defineComponent } from 'vue'
import { mapStores, defineStore } from 'pinia'

const useCounterStore = defineStore('counterStore', {
  state: () => ({
    counter: 0,
  }),
})

export default defineComponent({
  setup() {
    const counterStore = useCounterStore()

    return { counterStore }
  },

  computed: {
    tripleCounter() {
      return this.counterStore.counter * 3
    },
  },
})
</script>
