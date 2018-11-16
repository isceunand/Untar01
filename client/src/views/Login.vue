<template>
    
    
    <form class="box" @submit.prevent="signup">
        <h1>This is Login</h1>
            {{Harusnya_error}}
        <div class="field">
          <label>Email</label>
          <input type="text" name="email" v-model="input.email" :disabled="validating == true">       
        </div> 

        <div class="field">
          <label>Password</label>
          <input type="password" name="password" v-model="input.password" :disabled="validating == true">       
        </div> 

        <div class="field">
          <label>Remember Me</label>
          <input type="checkbox" name="rem_me" v-model="rem_me" >       
        </div> 

        <button class="login-button" :disabled="validating == true">Login</button>
        <br>

        <router-link class="register-link" to="/register">Register Here</router-link> 

        <p  :hide="1==2">Loading.....</p>
    </form>

</template>


<script>
    // import Notification from '@/components/Notification.vue';


 
export default {
      name:'login',

      data(){
            return{
                   input:{
                          email : '',
                          password : ''
                   },
                   rem_me:'',
                   Harusnya_error:'',
                   validating:false,              
                   notification: {
                    message: '',
                    type: '',
                }
                  }
        },
        methods:{
            signup(){
                var self = this;
                if(this.input.password !== "" && this.input.email !=="")
                {
                var auth=this.$parent.$auth
                var request = this.$parent.$user.Login_user(this.input.email,this.input.password)
                this.validating=true;

                request
                  .then(function (response) {
                        console.log(response);
                        //token jwt
                        console.log(response.data.token, '<<<<<<<<<<<<<<')
                        localStorage.setItem('token', response.data.token)
                        auth.setToken(response.data.token);
                        
                   })
                   .catch(function(error){
                       self.Set_Message("Something Went Wrong","error");
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
        }
      
}
</script>
<style scoped>
.box
{
    Border:1px solid black;
}

.box > .login-button
{   
    font-size:1.3em;
    width:20em !important;
}
.box > .login-button:hover
{   
    cursor: pointer;
}


.box > .register-link
{
    font-size:1.2em;
}

</style>
