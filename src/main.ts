import Vue from 'vue'
import App from './App.vue'
import { createPinia, PiniaPlugin } from 'pinia'

const pinia = createPinia()

Vue.use(PiniaPlugin)
new Vue({
  // @ts-expect-error
  pinia,
  render: (h) => h(App),
}).$mount('#app')
