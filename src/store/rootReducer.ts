/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2021-11-08 20:44:39
 * @LastEditTime: 2021-11-08 20:44:39
 */
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './modules/user';

const rootReducer = combineReducers({
    user: userReducer
});

export default rootReducer;
