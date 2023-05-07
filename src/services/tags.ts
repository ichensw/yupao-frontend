import request from "../plugins/request";
import {UserType} from "../models/user";
import {LocationQueryValue} from "vue-router";

const tagsApi = {
    searchUser: '/user/search/tags'
}

export function SearchUserByTags(parameter: string | LocationQueryValue[], username: string | LocationQueryValue[], pageSize: number, pageNum: number) {
    return request({
        url: tagsApi.searchUser,
        method: 'get',
        params: {
            tagNameList: parameter,
            username: username,
            pageSize: pageSize,
            pageNum: pageNum
        }
    })
}
