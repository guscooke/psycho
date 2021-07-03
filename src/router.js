import Router from "vue-router";
import Vue from "vue";

import store from "@/store";
import home from "./view/Home.vue";



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
      path: "/:transaction_id?",
      name: "home",
      component: home,
      props: true,

    },
    // {
    //   path: "/booking",
    //   name: "booking",
    //   component: booking,
    //   props: true,

    // },
    {
      path: "/:profissionaiId",
      name: "DetalhesDetails",
      props: true,
      component: () =>
      import( /* webpackChunkName: "DestinationDetails"*/ "./view/DetalhesDetails"),

    },


    {
      path: "/especialidade/:slug",
      name: "pisicoDetails",
      props: true,
      component: () =>
        import( /* webpackChunkName: "PsicoDetails"*/ "./view/PisicoDetails"),
      children: [{
        path: ":profissionaiId",
        name: "DetalhesDetails",
        props: true,
        component: () =>
          import( /*webpackChunkName: "DetalhesDetails"*/ "./view/DetalhesDetails")
      }],
      beforeEnter: (to, from, next) => {
        const exists = store.state.especialidades.find(
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