import * as React from 'react';
import { useEffect, Fragment, useState } from 'react';
import { getOrderDetail } from 'src/api/admin';
import useFetchHook from 'src/hooks/useFetchHook';
import CustomerInfo from '../customer_info';
import OrderInfo, { IOrderInfo } from '../order_info';
import ProductsInfo from '../products_info';
import PaymentsInfo from '../payment_info';
import ShippingsInfo from '../shipping_info';
import { Tabs, message } from 'antd';
import { OrderInfoMap } from 'src/router/order/type';
import styles from '../../index.scss';

interface IOrderDetailInfoProps {
  id:string;
}

export type ComponentItem = {
  title:string;
  Component:React.ComponentType<any>,
  props:object;
};
const isEmpty = (value) => {
  if (!value) {
    return true;
  }
  if (Array.isArray(value)) {
    return !value.length;
  }
};
const isPropsEmpty = (props:object) => {
  const result = Object.keys(props).every((attr) => isEmpty(props[attr]) );
  return result;
};

export const renderComponent = (item:ComponentItem) : React.ReactNode => {
  // 当数据为空的时候不展示对应的组件
  const { title, Component, props: componentProps } = item;
  if (isPropsEmpty(componentProps)) {
    return;
  }
  return (
    <div key={title} className={styles.item_wrap}>
      <h1>{title}</h1>
      <div className={styles.content}>
        <Component {...componentProps}/>
      </div>
    </div>
  );
};

const OrderDetailInfo:React.FunctionComponent<IOrderDetailInfoProps> = (props) => {
  const { id } = props;

  const [ orderData ] = useFetchHook(getOrderDetail, id);

  const parseOrderDetail = () => {
    if (!orderData) {
      return {};
    }
    const { orderType, orderId, platform, associatedOrderIds, placedAt, placedBy, state } = orderData;
    const orderDetail = orderData[OrderInfoMap[orderType]];
    const { thirdPartyOrderId, totalDiscount, depositOrderState } = orderDetail;
    return {
      orderInfo:{
        orderId,
        state,
        platform,
        placedBy,
        associatedOrderIds,
        depositOrderState,
        placedAt,
        thirdPartyOrderId,
        totalDiscount,
      },
      ...orderDetail,
    };
  };

  const { orderInfo = {}, productInfo, paymentInfo, shippingInfo, customerInfo = {}, shippingAddressInfo = {} } = parseOrderDetail();
  const componentItems:ComponentItem[] = [
    {
      title: '订单信息',
      Component: OrderInfo,
      props: { orderInfo },
    },
    {
      title: '商品信息',
      Component: ProductsInfo,
      props: { productsInfo: productInfo },
    },
    {
      title: '支付信息',
      Component: PaymentsInfo,
      props: { paymentInfo },
    },
    {
      title: '发货信息',
      Component: ShippingsInfo,
      props: { shippingInfo },
    },
    {
      title: '客户信息',
      Component: CustomerInfo,
      props: { customerInfo, addressInfo: shippingAddressInfo },
    },
  ];
  return (
    <div className={styles.pane_wrap}>
      {
        componentItems.map((component) => renderComponent(component))
      }
    </div>
  );
};

export default OrderDetailInfo;
