<template>
    <div style="height: 100%">
        <div v-transfer-dom>
            <actionsheet></actionsheet>
        </div>
        <view-box ref="viewBox">
            <Swiper :list="bannerList" auto loop height='150px'></Swiper>
            <div class="app-links-wrap">
                <grid :rows="5" class="app-links">
                    <grid-item link="/component/cell" :label="'天猫'">
                        <img slot='icon' src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502425039754&di=9c0da7732b5ff279a868ab6d537627e7&imgtype=0&src=http%3A%2F%2Fsrc.onlinedown.net%2FPublic%2Fimages%2Fbigsoftimg%2Fandroidimg%2Fsimg%2F400000%2F396488.png">
                    </grid-item>
                    <grid-item :link="{ path: '/component/cell'}" :label="'聚划算'">
                        <img slot='icon' src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502425498265&di=bf9f4331abc20102c11bbf190d077b18&imgtype=0&src=http%3A%2F%2Fimg.smzy.com%2Fdown%2FUploadPic%2F2014-10%2F2014103010163893009.png">
                    </grid-item>
                    <grid-item link="/component/cell" :label="'天猫国际'">
                        <img slot='icon' src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=235388037,775096449&fm=26&gp=0.jpg">
                    </grid-item>
                    <grid-item :link="{ path: '/component/cell'}" :label="'外卖'">
                        <img slot='icon' src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2112623045,1658759934&fm=26&gp=0.jpg">
                    </grid-item>
                    <grid-item :link="{ path: '/component/cell'}" :label="'天猫超市'">
                        <img slot='icon' src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1945885694,1505520778&fm=26&gp=0.jpg">
                    </grid-item>
                </grid>
                <grid :rows="5" class="app-links">
                    <grid-item link="" :label="'VUE'">
                        <img slot='icon' src="../../assets/logo.png">
                    </grid-item>
                    <grid-item link="" :label="'GitHub'">
                        <img slot='icon' src="../../assets/github.png">
                    </grid-item>
                    <grid-item link="" :label="'H5'">
                        <img slot='icon' src="../../assets/H5.png">
                    </grid-item>
                    <grid-item link="" :label="'React'">
                        <img slot='icon' src="../../assets/react.png">
                    </grid-item>
                    <grid-item link="" :label="'VUX'">
                        <img slot='icon' src="../../assets/vux_logo.png">
                    </grid-item>
                </grid>
            </div>
            <group class="marquee-wrap">
                <cell :title="'播报: '">
                    <marquee>
                        <marquee-item v-for="(item, index) in marquees" :key="index">{{ item }}</marquee-item>
                    </marquee>
                </cell>
            </group>

            <div class='graphic-wrap'>
                <grid :rows='2'>
                    <grid-item link="">
                        <div>
                            <div class="graphic-text" style="opacity: 1;">
                                <strong class="graphic-tit">玩3C</strong>
                                <p class="graphic-wz">iPhone 超低价</p>
                                <span class="graphic-btn" style="background:#ff4a7d">更多优惠GO！</span>
                            </div>
                            <div class="graphic-img">
                                <img imgtitle="true" class="opa1" src="https://m.360buyimg.com/mobilecms/jfs/t5701/157/596702822/37671/f662d2ce/5920448fN135432ac.jpg!q70.jpg" style="opacity: 1;">
                            </div>
                        </div>
                    </grid-item>
                    <grid-item>
                        <div>
                            <div class="graphic-text" style="opacity: 1;">
                                <strong class="graphic-tit">京东家电</strong>
                                <p class="graphic-wz">领券最高省1500</p>
                                <span class="graphic-btn" style="background:#ff4a7d">815周年庆</span>
                            </div>
                            <div class="graphic-img ">
                                <img imgtitle="true" class="opa1" src="https://m.360buyimg.com/mobilecms/jfs/t4639/187/149060276/13271/7eb8e9e4/58ca6aabN39057594.jpg!q70.jpg" style="opacity: 1;">
                            </div>
                        </div>
                    </grid-item>
                    <grid-item>
                        <div>
                            <div class="graphic-text" style="opacity: 1;">
                                <strong class="graphic-tit">京东超市</strong>
                                <p class="graphic-wz">每满199减100</p>
                                <span class="graphic-btn" style="background:#ff4a7d">尖货必买日</span>
                            </div>
                            <div class="graphic-img ">
                                <img imgtitle="true" class="opa1" src="https://m.360buyimg.com/mobilecms/jfs/t6040/320/1778100950/33921/b7d575cf/5936bc51Nc643252e.jpg!q70.jpg" style="opacity: 1;">
                            </div>
                        </div>
                    </grid-item>
                    <grid-item>
                        <div>
                            <div class="graphic-text" style="opacity: 1;">
                                <strong class="graphic-tit">爱家</strong>
                                <p class="graphic-wz">家具3件8折逛</p>
                            </div>
                            <div class="graphic-img ">
                                <img imgtitle="true" class="opa1" src="https://m.360buyimg.com/mobilecms/jfs/t5941/128/8994580643/24841/677a2a1a/598c23c6N857def0e.jpg!q70.jpg" style="opacity: 1;">
                            </div>
                        </div>
                    </grid-item>
                    <grid-item>
                        <div>
                            <div class="graphic-text" style="opacity: 1;">
                                <strong class="graphic-tit">全球尖货</strong>
                                <p class="graphic-wz">买3免1</p>
                                <span class="graphic-btn" style="background: #952dff">进口</span>
                            </div>
                            <div class="graphic-img ">
                                <img imgtitle="true" class="opa1" src="https://m.360buyimg.com/mobilecms/jfs/t5614/31/292041316/19365/40ae9a6/591e6d79Nf3003b62.jpg!q70.jpg" style="opacity: 1;">
                            </div>
                        </div>
                    </grid-item>
                </grid>
            </div>
        </view-box>
    </div>
</template>

<script>
    import { Search, Swiper, Grid, GridItem, Group, Cell, Marquee,
        MarqueeItem, Actionsheet, ViewBox,
        TransferDomDirective as TransferDom
    } from 'vux'
    export default {
        directives: {
            TransferDom
        },
        components: {
            Search,
            Swiper,
            Grid,
            GridItem,
            Group,
            Cell,
            Marquee,
            MarqueeItem,
            ViewBox,
            Actionsheet
        },
        data: function(){
            return {
                keyword: '',
                bannerList: [{
                    url: 'javascript:',
                    img: 'https://static.vux.li/demo/1.jpg',
                    title: '送你一朵fua'
                }, {
                    url: 'javascript:',
                    img: 'https://static.vux.li/demo/2.jpg',
                    title: '送你一辆车'
                }, {
                    url: 'javascript:',
                    img: 'https://static.vux.li/demo/3.jpg',
                    title: '送你一次旅行'
                }],
                marquees: ['海外晨报 | 詹妮弗·劳伦斯登Vogue金九刊',
                '漂亮得不像实力派，绿色荣耀9今天发！','2017年初秋基础穿搭 这几款穿搭最撩人']
            };
        },

        methods: {
            doSearch: function(){

            }
        }
    }
</script>

<style lang="less">
.tabbar-icon{
    width: 2rem;
}
.graphic-wrap .weui-grid{
    padding: 7px 0;
}
.graphic-text{
    color: #333;
    float: left;
    padding: 0 3px 0 8px;
    overflow: hidden;
    width: 55%;
    .graphic-tit{
        font-size: 18px;
    }
    .graphic-wz{
        font-size: 14px;
    }
    .graphic-btn{
        font-size: 12px;
        padding: 1px 3px;
    }
}
.graphic-img{
    width: 45%;
    padding-top: 2px;
    float: right;
    padding-right: 5px;
    height: 100%;
    img{
        display: block;
        max-width: 100%;
    }
}
.marquee-wrap{
  .weui-cells{
      margin-top: 0.5rem;
      font-size: 14px;
  }
}
.app-links-wrap{
    background: #fff;
}
.app-links{
    .weui-grid__icon{
      width: 36px;
      height: 36px;
      text-align: center;
    }
    .weui-grid:after{
      border-bottom: 0;
    }
    .weui-grid:before{
      border-right: 0;
    }
    &.weui-grids:before{
        border-top: 0;
    }
    padding: 0 1rem;
}
.weui-grid{
    padding: 10px;
    .fa{
        width: 100%;
        height: 100%;
        font-size: 32px;
    }
}
</style>
