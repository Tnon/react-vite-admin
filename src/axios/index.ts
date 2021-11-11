/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2021-11-08 20:41:54
 * @LastEditTime: 2021-11-09 10:13:26
 */
import axios, { AxiosRequestConfig } from 'axios';
import { message as $message } from 'antd';
export interface RequestOptions {
    /** 是否直接获取data，而忽略message等 */
    isGetDataDirectly?: boolean;
    /** 请求成功是提示信息 */
    successMsg?: string;
    /** 请求失败是提示信息 */
    errorMsg?: string;
}

const UNKNOWN_ERROR = '未知错误，请重试';

const service = axios.create({
    baseURL: import.meta.env.REACT_APP_BASE_API as string,
    timeout: 6000
});

service.interceptors.request.use(
    config => {
        const token = localStorage.getItem('t');
        if (token) {
            // let each request carry token
            // ['X-Token'] is a custom headers key
            // please modify it according to the actual situation
            config.headers!['Authorization'] = token;
        }
        return config;
    },
    error => {
        Promise.reject(error);
    }
);

service.interceptors.response.use(
    response => {
        const res = response.data;

        // if the custom code is not 200, it is judged as an error.
        if (res.code !== 200) {
            $message.error(res.message || UNKNOWN_ERROR);

            // Illegal token
            if (res.code === 11001 || res.code === 11002) {
                window.localStorage.clear();
                window.location.reload();
                // to re-login
                // Modal.confirm({
                //   title: '警告',
                //   content: res.message || '账号异常，您可以取消停留在该页上，或重新登录',
                //   okText: '重新登录',
                //   cancelText: '取消',
                //   onOk: () => {
                //     localStorage.clear();
                //     window.location.reload();
                //   }
                // });
            }

            // throw other
            const error = new Error(res.message || UNKNOWN_ERROR) as Error & { code: any };
            error.code = res.code;
            return Promise.reject(error);
        } else {
            return res;
        }
    },
    error => {
        // 处理 422 或者 500 的错误异常提示
        const errMsg = error && error.response && error.response.data ? error.response.data.message : UNKNOWN_ERROR;
        $message.error(errMsg);
        return Promise.reject(error);
    }
);

export type Response<T = any> = {
    code: number;
    msg: string;
    data: T
};

export type BaseResponse<T = any> = Promise<Response<T>>;

/**
 *
 * @param method - request methods
 * @param url - request url
 * @param data - request data or params
 */
export const request = <T = any>(config: AxiosRequestConfig, options: RequestOptions = {}): Promise<T> => {
    return new Promise((resolve, reject) => {
        const { successMsg, errorMsg, isGetDataDirectly = true } = options;
        service
            .request(config)
            .then(res => {
                successMsg && $message.success(options?.successMsg);
                errorMsg && $message.error(options?.errorMsg);
                resolve(isGetDataDirectly ? res.data : res);
            })
            .catch(err => reject(err));
    });
};
