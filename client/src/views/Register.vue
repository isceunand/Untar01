<template>
    

    <form class="box" @submit.prevent="reg_user">
        <h1>Register Here</h1>
        {{Harusnya_error}}
        <div class="field">
          <label>First Name</label>
          <input type="text" name="f_name" v-model="input.f_name" :disabled="validating == true">       
        </div> 
        
        <div class="field">
          <label>Last Name</label>
          <input type="text" name="l_name" v-model="input.l_name" :disabled="validating == true">       
        </div> 

        <div class="field">
          <label>Email</label>
          <input type="text" name="email" v-model="input.email"   :disabled="validating == true">       
        </div> 

        <div class="field">
          <label>Password</label>
          <input type="password" name="password" v-model="input.password"  :disabled="validating == true">       
        </div> 
        
        <button class="login-button">Register</button>
        <br>

        
    </form>

</template>

<script>

export default {
         name:'register',
      data(){
            return{
                   input:{f_name : '',
                   l_name : '',
                   email:'',
                   password:''},
                   Harusnya_error:'',
                   validating:false
                  }
        },
        methods:{
            
            reg_user(){
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
            Set_Message(Message,Status){
                    this.Harusnya_error=Message;
            }
            ,
            
        }
}
</script>
