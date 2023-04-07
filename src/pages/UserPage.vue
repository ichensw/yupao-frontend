<template>
  <template v-if="user">
    <van-row justify="center">
      <van-col span="6" style="padding: 30px 0; "><img :src="user.avatarUrl" alt=""
                                                       style="width: 100px;border-radius: 50%"></van-col>
    </van-row>

    <van-cell title="用户名" is-link @click="toEdit('username', '用户名', user.username)" :value="user.username"/>
    <van-cell title="账户" :value="user.userAccount"/>
    <van-cell title="性别" is-link @click="toEdit('gender', '性别', user.gender)" :value="user.gender === 1 ? '男' : '女'"/>
    <van-cell title="电话" is-link @click="toEdit('phone', '电话', user.phone)" :value="user.phone"/>
    <van-cell title="邮箱" is-link @click="toEdit('email', '邮箱', user.email)" :value="user.email"/>
    <van-cell title="注册时间" :value="moment(user.createTime).format('YYYY-MM-DD HH:mm:ss')"/>
    <van-button color="linear-gradient(to right, #ff6034, #ee0a24)"  @click="exitLogin" style="width: 90%; margin: 0 auto" block>
      退出登录
    </van-button>
  </template>
</template>

<script setup lang="ts">
/*const user = {
  id: 1,
  username: 'meko',
  userAccount: 'meko',
  avatarUrl: 'https://image-bed-ichensw.oss-cn-hangzhou.aliyuncs.com/006VVqOWgy1h3yp0mg9uwj30u00u0gpx.jpg',
  gender: '男',
  phone: '1834454233',
  email: 'meko@qq.com',
  createTime: moment(new Date()).format('YYYY-MM-DD HH:mm:ss') + ''
}*/
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {getCurrentUser, userLogout} from "../services/user";
import {showFailToast, showSuccessToast} from "vant";
import moment from "moment";

const user = ref();

const router = useRouter();
const route = useRoute();
const toEdit = (editKey: string, editName: string, currentValue: string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue
    }
  })
}

onMounted(async () => {
  const currentUser = await getCurrentUser()
  if (currentUser) {
    user.value = currentUser;
    // showSuccessToast("获取用户信息成功")
  } else {
    showFailToast("获取用户信息失败")
  }
})

const exitLogin = async () => {
  // TODO: 退出登录实现
  const res = await userLogout();
  if (res?.code === 0 ) {
    showSuccessToast("退出登陆成功")
    await router.push({
      path: '/user/login'
    })
  }
}
</script>

<style scoped>

</style>