<template>
    <div style="height: 100%">
        <div>
            <x-header style="background-color:#EFEFF4;">
                <search position="absolute" :auto-fixed="true" ref="search"
                    v-model="keyword" slot="overwrite-title" @on-submit="doSearch"
                    @on-cancel="cancleSearch" />
            </x-header>
        </div>
        <div class="list-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px', overflow: 'scroll' }">
            <loadmore ref="loadmore" :top-method="reSearch" @top-status-change="handleTopChange"
                :bottom-method="loadNext" @bottom-status-change="handleBottomChange"
                :bottom-all-loaded="isAllLoaded">
                <div>
                    <div class="weui-panel__bd" v-show="list" v-for="item in list" :key="item.id">
                        <a class="weui-media-box weui-media-box_appmsg" :href="'/product/' + item.id">
                            <div class="weui-media-box__hd">
                                <img :src="item.src" alt="" class="weui-media-box__thumb">
                            </div>
                            <div class="weui-media-box__bd">
                                <h4 class="weui-media-box__title">{{item.title}}</h4>
                                <p class="weui-media-box__price">
                                    <em class="real"><span class="price-icon">¥</span><span class="font-num">{{item.price}}</span></em>
                                    <del><span class="price-icon">¥</span><span class="font-num">{{item.delPrice}}</span></del>
                                </p>
                                <div class="d-main">
                                    <p class="d-freight">{{item.freight}}</p><p class="d-num"><span class="font-num">{{item.num}}</span>人付款</p><p class="d-area">{{item.area}}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div slot="top" class="mint-loadmore-top">
                    <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
                    <span v-show="topStatus === 'loading'">
                        <spinner type="triple-bounce"></spinner>
                    </span>
                </div>
                <div slot="bottom" class="mint-loadmore-bottom">
                    <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
                    <span v-show="bottomStatus === 'loading'">
                        <spinner type="snake"></spinner>
                    </span>
                </div>
            </loadmore>
        </div>
    </div>
</template>
<script>
import { Search, ViewBox, XHeader } from 'vux';
import {Loadmore, Spinner} from 'mint-ui';
import { mapState, mapActions } from 'vuex';
export default {
    components: {
        Search,
        ViewBox,
        Loadmore,
        XHeader,
        Spinner
    },
    computed: {
        ...mapState({
            list: state => state.catalog.list,
            bottomStatus: state => state.catalog.bottomStatus,
            topStatus: state => state.catalog.topStatus,
            isAllLoaded: state => state.catalog.isAllLoaded
        }),
        keyword: {
            get (state){
                return this.$store.state.catalog.keyword;
            },
            set (str){
                this.keywordChange(str);
            }
        }
    },
    data: function () {
        return {
            wrapperHeight: 0
        }
    },
    mounted: function mounted() {
        this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    },
    methods: {
        ...mapActions([
          'search', 'searchNext', 'handleTopChange', 'handleBottomChange', 'keywordChange', 'cancleSearch'
        ]),

        cancleSearch: function(){
            window.setTimeout(()=>{
                this.doSearch();
            }, 10);
        },

        doSearch: function(){
            window.setTimeout(()=>{
                this.search({
                    callback: ()=>{
                        this.$refs.loadmore.onTopLoaded();
                    }
                });
            }, 100);
        },

        reSearch: function(){
            window.setTimeout(()=>{
                this.search({
                    callback: ()=>{
                        this.$refs.loadmore.onTopLoaded();
                    }
                });
            }, 1000);
        },

        loadNext: function(){
            window.setTimeout(()=>{
                this.searchNext({
                    callback: ()=>{
                        this.$refs.loadmore.onBottomLoaded();
                    }
                });
            }, 1000);
        }
    }
}
</script>
<style lang="less">
@import '~vux/src/styles/weui/widget/weui_media_box/weui_media_box';
@import '~mint-ui/lib/loadmore/style.css';
@import '~mint-ui/lib/spinner/style.css';
.weui-media-box_appmsg .weui-media-box__hd{
    width: 100px;
    height: 100px;
    line-height: 100px;
}
.weui-media-box__title{
    height: 56px;
    white-space: normal;
}
.weui-media-box__price{
    line-height: 24px;
    color: #999;
    .real{
        color: #eb5211;
        font-size: 16px;
        font-style: normal;
    }
    del{
        font-size: 10px;
        margin-left: 5px;
    }
}
.d-main{
    display: -webkit-box;
    margin-top: -1px;
    height: 20px;
    overflow: hidden;
    p{
        line-height: 24px;
        font-size: 12px;
        overflow: hidden;
        color: #999;
    }
    .d-num{
        -webkit-box-flex: 1;
        text-align: center;
    }
}
.mint-spinner {
  display: inline-block;
  vertical-align: middle;
}
.mint-loadmore-bottom{
    span{
        display: inline-block;
        transition: .2s linear;
        vertical-align: middle;
        &.is-rotate{
            transform: rotate(180deg);
        }
    }
}
</style>
