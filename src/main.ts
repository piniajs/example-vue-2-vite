import Vue from 'vue'
import App from './App.vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import { PiniaDebounce } from '@pinia/plugin-debounce'
import { debounce } from 'ts-debounce'

const pinia = createPinia()
pinia.use(PiniaDebounce(debounce))

Vue.use(PiniaVuePlugin)
new Vue({
  pinia,
  render: (h) => h(App),
}).$mount('#app')
