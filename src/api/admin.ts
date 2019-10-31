import { Api } from './index';

// order
export const getOrders = (params:any) => Api.get('/orders', { params });
