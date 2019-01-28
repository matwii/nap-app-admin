import Vue from 'vue'
import App from './App.vue'
import store from './store';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Dashboard from './components/Dashboard'
import UserList from './components/UserList'
import moment from 'moment';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

//Config for the router
export const router = new VueRouter({
    mode: 'history', //Remove # from the url
    routes: [
        { path: '/', component: Dashboard},
        { path: '/users', component: UserList},
        { path: '*', redirect: '/'}
    ]
});


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
