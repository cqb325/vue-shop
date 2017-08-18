<template>
    <div style="height: 100%;" class="cart-page">
        <view-box body-padding-bottom="55px">
            <x-header slot="header">
                购物车
            </x-header>
            <cart-shop @checkChange="checkChange" @totalChange="totalChange" :ref="'shop_'+index" v-for="(elem, index) in goods" :key="index" :shop="elem"></cart-shop>

            <div slot="bottom" class="cart-btm-fixed">
                <flexbox :gutter="0" class="cart-info">
                    <flexbox-item class="settlement-info" :span="3/4">
                        <div class="check-all-wrap">
                            <check-icon :value.sync="allChecked">全选</check-icon>
                        </div>
                        <div class="cart-shop-info">
                            <strong class="shp-cart-total">合计:
                                <span class="shp-cart-price">¥{{total}}</span>
                            </strong>
                            <span>总额: ¥{{total}} 立减 ¥0.00</span>
                        </div>
                    </flexbox-item>
                    <flexbox-item :span="1/4"><div class='btn-settlement' @click="submit">去结算<span class="check-num">({{checkedNum}})</span></div></flexbox-item>
                </flexbox>
            </div>
        </view-box>
    </div>
</template>

<script>
    import {ViewBox, Card, CheckIcon, XNumber, XHeader, Flexbox, FlexboxItem} from 'vux';
    import {CartProduct, CartShop} from '../../components';
    import {mapActions, mapState} from 'vuex';

    export default{
        components: {
            ViewBox,
            Card,
            CheckIcon,
            XNumber,
            CartProduct,
            CartShop,
            XHeader,
            Flexbox,
            FlexboxItem
        },
        computed: {
            ...mapState({
                allChecked: state => state.cart.allChecked,
                checkedNum: state => state.cart.checkedNum,
                total: state => state.cart.total,
                goods: state => state.cart.goods,
            })
        },
        data: function(){
            return {

            };
        },

        mounted: function mounted() {
            this.getShopProducts();
        },

        methods: {
            ...mapActions([
                'updateCartTotal', 'updateCartNumber', 'updateAllChecked', 'getShopProducts', 'cartSettlement'
            ]),
            totalChange: function(){
                let aTotal = 0;
                let num = 0;
                for(let key in this.$refs){
                    aTotal += this.$refs[key][0].getTotal();
                    num += this.$refs[key][0].getAllProdNumber();
                }
                this.updateCartTotal(aTotal);
                this.updateCartNumber(num);
            },

            checkChange: function(checked){
                let checkedNum = 0;
                for(let key in this.$refs){
                    if(this.$refs[key][0].isChecked()){
                        checkedNum ++;
                    }
                }

                this.updateAllChecked(checkedNum === this.goods.length);
            },

            submit: function(){
                console.log(111);
                this.cartSettlement();
            }
        }
    }
</script>

<style lang="less">
.cart-page{
    font-size: 0.8rem;
}
.shop-title{
    height: 40px;
    line-height: 40px;
}
.cart-shop-info{
    flex: 1;
    text-align: left;
    padding-left: 10px;
    line-height: normal;
}
.check-all-wrap{
    width: 65px;
}
.goods-price-wrap .weui-cell{
    padding: 0;
    &:before{
        border-top: 0;
    }
    .vux-number-input{
        font-size: 13px;
    }
    .vux-number-selector-plus,
    .vux-number-selector-sub{
        padding: 1px 4px 2px 4px;
        svg{
            transform: scale(0.7);
        }
    }
    .vux-number-selector-plus{
        padding-top: 0;
    }
}
.cart-btm-fixed{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 55px;
    font-size: 12px;
}
.vux-flexbox-item{
    height: 100%;
    line-height: 55px;
    text-align: center;
}
.btn-settlement{
    color: #fff;
    background-color: #f23030;
    font-size: 16px;
    .check-num{
        font-size: 12px;
    }
}
.cart-info{
    background-color: #fff;
}
.settlement-info{
    height: 100%;
    display: flex;
}
.shp-cart-total{
    display: block;
    margin-top: 11px;
}
</style>
