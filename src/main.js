import Vue from 'vue';
import Vuex from 'vuex';
import store from "./store";
import VueRouter from "vue-router";
import App from './App.vue'
import {routes} from './routes';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history' // use router with no hash on url. Need to configure the server ()
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
