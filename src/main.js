import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { loadStorage } from './utils/cache.js'

Vue.prototype.$loadStorage = loadStorage;
Vue.prototype.$store = store;


// element-------start
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// element-------end


import plugin from './utils/common/plugin.js';

Vue.use(plugin);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
