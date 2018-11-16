export default function (Vue){
    Vue.auth={
        testConnect(){
            console.log('From Auth')
        },
        setToken (token){
            localStorage.setItem('token',token);
        },
        getToken(){
            var token =localStorage.getItem('token');
            return token;
        },
        destroyToken(){
            localStorage.removeItem('token');
        }
    }
    Object.defineProperties(Vue.prototype,{
        $auth:{
            get(){
                return Vue.auth
            }
        }
    })
}
