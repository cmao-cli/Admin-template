import * as React from 'react';
import WithSearch, { FormItem } from 'src/components/WithSearch';
import { OrderStatus, OrderTypes, PaymentOptions } from 'src/router/order/constant';
export interface ISearchBarProps {
  onSearch:(formValues) => void;
}

export default function SearchBar (props:ISearchBarProps) {
  const searchItems:FormItem[] = [
    {
      key:'orderId',
      label:'订单编号',
    },
    {
      key:'customerPhoneNumber',
      label:'客户手机号',
    },
    {
      type:'select',
      key:'orderState',
      label:'订单状态',
      enums: OrderStatus,
    },
    {
      type:'select',
      key:'orderType',
      label:'订单类型',
      enums: OrderTypes,
    },
    {
      type:'select',
      key:'paymentOption',
      label:'付款模式',
      enums: PaymentOptions,
    },
  ];

  return (
    <div>
      <WithSearch
        formItem={searchItems}
        onSearch={props.onSearch}
      />
    </div>
  );
}
