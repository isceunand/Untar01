import Vue from 'vue'
import Router from 'vue-router'

/* Custom Route*/
import Home from './views/Home.vue'
import Dashboard_pasien from './views/Dashboard_Pasien.vue'
import Dashboard_dokter from './views/Dashboard_Dokter.vue'

import auth from './libraries/auth.js'

/** Auth Router */
import Login from './views/Login.vue'
import Register from './views/Register.vue'

Vue.use(Router)
Vue.use(auth);

let router =  new Router({
  hashbang: false,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { 
        guest: true
      }
    },
    {
      path:'/register',
      name:'register',
      component:Register,
      meta: { 
        guest: true
      }
    },
    {
      path:'/login',
      name:'login',
      component:Login,
      meta: { 
        guest: true
      }
    },
    {
      path:'/Pasien/dashboard',
      name:'Patiendashboard',
      component:Dashboard_pasien,
      meta: { 
          requiresAuth: true,
          is_patient:true
      }
    },
    {
      path:'/Dokter/dashboard',
      name:'Dokterdashboard',
      component:Dashboard_dokter,
      meta: { 
          requiresAuth: true,
          is_doctor:true
      }
    },


  ]
})

router.beforeEach((to, from, next) => {
   
  //Testing
  
  var token =localStorage.getItem('token') ;
 

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.

      if(to.matched.some(record => record.meta.is_patient) && token === "pasien")
      {
        next();
      }
      else if(to.matched.some(record => record.meta.is_doctor) && token === "dokter")
      {
        next();
      }else{
        next({path: '/login'});
      }
  } else if( token === "pasien" && to.matched.some(record => record.meta.guest)){
      next({path: '/Pasien/dashboard'});
   }else if( token === "dokter" && to.matched.some(record => record.meta.guest)){
        next({path: '/Dokter/dashboard'});
  }else{
    next() // make sure to always call next()!
  }

});


export default router