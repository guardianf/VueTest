<template>
  <el-container class='body'>
    <el-header>
      <el-row align='middle'>
        <el-col :span='1'>
          <el-icon class='el-icon-platform-eleme'></el-icon>
        </el-col>
        <el-col :span='20'>
          <span>饿了吧</span>
        </el-col>
        <el-col :span='3'>
          <el-icon></el-icon>
          <span>{{ userName }}</span>
          <el-dropdown @command='handleCommand'>
            <el-icon class='el-icon-arrow-down'></el-icon>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command='logout'>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width='120px'>
        <el-menu
          class='el-menu-vertical-demo'
          mode='vertical'
          :default-active='$route.path'
          @open='handleOpen'
          router
          menu-trigger='click'
          :unique-opened='true'
          >
          <NavMenu v-for='menu in menus' :menu='menu'></NavMenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import NavMenu from '@/components/NavMenu.vue';

function Capitalize(str) {
  return str.split('').map((item, index) => (index === 0 ? item.toUpperCase() : item)).join('');
}

export default {
  name: 'Home',
  components: {
    NavMenu,
  },
  data() {
    return {
    }
  },
  computed: {
    userName() {
      const name = this.$store.getters.userName;
      return Capitalize(name);
    },
    menus() {
      const routes = this.$router.options.routes
      return routes;
    }
  },
  methods: {
    handleCommand(command) {
      switch (command) {
        case 'logout':
          this.$emit('logout', true);
          break;
        default:

      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="scss" scoped>
.el-header {
    text-align: left;
    padding: 0;
    $height: 60px;
    line-height: $height;
    height: $height;
    .el-icon-platform-eleme {
        font-size: $height;
    }
    .el-row {
        height: $height;
    }
    border-bottom: solid 1px #e6e6e6;
    z-index: 1;
}
.el-aside {
    // background-color: yellow;
    .el-menu {
      height: 100%;
      text-align: left;
    }
    .el-submenu {
    }
}
.el-main {
    // background-color: blue;
}
.body {
    height: 100%;
}
</style>
