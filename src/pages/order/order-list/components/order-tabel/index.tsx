import * as React from 'react';
import { CommonTable } from 'src/components/common-table';
import { OrderTypes } from 'src/pages/order/type';
interface IOrderTableProps {
  onPageChange:(pageObj:any) => void;
  loading:boolean;
  data:any[];
  total:number;
  current:number;
  pageSize:number;
}
const columns = [
  {
    title: '订单编号',
    dataIndex: 'orderId',
    type: 'link',
    path: '/order/list/detail?',
  },
  {
    title: '客户ID',
    dataIndex: 'customerId',
  },
  {
    title: '客户手机号',
    dataIndex: 'customerPhoneNumber',
  },
  {
    title: '客户姓名',
    dataIndex: 'customer',
    width: 180,
    type: 'omit',
  },
  {
    title: '订单金额',
    dataIndex: 'subtotal',
    type: 'price',
    width: 150,
  },
  {
    title: '订单类型',
    dataIndex: 'orderType',
    type: 'enums',
    enums: OrderTypes,
    width: 120,
  },
  {
    title: '下单时间',
    dataIndex: 'placedAt',
    type: 'date',
    width: 100,
  },
];

export const OrderTable:React.FunctionComponent<IOrderTableProps> = (props) => {
  const { loading, data, total, current, pageSize, onPageChange } = props;
  return (
    <CommonTable
      rowKey={'orderId'}
      loading={loading}
      columns={columns}
      data={data}
      total={total}
      current={current}
      pageSize={pageSize}
      onPageChange={(pageObj) => { onPageChange(pageObj); }}
    />
  );
};
