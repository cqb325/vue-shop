
const goodsNumber = (state) => {
    let cartGoods = state.app.cartGoods;
    let num = 0;
    console.log(cartGoods);
    for(let key in cartGoods){
        num += cartGoods[key];
    }
    console.log(num);
    return num;
}

export default {
    goodsNumber: goodsNumber
}
