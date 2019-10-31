import * as React from 'react';
import CommonTable from 'src/components/CommonTable';
import { EOrderStatus, OrderTypes, EPlatform } from 'src/pages/order/type';
import StatusLabel from 'src/components/StatusLabel';
import { orderStateColorMap } from 'src/pages/order/constant';
interface IOrderTableProps {
  onPageChange:(pageObj:IObject) => void;
  loading:boolean;
  data:any[];
  total:number;
  current:number;
  pageSize:number;
}
const columns = [
  {
    title:'订单编号',
    dataIndex:'orderId',
    type:'link',
    path:'/order/list/detail?',
  },
  {
    title:'客户ID',
    dataIndex:'customerId',
  },
  {
    title:'客户手机号',
    dataIndex:'customerPhoneNumber',
    type: 'phone',
  },
  {
    title:'客户姓名',
    dataIndex:'customer',
    width: 180,
    type: 'omit',
  },
  {
    title:'订单金额',
    dataIndex:'subtotal',
    type:'price',
    width: 150,
  },
  {
    title:'应付金额',
    dataIndex:'total',
    type:'price',
    width: 150,
  },
  {
    title:'订单状态',
    dataIndex:'state',
    render: (status:EOrderStatus, record:IObject) => <StatusLabel statusNameMap={EOrderStatus} statusColorMap={orderStateColorMap} status={status} />,
  },
  {
    title:'订单类型',
    dataIndex:'orderType',
    type: 'enums',
    enums: OrderTypes,
    width: 120,
  },
  {
    title:'订单来源',
    dataIndex:'platform',
    type: 'enums',
    enums: EPlatform,
    width: 100,
  },
  {
    title:'下单时间',
    dataIndex:'placedAt',
    type: 'date',
    width: 100,
  },
  {
    title:'课时券单价',
    dataIndex:'ticketUnitPrices',
    type: 'price',
  },
];

const OrderTable:React.FunctionComponent<IOrderTableProps> = (props) => {
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

export default OrderTable;
