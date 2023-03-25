<template>
  <user-card-list :user-list="userList" />

  <van-empty v-if="!userList || userList.length < 1" description="暂无该标签的小伙伴"/>
</template>

<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import {showFailToast, showSuccessToast} from "vant";
import {SearchUserByTags} from "../services/tags.ts";
import UserCardList from "../components/UserCardList.vue";

const route = useRoute();
let userList = ref([])
const {tags} = route.query


onMounted(async () => {
  const userListData = await SearchUserByTags(tags)
      .then((response) => {
        console.log('/user/search/tags succeed', response);
        showSuccessToast("请求成功")
        return response.data
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