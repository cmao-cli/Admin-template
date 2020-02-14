import * as React from 'react';
import { Suspense, lazy } from 'react';
import { Spin } from 'antd';
import { ErrorBoundary } from 'src/components/error-boundary';
import { Route } from '@ant-design/pro-layout/lib/typings';

export const _lazy = (loadFunc:() => Promise<any>) => {
  const Component = lazy(loadFunc);
  // eslint-disable-next-line react/display-name
  return () => (
    <ErrorBoundary>
      <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}><Spin/></div>}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  );
};

// 用于BasicLayouts生成路由
export const routerData = [
  {
    path: '/order/list',
    component: _lazy(() => import('./order/order-list/index')),
    exact: true,
    name: '订单列表',
  },
  {
    path: '/demo',
    component: _lazy(() => import('./demo/index')),
    exact: true,
    name: 'redux-demo',
  },
];

export const menuData:Route = {
  routes: [
    {
      name: '订单管理',
      icon: 'shopping',
      path: '/order',
      children: [
        {
          name: '订单总览',
          path: '/order/list',
        },
        {
          name: 'redux-demo',
          path: '/demo',
        },
      ],
    },
  ],
};
