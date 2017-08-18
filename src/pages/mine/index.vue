<template>
    <div>
        <card class="user-info-wrap">
            <div slot="content">
                <div style="overflow: hidden; padding: 20px;">
                    <div class="user-photo">
                        <img src="../../assets/newDefaul.png" />
                    </div>
                    <div class="user-info">
                        <div class="user-name">ccc325</div>
                        <div class="user-level">黄金会员</div>
                    </div>
                </div>
                <div class="watch-wrap card-content">
                    <div class="vux-1px-r">
                        <span>9</span>
                        <div>关注的商品</div>
                    </div>
                    <div class="vux-1px-r">
                        <span>0</span>
                        <div>关注的店铺</div>
                    </div>
                    <div>
                        <span>3</span>
                        <div>浏览记录</div>
                    </div>
                </div>
            </div>
        </card>
        <card>
            <div slot="header" class="weui-panel__hd">
                <img src="../../assets/order.png" class="card-icon" style="top: 2px;" />
                <span>我的订单</span>
            </div>
            <div slot="content" class="card-content">
                <div>
                    <span><i class="fa fa-credit-card"></i></span>
                    <div>待付款</div>
                </div>
                <div>
                    <span><i class="fa fa-truck"></i></span>
                    <div>待收货</div>
                </div>
                <div>
                    <span><i class="fa fa-phone"></i></span>
                    <div>退换/售后</div>
                </div>
            </div>
        </card>
        <card>
            <div slot="header" class="weui-panel__hd">
                <img src="../../assets/qianbao.png" class="card-icon" style="top: 2px;" />
                <span>我的钱包</span>
            </div>
            <div slot="content" class="card-content">
                <div class="vux-1px-l vux-1px-r">
                    <span>413</span>
                    <div>京豆</div>
                </div>
                <div class="vux-1px-r">
                    <span>0</span>
                    <div>优惠券</div>
                </div>
                <div class="vux-1px-r">
                    <span>0.00</span>
                    <div>白条</div>
                </div>
                <div class="vux-1px-r">
                    <span>0.00</span>
                    <div>京东小金库</div>
                </div>
                <div class="vux-1px-r">
                    <span>413</span>
                    <div>京豆</div>
                </div>
            </div>
        </card>

        <card>
            <div slot="content" class="my-jd-content">
                <cell :title="'分享有奖'" is-link :value="'邀请亲友奖好礼'">
                    <img slot="icon" src="../../assets/gift.png" />
                </cell>
                <cell :title="'京东白条'" is-link :value="'白条还款、激活获礼包'">
                    <img slot="icon" src="../../assets/baitiao.png" />
                </cell>
                <cell :title="'客户服务'" is-link :value="'返修/退换货、在线客服'">
                    <img slot="icon" src="../../assets/kefu.png" />
                </cell>
                <cell :title="'京东会员'" is-link :value="'会员俱乐部'">
                    <img slot="icon" src="../../assets/vip.png" />
                </cell>
            </div>
        </card>

        <card>
            <div slot="content" class="my-jd-content">
                <cell :title="'分享有奖'" is-link :value="'邀请亲友奖好礼'">
                    <img slot="icon" src="../../assets/gift.png" />
                </cell>
                <cell :title="'京东白条'" is-link :value="'白条还款、激活获礼包'">
                    <img slot="icon" src="../../assets/baitiao.png" />
                </cell>
                <cell :title="'客户服务'" is-link :value="'返修/退换货、在线客服'">
                    <img slot="icon" src="../../assets/kefu.png" />
                </cell>
                <cell :title="'京东会员'" is-link :value="'会员俱乐部'">
                    <img slot="icon" src="../../assets/vip.png" />
                </cell>
            </div>
        </card>

        <card>
            <div slot="content" class="card-content">
                <div class="vux-1px-r">
                    <span>cqbwjzx</span>
                </div>
                <div class="vux-1px-r">
                    <span>退出</span>
                </div>
                <div>
                    <span>反馈</span>
                </div>
            </div>
        </card>
    </div>
</template>

<script>
    import {Card, Group, Cell} from 'vux';
    export default{
        components: {
            Card,
            Group,
            Cell
        }
    }
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';

.my-jd-content{
    font-size: 14px;
    img{
        width: 18px;
        margin-right: 10px;
        position: relative;
        top: 3px;
    }
    .weui-cell__ft{
        font-size: 12px;
    }
}
.card-icon{
    width: 18px;
    position: relative;
    margin-right: 5px;
}
.user-info-wrap{
    background: url(../../assets/582819beNe89ce16d.png)
}
.user-photo{
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 6rem;
    box-shadow: 0 0 15px red;
    overflow: hidden;
    margin-right: .5rem;
    float: left;
    img{
        display: block;
        max-width: 100%;
    }
}
.user-info{
    display: flex;
    flex-direction: column;
    float: left;
    padding: 0 10px;
    font-size: 13px;
    color: #fff;
    height: 56px;
}
.user-name{
    flex: 1;
}
.user-level{
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 0 8px;
}
.card-content{
    display: flex;
    padding: 10px 0;
    >div{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        text-align: center;
        font-size: 12px;
    }
}
.watch-wrap{
    color: #fff;
    padding: 0;
    >div{
        background-color: rgba(0,0,0,0.2);
        padding: 8px 0;
    }
}
</style>
