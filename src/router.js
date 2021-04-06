import Router from "vue-router";
import Vue from "vue";
import HomeProfi from "./view/PisicoProfile.vue";
import store from "@/store";
import home from "./view/Home.vue";
Vue.use(Router);

const router = new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (to.hash === "#profile") {
          position.offset = { y: 140 };
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
      path: "/profissionais/",
      name: "PisicoProfile",
      component: HomeProfi,
      props: true,
    },

    {
      path: "/profissional/:slug",
      name: "DestinationDetails",
      props: true,
      component: () =>
        import(/* webpackChunkName: "DestinationDetails"*/ "./view/DestinationDetails"),
      children: [
        {
          path: ":experienceSlug",
          name: "experienceDetails",
          props: true,
          component: () =>
            import(/*webpackChunkName: "ExperienceDetails"*/ "./view/ExperienceDetails")
        }
      ],
      beforeEnter: (to, from, next) => {
        const exists = store.destinations.find(
          destination => destination.slug === to.params.slug
        );
        if (exists) {
          next();
        } else {
          next({ name: "notFound" });
        }
      }
    },
    // {
    //   path: "/user",
    //   name: "user",
    //   component: () =>
    //     import(/* webpackChunkName: "User" */ "./views/User.vue"),
    //   meta: { requiresAuth: true }
    // },
    // {
    //   path: "/login",
    //   name: "login",
    //   component: () =>
    //     import(/* webpackChunkName: "Login" */
    //     "./views/Login.vue")
    // },
    // {
    //   path: "/invoices",
    //   name: "invoices",
    //   component: () =>
    //     import(/* webpackChunkName: "Invoices" */ "./views/Invoices"),
    //   meta: {
    //     requiresAuth: true
    //   }
    // },
    // {
    //   path: "/404",
    //   alias: "*",
    //   name: "notFound",
    //   component: () =>
    //     import(/* webpackChunkName: "NotFound" */
    //     "./views/NotFound")
    // }
  ]
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!store.user) {
//       next({
//         name: "login",
//         query: { redirect: to.fullPath }
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
