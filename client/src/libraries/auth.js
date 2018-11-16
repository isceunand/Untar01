<<<<<<< HEAD
export default function(Vue) {
  Vue.auth = {
    testConnect() {
      console.log("From Auth");
    },
    setToken(token) {
      localStorage.setItem("token", token);
    },
    getToken() {
      var token = localStorage.getItem("token");
      return token;
    },
    destroyToken() {
      localStorage.removeItem("token");
=======
export default function (Vue){
    Vue.auth={
        testConnect(){
            console.log('From Auth')
        },
        setToken (token,key){
            localStorage.setItem('token',token);
            localStorage.setItem('key',key);
        },
        getToken(){
            var token =localStorage.getItem('token');
            return token;
        },
        getKey(){
            var key =localStorage.getItem('key');
            return key;
        },
        destroyData(){
            localStorage.removeItem('token');
            localStorage.removeItem('key');
        }
>>>>>>> d2a2674a615c7127be66e6e0ecf07d1b52098ddc
    }
  };
  Object.defineProperties(Vue.prototype, {
    $auth: {
      get() {
        return Vue.auth;
      }
    }
  });
}
