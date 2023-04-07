<template>
  <div id="teamPage">
    <van-search v-model="searchText" placeholder="搜索队伍" @search="onSearch" />
    <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" class="add-button" type="primary" icon="plus" @click="toAddTeam" style="width: 90%; margin: 0 auto" block/>
    <div style="margin-bottom: 10px" />
    <van-dropdown-menu>
      <van-dropdown-item v-model="active" :options="activeOption" @change="onTabChange"/>
    </van-dropdown-menu>
<!--    <van-tabs v-model:active="active" @change="onTabChange">-->
<!--      <van-tab title="公开" name="public" />-->
<!--      <van-tab title="加密" name="private" />-->
<!--    </van-tabs>-->
    <team-card-list :teamList="teamList" @refreshTeamList="listTeam" />
    <van-empty v-if="teamList?.length < 1" description="数据为空"/>
  </div>
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";
import TeamCardList from "../components/TeamCardList.vue";
import {onMounted, ref} from "vue";
import request from "../plugins/request";
import {showFailToast} from "vant";

const active = ref(0)
const router = useRouter();
const activeOption = [
  { text: '公开', value: 0 },
  { text: '私有', value: 1 },
  { text: '加密', value: 2 },
];

/**
 * 切换查询状态
 * @param name
 */
const onTabChange = () => {
  listTeam(active.value);
}

// 跳转到创建队伍页
const toAddTeam = () => {
  router.push({
    path: "/team/add"
  })
}

const teamList = ref([]);

/**
 * 搜索队伍
 * @param val
 * @param status
 * @returns {Promise<void>}
 */
const listTeam = async (status = 0) => {
  const res = await request.get("/team/list", {
    params: {
      pageNum: 1,
      status,
    },
  });
  if (res?.code === 0) {
    teamList.value = res.data;
    console.log("teamList.value: ", teamList.value);
  } else {
    showFailToast('加载队伍失败，请刷新重试');
  }
}

// 页面加载时只触发一次
onMounted( () => {
  listTeam();
})

const onSearch = (val) => {
  listTeam(val);
};

</script>

<style scoped>
#teamPage {

}
</style>
