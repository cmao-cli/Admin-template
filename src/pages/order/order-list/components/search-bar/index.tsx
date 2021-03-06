import * as React from 'react';
import { WithSearchForm, IFormItem } from 'src/components/with-search';
import { OrderStatus, OrderTypes, PaymentOptions } from 'src/pages/order/constant';
export interface ISearchBarProps {
  onSearch:(formValues:any) => void;
}

export function SearchBar (props:ISearchBarProps) {
  const searchItems:IFormItem[] = [
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
      <WithSearchForm
        formItem={searchItems}
        onSearch={props.onSearch}
      />
    </div>
  );
}
