import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import {routes} from './routes';

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history' // use router with no hash on url. Need to configure the server ()
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
