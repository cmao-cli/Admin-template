import { API, ACCOUNT } from './http';

// 账号
export const getUserInfo = () => ACCOUNT.get('/auth/info');

// order
export const getOrders = (params) => API.get('/orders', { params });
export const getOrderLogs = (params) => API.get(`/orders/logs`, { params });
export const getOrderDetail = (orderId:string) => API.get(`/orders/${orderId}/details`);
export const getReviewOrders = (params) => API.get('/orders/reviews', { params });
export const updateOrderReview = (orderId:string, params) => API.patch(`/orders/${orderId}/review`, params);
