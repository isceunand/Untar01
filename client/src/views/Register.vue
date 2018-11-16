<template>
    
<div>

    <form class="box" @submit.prevent="reg_user_Pasien">
        <h1>Register Here Passien</h1>
        {{Harusnya_error}}
        <div class="field">
          <label>First Name</label>
          <input type="text" name="f_name" v-model="input_pasien.f_name" :disabled="validating == true">       
        </div> 
        
        <div class="field">
          <label>Last Name</label>
          <input type="text" name="l_name" v-model="input_pasien.l_name" :disabled="validating == true">       
        </div> 

        <div class="field">
          <label>Email</label>
          <input type="text" name="email" v-model="input_pasien.email"   :disabled="validating == true">       
        </div> 

        <div class="field">
          <label>Password</label>
          <input type="password" name="password" v-model="input_pasien.password"  :disabled="validating == true">       
        </div> 
        
        <div class="field">
          <label>Alamat</label>
          <input type="password" name="alamat" v-model="input_pasien.alamat"  :disabled="validating == true">       
        </div> 

        <button class="login-button">Register</button>
        <br>
    </form>

   <!-- <form class="box" @submit.prevent="reg_user_Dokter">
        <h1>Register Here Passien</h1>
        {{Harusnya_error}}
        <div class="field">
          <label>First Name</label>
          <input type="text" name="f_name" v-model="input_pasien.f_name" :disabled="validating == true">       
        </div> 
        
        <div class="field">
          <label>Last Name</label>
          <input type="text" name="l_name" v-model="input_pasien.l_name" :disabled="validating == true">       
        </div> 

        <div class="field">
          <label>Email</label>
          <input type="text" name="email" v-model="input_pasien.email"   :disabled="validating == true">       
        </div> 

        <div class="field">
          <label>Password</label>
          <input type="password" name="password" v-model="input_pasien.password"  :disabled="validating == true">       
        </div> 
        
        <div class="field">
          <label>Nomor_ijin</label>
          <input type="password" name="alamat" v-model="input_pasien.nomor_ijin"  :disabled="validating == true">       
        </div> 

        <button class="login-button">Register</button>
        <br>
    </form> -->
    

</div>

</template>

<script>

export default {
         name:'register',
      data(){
            return{
                   input_pasien:{f_name : '',
                   l_name : '',
                   email:'',
                   password:''},
                   Harusnya_error:'',
                   validating:false
                  }
        },
        methods:{
            
            reg_user_Dokter(){
                var self = this;
                if(this.input.f_name !== "" && this.input.l_name !=="" && this.input.email !==""&& this.input.password !=="" )
                {
                var request = this.$parent.$user.Reg_user()
                this.validating=true;
                request
                  .then(function (response) {
                        console.log(response);
                        
                   })
                   .catch(function(error){
                     //    console.log(error)
                       self.Set_Message("Fail to register","error");
                       self.validating=false;
                    });
                }
                else
                {
                    self.Set_Message("Fill The Text","error");
                } 
            },
            reg_user_Pasien(){
                var self = this;
                if(this.input_pasien.f_name !== "" && this.input_pasien.l_name !=="" && this.input_pasien.email !==""&& this.input_pasien.password !=="" && this.input_pasien.alamat !== "")
                {
                var request = this.$parent.$user.Reg_user()
                this.validating=true;
                request
                  .then(function (response) {
                        console.log(response);
                        
                   })
                   .catch(function(error){
                     //    console.log(error)
                       self.Set_Message("Fail to register","error");
                       self.validating=false;
                    });
                }
                else
                {
                    self.Set_Message("Fill The Text","error");
                } 
            },
            Set_Message(Message,Status){
                    this.Harusnya_error=Message;
            }
            ,
            
        }
}
</script>
