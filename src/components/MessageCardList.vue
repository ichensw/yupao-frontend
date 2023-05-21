<template>
    <div class="card-message">
        <van-image
                style="position: relative;display: block; padding: 10px; "
                round
                width="4rem"
                height="4rem"
                src="https://image-bed-ichensw.oss-cn-hangzhou.aliyuncs.com/006VVqOWgy1h4loz93bu9j30b40b4di4.jpg"
                alt=""/>
        <div class="card-message-text" @click="toMessagePage">
            <div class="card-message-name">张三</div>
            <div class="card-message-content">今天有一条好消息告诉你</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {UserType} from "../models/user";
import {useRouter} from "vue-router";


const router = useRouter();

interface UserCardListProps {
    user: UserType,
    loading: boolean;
}

// const props = defineProps<{ user: object, loading: boolean}>()
withDefaults(defineProps<UserCardListProps>(), {
    user: undefined,
    loading: true
});


const toMessagePage = () => {
    router.push({
        name: "",
        query: {

        }
    })
}
</script>

<style scoped>

</style>
