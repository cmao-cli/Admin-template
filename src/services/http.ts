import axios from 'axios';
import { getCookie } from 'src/utils/base';
import { AxiosRequestConfig, AxiosInstance } from 'axios';
import { message } from 'antd';
const _config = window.CODEMAOCONFIG; //项目不同环境的配置文件
axios.defaults.withCredentials = true;
axios.defaults.timeout = 10000;
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status < 300; // default
};
class Http {
  private instance:AxiosInstance;
  constructor(baseURL?:string) {
    this.instance = axios.create({ baseURL });
    this.addRequestInterceptors();
    this.addResponseInterceptors();
  }
  // 请求头部添加token
  addRequestInterceptors() {
    this.instance.interceptors.request.use((config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = localStorage ? `Bearer ${token}` : '';
      }
      return config;
    }, (error) => {
      return Promise.reject(error);
    });
  }
  // 响应拦截，可以对请求失败做统一的处理
  addResponseInterceptors() {
    this.instance.interceptors.response.use((res:any) => {
      return res.status <= 300 ? Promise.resolve(res) : Promise.reject(res);
    }, (error) => {
      const { response } = error;
      this.errorHandle(response.status, response.data.message);
    });
  }
  errorHandle(status, msg) {
    switch (status) {
      case 403:
        message.error('登陆态失效，请到内部账号系统重新登陆');
        break;
      default:
        message.error('获取数据失败');
        console.log(message);
    }
  }
  public get(url, configs?:Object) {
    return this.instance({
      method: 'get',
      url,
      ...configs,
    });
  }
  public post(url, data?, configs?:Object) {
    return this.instance({
      method: 'post',
      url: url,
      data: data,
      ...configs,
    });
  }
  public put(url, data?, configs?:Object) {
    return this.instance({
      method: 'put',
      url: url,
      data: data,
      ...configs,
    });
  }
  public patch(url, data?, configs?:Object) {
    return this.instance({
      method: 'patch',
      url: url,
      data: data,
      ...configs,
    });
  }
  public delete(url, configs?:Object) {
    return this.instance({
      method: 'delete',
      url: url,
      ...configs,
    });
  }
}

export const API = new Http(_config.api.host);
export const ACCOUNT = new Http(_config.account.host);