export default function (Vue){
    Vue.request={
        testConnect(){
            console.log('From Auth')
        },
        Reg_user(){
            return axios.get('/');
        },
        Login_user(){
            return axios.get('/');
        }
    }
    Object.defineProperties(Vue.prototype,{
        $user:{
            get(){
                return Vue.request
            }
        }
    })
}