<template lang="html">
    <!-- <el-image src='../assets/login/banner.png'></el-image> -->
    <el-container class='login'>
      <el-main>
        <img src='../assets/login/banner.png' class='login_banner'/>
        <el-card body-style='padding: 0 30px;' shadow='never'>
          <LoginForm @login='login'></LoginForm>
        </el-card>
      </el-main>
      <el-footer>
        <p>XOR Media Copyright 2016. All Rights Reserved</p>
      </el-footer>
    </el-container>

</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
  components: { LoginForm },
  data() {
    return {
      isCorrect: false,
    };
  },
  methods: {
    login(res) {
      this.isCorrect = res;
      if (!this.isCorrect) {
        this.$message({
          message: '用户名密码不正确',
          type: 'error',
        })
      }
      this.$emit('login', res);
    },
  },
};
</script>

<style lang="scss" scoped>
  .login {
    height: 100%;
    width: 100%;
    background-color: #2d2d2d;
    color: #fff;
    .el-main {
      padding: 0;
      & > * {
        position: absolute;
      }
      .login_banner {
        top: calc((100% - 299px) /2);
        left: 0px;
      }
      .el-card {
        width: 450px;
        height: 394px;
        background: {
          image: url('../assets/login/form.png');
          color: transparent;
          position: center;
        };
        border: 0;
        top: calc((100% - 450px) / 2 + 30px);
        left: calc((100% - 450px) / 2 + 180px);
      }
    }
  }
</style>
