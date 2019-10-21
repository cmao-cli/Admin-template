
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

// 订单来源
export enum EPlatform {
  TMALL = '天猫',
  JD = '京东',
  YOUZAN = '有赞',
  CODEMAO = '自营',
}

// 付款类型
export enum EPayment {
  DEPOSIT = '订金',
  FULL = '全款',
  DEPOSIT_FINAL = '订金-尾款',
}

// 支付方式
export enum EPaymentMethod {
  WXPAY = '微信',
  ALIPay = '支付宝',
}

// 详情支付状态
export enum EPaymentState {
  SUCCESS = '付款成功',
}

export const OrderInfoMap = {
  'DEPOSIT': 'depositOrderInfo',
  'NORMAL': 'normalOrderInfo',
};

// 发货方式
export enum EShippingMethod {
  REAL_LOGISTICS = '实物',
  LESSON_TICKET = '课时券',
  HUNDRED_YUAN_CLASS = '课时券（赠券）',
  LESSON_TICKET_GIFT  = '账号授权',
}

// 发货状态
export enum EShippingStatus {
  WAITING = '待发货',
  SUCCESS = '发货成功',
  PROCESSING = '发货中',
  CANCELED = '取消发货',
  FAILED = '发货失败',
}

// 发货类型
export enum EShippingType {
  VIRTUAL = '虚拟发货',
  REAL = '实物',
}

// 审核状态
export enum EReviewState {
  AWAITING_REVIEW = '待系统审核',
  SYSTEM_REVIEW_FAILED = '待人工审核',
  MANUALLY_REVIEWING = '人工审核中',
  MANUAL_REVIEW_FAILED = '人工审核不通过',
  REVIEW_PASSED = '审核通过',
}

// 日志类型
export enum ELogType {
  SYSTEM = '系统日志',
  OPERATION = '操作日志',
}

// 订金状态
export enum  DepositOrderState {
  UNUSED = '未使用',
  ASSOCIATED = '已占用',
  USED = '已使用',
}

export enum EOrderSorts {
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  ORDER_ID_ASC = 'ORDER_ID_ASC',
  ORDER_ID_DESC = 'ORDER_ID_DESC',
  PLACED_AT_ASC = 'PLACED_AT_ASC',
  PLACED_AT_DESC = 'PLACED_AT_DESC',
}
