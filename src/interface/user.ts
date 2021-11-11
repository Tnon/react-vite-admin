/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2021-11-08 20:47:59
 * @LastEditTime: 2021-11-11 14:54:38
 */
export interface UserInfo {
    id: number
    name: string
    email: string
    head_image: string
    telephone: string
    mobile: string
    roles: string
    last_logout_at: string
    created_at: string
    u_type: number
}
export type User_Info = Partial<UserInfo>
export interface UserState {
    token: string | null
    isLogin: boolean
    userInfo: User_Info
}