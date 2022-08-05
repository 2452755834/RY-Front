<template>

  <div class="login-card__container fullheight">
    <el-card shadow="always" class="login-card">
      <div  class="totem-div">
        <div class="logo">
          <span
            style="font-size: 24px;color: #fff;display: inline-block;"
          >{{ systemName }}</span>
        </div>
        <div class="left-title">
          一站式<br />
          精准、快速、便捷<br />
          服务平台
        </div>
        <div class="en-title">
          ACCURATE&emsp;FAST&emsp;AND&emsp;CONVENIENT
        </div>
      </div>
      <div class="login-div">
        <el-form
          style="margin: 25px 20px"
          :model="loginForm"
          ref="loginFormCom"
        >
          <el-form-item prop="account" label="">
            <el-input
              clearable
              v-model="loginForm.account"
              placeholder="请输入账号"
              maxlength="36"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password" label="">
            <el-input
              show-password
              clearable
              @keyup.enter="submitForm"
              v-model="loginForm.password"
              placeholder="请输入密码"
              maxlength="36"
            ></el-input>
          </el-form-item>
          <div class="btn_wrap">
            <el-button
              class="login_btn"
              type="primary"
              @click="submitForm"
              :loading="loading"
            >
              <span style="font-size:20px">登&nbsp;&nbsp;录</span>
            </el-button>
          </div>

        </el-form>
      </div>

    </el-card>
  </div>

</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import loginApi from '@/api/login'
import commonApi from '@/api/common'
import { Base64 } from 'js-base64'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup(props, ctx) {
    const loading = ref(false)
    const systemName = ref('')
    const loginForm = reactive({
      account: '',
      password: ''
    })
    const router = useRouter()
    /*
      *@Description: 获取平台信息
      *@author: 卢少川
      *@param: {  } []  =>
      *@return:
      *@Date: 2022-08-05 16:48:52
     */
    const getPlatformInfo = () => {
      const data = {
        code: 'platform'
      }
      commonApi.getTenantByCode(data).then((res:any) => {
        systemName.value = res.name
      })
    }
    onMounted(() => {
      getPlatformInfo()
      console.log(useRouter());
    })
    /*
      *@Description: 提交表单登录
      *@author: 卢少川
      *@param: {  } []  =>
      *@return:
      *@Date: 2022-08-05 16:18:28
     */
    const submitForm = () => {
      const data = {
        account: loginForm.account,
        password: Base64.encode(loginForm.password)
      }
      loginApi.login(data).then(res => {
        router.push({
          path: '/home'
        })
      })
    }
    return {
      systemName,
      loginForm,
      loading,
      submitForm,
      getPlatformInfo
    }
  }
})
</script>
<style lang="scss" scoped>
.login-card__container {
  height: 100%;
  background: url('~@/assets/img/bg.jpg') no-repeat center/cover;
  font: 12px/1.14 arial, \5b8b\4f53;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -o-box;
  display: box;
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  ::v-deep input {
    height: 46px;
    /*margin-bottom: 4px;*/
    border-radius: 0px;
    border-bottom: 1px #c8c8c8 solid;
    border-top: none;
    border-right: none;
    border-left: none;
  }
  ::v-deep .el-form-item__error {
    margin: 4px;
  }
  .mes-tip {
    color: #3b9cf5 !important;
    background: white !important;
    border: 0px !important;
  }
  ::v-deep .btn_code {
    height: 36px;
    font-size: 14px;
  }
}

.logo-container {
  margin-top: 10px;
  display: inline-block;
  margin-left: 30px;
}

.logo-container > i.icon-hotent-H-c {
  font-size: 36px;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-right: -5px;
}

.logo-container > i.icon-hotent-H-ie {
  font-size: 36px;
  background-clip: text;
  -webkit-background-clip: text;
  margin-right: -5px;
}

.logo-container:hover > i.icon-hotent-H-c {
}

.logo-container > span.pre-word {
  font-size: 26px;
  font-weight: bold;
}

.logo-container > span.tail-word {
  font-size: 24px;
  font-weight: bold;
  color: #bdbfc2;
}

.logo-container > .logo-divider {
  margin: 0 25px 11px 25px;
  height: 18px;
}

.logo-container > .system-name {
  color: #666;
  font-weight: bold;
  font-size: 16px;
}

.site-div {
  float: right;

  margin-top: 25px;
  margin-right: 40px;
}

.site-div > a {
  color: #5b9dff;
  font-size: 12px;
  text-decoration: none;
}

.site-div > a > i {
  font-weight: bold;
  margin-right: 5px;
}

.login-card {
  border: 0px;
  width: 1280px;
  height: 550px;
  /*border-radius: 0px 8px 8px 0px;*/
  background: transparent;
  /*width: 600px;*/
  /*height: 320px;*/
  ::v-deep .el-card__body {
    width: 1280px;
    display: flex;

  }
}

.totem-div {
  padding: 30px !important;
  width: 800px !important;
  height: 550px !important;
  -moz-box-shadow: 2px 2px 5px #999;
  -webkit-box-shadow: 2px 2px 5px #999;
  box-shadow: 2px 2px 5px #999;
  box-sizing: border-box;
  .logo {
    display: flex;
    align-items: center;
  }
  .left-title {
    font-size: 40px;
    line-height: 60px;
    color: #fff;
    font-weight: bold;
    padding: 90px 0 0 90px;
  }
  .en-title {
    font-size: 16px;
    color: #fff;
    margin: 22px 0 0 90px;
  }
}

.login-div {
  padding: 50px 60px !important;
  background: white;
  width: 480px;
  height: 550px;
  float: right;
  border-radius: 5px;
  box-sizing: border-box;
}

.welcome-title {
  margin-bottom: 45px;
  position: relative;
  font-size: 40px;
  color: #333;
  text-align: center;

  /*margin-top: 20px;*/
  /*font-size: 18px;*/
  /*margin-bottom: 20px;*/
}

.copyright {
  color: #ffffff;
  font-size: 13px;
  text-align: center;
}

.login-card ::v-deep div {
  padding: 0;
}

.login-card ::v-deep .el-alert__content {
  padding: 5px;
}
.mobile_img_wrap {
  display: none;
  position: absolute;
  top: 0;
  right: 46px;
  .img_item {
    width: 160px;
  }
}
.btn_wrap {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.mobile_btn {
  position: relative;
  margin-top: 0px;
  margin-right: 20px;
  &:hover {
    cursor: pointer;
    color: #409eff;
    .mobile_img_wrap {
      display: block;
    }
  }
}
.login_btn {
  /*margin: 0 10px 0 20px;*/
  margin-top: 30px;
  width: 100%;
  font-size: 20px;
}
.lang_change {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 27px;
  align-items: flex-end;
}
</style>
