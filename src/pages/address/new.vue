<template>
    <div style="height: 100%;">
        <view-box body-padding-bottom="55px">
            <x-header slot="header">
                新增收货地址
            </x-header>
            <group label-width="4.5em" label-margin-right="2em" label-align="right">
                <x-input title="收货人:" v-model="address.name"></x-input>
                <x-input title="手机号码:" v-model="address.mobile"></x-input>
                <x-address title="所在地区" v-model="address.address" raw-value :list="addressData" value-text-align="left"></x-address>
                <x-textarea title="详细地址" v-model="address.addressInfo" placeholder="请填写详细地址" :show-counter="false" :rows="2"></x-textarea>
                <x-switch title="默认地址" v-model="address.isDefault"></x-switch>
            </group>

            <div slot="bottom" class="fixed-bottom">
                <x-button type="warn" style="border-radius: 0;" action-type="button" @click.native="save">
                    <span>保存并使用</span>
                </x-button>
            </div>
        </view-box>
        <div v-transfer-dom>
            <alert v-model="updateFail" :title="'提示'">{{msg}}</alert>
        </div>
    </div>
</template>

<script>
import {ViewBox, XHeader, CellBox, Icon, XButton, Group,
    XInput, XAddress, ChinaAddressData, XTextarea, XSwitch, Alert, TransferDomDirective as TransferDom
} from 'vux';
import {mapActions, mapState} from 'vuex';

export default {
    directives: {
        TransferDom
    },
    components: {
        ViewBox,
        XHeader,
        CellBox,
        Icon,
        XButton,
        Group,
        XInput,
        XAddress,
        XTextarea,
        XSwitch,
        Alert
    },

    data: function(){
        return {
            addressData: ChinaAddressData,
            msg: '保存失败',
            updateFail: false
        }
    },

    created: function(){
        this.clear();
    },

    computed: {
        ...mapState({
            address: state => state.address.address
        })
    },

    methods: {
        ...mapActions([
            'clear', 'addAddress'
        ]),

        save: function(){
            let {name, mobile} = this.address;
            if(!name){
                this.showTip("请填写收货人姓名");
                return;
            }
            if(!mobile){
                this.showTip("请填写手机号码");
                return;
            }
            this.addAddress({
                success: ()=>{
                    this.$router.back();
                },
                fail: ()=>{
                    this.showTip("保存失败");
                }
            });
        },

        showTip(msg){
            this.updateFail = true;
            this.msg = msg;
        }
    }
}
</script>

<style lang="less">
.weui-cells{
    margin-top: 0!important;
}
.fixed-bottom{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: #fff;
    display: flex;
}
</style>
