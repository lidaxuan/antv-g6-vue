/* jshint esversion: 6 */

import axios from 'axios';
import {
  Loading,
} from 'element-ui';
import buildParamsSerializer from '../build-params-serializer.js';
import {
  handleResponse,
  handleError,
} from './deal.js';

//  创建axios实例
const service = axios.create({
  // 如果url不是绝对路径，那么会将baseURL和url拼接作为请求的接口地址
  baseURL: process.env.VUE_APP_BASIC_API, // api 的 base_url ENV.process.env.NODE_ENV
  withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000, // 超时时间
});

export const api = ({
  url,
  msg,
  method = 'get',
  data = null,
  params = null,
  loading = false,
  paramsSerializerType = 'toString',
}) => {
  let loadingInstance = null;

  if (loading) {
    loadingInstance = Loading.service({
      fullscreen: true,
    });
  }

  const paramsSerializer = buildParamsSerializer(paramsSerializerType);

  return service({
    method,
    url,
    data,
    params,
    paramsSerializer,
  }).then(res => {
    // 返回默认处理过的结果
    return handleResponse(res, msg, method);
  }).catch(error => {
    // 返回默认的错误处理
    return handleError(error);
  }).finally(() => {
    if (loading) loadingInstance.close();
  });
};


[
  ['get', 'params'],
  ['post', 'data'],
].forEach(item => {
  const method = item[0];
  api[item[0]] = (url, opt, msg, loading) => {
    return api({
      url,
      msg,
      method,
      [item[1]]: opt,
      loading,
    });
  };
});


export const api2 = () => {
  console.warn('tem');
};
