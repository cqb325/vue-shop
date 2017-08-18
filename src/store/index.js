import Vue from 'vue';
import Vuex from 'vuex';
import actions from './action';
import app from './modules/app';
import catalog from './modules/catalog';
import product from './modules/product';
import cart from './modules/cart';

Vue.use(Vuex);

export default new Vuex.Store({
	actions,
    modules: {
        app,
        catalog,
        product,
        cart
    }
});
