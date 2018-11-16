<<<<<<< HEAD
export default function(Vue) {
  Vue.request = {
    testConnect() {
      console.log("From Auth");
    },
    Reg_user() {
      return axios.get("/");
    },
    Login_user(email, password) {
      return axios.post("/patients/login", {
        email: email,
        password: password
      });
=======
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
>>>>>>> d2a2674a615c7127be66e6e0ecf07d1b52098ddc
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
