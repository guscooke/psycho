import Router from "vue-router";
import Vue from "vue";
import Home from "./view/Home";

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: "home",
    component: Home
  },
  {
    path: '/agendamento',
    name: "AgendaPisico",
    component: () => import('./view/AgendaPisico.vue')
  },
  {
    path: '/admin',
    component: () => import('./view/Dashboard.vue')
  }],
  mode: 'history'
})

