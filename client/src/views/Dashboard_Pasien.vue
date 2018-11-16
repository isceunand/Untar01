<template>

<div>
    <modal
      v-show="isModalVisible"
      @close="closeModal"
    />
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

import modal from '@/components/modal.vue';


export default {
      name:'dashboard_pasien',
          components: {
                  modal,
          },
      data(){
            return{
                  infodokter:{
                     name:'',/** Testing */
                     user_id:'',
                     specialist:''
                  },
                  order_info:{
                        date:'',
                        time:'',
                        message:'',
                  },
                  user_info:{
                        name:'',/** dari Jwt */
                        user_id:''
                  },
                  validating:false,
                  isModalVisible: false,
            }
        },
        methods:{
              Proses_daftar(){
                    var request=this.$parent.$user;
                    var Get_user=this.$parent.$auth;
                    var decode_data=this.$jwt.decode(Get_user.getToken(),Get_user.getKey());
                    
                    this.user_info.name=decode_data.name;
                    this.user_info.user_id=decode_data.user_id;
                        this.isModalVisible = true;
                  //   request.Daftar_jadwal(this.infodokter,this.user_info,this.order_info)
                  //       .then(function (response) {
                  //       console.log(response);
                              
                        
                  //        })
                  //        .catch(function(error){
                        
                              
                  //       });
              }
      ,showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }

        }
      
}
</script>
