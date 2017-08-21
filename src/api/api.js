import fetch from './fetch';

// Search
export const search = (params) => fetch ('/catalog/products', params);

// login
export const login = (params) => fetch ('/user/login', params);

export const getCartProducts = (ids) => fetch ('/cart/getAll', {ids: ids});
export const createOrder = (data) => fetch ('/order/createOrder', data);
export const getAddressList = (user_id) => fetch ('/address/getAddressList', {user_id: user_id});
export const getAddress = (id) => fetch ('/address/getAddress', {id: id});
export const saveAddress = (address) => fetch ('/address/saveAddress', address);
export const addAddress = (address) => fetch ('/address/addAddress', address);
