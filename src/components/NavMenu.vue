<template lang="html">
  <div>
    <el-submenu v-if='hasChild' :index='menuIndex'>
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{ menu.name }}</span>
      </template>
      <el-menu-item-group>
        <NavMenu v-for='child in menus' :menu='child'></NavMenu>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item v-else :index='menuIndex' :route='menu'>
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{ menu.name }}</span>
        <!-- <router-link :to='menu.path'>{{ menu.name }}</router-link> -->
      </template>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  props: ['menu'],
  computed: {
    menus() {
      return this.menu.children;
    },
    hasChild() {
      return this.menu.children && this.menu.children.length > 0;
    },
    menuIndex() {
      // return String(this.menu.meta.index + 1);
      return this.menu.path;
    }
  },
}
</script>

<style lang="css" scoped>
</style>
