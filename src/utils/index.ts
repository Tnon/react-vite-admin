/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2021-11-09 14:35:07
 * @LastEditTime: 2021-11-10 10:19:10
 */
import { lazy } from "react";
type GetType<T> = T extends (arg: infer P) => void ? P : string;
type LazyParams = GetType<typeof lazy>
const modules = import.meta.glob('../views/**/*.tsx')
export const getAsyncPage = (path: string, filename = 'index') => lazy(modules[`../views/${path}/${filename}.tsx`] as LazyParams);