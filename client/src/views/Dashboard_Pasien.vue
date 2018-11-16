<template>

<div>
      <h2>DashBoard Pasien</h2>

      <form @submit.prevent="Daftar">
      <h3>Testing Daftar</h3>


      <div class="field">
          <label>Tanggal</label>
          <input type="date" name="email" v-model="order_info.email" :disabled="validating == true">       
      </div> 


      <button>Daftar</button>
      </form>

</div>

</template>
<script>
export default {
      name:'dashboard_pasien',
      data(){
            return{
                  infodokter:{
                     name:'',
                     user_id:'',
                     specialist:''
                  },
                  user_info:{
                        name:'',
                        user_id:''
                  },
                  order_info:{
                        date:'',
                        time:'',
                        message:'',
                  }
                  }

        }
      
}
</script>
