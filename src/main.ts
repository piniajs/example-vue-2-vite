import Vue from 'vue'
import App from './App.vue'
import { createPinia, PiniaPlugin } from 'pinia'
import { PiniaDebounce } from '@pinia/plugin-debounce'
import { debounce } from 'ts-debounce'

const pinia = createPinia()
pinia.use(PiniaDebounce(debounce))

Vue.use(PiniaPlugin)
new Vue({
  // @ts-expect-error
  pinia,
  render: (h) => h(App),
}).$mount('#app')
