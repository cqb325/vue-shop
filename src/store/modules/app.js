import {
  UPDATE_DIRECTION,
  UPDATE_INPUTING,
  UPDATE_LANDSCAPE,
} from '../types';

const state = {
  // 页面浏览方向(前进/后退)
  direction: 'forward',
  // 页面输入状态, 主要针对移动端输入时虚拟键盘弹出，在App组件内修改
  inputing: false,
  // 是否横屏
  isLandscape: false,
  // 用户信息
  user: null,
}

const mutations = {
  [UPDATE_DIRECTION] (state, preload) {
      console.log(preload.direction);
    state.direction = preload.direction;
  },
  [UPDATE_INPUTING] (state, status) {
    state.inputing = !!status
  },
  [UPDATE_LANDSCAPE] (state, status) {
    state.isLandscape = !!status
  },
}

const actions = {
    [UPDATE_LANDSCAPE] ({commit}, landscape) {
      commit(UPDATE_LANDSCAPE, landscape);
    }
};

export default {
  state,
  mutations,
  actions
}
