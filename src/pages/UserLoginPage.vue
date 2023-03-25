<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="userAccount"
          name="userAccount"
          label="账号"
          placeholder="请输入账号"
          :rules="[{ required: true, message: '请填写用户名' }]"
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
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

</template>

<script setup>

import {useRouter} from "vue-router";
import {ref} from "vue";
import {userLogin} from "../services/user.ts";
import {showFailToast, showSuccessToast} from "vant";

const router = useRouter();

const userAccount = ref('');
const userPassword = ref('');
const onSubmit = async () => {
  const res = await userLogin({
    userAccount: userAccount.value,
    userPassword: userPassword.value
  })

  if (res.code === 0 && res.data) {
    showSuccessToast("登陆成功")
    await router.replace('/')
  } else {
    showFailToast("登录失败")
  }
};

</script>

<style scoped>

</style>