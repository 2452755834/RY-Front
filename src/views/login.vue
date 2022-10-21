<template>
  <div class="login-wrapper">
    <el-form :model="loginForm" class="login-form">
      <h3>欢迎登陆</h3>
      <el-form-item prop="username">
        <el-input size="large" v-model="loginForm.username" placeholder="请输入账号">
          <template #prefix>
            <svg-icon icon-class="user"></svg-icon>
          </template>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, reactive } from 'vue';

const loginForm = reactive({
  username: 'admin',
  password: 'admin123456'
})
</script>
<style lang="scss" scoped>
.login-wrapper {
  height: 100%;
  // background: url('~@/assets/img/login-background.jpg') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-form {
    border-radius: 6px;
    background: #fff;
    width: 400px;
    padding: 25px 25px 5px 25px;

  }

  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 0px;
  }
}
</style>
