import request from "../plugins/request";
import {JoinTeamType} from "../models/team";

const teamApi = {
    joinTeam: "/team/join",
    listMyJoinTeam: "/team/list/my/join",
    getTeamById: "/team/get",
}


export function joinTeam(parameter: JoinTeamType) {
    return request({
        url: teamApi.joinTeam,
        method: 'post',
        data: parameter
    })
}

export function listMyJoinTeam(searchText: string) {
    return request({
        url: teamApi.listMyJoinTeam,
        method: 'get',
        params: {
            searchText
        }
    })
}

export function getTeamById(id: string) {
    return request({
        url: teamApi.getTeamById,
        method: 'get',
        params: {
            id
        }
    })
}

