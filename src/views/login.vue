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
      <el-form-item prop="code">
        <el-input
          v-model="loginForm.code"
          size="large"
          auto-complete="off"
          placeholder="验证码"
          style="width: 63%"
          @keyup.enter="handleLogin"
        >
          <template #prefix>
            <svg-icon icon-class="validCode" class="el-input__icon input-icon" />
          </template>
        </el-input>
        <div class="login-code">
          <img :src="codeUrl" @click="getCode" class="login-code-img" />
        </div>
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
import { ElMessage, FormInstance, FormRules } from 'element-plus'
import useUserStore from '@/store/modules/user.ts'
import { getCodeImg } from '@/api/login';

import { useRouter } from 'vue-router'
const userStore = useUserStore()
const router = useRouter()
// 登录表单内容
const loginForm = reactive({
  username: 'admin',
  password: 'admin123',
  uuid: '',
  code: ''
});
// 登录按钮加载中
const loading = ref(false)
const codeUrl = ref('');

const loginRef = ref<FormInstance>()
// 表单校验规则
const rules = reactive<FormRules>({
  username: [{ required: true, trigger: 'blur', message: '请输入您的账号' }],
  password: [{ required: true, trigger: 'blur', message: '请输入您的密码' }],
  code: [{ required: true, trigger: 'change', message: '请输入验证码' }]
})
/*
  *@description 获取验证码
  *@param {  } []
  *@author 卢少川
  *@return
  *@date 2022/10/27 16:29:08
 */
function getCode() {
  getCodeImg().then((res: any) => {
    codeUrl.value = 'data:image/gif;base64,' + res.img;
    loginForm.uuid = res.uuid;
  });
}
function handleLogin() {
  loginRef.value?.validate(valid => {
    if (valid) {
      loading.value = true
      userStore.login(loginForm).then(() => {
        ElMessage.success('登录成功')
        router.push('/home')
      }).finally(() => {
        loading.value = false
      })
    }
  })
}
getCode();

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
