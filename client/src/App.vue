<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  // var pusher = new Pusher('448b3467356a673a5866', {
  //     cluster: 'ap1',
  //     forceTLS: true
  //   });

  //   var channel = pusher.subscribe('my-channel');
  //   channel.bind('my-event', function(data) {
  //     alert(JSON.stringify(data));
  //   });
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
