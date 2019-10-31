import { OptionProps } from 'antd/lib/select/index';
import { EColor } from 'src/components/status-label';

// 订单状态
export const OrderStatus:OptionProps[] = [
  {
    title:'待审核',
    value:'AWAITING_REVIEW',
  },
  {
    title:'待支付',
    value:'AWAITING_PAYMENT',
  },
  {
    title:'待校验',
    value:'AWAITING_CHECK',
  },
  {
    title:'待发货',
    value:'AWAITING_SHIPPING',
  },
  {
    title:'已完成',
    value:'COMPLETED',
  },
  {
    title:'已取消',
    value:'CANCELLED',
  },
  {
    title:'已关闭',
    value:'CLOSED',
  },
];

// 订单类型
export const OrderTypes:OptionProps[] = [
  {
    title: '订金',
    value: 'DEPOSIT',
  },
  {
    title: '普通商品',
    value: 'NORMAL',
  },
];

// 付款模式
export const PaymentOptions:OptionProps[] = [
  {
    title: '全款',
    value: 'FULL',
  },
  {
    title: '订金-尾款',
    value: 'DEPOSIT_FINAL',
  },
  {
    title: '订金',
    value: 'DEPOSIT',
  },
];

export const orderStateColorMap = {
  'AWAITING_REVIEW': EColor.blue,
  'AWAITING_PAYMENT': EColor.blue,
  'AWAITING_CHECK': EColor.yellow,
  'AWAITING_SHIPPING': EColor.yellow,
  'AWAITING_CONFIRMATION': EColor.yellow,
  'COMPLETED': EColor.green,
  'CANCELLED': EColor.red,
  'CLOSED': EColor.red,
};