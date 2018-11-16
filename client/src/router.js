import Vue from 'vue'
import Router from 'vue-router'
import VueJWT from 'vuejs-jwt'


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
Vue.use(VueJWT);

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
      path:'/pasien/dashboard',
      name:'Patiendashboard',
      component:Dashboard_pasien,
      meta: { 
          requiresAuth: true,
          is_patient:true
      }
    },
    {
      path:'/dokter/dashboard',
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
  console.log(Vue.$jwt.decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.1KeurV34xtT2zRmiCZLFzOk_WCHWIqOedt4xV0bbLnA','aaaaa'))
 
  var token =localStorage.getItem('token');
  

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
      next({path: '/pasien/dashboard'});
   }else if( token === "dokter" && to.matched.some(record => record.meta.guest)){
        next({path: '/dokter/dashboard'});
  }else{
    next() // make sure to always call next()!
  }

});


export default router