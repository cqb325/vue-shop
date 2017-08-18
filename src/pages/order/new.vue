<template>
    <div style="height: 100%;">
        <view-box body-padding-bottom="55px">
            <x-header slot="header">
                填写订单
            </x-header>
            <div class="address-wrap">
                <cell-box is-link link="/address">
                    <span class="address-icon"><i class="fa fa-map-marker"></i></span>
                    <div class="address-info">
                        <div class="address-name">
                            <span>阿萨德</span>
                            <span>188****0000</span>
                            <span class="address-default">默认</span>
                        </div>
                        <div class="address-detail">
                            浙江杭州余杭区天目山西路15号宏丰公寓xx号
                        </div>
                    </div>
                </cell-box>
            </div>
            <div class="address-border"></div>

            <card>
                <div slot="content">
                    <cell-box is-link class="goods-info">
                        <div class="goods-image">
                            <img src="https://img10.360buyimg.com/n4/jfs/t3271/20/5061253358/156197/16697ccd/5862361eN1147ef88.jpg" />
                            <img src="https://img10.360buyimg.com/n4/jfs/t5686/101/906090413/78425/368f2a77/592277caN7d03999a.jpg" />
                        </div>
                        <span>共2件</span>
                    </cell-box>
                    <cell title="支付类型" value="在线支付"></cell>
                    <cell title="配送类型" value="京东快递"></cell>
                    <cell value="8月19日 [周六] 09:00-15:00"></cell>
                    <cell title="发票类型" value="个人发票"></cell>
                </div>
            </card>

            <card>
                <div slot="content">
                    <cell title="商品金额">
                        <div slot="value" class="text-danger">
                            ￥5354.00
                        </div>
                    </cell>
                    <cell title="运费" class="text-danger">
                        <div slot="value" class="text-danger">
                            ￥0.00
                        </div>
                    </cell>
                </div>
            </card>

            <div slot="bottom" class="fixed-bottom">
                <div class="order-price text-danger">
                    实付款：<span class="pay-money">￥<span class="big-price">5354</span>.00</span>
                </div>
                <div class="pay-btn bg-danger">
                    提交订单
                </div>
            </div>
        </view-box>
    </div>
</template>

<script>
    import {ViewBox, Card, CheckIcon, XHeader, Cell, CellBox} from 'vux';

    export default {
        components: {
            ViewBox,
            Card,
            XHeader,
            Cell,
            CellBox
        }
    }
</script>
<style lang="less">
.address-wrap{
    background-color: #fff;
    padding: 10px;
}
.fa-map-marker{
    color: #232326;
}
.address-icon{
    padding-right: 15px;
}
.address-name{
    display: inline-block;
    font-weight: 700;
    font-size: 14px;

    span{
        margin-left: 35px;
        &:first-child{
            margin-left: 0;
        }
        &.address-default{
            font-weight: 400;
            font-size: 12px;
            color: #f23030;
            border: 1px solid #f23030;
            padding: 1px 4px;
            border-radius: 2px;
            margin-left: 15px;
        }
    }
}
.address-detail{
    font-size: 12px;
}
.address-border{
    height: 3px;
    background: url(../../assets/location-border.png) repeat-x;
    background-size: 80px 4px;
}
.goods-image{
    flex: 1;
    img{
        width: 50px;
        margin-right: 5px;
    }
}
.weui-cell_access.vux-cell-box.goods-info{
    padding-right: 30px;
    font-size: 12px;
}
.weui-cell{
    font-size: 13px;
}

.fixed-bottom{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 55px;
    background: #fff;
    display: flex;
    >div{
        height: 100%;
    }
    .pay-btn{
        width: 30%;
        line-height: 55px;
        color: #fff;
        text-align: center;
        padding: 0 1rem;
    }
    .order-price{
        flex: 1;
        line-height: 55px;
        text-align: right;
        padding-right: 30px;
    }
    .pay-money{
        font-size: 11px;
        margin: 0 5px;
        .big-price{
            font-size: 14px;
        }
    }
}
</style>
