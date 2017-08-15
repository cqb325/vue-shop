import {
    FETCHING,
    SEARCH,
    SEARCH_END,
    SCROLL_TOP_STATUS,
    SCROLL_BOTTOM_STATUS,
    KEYWORD_CHANGE
} from '../types';

import {search} from '../../api/api';

const state = {
  isFetching: false,
  list: null,
  pageNo: 0,
  pageSize: 10,
  keyword: '',
  bottomStatus: '',
  topStatus: '',
  isAllLoaded: false
}

const mutations = {
    [SEARCH] (state, preload) {
        let no = preload.pageNo;
        if(no === 1){
            state.list = preload.list;
        }else{
            state.list = state.list.concat(preload.list);
        }
        state.pageNo = no;
        state.isAllLoaded = preload.isAllLoaded;
        state.isFetching = false;
    },
    [FETCHING] (state, preload) {
        state.isFetching = true;
    },

    [SCROLL_TOP_STATUS](state, preload){
        state.topStatus = preload.status;
    },

    [SCROLL_BOTTOM_STATUS](state, preload){
        state.bottomStatus = preload.status;
    },

    [KEYWORD_CHANGE] (state, preload){
        state.keyword = preload.keyword;
    }
}

const actions = {
    async search ({state, commit}, data) {
        if(state.isFetching){
            return;
        }
        commit(FETCHING);
        let ret = await search({
            keyword: state.keyword,
            pageNo: 1
        });
        commit(SEARCH, {
            list: ret.data,
            isAllLoaded: ret.allLoaded,
            pageNo: 1
        });

        if(data.callback){
            data["callback"]();
        }
    },

    async searchNext ({state, commit}, data) {
        if(state.isFetching){
            return;
        }
        commit(FETCHING);
        let ret = await search({
            keyword: state.keyword,
            pageNo: state.pageNo + 1
        });
        commit(SEARCH, {
            list: ret.data,
            isAllLoaded: ret.allLoaded,
            pageNo: state.pageNo + 1
        });

        if(data.callback){
            data["callback"]();
        }
    },

    handleTopChange({commit}, status){
        commit(SCROLL_TOP_STATUS, {status});
    },

    handleBottomChange({commit}, status){
        commit(SCROLL_BOTTOM_STATUS, {status});
    },

    keywordChange({commit}, keyword){
        commit(KEYWORD_CHANGE, {keyword});
    }
};

export default {
  state,
  mutations,
  actions
}
