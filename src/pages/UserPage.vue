<template>
  <template v-if="user">
    <van-row justify="center">
      <van-col span="6" style="padding: 30px 0; "><img :src="user.avatarUrl" alt=""
                                                       style="width: 6rem;border-radius: 50%"></van-col>
    </van-row>

    <van-cell title="用户名" @click="toEdit('username', '用户名', user.username)" :value="user.username"/>
<!--    <van-cell title="账户" :value="user.userAccount"/>-->
<!--    <van-cell title="性别" is-link @click="toEdit('gender', '性别', user.gender)" :value="user.gender === 1 ? '男' : '女'"/>-->
<!--    <van-cell title="电话" is-link @click="toEdit('phone', '电话', user.phone)" :value="user.phone"/>-->
    <van-cell title="邮箱" v-show="user.email" :value="user.email"/>
    <van-cell title="注册时间" :value="moment(user.createTime).format('YYYY-MM-DD HH:mm:ss')"/>
    <van-cell title="修改信息" is-link to="/user/update" />
    <van-cell title="我创建的队伍" is-link to="/user/team/create" />
    <van-cell title="我加入的队伍" is-link to="/user/team/join" />
    <van-button color="linear-gradient(to right, #ff6034, #ee0a24)"  @click="exitLogin" style="width: 90%; margin: 0 auto" block>
      退出登录
    </van-button>
  </template>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {getCurrentUser, userLogout} from "../services/user";
import {showFailToast, showSuccessToast} from "vant";
import moment from "moment";

const user = ref();

const router = useRouter();
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
