import request from '../plugins/request';
import {UserType} from "../models/user";
import {getCurrentUserState, setCurrentUserState} from "../states/user";

const userApi = {
    currentUser: '/user/current',
    updateUser: '/user/update',
    userLogin: '/user/login',
}

export function userLogin(parameter: UserType) {
    return request({
        url: userApi.userLogin,
        method: 'post',
        data: parameter
    })
}

export async function getCurrentUser() {
    // 两种方案：1.拿缓存，需要写更新缓存代码。 2.不拿缓存，直接获取后端
    // const currentUser = getCurrentUserState()
    // // 存在，直接返回
    // if (currentUser) {
    //     return currentUser
    // }

    // 不存在，从后端获取
    const res = await request.get(userApi.currentUser);
    // @ts-ignore
    if (res.code === 0) {
        setCurrentUserState(res.data);
        return res.data
    }
}

/**
 * 修改用户信息
 * @param parameter
 * @returns {Promise<*>}
 */
export function updateUser(parameter: UserType) {
    return request({
        url: userApi.updateUser,
        method: 'post',
        data: parameter
    })
}