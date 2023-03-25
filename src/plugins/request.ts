import axios from 'axios';
import qs from "qs";
import {useRouter} from "vue-router";

// 创建实例时配置默认值
const request = axios.create({
    baseURL: 'http://localhost:8080/api',
    paramsSerializer: {
        serialize:function(params) {
            return qs.stringify(params, { arrayFormat: 'repeat' })
        }
    }
});

// true：向后台发送请求时，携带上cookie凭证
request.defaults.withCredentials = true

// 添加请求拦截器
request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default request