import * as React from 'react';
import { Location } from 'history';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { routerData } from 'src/router/routes';

import styles from './index.scss';

interface BreadcrumbProps {
  location:Location;
  style?:React.CSSProperties;
}

const breadcrumbNameMap = {};
// routesData
routerData.forEach((item) => {
  breadcrumbNameMap[item.path] = item.name;
});
// const breadcrumbNameMap = {
//   '/goods/activity': '限价商品活动',
//   '/goods/activity/add': '新增限价商品活动',
//   '/order/list': '订单列表',
//   '/order/list/detail': '订单详情',
//   '/order/discount': '订单优惠审批',
//   '/order/discount/review': '审核',
// };

const MyBreadcrumb:React.FC<BreadcrumbProps> = (props) => {
  const { location: { pathname }, style = {} } = props;
  const pathSnippets = pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    const activeColor = url === pathname ? { color: '#000000' } : {};
    return breadcrumbNameMap[url] && (
      <Breadcrumb.Item key={url}>
        <Link style={activeColor} to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  return (
    <div className={styles.bc_wrapper} style={style}>
      <Breadcrumb >
        {extraBreadcrumbItems}
      </Breadcrumb>
    </div>
  );
};

export default MyBreadcrumb;