import {
  UPDATE_DIRECTION,
  UPDATE_INPUTING,
  UPDATE_LANDSCAPE,
  ADD_TO_CART,
  LOGIN,
  FETCHING,
  UPDATE_LOADING_STATUS
} from '../types';

import {login} from '../../api/api';
import store from 'store';
let storedData = store.get('vue-shop') || {};

const state = {
  // 页面浏览方向(前进/后退)
  direction: 'forward',
  // 页面输入状态, 主要针对移动端输入时虚拟键盘弹出，在App组件内修改
  inputing: false,
  // 是否横屏
  isLandscape: false,
  // 用户信息
  user: null,
  // 购物车数量
  cartGoods: [],

  isFetching: false,

  isLoading: false,
}

if(storedData){
    state.cartGoods = storedData.cartGoods || [];
    state.user = storedData.user;
}

const mutations = {
  [UPDATE_DIRECTION] (state, preload) {
    state.direction = preload.direction;
  },
  [UPDATE_INPUTING] (state, status) {
    state.inputing = !!status
  },
  [UPDATE_LANDSCAPE] (state, status) {
    state.isLandscape = !!status
  },
  [ADD_TO_CART] (state, preload) {
      let id = preload.id;
      state.cartGoods.push(id);
      storedData.cartGoods = state.cartGoods;
      store.set('vue-shop', storedData);
  },

  [FETCHING] (state, preload){
      state.isFetching = true;
  },

  [LOGIN] (state, preload){
      state.user = preload.user;
      storedData.user = preload.user;
      store.set('vue-shop', storedData);
  },

  [UPDATE_LOADING_STATUS](state, preload){
      state.isLoading = preload.isLoading;
  }
}

const actions = {
    [UPDATE_LANDSCAPE] ({commit}, landscape) {
        commit(UPDATE_LANDSCAPE, landscape);
    },

    addToCart ({commit}, id) {
        commit(ADD_TO_CART, {
            id: id
        });
    },

    async login ({state, commit}, data) {
        if(state.isFetching){
            return false;
        }
        commit(FETCHING);

        let ret = await login(data);
        commit(LOGIN, {
            user: ret
        });

        if(data.callback){
            data.callback();
        }
    }
};

const getters = {
    goodsNumber: (state) => {
        return state.cartGoods.length;
    }
}

export default {
  state,
  mutations,
  actions,
  getters
}
