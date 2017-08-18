<template>
    <div style="height: 100%;">
        <view-box body-padding-bottom="55px">
            <x-header slot="header">
                收货地址
            </x-header>
            <div>
                <cell-box v-for="address in addressList" :key="address.key" class="weui-cell">
                    <div class="weui-cell__ft" v-if="address.selected">
                        <icon type="success-no-circle"></icon>
                    </div>
                    <div class="address-info">
                        <div class="address-name">
                            <span>{{address.name}}</span>
                            <span>{{address.mobile}}</span>
                            <span v-if="address.isDefault" class="address-default">默认</span>
                        </div>
                        <div class="address-detail">
                            {{address.address}}
                        </div>
                    </div>
                    <div class="edit-wrap vux-1px-l">
                        <i class="fa fa-edit"></i>
                    </div>
                </cell-box>
            </div>
            <div slot="bottom" class="fixed-bottom">
                <x-button type="warn" style="border-radius: 0;">
                    <x-icon type="ios-plus-empty" class="mr-5" size="20"></x-icon>
                    <span>新增地址</span>
                </x-button>
            </div>
        </view-box>
    </div>
</template>

<script>
    import {ViewBox, XHeader, CellBox, Icon, XButton} from 'vux';
    export default {
        components: {
            ViewBox,
            XHeader,
            CellBox,
            Icon,
            XButton
        },

        data: function(){
            return {
                value: 'id1',
                addressList: [
                    {
                        name: 'xxx',
                        key: 0,
                        value: 'id1',
                        mobile: '18867101111',
                        isDefault: true,
                        address: '撒大声大声大声大声大声大声大声大声的地方的股份格瑞特让他',
                        selected: true
                    },
                    {
                        name: 'xxx',
                        key: 1,
                        value: 'id2',
                        mobile: '18867101111',
                        isDefault: false,
                        address: 'xxxxxxasdasdsad',
                    }
                ]
            };
        }
    }
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';

.fixed-bottom{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: #fff;
    display: flex;
    .weui-btn{
        font-size: 16px;
    }
}
.address-item{
    display: flex;
}
.edit-wrap{
    height: 100%;
    width: 15%;
    font-size: 18px;
    text-align: center;
}
.address-info{
    font-size: 13px;
    padding-right: 15px;
    flex: 1;
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
.weui-cell__ft{
    padding-right: 10px;
    .weui-icon-success-no-circle{
        font-size: 20px;
    }
}
.vux-x-icon-ios-plus-empty{
    position: relative;
    top: 4px;
    fill: #fff;
}
</style>
