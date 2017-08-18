<template>
    <div id="app" style="height: 100%;">
        <div v-transfer-dom>
            <loading v-model="isLoading"></loading>
        </div>
        <view-box ref="viewBox" body-padding-bottom="55px">
            <transition v-on:before-leave="beforeLeave" v-on:after-enter="afterEnter" :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')" mode="out-in">
                <router-view></router-view>
            </transition>
            <tabbar slot="bottom" v-show="hasTabbar">
                <tabbar-item :selected="activeTab == '/'" link='/'>
                    <img slot="icon" src="./assets/home.png" class="tabbar-icon">
                    <span slot="label">首页</span>
                </tabbar-item>
                <tabbar-item :selected="activeTab == '/catalog'" link='/catalog'>
                    <img slot="icon" src="./assets/type.png" class="tabbar-icon">
                    <span slot="label">分类</span>
                </tabbar-item>
                <tabbar-item link="">
                    <img slot="icon" src="./assets/find.png" class="tabbar-icon">
                    <span slot="label">发现</span>
                </tabbar-item>
                <tabbar-item :selected="activeTab == '/cart'" link="/cart">
                    <img slot="icon" src="./assets/cart.png" class="tabbar-icon">
                    <span slot="label">购物车</span>
                </tabbar-item>
                <tabbar-item :selected="activeTab == '/mine'" link="/mine">
                    <img slot="icon" src="./assets/my.png" class="tabbar-icon">
                    <span slot="label">我的</span>
                </tabbar-item>
            </tabbar>
        </view-box>
  </div>
</template>

<script>
import store from './store';
import {Tabbar, TabbarItem, ViewBox, TransferDomDirective as TransferDom, Loading} from 'vux';
import { mapState } from 'vuex';
import {
    UPDATE_LANDSCAPE,
    UPDATE_INPUTING
} from './store/types';

export default {
  name: 'app',
  directives: {
      TransferDom
  },
  components: {
      Tabbar,
      TabbarItem,
      ViewBox,
      Loading
  },
  methods: {
      beforeLeave: function(){
          this.$store.commit("UPDATE_LOADING_STATUS", {isLoading: true});
      },

      afterEnter: function(){
          this.$store.commit("UPDATE_LOADING_STATUS", {isLoading: false});
      }
  },
  computed: {
      ...mapState({
          direction: (state) => state.app.direction,
          isLoading: (state) => state.app.isLoading,
          hasTabbar(state) {
              return !this.$route.meta.hideTab;
          },
          activeTab(state) {
              return this.$route.path;
          }
      })
  },

  created() {
    // 定义常量
    const width = document.body.clientWidth
    const height = document.body.clientHeight
    // 初始设置横竖屏
    let isLandscape = width > height ? true : false;
    store.dispatch(UPDATE_LANDSCAPE, isLandscape)
    // 设置页面 rem 单位参照字号，屏幕的2倍宽高
    const setHtmlFontSize = function(){
      // 页面宽(可变)用 document.body.clientWidth
      // 设备宽(固定)用 window.screen.width * 2
      let width = document.body.clientWidth
      let height = document.body.clientHeight
      // 横竖屏统一宽度
      width = width < height ? width : height
      // 限制 rem 参照字号为 64px - 108px，设计参照为iPhone6 75px
      width = width < 640 ? 640 : width
      width = width > 1080 ? 1080 : width
      let html = document.documentElement
      // 须设置 body,html {height: 100%; width: 100%} 才有效
      html.style.setProperty('font-size', `${width*0.1}px`)
    }
    //setHtmlFontSize();
    // 监视窗口调整, 不能在应用中的其他地方设置 window.onresize， 否则之前设置的失效
    window.onresize = () => {
      // setHtmlFontSize() // 开发时
      let nWidth = document.body.clientWidth
      let nHeight = document.body.clientHeight
      let inputing = nHeight < height && nWidth === width ? true : false
      let isLandscape = nWidth > width ? true : false
      store.commit(UPDATE_INPUTING, inputing)
      store.commit(UPDATE_LANDSCAPE, isLandscape)
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './assets/css/font-awesome.min.css';
@import './assets/css/base.less';

html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
body {
  background-color: #f7f7f7;
}
#app{
    height: 100%;
    overflow: hidden;
}
*{
    box-sizing: border-box;
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
    will-change: transform;
    transition: all 500ms;
    height: 100%;
    top: 0;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
