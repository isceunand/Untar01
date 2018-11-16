<template>

<div>
<h1>DashBoard Dokter</h1>
<button @click="Logout">Logout</button>
</div>
</template>


<script>
export default {
      name:'dashboard_dokter',
      data(){
            return{
                  }
      },
      methods:{
            Logout(){
                  var Auth=this.$parent.$auth;
                  Auth.destroyToken();
                  this.$router.push('/');
            }
      }
}
</script>
