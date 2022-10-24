<template>
  <div class="login-wrapper">
    <el-form
      :model="loginForm"
      :rules="rules"
      class="login-form"
      ref="loginRef"
    >
      <h3>欢迎登陆</h3>
      <el-form-item prop="username">
        <el-input size="large" v-model="loginForm.username" placeholder="请输入账号">
          <template #prefix>
            <svg-icon icon-class="user"></svg-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          size="large"
          v-model="loginForm.password"
          placeholder="请输入密码"
          auto-complete="off"
          @keyup.enter="handleLogin"
        >
          <template #prefix>
            <svg-icon icon-class="password"></svg-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button
          block
          type="primary"
          :loading="loading"
          @click.prevent="handleLogin"
          size="large"
          style="width: 100%;"
        >登录</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus'
// 登录表单内容
const loginForm = reactive({
  username: 'admin',
  password: 'admin123456'
});
// 登录按钮加载中
const loading = ref(false)
const loginRef = ref<FormInstance>()
// 表单校验规则
const rules = reactive<FormRules>({
  username: [{ required: true, trigger: 'blur', message: '请输入您的账号' }],
  password: [{ required: true, trigger: 'blur', message: '请输入您的密码' }]
  // code: [{ required: true, trigger: 'change', message: '请输入验证码' }],
})
function handleLogin() {
loginRef.value?.validate(valid => {
  if (valid) {
    loading.value = true
  }
})
}
</script>
<style lang="scss" scoped>
.login-wrapper {
  height: 100%;
  background: url('~@/assets/img/login-background.jpg') center/cover;
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
