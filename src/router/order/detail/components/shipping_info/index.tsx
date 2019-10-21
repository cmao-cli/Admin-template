import * as React from 'react';
import { EShippingMethod, EShippingStatus, EShippingType } from 'src/router/order/type';
import CommonTable, { CommonColumn } from 'src/components/CommonTable';

export interface IShippingInfo {
  discount:number;
  price:number;
  quantity:number;
  skuName:string;
  skuNumber:string;
  subtotal:number;
  ticketUnitPrice:number;
  title:string;
  unitPrice:number;
}

const columns:CommonColumn<IShippingInfo>[] = [
  {
    title: '发货单号',
    dataIndex: 'shipmentId',
  },
  {
    title: '收货客户ID',
    dataIndex: 'consigneeId',
  },
  {
    title: '商品名称',
    dataIndex: 'title',
  },
  {
    title: '商品数量',
    dataIndex: 'quantity',
  },
  {
    title: '发货类型',
    dataIndex: 'shippingTypeEnum',
    type: 'enums',
    enums: EShippingType,
  },
  {
    title: '发货方式',
    dataIndex: 'shippingModeEnum',
    type: 'enums',
    enums: EShippingMethod,
  },
  {
    title: '发货状态',
    dataIndex: 'shippingStateEnum',
    type: 'enums',
    enums: EShippingStatus,
  },
  {
    title: '时间',
    dataIndex: 'shippedAt',
    type: 'date',
  },
];
export default function ShippingsInfo (props:{shippingInfo:IShippingInfo[]}) {
  return (
    <CommonTable
      columns={columns}
      noPage={true}
      rowKey={'skuNumber'}
      data={props.shippingInfo}
    />
  );
}
