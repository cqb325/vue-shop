<template>
    <div>
        <x-header>登录</x-header>
        <group>
            <x-input title="账号" v-model="username" placeholder="账号/邮箱/手机号" ref="username" required :show-clear="false"></x-input>
            <x-input title="密码" v-model="password" placeholder="输入正确的密码" ref="password" type="password" required :show-clear="false"></x-input>
        </group>
        <box gap="10px 10px">
            <x-button :disabled="disabled" @click.native="doLogin">登 录</x-button>
        </box>

        <divider>其他登录方式</divider>
        <flexbox align="center" justify="center" class="login-types mt-30">
            <flexbox-item :span="1/3"></flexbox-item>
            <flexbox-item :span="1/6" class="text-center text-blue"><i class="fa fa-qq"></i></flexbox-item>
            <flexbox-item :span="1/6" class="text-center text-blue"><i class="fa fa-weixin"></i></flexbox-item>
            <flexbox-item :span="1/3"></flexbox-item>
        </flexbox>

        <div v-transfer-dom>
            <loading :show="loading" text="登录中..."></loading>
        </div>
    </div>
</template>

<script>
import { XHeader, Group, XInput, XButton, Box, Divider, Flexbox, FlexboxItem, TransferDomDirective as TransferDom, Loading } from 'vux'
import { mapState, mapActions } from 'vuex';
export default {
    directives: {
        TransferDom
    },
    components: {
        XHeader,
        Group,
        XInput,
        XButton,
        Box,
        Divider,
        Flexbox,
        FlexboxItem,
        Loading,
    },
    data: function(){
        return {
            username: '',
            password: '',
            loading: false
        };
    },
    computed: {
        disabled: function(){
            if(this.username !== '' && this.password !== ''){
                return false;
            }
            return true;
        }
    },

    methods: {
        ...mapActions([
            'login'
        ]),
        doLogin: function(){
            this.loading = true;
            window.setTimeout(()=>{
                this.login({
                    username: this.username,
                    password: this.password,
                    callback: ()=>{
                        this.loading = false;
                        window.location.href =  "#"+this.$route.query.dir;
                    }
                });
            }, 1000);
        }
    }
}
</script>

<style lang="less">
@import "../../assets/css/base.less";

.text-center{
    text-align: center;
    vertical-align: middle;
}
.login-types{
    font-size: 25px;
}
</style>
