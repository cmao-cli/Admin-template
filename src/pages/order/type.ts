
// 订单类型
export enum OrderTypes {
  DEPOSIT = '订金', //订金订单
  NORMAL = '普通', //普通订单
}

// 订单状态
export enum EOrderStatus {
  AWAITING_REVIEW = '待审核',
  AWAITING_PAYMENT = '待支付',
  AWAITING_CONFIRMATION = '待确认收货',
  AWAITING_CHECK = '待校验',
  AWAITING_SHIPPING = '待发货',
  COMPLETED = '已完成',
  CANCELLED = '已取消',
  CLOSED = '已关闭',
}
