<template>
  <div class="about">
    <h1>This is an p1 page</h1>
    <el-button v-model='role' @click="updateRole('manage')">管理员</el-button>
    <el-button v-model='role' @click="updateRole('user')">用户</el-button>
    <el-button v-model='role' @click="updateRole('limit')">受限用户</el-button>
    <el-table :data='listData'>
      <el-table-column prop='index' label='序号'></el-table-column>
      <el-table-column prop='area' label='地区'></el-table-column>
      <el-table-column prop='new' label='新增人数'></el-table-column>
      <el-table-column v-if="role !== 'user'" prop='dead' label='死亡人数'></el-table-column>
      <el-table-column v-if="role !== 'limit'" prop='confirm' label='确认人数'></el-table-column>
      <el-table-column prop='sum' label='累计人数'></el-table-column>
      <el-table-column fixed='right' label='操作'>
        <template slot-scope='scope'>
          <el-button type='text' size='small'>查看</el-button>
          <el-button type='text' size='small'>默哀</el-button>
          <el-button type='text' size='small'>发送消息</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'tableTest',
  data() {
    return {
      role: 'manage',
      listData: []
    }
  },
  created() {
    this.$axios.get('covid19').then(res => {
      this.listData = res.data.list;
    })
  },
  methods: {
    updateRole(role) {
      this.role = role
    }
  }
}
</script>

<style lang='sass' scoped>

</style>
