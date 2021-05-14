import Router from "vue-router";
import Vue from "vue";

import store from "@/store";
import home from "./view/Home.vue";
import booking from "./view/Booking.vue";


Vue.use(Router);

const router = new Router({
  base: __dirname,
  mode: "history",

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (to.hash === "#profile") {
          position.offset = {
            y: 140
          };
        }
        if (document.querySelector(to.hash)) {
          return position;
        }

        return false;
      }
    }
  },
  routes: [

    {
      path: "/",
      name: "home",
      component: home,
      props: true,

    },
    {
      path: "/booking",
      name: "booking",
      component: booking,
      props: true,

    },
    {
      path: "/admin",
      name: "admin",
      props: true,
      component: () =>
      import( /* webpackChunkName: "DestinationDetails"*/ "./view/Admin"),

    },


    {
      path: "/especialidade/:slug",
      name: "pisicoDetails",
      props: true,
      component: () =>
        import( /* webpackChunkName: "DestinationDetails"*/ "./view/PisicoDetails"),
      children: [{
        path: ":profissionaiId",
        name: "DetalhesDetails",
        props: true,
        component: () =>
          import( /*webpackChunkName: "ExperienceDetails"*/ "./view/DetalhesDetails")
      }],
      beforeEnter: (to, from, next) => {
        const exists = store.especialidades.find(
          especialidade => especialidade.slug === to.params.slug
        );
        if (exists) {
          next();
        } else {
          next({
            name: "notFound"
          });
        }
      },
      
    },
    
  ]
});




export default router;