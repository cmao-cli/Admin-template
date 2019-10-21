import * as React from 'react';
import { EPayment, EPaymentMethod, EPaymentState } from 'src/router/order/type';
import CommonTable, { CommonColumn } from 'src/components/CommonTable';

export interface IPaymentInfo {
  paidAt:number;
  paymentAmount:number;
  paymentId:string;
  paymentMethod:string;
  paymentOption:string;
  paymentStateEnum:string;
}

const columns:CommonColumn<IPaymentInfo>[] = [
  {
    title: '付款单号',
    dataIndex: 'paymentId',
  },
  {
    title: '付款金额',
    dataIndex: 'paymentAmount',
    type: 'price',
  },
  {
    title: '付款类型',
    dataIndex: 'paymentOption',
    type: 'enums',
    enums: EPayment,
  },
  {
    title: '支付方式',
    dataIndex: 'paymentMethod',
    type: 'enums',
    enums: EPaymentMethod,
  },
  {
    title: '支付状态',
    dataIndex: 'paymentStateEnum',
    type: 'enums',
    enums: EPaymentState,
  },
  {
    title: '时间',
    dataIndex: 'paidAt',
    type: 'date',
  },
];
export default function PaymentsInfo (props:{paymentInfo:IPaymentInfo[]}) {
  return (
    <CommonTable
      columns={columns}
      noPage={true}
      rowKey={'paymentId'}
      data={props.paymentInfo}
    />
  );
}
