<template>
  <div id="app">
    <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import store from './store';
import { mapState } from 'vuex';
import {
    UPDATE_LANDSCAPE,
    UPDATE_INPUTING
} from './store/types';

export default {
  name: 'app',
  computed: {
      ...mapState({
          direction: (state) => state.app.direction
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
