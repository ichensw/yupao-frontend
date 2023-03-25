<template>
  <user-card-list :user-list="userList" />

  <van-empty v-if="!userList || userList.length < 1" description="数据为空"/>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {showFailToast, showSuccessToast} from "vant";
import request from "../plugins/request";
import UserCardList from "../components/UserCardList.vue";

let userList = ref([])

onMounted(async () => {
  const userListData = await request.get('user/recommend', {
    params: {
      pageSize: 8,
      pageNum: 1
    }
  })
      .then((response) => {
        console.log('/user/recommend succeed', response);
        showSuccessToast("请求成功")
        return response.data?.records
      })
      .catch(function (error) {
        console.log('/user/search/tags succeed', error);
        showFailToast("请求失败")
      });

  if (userListData) {
    userListData.forEach(user => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags)
      }
    })
    userList.value = userListData
  }
})


</script>

<style lang="scss" scoped>
</style>