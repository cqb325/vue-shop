<template>
    <card>
        <div slot="header" class="shop-title" style="padding: 0 10px;">
            <check-icon :value.sync="checked" @update:value="checkSub">{{shop.shopName}}</check-icon>
        </div>
        <ul slot="content">
            <li v-for="prod in shop.products" :key="prod.id">
                <cart-prod :prod="prod" @change="checkProduct"
                    @on-total-price="onTotalPrice"
                    :ref="'prod'+prod.id"></cart-prod>
            </li>
        </ul>
    </card>
</template>

<script>
    import {Card, CheckIcon} from 'vux';

    export default{
        name: 'cart-shop',
        components: {
            Card,
            CheckIcon
        },
        props: {
            shop: Object
        },
        data: function(){
            return {
                checkedNum: this.shop.products.length,
                checked: true,
                total: 0
            }
        },
        methods: {
            checkProduct: function(checked){
                if(checked){
                    this.checkedNum += 1;
                }else{
                    this.checkedNum -= 1;
                }
                this.checked = (this.checkedNum === this.shop.products.length);
                this.onTotalPrice();
            },

            checkSub: function(checked){
                for(let i in this.$refs){
                    this.$refs[i][0].setChecked(checked);
                }
            },

            onTotalPrice: function(){
                let total = 0;
                for(let i in this.$refs){
                    let prod = this.$refs[i][0];
                    if(prod.getChecked()){
                        total += prod.getTotal();
                    }
                }

                this.total = total;
                this.$emit('totalChange', this.total);
            },

            getTotal: function(){
                return this.total;
            },

            isChecked(){
                return this.checked;
            },

            getAllProdNumber(){
                let total = 0;
                for(let i in this.$refs){
                    let prod = this.$refs[i][0];
                    if(prod.getChecked()){
                        total += prod.getNumber();
                    }
                }

                return total;
            }
        },

        watch: {
            checked: function(newChecked){
                this.$emit("checkChange", newChecked);
            }
        }
    }
</script>
