import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

/* Custom Route*/
import Dashboard_pasien from "./views/Dashboard_Pasien.vue";
import Dashboard_dokter from "./views/Dashboard_Dokter.vue";

/** Auth Router */
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";

Vue.use(Router);

const router = new Router({
  hashbang: false,
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        guest: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  //Testing

  var token = this.$parent.$auth.getToken();

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.

    if (
      to.matched.some(record => record.meta.is_patient) &&
      token === "pasien"
    ) {
      next();
    } else if (
      to.matched.some(record => record.meta.is_doctor) &&
      token === "dokter"
    ) {
      next();
    } else {
      next({ path: "/login" });
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
