import * as React from 'react';
import CommonTable, { CommonColumn } from 'src/components/CommonTable';

export interface IProductInfo {
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

const columns:CommonColumn<IProductInfo>[] = [
  {
    title: 'SKU编号',
    dataIndex: 'skuNumber',
  },
  {
    title: '商品名称',
    dataIndex: 'title',
    type: 'omit',
  },
  {
    title: '规格名称',
    dataIndex: 'skuName',
  },
  {
    title: '数量',
    dataIndex: 'quantity',
  },
  {
    title: '商品指导价',
    dataIndex: 'price',
    type: 'price',
  },
  {
    title: '商品优惠',
    dataIndex: 'discount',
    type: 'price',
  },
  {
    title: '课时券单价',
    dataIndex: 'ticketUnitPrice',
    type: 'price',
  },
  {
    title: '商品结算价',
    dataIndex: 'unitPrice',
    type: 'price',
  },
  {
    title: '商品金额',
    dataIndex: 'subtotal',
    type: 'price',
  },
];
export default function ProductsInfo (props:{productsInfo:IProductInfo[]}) {
  return (
    <CommonTable
      columns={columns}
      noPage={true}
      rowKey={'skuNumber'}
      data={props.productsInfo}
    />
  );
}
