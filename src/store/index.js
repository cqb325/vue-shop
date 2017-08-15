import Vue from 'vue';
import Vuex from 'vuex';
import actions from './action';
import app from './modules/app';
import catalog from './modules/catalog';

Vue.use(Vuex);

export default new Vuex.Store({
	actions,
    modules: {
        app,
        catalog
    }
});
