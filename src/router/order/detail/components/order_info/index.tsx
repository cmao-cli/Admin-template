// 订单信息
import * as React from 'react';
import { Row, Col } from 'antd';
import { EOrderStatus, EPlatform, DepositOrderState } from 'src/router/order/type';
import { formatUnix, getEnumLabel } from 'src/utils/base';

export interface IOrderInfo {
  orderId:string;
  state:EOrderStatus;
  platform:EPlatform;
  placedBy:string;
  associatedOrderIds:string[];
  depositOrderState:string;
  placedAt:number;
  thirdPartyOrderId:string;
  totalDiscount:string;
}
enum EOrderItemType {
  enums = 'enums',
  date = 'date',
  array = 'array',
}
interface IOrderItem {
  label:string;
  key:string;
  type?:string;
  enums?:object;
  span?:number;
}
interface IOrderInfoProps {
  orderInfo:IOrderInfo;
}

const orderInfoItems:IOrderItem[] = [
  {
    label: '订单编号',
    key: 'orderId',
  },
  {
    label: '订单状态',
    key: 'state',
    type: 'enums',
    enums: EOrderStatus,
  },
  {
    label: '订单来源',
    key: 'platform',
    type: 'enums',
    enums: EPlatform,
  },
  {
    label: '第三方订单编号',
    key: 'thirdPartyOrderId',
  },
  {
    label: '订金状态',
    key: 'depositOrderState',
    type: 'enums',
    enums: DepositOrderState,
  },
  {
    label: '创建人',
    key: 'placedBy',
  },
  {
    label: '创建时间',
    key: 'placedAt',
    type:'date',
  },
  {
    label: '关联订单号',
    key: 'associatedOrderIds',
    type: 'array',
    span: 8,
  },
];

const OrderInfo:React.FunctionComponent<IOrderInfoProps> = (props) => {
  const { orderInfo } = props;

  const renderItem = (item:IOrderItem) : React.ReactNode => {
    const { key, label, type, enums, span } = item;
    // 当值为空的时候不显示该字段
    if (orderInfo.hasOwnProperty(key) && !orderInfo[key]) {
      return;
    }
    let content = orderInfo.hasOwnProperty(key) ? orderInfo[key] : '';
    switch (type) {
      case EOrderItemType.enums:
        content = enums[content];
        break;
      case EOrderItemType.array:
        content = content && (content.join(',') || '--');
        break;
      case EOrderItemType.date:
        content = formatUnix(content);
        break;
      default:
        break;
    }
    return (
      <Col style={{marginBottom: 21}} span={span || 6} key={item.key}>
        <React.Fragment>
          <span>{label}: </span>
          <span>{content}</span>
        </React.Fragment>
      </Col>
    );
  };
  return (
    <div>
      <Row>
        {
          orderInfoItems.map((item) => renderItem(item))
        }
      </Row>
      {
        !!orderInfo.totalDiscount && (
          <Row style={{borderTop: '1px solid #eee'}}>
            <Col span={6} style={{marginTop: 24}}><span>优惠金额：</span><span>{`¥${orderInfo.totalDiscount}`}</span></Col>
            <Col span={6} style={{marginTop: 24}}><span>优惠方式：</span><span>代开单优惠</span></Col>
          </Row>
        )
      }
    </div>
  );
};

export default OrderInfo;
