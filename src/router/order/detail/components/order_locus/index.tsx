import * as React from 'react';
import { useState, useEffect } from 'react';
import CommonTable from 'src/components/CommonTable';
import { getOrderLogs } from 'src/services/api';
import { ELogType } from 'src/router/order/type';
import useFetchHook from 'src/hooks/useFetchHook';
import { EOrderSorts } from 'src/router/order/type';

export interface IOrderLocusProps {
  orderId:string;
}

const columns = [
  {
    title: '进度',
    dataIndex: 'remark',
  },
  {
    title: '进度类型',
    dataIndex: 'type',
    type: 'enums',
    enums: ELogType,
  },
  {
    title: '创建人',
    dataIndex: 'handledBy',
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    type: 'date',
  },
];

export default function OrderLocus (props:IOrderLocusProps) {
  const [ page, setPage ] = useState({ current: 1, limit: 10 });
  const { current, limit } = page;
  const params = {
    orderId: props.orderId,
    limit,
    page: current,
    // 按照创建时间倒序
    orderLogSorts: 'ID_DESC',
  };
  const [data, loading] =  useFetchHook(getOrderLogs, params, [], [page]);

  return (
    <CommonTable
      rowKey={'createdAt'}
      data={data.items}
      columns={columns}
      onPageChange={(pageObj) => { setPage(pageObj); }}
      current={current}
      pageSize={limit}
      total={data.total}
      loading={loading}
    />
  );
}
