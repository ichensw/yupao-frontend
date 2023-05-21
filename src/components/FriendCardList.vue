<template>
    <div @click="toTeamDetail(team)" class="body-card" v-for="(team,index) in teamList" :key="team.teamId">
        <div class="card-img"
             :style="{ background: `no-repeat url(${team.teamImage})`, backgroundSize: '100% 100%' }"></div>
        <div class="card-content">
            <div class="team-info">
                <img class="team-icon" :src="team.joinNum === team.maxNum ? fullTeamIcon : teamIcon"/>
                <!--                <img class="team-icon" :src="team.status "/>-->
                <!--                <span class="team-size">{{ teamSize }}</span>-->
                <span class="team-size">{{ team.joinNum }} / {{ team.maxNum }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {TeamType} from "../models/team";

import teamIcon from "../assets/team-icon.png";
import fullTeamIcon from "../assets/full-team-icon.png";
import {useRoute, useRouter} from "vue-router";

interface FriendCardListProps {
    teamList?: TeamType[],
    status?: number
}

// const props = defineProps<{ user: object, loading: boolean}>()
withDefaults(defineProps<FriendCardListProps>(), {
    // @ts-ignore
    teamList: [] as TeamType[],
    status: 0
});

// const refreshTeamListEmit = defineEmits(['refreshTeamList'])
const router = useRouter();


const toTeamDetail = (team: any) => {
    router.push({
        path: '/team/detail',
        query: {
            team: encodeURIComponent(JSON.stringify(team))
        }
    })
}

</script>
<style scoped>
.body-card {
    float: left;
    margin: 15px 10px;
    display: flex;
    flex-direction: column;
    width: 150px;
    border-radius: 15px;
    box-shadow: 5px 5px 10px #888;
}

.card-img {
    height: 180px;
    width: 100%;
    border-radius: 15px;
}

.card-content {
    display: flex;
    flex-direction: column;
    position: relative;
}

.team-info {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border-radius: 0 0 15px 15px;
}

.team-icon {
    height: 22px;
    margin-top: -5px;
    margin-right: 8px;
}

.team-size {
    font-size: 18px;
    font-weight: bold;
}

</style>
