import * as React from 'react';
import { Location } from 'history';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { routerData } from 'src/pages/routes';

import styles from './index.scss';

interface IBreadcrumbProps {
  location:Location;
  style?:React.CSSProperties;
}

const breadcrumbNameMap:IObject = {};
// routesData
routerData.forEach((item) => {
  breadcrumbNameMap[item.path] = item.name;
});

const MyBreadcrumb:React.FC<IBreadcrumbProps> = (props) => {
  const { location: { pathname }, style = {}} = props;
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