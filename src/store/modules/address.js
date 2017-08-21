import {
  ADDRESS_FETCHING,
  UPDATE_ADDRESS_LIST,
  UPDATE_ADDRESS,
  UPDATE_ADDRESS_SUCCESS,
  UPDATE_ADDRESS_FAIL,
  CLEAR
} from '../types';

import {getAddressList, getAddress, saveAddress, addAddress} from '../../api/api';

const state = {
  isFetching: false,
  list: [],
  address: {}
}

const mutations = {
    [ADDRESS_FETCHING](state, preload){
        state.isFetching = true;
    },

    [UPDATE_ADDRESS_LIST] (state, preload) {
        state.list = preload.list;
        state.isFetching = false;
    },

    [UPDATE_ADDRESS] (state, preload) {
        state.address = preload.address;
        state.isFetching = false;
    },

    [UPDATE_ADDRESS_SUCCESS] (state, preload) {
        state.address = {};
        state.isFetching = false;
    },

    [UPDATE_ADDRESS_FAIL] (state, preload) {
        state.isFetching = false;
    },

    [CLEAR] (state, preload) {
        state.isFetching = false;
        state.address = {};
    }
}

const actions = {
    async getAddressList ({state, commit, rootState}, data) {
        if(state.isFetching){
            return false;
        }
        commit(ADDRESS_FETCHING);

        let userId = '';
        if(rootState.app.user){
            userId = rootState.app.user.id;
        }

        let list = await getAddressList(userId);
        commit(UPDATE_ADDRESS_LIST, {
            list: list
        });
    },

    async getAddress ({state, commit}, id) {
        if(state.isFetching){
            return false;
        }
        commit(ADDRESS_FETCHING);

        let address = await getAddress(id);
        commit(UPDATE_ADDRESS, {
            address: address
        });
    },

    async saveAddress ({state, commit}, data) {
        if(state.isFetching){
            return false;
        }
        commit(ADDRESS_FETCHING);

        let ret = await saveAddress(state.address);
        if(ret && ret.success){
            commit(UPDATE_ADDRESS_SUCCESS);
            if(data.success){
                data.success();
            }
        }else{
            commit(UPDATE_ADDRESS_FAIL);
            if(data.fail){
                data.fail();
            }
        }
    },

    async addAddress({state, commit}, data) {
        if(state.isFetching){
            return false;
        }
        commit(ADDRESS_FETCHING);
        let ret = await addAddress(state.address);
        if(ret && ret.success){
            commit(UPDATE_ADDRESS_SUCCESS);
            if(data.success){
                data.success();
            }
        }else{
            commit(UPDATE_ADDRESS_FAIL);
            if(data.fail){
                data.fail();
            }
        }
    },

    clear({commit}){
        commit(CLEAR);
    }
};

export default {
  state,
  mutations,
  actions
}
