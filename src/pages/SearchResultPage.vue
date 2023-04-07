<template>
  <van-list
      v-model:loading="continueLoading"
      :finished="finished"
      finished-text="没有更多了"
      @load="loadData"
  >
    <user-card-list v-for="user in userList" :user="user" :key="user.userId" :loading="loading"/>
  </van-list>
  <van-back-top />
  <van-back-top style="margin-bottom: 10%"/>
  <van-empty v-if="!userList || userList.length < 1" description="暂无该标签的小伙伴"/>
</template>

<script setup>
import {useRoute} from "vue-router";
import {ref} from "vue";
import {showFailToast} from "vant";
import {SearchUserByTags} from "../services/tags.ts";
import UserCardList from "../components/UserCardList.vue";

const route = useRoute();
const userList = ref([])
const continueLoading = ref(false);
const loading = ref(false);
const finished = ref(false);
const {tags} = route.query
let pageInfo = { pageSize: 8, pageNum: 1};

const loadData = async () => {
  continueLoading.value = true;
  const userListData = await SearchUserByTags(tags, pageInfo.pageSize, pageInfo.pageNum++)
      .then((response) => {
        console.log('/user/search/tags succeed', response);
        return response?.data?.records;
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
      userList.value.push(user);
    })
  }
  continueLoading.value = false;
}
// onMounted(
// )


</script>

<style lang="scss" scoped>
</style>