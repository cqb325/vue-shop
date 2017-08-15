<template>
    <div :style="{height: '100%', width: width+'px'}">
        <view-box body-padding-bottom="145px">
            <div slot="header">
                <x-header>商品详情</x-header>
                <tab v-model="tabIndex">
                    <tab-item selected>商品</tab-item>
                    <tab-item>详情</tab-item>
                    <tab-item>评价</tab-item>
                </tab>
            </div>
            <div class="tab-container">
                <div class="tab-panel" v-show="tabIndex == 0">
                    <swiper :list="bannerList" auto loop :height="width+'px'"/>
                    <div class="goods-part white-bg mb-5">
                        <div class="prod-title">
                            <i class="label-icon-div have-not-icon-div red-div icon-pos">
                                <span class="label-text white-text">京东配送</span>
                            </i>
                            <span class="title-text">AOC/冠捷 商务办公一体机电脑整机 四核J1900+4G+120G固态 21.5英寸</span>
                        </div>
                        <div class="prod-price-wrap">
                            <div class="prod-price">
                                <span class="yang-pic">￥</span>
                                <span class="yang-pic-price" id="jdPrice-copy">
                                <span class="big-price">2199</span><span class="small-price">.00</span></span>
                            </div>
                        </div>
                        <div class="prod-act">【AOC2017商用电脑】指定型号下单立减200元，多买多减上不封顶，企业用户的不二选择！</div>
                    </div>
                    <div class="white-bg mb-5">
                        asd<br />
                        asd<br />
                        asd<br />
                        asd<br />
                        asd<br />
                        asd<br />
                        asd<br />
                    </div>
                </div>
                <div class="tab-panel" v-show="tabIndex == 1">
                    <ul class="page-lazyload-list">
                        <li class="page-lazyload-listitem" v-for="item in imageList">
                            <img v-lazy="item" class="page-lazyload-image">
                        </li>
                    </ul>
                </div>
                <div class="tab-panel" v-show="tabIndex == 2">
                    <ul class="assess-list">
                        <li class="assess-item">
                            <Card>
                                <div class='assess-title' slot='header'>
                                    <span class="assess-photo">
                                        <img src="https://img30.360buyimg.com/mobile/s60x60_jfs/t493/15/557644423/10532/62d3112/5473e62aNdb4251d8.png" />
                                    </span>
                                    <span>j****h</span>
                                    <span class="pull-right assess-date">2017-07-01</span>
                                </div>
                                <p slot="content" class="assess-content">
                                    这台一体机是我在众多电脑中最后选定的一台，首先说显示器的确很大，高清硬屏非常好，无论哪个角度都看的爽，其次是性能方面，还可以，虽然是集成显卡，但玩英雄联盟一点都不卡，FPS在80之间 温度方面 待机在52左右，看电影在62左右，玩游戏就72以上80以下，风扇很大声，听着都心疼，可能是集成显卡的问题吧，开机在10秒左右，很快，这也是固态硬盘的效果，内存方面，120G的确不多，很快就用完，所以自己加个移动硬盘 才勉强过的去，总之这台一体机是还不错的，不亚于联想一体，性价比高，一体机里面有个喇叭，虽然不是很好的，但勉强还能接受，这次购机还算满意，大家可以选这台。
                                </p>
                            </Card>
                        </li>
                        <li class="assess-item">
                            <Card>
                                <div class='assess-title' slot='header'>
                                    <span class="assess-photo">
                                        <img src="https://img30.360buyimg.com/mobile/s60x60_jfs/t493/15/557644423/10532/62d3112/5473e62aNdb4251d8.png" />
                                    </span>
                                    <span>j****h</span>
                                    <span class="pull-right assess-date">2017-07-01</span>
                                </div>
                                <p slot="content" class="assess-content">
                                    这台一体机是我在众多电脑中最后选定的一台，首先说显示器的确很大，高清硬屏非常好，无论哪个角度都看的爽，其次是性能方面，还可以，虽然是集成显卡，但玩英雄联盟一点都不卡，FPS在80之间 温度方面 待机在52左右，看电影在62左右，玩游戏就72以上80以下，风扇很大声，听着都心疼，可能是集成显卡的问题吧，开机在10秒左右，很快，这也是固态硬盘的效果，内存方面，120G的确不多，很快就用完，所以自己加个移动硬盘 才勉强过的去，总之这台一体机是还不错的，不亚于联想一体，性价比高，一体机里面有个喇叭，虽然不是很好的，但勉强还能接受，这次购机还算满意，大家可以选这台。
                                </p>
                            </Card>
                        </li>
                        <li class="assess-item">
                            <Card>
                                <div class='assess-title' slot='header'>
                                    <span class="assess-photo">
                                        <img src="https://img30.360buyimg.com/mobile/s60x60_jfs/t493/15/557644423/10532/62d3112/5473e62aNdb4251d8.png" />
                                    </span>
                                    <span>j****h</span>
                                    <span class="pull-right assess-date">2017-07-01</span>
                                </div>
                                <p slot="content" class="assess-content">
                                    这台一体机是我在众多电脑中最后选定的一台，首先说显示器的确很大，高清硬屏非常好，无论哪个角度都看的爽，其次是性能方面，还可以，虽然是集成显卡，但玩英雄联盟一点都不卡，FPS在80之间 温度方面 待机在52左右，看电影在62左右，玩游戏就72以上80以下，风扇很大声，听着都心疼，可能是集成显卡的问题吧，开机在10秒左右，很快，这也是固态硬盘的效果，内存方面，120G的确不多，很快就用完，所以自己加个移动硬盘 才勉强过的去，总之这台一体机是还不错的，不亚于联想一体，性价比高，一体机里面有个喇叭，虽然不是很好的，但勉强还能接受，这次购机还算满意，大家可以选这台。
                                </p>
                            </Card>
                        </li>
                    </ul>
                </div>
            </div>
            <div slot="bottom" class="cart-concern-btm-fixed">
                <flexbox :gutter="0" class="cart-concern">
                    <flexbox-item :span="1/6">
                        <div class="cart-concern-item" style="padding-top: 7px;">
                            <i class="fa fa-heart-o"></i>
                            <div>关注</div>
                            <a href="javascript:void(0)" class="cart-concern-link"></a>
                        </div>
                    </flexbox-item>
                    <flexbox-item :span="1/6">
                        <div class="cart-concern-item" style="padding-top: 7px;">
                            <i class="fa fa-shopping-cart"></i>
                            <div>购物车</div>
                            <a href="javascript:void(0)" class="cart-concern-link"></a>
                        </div>
                    </flexbox-item>
                    <flexbox-item :span="1/3" class="yellow-color white-text"><div class='add-cart'>加入购物车</div></flexbox-item>
                    <flexbox-item :span="1/3" class="red-div white-text"><div class='buy-btn'>立即购买</div></flexbox-item>
                </flexbox>
            </div>
        </view-box>
    </div>
</template>

<script>
    import {Tab, TabItem, Swiper, SwiperItem, XHeader, ViewBox, Flexbox, FlexboxItem, Card} from 'vux';
    export default{
        components: {
            Tab,
            TabItem,
            Swiper,
            SwiperItem,
            XHeader,
            ViewBox,
            Flexbox,
            FlexboxItem,
            Card
        },
        data: function(){
            return {
                tabIndex: 0,
                width: 0,
                bannerList: [
                    { img: 'https://m.360buyimg.com/n12/jfs/t6388/106/11447432/233145/ec3cd4d9/5937bcebN0040d916.jpg!q70.jpg'},
                    { img: 'https://m.360buyimg.com/n12/jfs/t5797/132/1379989826/374324/7cc075bc/5925a142N1284d46e.jpg!q70.jpg'},
                    { img: 'https://m.360buyimg.com/n12/jfs/t7342/192/276190060/177400/21cb63f0/59913bd0Ne557e1da.jpg!q70.jpg'},
                    { img: 'https://m.360buyimg.com/n12/s828x828_jfs/t7765/222/283728107/162781/461f8bf9/59913be2N2b763b4c.jpg!q70.jpg'},
                    { img: 'https://m.360buyimg.com/n12/s828x828_jfs/t6559/234/793968852/240895/203c65dd/59451bc9N593a8ecf.jpg!q70.jpg'},
                ],
                imageList: [
                    'https://img30.360buyimg.com/popWareDetail/jfs/t6412/349/1808402481/132259/6fe3ba84/59579cdbN9a8462a0.jpg',
                    'https://img10.360buyimg.com/imgzone/jfs/t6535/351/98949191/95725/e8e7d63f/5939590bN466175cb.jpg',
                    'https://img30.360buyimg.com/popWareDetail/jfs/t5941/154/7916777414/356598/1b1fb3e6/5982c1c7Ncf7b17c6.jpg',
                    'https://img30.360buyimg.com/popWareDetail/jfs/t6595/315/1110883292/200240/bb32cbc/594b43f9Nb46e27ba.jpg',
                    'https://img10.360buyimg.com/imgzone/jfs/t6247/340/97100754/97647/adc63623/5939590dN781a8d1c.jpg',
                    'https://img10.360buyimg.com/imgzone/jfs/t5821/217/3239462301/100819/8d5d1942/5939590eN8251a503.jpg',
                    'https://img10.360buyimg.com/imgzone/jfs/t5761/165/3275327412/87023/b66c574d/5939590dNb1806066.jpg',
                    'https://img10.360buyimg.com/imgzone/jfs/t6655/46/92314154/99904/d4436187/5939590dNb9a4fde8.jpg',
                    'https://img30.360buyimg.com/popWareDetail/jfs/t5800/340/3320432653/95875/e9ddca7f/5939ff8bNcaf7df93.jpg'
                ]
            }
        },
        mounted: function(){
            this.width = document.documentElement.clientWidth;
        }
    }
</script>

<style lang="less">
.assess-list{
    margin: 0;
    padding: 0;
    list-style: none;
    .assess-item{
        margin-bottom: 10px;
    }
}
.assess-photo{
    display: inline-block;
    position: relative;
    top: 7px;
    img{
        display: block;
        float: left;
        width: 27px;
        height: 27px;
        border-radius: 50px;
        margin-right: 5px;
    }
}
.assess-content{
    font-size: 13px;
    color: #252525;
    padding: 15px;
    line-height: 18px;
    word-wrap: break-word;
    overflow: hidden;
    text-align: justify;
}
.assess-title{
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    color: #252525;
    font-size: 12px;
    .assess-date{
        color: #848689;
    }
}
.cart-concern-link{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    left: 0;
    top: 0;
}
.cart-concern-item{
    border-right: 1px solid rgba(0,0,0,.05);
    position: relative;
    .fa{
        font-size: 18px;
    }
}
.goods-part{
    padding: 5px;
}
.red-div{
    background-color: #f23030;
}
.label-icon-div {
    font-style: normal;
    display: inline-block;
    height: 14px;
    line-height: 20px;
    font-size: 0;
    width: auto;
    border-radius: 2px;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
}
.have-not-icon-div::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #f23030;
    border-radius: 3px;
    transform: scale(.5,.5);
    -webkit-transform: scale(.5,.5);
    transform-origin: left top;
    -webkit-transform-origin: left top;
    box-sizing: border-box;
    height: 28px;
    width: 200%;
    z-index: 1;
}
.label-text {
    display: inline-block;
    padding: 2px 2px;
    font-size: 10px;
    color: #f23030;
    line-height: 10px;
    height: 14px;
}
.white-text {
    color: #fff;
}
.prod-price{
    font-size: 23px;
    font-family: Helvetica;
    color: #f23030;
    font-weight: 700;
    line-height: 23px;
    margin-top: 7px;
    margin-right: 6px;
}
.yang-pic{
    font-size: 16px;
}
.big-price {
    display: inline-block;
    font-size: 23px;
    line-height: 23px;
}
.small-price {
    display: inline-block;
    font-size: 17px;
    line-height: 17px;
}
.prod-act {
    font-size: 13px;
    color: #81838e;
    margin: 11px 10px 0 0;
    line-height: 17px;
    text-align: justify;
}
.white-bg{
    background: #fff;
    border-bottom: 1px solid #eee;
}
.mb-5{
    margin-bottom: 5px;
}
.page-lazyload-listitem{
    display: block;
    img{
        display: block;
        width: 100%;
    }
}
.cart-concern-btm-fixed{
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
    text-align: center;
    width: 100%;
    height: 50px;
    overflow: hidden;
    font-size: 15px;
    border-top: 1px solid rgba(0,0,0,.05);
    background-color: rgba(255,255,255,.9);
}
.yellow-color{
    background-color: #FF9500;
}
.cart-concern{
    height: 100%;
}
.vux-flexbox-item{
    height: 100%;
    height: 50px;
    vertical-align: middle;
    text-align: center;
    font-size: 13px;
    >div{
        height: 100%;
    }
    .buy-btn,
    .add-cart{
        line-height: 50px;
        font-size: 14px;
    }
}
</style>
