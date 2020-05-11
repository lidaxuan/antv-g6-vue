import {
  MessageBox,
} from 'element-ui';
import { api } from './api/ajax.js';


export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$api', {
      value: api,
    });
    Object.defineProperty(Vue.prototype, '$messageBox', {
      value: MessageBox,
    });
  },
};
