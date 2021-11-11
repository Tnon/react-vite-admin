/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2021-11-08 20:45:27
 * @LastEditTime: 2021-11-11 14:54:48
 */
import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { UserState, UserInfo } from '@/interface/user';
import { LoginParams } from '@/api/type'
import { getUserInfo, login } from "@/api/user";

const initialState: UserState = {
    isLogin: false,
    token: localStorage.getItem('token'),
    userInfo: {

    }

}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<Partial<UserState>>) => {
            const { token } = action.payload;
            if (token !== state.token) {
                localStorage.setItem('token', action.payload.token || '');
            }
            Object.assign(state, action.payload);
        },
        setUserInfo: (state, action: PayloadAction<UserInfo>) => {
            Object.assign(state.userInfo, action.payload);
        },

    }
})
export const { setToken, setUserInfo } = userSlice.actions;
export default userSlice.reducer

export const loginAsync = (payload: LoginParams) => {
    return async (dispatch: Dispatch) => {
        try {
            // const { data } = await login(payload);
            const data = { token: 'dscvfvbiudjfnsdkfbnfdjhbbdfh323412vsdfv' }
            localStorage.setItem('token', data.token);
            dispatch(
                setToken({
                    isLogin: true,
                    token: data.token
                })
            );
            return true;
        } catch (error) {
            return false;
        }
    };
};
// 初始化用户及权限信息
export const GetUserInfo = () => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await getUserInfo();
            dispatch(setUserInfo(res.data));
        } catch (error) {
            return error as any;
        }
    };
};
