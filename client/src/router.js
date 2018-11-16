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
  
  var token =localStorage.getItem('token');
  var key=localStorage.getItem('key');

  if(token !== null && key !== null){//if token exist

  //Testing
  var Gettoken=Vue.$jwt.decode(token,key)
  
  
    var Status=Gettoken.status;

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    console.log(Gettoken.status)
      if(to.matched.some(record => record.meta.is_patient) && Status === "pasien")
      {
        next();
      }
      else if(to.matched.some(record => record.meta.is_doctor) && Status === "dokter")
      {
        next();
      }else{
        next({path: '/login'});
      }

  } else if( Status === "pasien" && to.matched.some(record => record.meta.guest)){
      next({path: '/pasien/dashboard'});
   }else if( Status === "dokter" && to.matched.some(record => record.meta.guest)){
        next({path: '/dokter/dashboard'});
  }else{
    //jika tidak ada page??

    next({path: '/login'}); // make sure to always call next()!
  }

  }else{

    if (to.matched.some(record => record.meta.requiresAuth)) {
      next({path: '/login'});
    }else{
      next();
    }
  }

});


export default router