<template>
  <van-nav-bar
      title="伙伴匹配系统"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight">
    <template #right>
      <van-icon name="search" size="18"/>
    </template>
  </van-nav-bar>

  <div id="content">
    <router-view/>
  </div>

  <van-tabbar v-model="active" @change="onChange" route>
    <van-tabbar-item to="/" icon="home-o" replace name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/team" icon="search" replace  name="team">队伍</van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o" replace  name="user">个人</van-tabbar-item>
  </van-tabbar>


</template>

<script setup>
import {ref} from "vue";
import {showToast} from "vant";
import {useRouter} from "vue-router";

const router = useRouter()
const onClickLeft = () => router.back();
const onClickRight = () => router.push({ path: '/search'});

const active = ref('index');
const onChange = (index) => showToast({
  message: `底部展示 ${index}`,
  position: 'bottom',
});

</script>

<style lang="scss" scoped>
#content {
  margin-bottom: 20%;
}
</style>