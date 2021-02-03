<template>
<div id="app">
  <Login @login='login' v-if='!logined'></Login>
  <Home v-else @logout='logout'></Home>
  <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
</div>
</template>
<script type="text/javascript">
import Login from './views/Login.vue';
import Home from './views/Home.vue';

export default {
  components: {
    Home,
    Login
  },
  created() {
    let ret = false;
    const {
      userName = ''
    } = this.$store.getters;
    if (userName !== '') {
      ret = true;
    }
    this.logined = ret;
  },
  data() {
    return {
      logined: false,
    }
  },
  methods: {
    login(success) {
      this.logined = success;
    },
    logout(isLogout) {
      if (isLogout) {
        this.$store.commit('updateUser', {name:''});
        this.logined = false;
      }
    }
  },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
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
