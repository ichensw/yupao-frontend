<template>
  <van-cell center title="心动模式">
    <template #right-icon>
      <van-switch v-model="isMatchMode" size="24"/>
    </template>
  </van-cell>
  <van-list
      v-model:loading="continueLoading"
      :finished="finished"
      finished-text="没有更多了"
      @load="loadData"
  >
    <user-card-list v-for="user in userList" :user="user" :key="user.userId" :loading="loading"/>
  </van-list>
  <van-back-top style="margin-bottom: 10%; "/>
  <van-empty v-show="!userList.length" description="数据为空"/>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import request from "../plugins/request";
import {showFailToast} from "vant";
import UserCardList from "../components/UserCardList.vue";
import {UserType} from "../models/user";

const isMatchMode = ref<boolean>(false);

const userList = ref([]);
const loading = ref(false);
const continueLoading = ref(false);
const finished = ref(false);
const pageInfo = {pageSize: 8, pageNum: 1}

/**
 * 加载数据
 */
const loadData = async () => {
  let userListData;
  continueLoading.value = true;
  // loading.value = true;
  // 心动模式，根据标签匹配用户
  if (isMatchMode.value) {
    const num = 10;
    userListData = await request.get('/user/match', {
      params: {
        num,
      },
    })
        .then(function (response) {
          console.log('/user/match succeed', response);
          return response?.data;
        })
        .catch(function (error) {
          console.error('/user/match error', error);
          showFailToast('请求失败');
        })
  } else {
    // 普通模式，直接分页查询用户
    userListData = await request.get('/user/recommend', {
      params: {
        pageSize: pageInfo.pageSize,
        pageNum: pageInfo.pageNum++,
      },
    })
        .then(function (response) {
          return response?.data?.records;
        })
        .catch(function (error) {
          showFailToast('请求失败');
        })
  }
  if (userListData) {
    userListData.forEach((user: UserType) => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags);
      }
      userList.value.push(user);
    })

  }
  continueLoading.value = false;
  // loading.value = false;
}

</script>

<style scoped>

</style>
