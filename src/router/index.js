import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => require(['@/pages/index/index'], resolve);
const Catalog = resolve => require(['@/pages/catalog/index'], resolve);
const Product = resolve => require(['@/pages/product/index'], resolve);

Vue.use(Router)

let router = new Router({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            const position = {};
            // new navigation.
            // scroll to anchor by returning the selector
            if (to.hash) {
              position.selector = to.hash;
            }
            // check if any matched route config has meta that requires scrolling to top
            if (to.matched.some(m => m.meta.scrollToTop)) {
              // cords will be used if no selector is provided,
              // or if the selector didn't match any element.
              position.x = 0;
              position.y = 0;
            }
            // if the returned position is falsy or an empty object,
            // will retain current scroll position.
            return position;
        }
    },
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
        component: Product
    }
    ]
});

export default router;
