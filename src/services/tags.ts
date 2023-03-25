import request from "../plugins/request";
import {UserType} from "../modules/user";

const tagsApi = {
    searchUser: '/user/search/tags'
}

export function SearchUserByTags(parameter: UserType) {
    return request({
        url: tagsApi.searchUser,
        method: 'get',
        params: {
            tagNameList: parameter
        }
    })
}