import request from "../plugins/request";
import {UserType} from "../models/user";

const tagsApi = {
    searchUser: '/user/search/tags'
}

export function SearchUserByTags(parameter: UserType, pageSize: number, pageNum: number) {
    return request({
        url: tagsApi.searchUser,
        method: 'get',
        params: {
            tagNameList: parameter,
            pageSize: pageSize,
            pageNum: pageNum
        }
    })
}