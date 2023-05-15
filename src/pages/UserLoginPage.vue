<template>
  <div class="wrapper-div">
    <div class="login-form-div">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
              v-model="userAccount"
              name="userAccount"
              label="账号"
              placeholder="账号"
              :rules="[{ required: true, message: '请填写账号' }]"
          />
          <van-field
              v-model="userPassword"
              type="password"
              name="userPassword"
              label="密码"
              placeholder="请输入密码"
              :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button round block :disabled="isEnableBtn" type="primary" native-type="submit">
            登陆
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup lang="ts">

import {useRoute} from "vue-router";
import {ref} from "vue";
// @ts-ignore
import {userLogin} from "../services/user.ts";
import {showFailToast, showSuccessToast} from "vant";

const route = useRoute();

const userAccount = ref('');
const userPassword = ref('');
const isEnableBtn = ref(true);
const onSubmit = async () => {
  const res = await userLogin({
    userAccount: userAccount.value,
    userPassword: userPassword.value
  })

  if (res.code === 0 && res.data) {
    showSuccessToast("登陆成功")
    // 跳转到之前的页面
    window.location.href = route.query?.redirect as string ?? '/';
  } else {
    showFailToast("登录失败")
  }
};

</script>

<style scoped>
.wrapper-div {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #eef0f3;
}
.login-form-div {
  width: 100%;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login-form {
  position: absolute;
  top: 50%;
}

</style>
