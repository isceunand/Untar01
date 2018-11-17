export default function(Vue) {
  Vue.auth = {
    testConnect() {
      console.log("From Auth");
    },
    setToken(token, key) {
      localStorage.setItem("token", token);
      localStorage.setItem("key", key);
    },
    getToken() {
      var token = localStorage.getItem("token");
      return token;
    },
    getKey() {
      var key = localStorage.getItem("key");
      return key;
    },
    destroyData() {
      localStorage.removeItem("token");
      localStorage.removeItem("key");
    }
  };
}
Object.defineProperties(Vue.prototype, {
  $auth: {
    get() {
      return Vue.auth;
    }
  }
});
