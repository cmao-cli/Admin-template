import { Api } from './index';

// order
export const getOrders = (params) => Api.get('/orders', { params });
export const getOrderLogs = (params) => Api.get(`/orders/logs`, { params });
export const getOrderDetail = (orderId:string) => Api.get(`/orders/${orderId}/details`);
export const getReviewOrders = (params) => Api.get('/orders/reviews', { params });
export const updateOrderReview = (orderId:string, params) => Api.patch(`/orders/${orderId}/review`, params);
