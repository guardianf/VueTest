<template lang="html">
  <el-form class='box-card' :rules='rules' ref='user' :model='user'>
    <div class='title'>饿了吧</div>
    <el-form-item class='user' prop='name'>
      <input v-model='user.name'/>
    </el-form-item>
    <el-form-item class='pwd' prop='pwd'>
      <input v-model='user.pwd'/>
    </el-form-item>
    <el-checkbox large v-model='remembered' @click='remember'>记住用户名密码</el-checkbox>
    <div name='button' type="button" @click="toLogin('user')">登 录</div>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      remembered: false,
      user: {
        name: '',
        pwd: '',
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur',
          }, {
            min: 3,
            max: 5,
            message: '长度在3-5个字符',
            trigger: 'blur',
          },
        ],
        pwd: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    toLogin(user) {
      this.$refs[user].validate((valid) => {
        if (valid) {
          let ret = false;
          if (this.user.name === 'admin' && this.user.pwd === '111111') {
            ret = true;
          }
          if (this.remembered) {
            this.$store.commit('storeUser', this.user)
          } else {
            this.$store.commit('updateUser', this.user)
          }
          this.$emit('login', ret);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    remember() {
      this.remembered = !this.remembered;
    },
  },
};
</script>

<style lang="scss" scoped>
.box-card {
    width: 389px;
    height: 392px;
    position: relative;
    & > * {
        position: absolute;
    }
    .title {
        height: 100px;
        width: 100%;
        line-height: 100px;
        font-size: 40px;
    }
    @function top($index) {
        @return 100px + $index * 74px + 18px;
    }
    input {
        background-color: transparent;
        $height: 36px;
        height: $height;
        line-height: $height;
        border: none;
        outline: none;
        width: 260px;
        &.user {
            top: top(0);
        }
        &.pwd {
            top: top(1);
        }
    }
    .el-form-item {
        left: 32px;
        padding-left: 60px;
        @extend input;
    }
    .el-checkbox {
        top: top(2);
        left: 32px;
    }
    [name=button] {
        top: 304px;
        left: 32px;
        $height: 40px;
        height: $height;
        line-height: $height;
        color: #fff;
        width: 320px;
        cursor: pointer;
    }
}
</style>
