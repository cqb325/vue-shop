import {
    UPDATE_CART_TOTAL,
    UPDATE_CART_NUMBER,
    UPDATE_CART_ALL_CHECKED,
    FETCHING,
    UPDATE_CART_GOODS
} from '../types';

import {getCartProducts, createOrder} from '../../api/api';

const state = {
    allChecked: true,
    isFetching: false,
    checkedNum: 0,
    total: 0,
    goods: []
};

const mutations = {
    [UPDATE_CART_TOTAL](state, preload){
        state.total = preload.total;
    },

    [UPDATE_CART_NUMBER](state, preload){
        state.checkedNum = preload.checkedNum;
    },

    [UPDATE_CART_ALL_CHECKED](state, preload){
        state.allChecked = preload.allChecked;
    },

    [FETCHING](state, preload){
        state.isFetching = true;
    },

    [UPDATE_CART_GOODS](state, preload){
        state.goods = preload.goods;
        state.isFetching = false;
    }
};

const actions = {
    updateCartTotal({commit}, total){
        commit(UPDATE_CART_TOTAL, {
            total: total
        });
    },

    updateCartNumber({commit}, num){
        commit(UPDATE_CART_NUMBER, {
            checkedNum: num
        });
    },

    updateAllChecked({commit}, allChecked){
        commit(UPDATE_CART_ALL_CHECKED, {
            allChecked: allChecked
        });
    },

    async getShopProducts({state, commit}, ids){
        if(state.isFetching){
            return ;
        }
        commit(FETCHING);
        let data = await getCartProducts(ids);
        commit(UPDATE_CART_GOODS, {
            goods: data
        });
    },

    async cartSettlement({state, commit}, data){
        if(state.isFetching){
            return ;
        }
        commit(FETCHING);

        let ret = await createOrder(data);
        if(ret.success){
            window.location.href = `#/order/${ret.orderId}`;
        }else{

        }
    }
};

export default {
    state,
    mutations,
    actions
}
