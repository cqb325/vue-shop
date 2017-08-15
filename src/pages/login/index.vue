<template>
    <div>
        <x-header>登录</x-header>
        <group>
            <x-input title="账号" placeholder="账号/邮箱/手机号" ref="username" required :show-clear="false"></x-input>
            <x-input title="密码" placeholder="输入正确的密码" ref="password" type="password" required :show-clear="false"></x-input>
        </group>
        <box gap="10px 10px">
            <x-button disabled>登 录</x-button>
        </box>

        <divider>其他登录方式</divider>
    </div>
</template>

<script>
import { XHeader, Group, XInput, XButton, Box, Divider } from 'vux'
export default {
    components: {
        XHeader,
        Group,
        XInput,
        XButton,
        Box,
        Divider
    },
    data: function(){
        return {

        };
    }
}
</script>
