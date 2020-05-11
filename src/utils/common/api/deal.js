/* jshint esversion: 6 */

import {
  Message,
} from 'element-ui';
import router from '@/router';

const logout = () => {
  console.warn('退出');
};
// 返回需要提示接口调用成功的条件
const needSuccessMessage = (msg) => {
  return msg !== false && msg !== null && msg;
};

// 接口的通用处理方法
export const handleResponse = (res, msg) => {
  const code = res.data.rspCode;
  switch (true) {
    case code === '200':
      if (needSuccessMessage(msg)) {
        Message({
          message: (msg && `${msg}成功！`) || res.data.rspMsg || '操作成功！',
          type: 'success',
          duration: 3 * 1000,
        });
      }
      return res.data;
    default:
      if (msg !== false) {
        Message({
          message: res.data.rspMsg || (msg && `${msg}失败`) || '操作失败',
          type: 'warning',
          duration: 5 * 1000,
        });
      }
  }
  return null;
};

export const handleError = (error) => {
  if (error.response) {
    const status = error.response.status;
    switch (status) {
      case 401:
        // Message.error('401 用户登入标识 不存在|失效|过期')
        logout();
        break;
      case 403:
        Message({
          message: '您暂无此功能的操作权限，如有疑问请联系管理员！',
          type: 'warning',
          duration: 5 * 1000,
        });
        router.replace('/home');
        break;
      case 404:
        Message.error('404 接口地址无效');
        break;
      default:
        Message.error(error.toString());
    }
  } else {
    Message.error(error.toString());
  }
  return null;
};
