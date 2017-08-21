import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => require(['@/pages/index/index'], resolve);
const Catalog = resolve => require(['@/pages/catalog/index'], resolve);
const Product = resolve => require(['@/pages/product/index'], resolve);
const Login = resolve => require(['@/pages/login/index'], resolve);
const Mine = resolve => require(['@/pages/mine/index'], resolve);
const Cart = resolve => require(['@/pages/cart/index'], resolve);
const NewOrder = resolve => require(['@/pages/order/new'], resolve);
const AddressList = resolve => require(['@/pages/address/index'], resolve);
const AddressEdit = resolve => require(['@/pages/address/edit'], resolve);
const AddressNew = resolve => require(['@/pages/address/new'], resolve);

Vue.use(Router)

let router = new Router({
    // scrollBehavior (to, from, savedPosition) {
    //     if (savedPosition) {
    //         return savedPosition;
    //     } else {
    //         const position = {};
    //         // new navigation.
    //         // scroll to anchor by returning the selector
    //         if (to.hash) {
    //           position.selector = to.hash;
    //         }
    //         // check if any matched route config has meta that requires scrolling to top
    //         if (to.matched.some(m => m.meta.scrollToTop)) {
    //           // cords will be used if no selector is provided,
    //           // or if the selector didn't match any element.
    //           position.x = 0;
    //           position.y = 0;
    //         }
    //         // if the returned position is falsy or an empty object,
    //         // will retain current scroll position.
    //         return position;
    //     }
    // },
    routes: [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/catalog',
        name: 'Catalog',
        component: Catalog
    },
    {
        path: '/product/:id',
        name: 'product',
        meta: {hideTab: true},
        component: Product
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/mine',
        name: 'mine',
        component: Mine
    },
    {
        path: '/cart',
        name: 'cart',
        meta: {hideTab: true},
        component: Cart
    },
    {
        path: '/order/:id',
        name: 'neworder',
        meta: {hideTab: true},
        component: NewOrder
    },
    {
        path: '/address',
        name: 'address',
        meta: {hideTab: true},
        component: AddressList
    },
    {
        path: '/address/:id',
        name: 'addressEdit',
        meta: {hideTab: true},
        component: AddressEdit
    },
    {
        path: '/add_address',
        name: 'addressNew',
        meta: {hideTab: true},
        component: AddressNew
    }
    ]
});

export default router;
