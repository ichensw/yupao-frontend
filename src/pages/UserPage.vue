<template>
    <template v-if="user">
        <div class="cover">
            <van-image
                round
                fit="cover"
                width="6rem"
                height="6rem"
                :src="user.avatarUrl"/>
            <div v-if="!user.username">点击登录</div>
            <div v-if="user.username">{{ user.username }}</div>
        </div>
        <van-grid :column-num="3">
            <van-grid-item icon="manager-o" text="个人资料" is-link to="/user/info"/>
            <van-grid-item icon="flag-o" text="创建的队伍" is-link to="/user/team/create"/>
            <van-grid-item icon="friends-o" text="加入的队伍" is-link to="/user/team/join"/>
            <van-grid-item icon="setting-o" text="设置" is-link to="/user/settings"/>
            <van-grid-item icon="question-o" text="关于我们" is-link @click="showFailToast('开发中')"/>
        </van-grid>

        <!--        <van-cell icon="setting-o" title="个人资料" is-link to="/user/team/join"/>-->
        <!--        <van-cell icon="setting-o" title="创建的队伍" is-link to="/user/team/join"/>-->
        <!--        <van-cell icon="setting-o" title="加入的队伍" is-link to="/user/team/join"/>-->
        <!--        <van-cell icon="setting-o" title="设置" is-link to="/user/team/join"/>-->
        <!--        <van-cell icon="phone-o" title="关于我们" is-link to="/user/team/join"/>-->
    </template>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {getCurrentUser, userLogout} from "../services/user";
import {showFailToast, showSuccessToast} from "vant";

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
    if (res?.code === 0) {
        showSuccessToast("退出登陆成功")
        await router.push({
            path: '/user/login'
        })
    }
}
</script>

<style scoped>
.cover {
    background-color: #f03d37;
    padding: 40px;
    text-align: center;
    color: #fff;
}

.user-top-image {
    width: 100%;
    height: 200px;
    border-bottom: 1px solid #eeeeee;
}

</style>
