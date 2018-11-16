export default function (Vue){
    Vue.request={
        testConnect(){
            console.log('From Auth')
        },
        Reg_user(){
            return axios.post('/');
        },
        Login_user(email,password){
            return axios.post('/',{email:email,password:password});
        },
        Daftar_jadwal(infodokter,user_info,order_info){
            return axios.post('/',{info_dokter:infodokter,info_user:user_info,info_order:order_info});
        }
    }
  };
  Object.defineProperties(Vue.prototype, {
    $user: {
      get() {
        return Vue.request;
      }
    }
  });
}
