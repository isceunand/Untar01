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
