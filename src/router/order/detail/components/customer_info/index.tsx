import * as React from 'react';
import { Row, Col } from 'antd';
import styles from './index.scss';
interface ICustomerInfoProps {
  customerInfo:object;
  addressInfo:object;
}

const customerItems = [
  {
    title: '客户姓名',
    key: 'customer',
  },
  {
    title: '客户电话',
    key: 'customerPhoneNumber',
  },
  {
    title: '客户ID',
    key: 'customerId',
  },
];
const addressItems = [
  {
    title: '收件人ID',
    key: 'consigneeId',
  },
  {
    title: '收件人姓名',
    key: 'consignee',
  },
  {
    title: '手机号',
    key: 'consigneePhoneNumber',
  },
  // {
  //   title: '收货地址',
  //   key: 'shippingAddress',
  // },
];
const renderItem = (item, data) => {
  return (
    <Col span={6} key={item.key}>
      <span>{item.title}: </span>
      <span>{data[item.key] || '--'}</span>
    </Col>
  );
};
const CustomerInfo:React.FunctionComponent<ICustomerInfoProps> = (props) => {
  return (
    <div className={styles.customer_wrap}>
      <h3>基本信息</h3>
      <Row style={{marginBottom: 40 }}>
        {customerItems.map((item) => renderItem(item, props.customerInfo))}
      </Row>
      {!!Object.keys(props.addressInfo).length && (
        <React.Fragment>
          <h3>收件信息</h3>
          <Row>
            {addressItems.map((item) => renderItem(item, props.addressInfo))}
          </Row>
          <Row style={{marginBottom: 40, marginTop: 16}}>
            <Col>
              <span>{'收货地址'}: </span>
              <span>{props.addressInfo['shippingAddress'] || '--'}</span>
            </Col>
          </Row>
        </React.Fragment>
      )}
    </div>
  );
};

export default CustomerInfo;
