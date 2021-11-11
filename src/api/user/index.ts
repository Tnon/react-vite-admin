/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2021-11-09 10:08:30
 * @LastEditTime: 2021-11-09 10:37:18
 */
import { request, BaseResponse } from '@/axios';
import { LoginParams } from '@/api/type'
import { UserInfo } from '@/interface/user';
enum Api {
    login = '/api/login',
    current = '/api/admin/users/current_user',
}
/**
 * @description: 用户登录
 */
export function login(params: LoginParams) {
    return request<BaseResponse<any>>({
        url: Api.login,
        method: 'POST',
        params,
    }, {
        successMsg: '登录成功'
    });
}

/**
 * @description: 获取用户信息
 */
export function getUserInfo() {
    return request<BaseResponse<UserInfo>>({
        url: Api.current,
        method: 'GET',
    });
}