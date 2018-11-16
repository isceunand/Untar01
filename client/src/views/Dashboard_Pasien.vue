<template>

<div>
      <h2>DashBoard Pasien</h2>

      <form @submit.prevent="Proses_daftar">
      <h3>Testing Daftar</h3>


      <div class="field">
          <label>Tanggal</label>
          <input type="date" name="tanggal" v-model="order_info.date" :disabled="validating == true">       
      </div> 
      <div class="field">
          <label>Waktu</label>
          <input type="time" name="waktu" v-model="order_info.time" :disabled="validating == true">       
      </div> 
      <div class="field">
          <label>Keluhan</label>
          <textarea  name="keluhan" v-model="order_info.message" :disabled="validating == true">   
          </textarea>    
      </div> 

      <button :disabled="validating == true">Daftar</button>
      </form>

</div>

</template>
<script>
export default {
      name:'dashboard_pasien',
      data(){
            return{
                  infodokter:{
                     name:'',/** Testing */
                     user_id:'',
                     specialist:''
                  },
                  user_info:{
                        name:'',/** dari Jwt */
                        user_id:''
                  },
                  order_info:{
                        date:'',
                        time:'',
                        message:'',
                  },
                  validating:false
            }
        },
        methods:{
              Proses_daftar(){
                    var request=this.$parent.$user;
                    var Get_user=this.$parent.$auth;

                    
                    this.user_info.name.user_id=Get_user;

                    request.Daftar_jadwal(this.infodokter,this.user_info,this.order_info)
                        .then(function (response) {
                        console.log(response);
                              
                        
                         })
                         .catch(function(error){
                        
                              
                        });
              }
        }
      
}
</script>
