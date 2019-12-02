import * as React from 'react';
// import * as Loadable from 'react-loadable';
import { Suspense, lazy } from 'react';
import { Spin } from 'antd';
import { ErrorBoundary } from 'src/components/error-boundary';
export interface IMenuDataItem {
  path:string;
  name:string;
  children?:IMenuDataItem[];
  icon?:string;
}

export const _lazy = (loadFunc:() => Promise<any>) => {
  const Component = lazy(loadFunc);
  return () => (
      <ErrorBoundary>
        <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}><Spin/></div>}>
          <Component />
        </Suspense>
      </ErrorBoundary>
    );
};

// 左侧菜单数据
export let menuData:IMenuDataItem[] = [
  {
    name: '订单管理',
    icon: 'shopping',
    path: '/order',
    children: [
      {
        name: '订单总览',
        path: '/order/list',
      },
    ],
  },
];

// 用于BasicLayouts生成路由
export let routerData = [
  {
    path: '/order/list',
    component: _lazy(() => import('./order/order-list/index')),
    exact: true,
    name: '订单列表',
  },
];
