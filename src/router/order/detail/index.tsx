import * as React from 'react';
import { Fragment } from 'react';
import OrderLocus from './components/order_locus';
import OrderDetailInfo, { renderComponent } from './components/order_detail';
import MyBreadcrumb from 'src/components/Breadcrumb';
import { parseQuery } from 'src/utils/base';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import styles from './index.scss';

interface IOrderDetailProps {
  location:any;
}

const OrderDetail:React.FunctionComponent<IOrderDetailProps> = (props) => {
  const id = parseQuery(props.location.search, 'id');
  return (
    <Fragment>
      <MyBreadcrumb location={props.location} style={{ paddingLeft: 16 }}/>
      <Tabs defaultActiveKey="1" className={styles.detail_content}>
        <TabPane tab="订单详情" key="1">
          <OrderDetailInfo id={id}/>
        </TabPane>
        <TabPane tab="订单进度" key="2">
          <div className={styles.pane_wrap}>
            {renderComponent({ title: '订单进度', Component: OrderLocus, props: { orderId: id }})}
          </div>
        </TabPane>
      </Tabs>
    </Fragment>
  );
};

export default OrderDetail;
