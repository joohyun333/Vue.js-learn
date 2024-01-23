import Vue from 'vue'
import PrimeVue from 'primevue/config';
import Editor from 'primevue/editor';
import App from './App.vue'


Vue.config.productionTip = false
// eslint-disable-next-line vue/multi-word-component-names
Vue.component('Editor', Editor);
Vue.use(PrimeVue, {ripple: true});
new Vue({
  render: h => h(App),
}).$mount('#app')
