import fetch from './fetch';

// Search
export const search = (params) => fetch ('/catalog/products', params);
