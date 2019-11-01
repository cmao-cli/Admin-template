import * as React from 'react';
import * as Loadable from 'react-loadable';
import { Spin } from 'antd';

export interface IMenuDataItem {
  path:string;
  name:string;
  children?:IMenuDataItem[];
  icon?:string;
}
const MyLoadingComponent = ({ isLoading, error }:any) => {
  if (isLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}><Spin/></div>;
  } else if (error) {
    // 如果页面本身出现问题，可以将error信息打印在控制台中查看
    console.error(error);
    return <div>Sorry, there was a problem loading the page.</div>;
  } else {
    return null;
  }
};
export const _loadable = (loadFunc:any) => {
  return Loadable({
    loader: loadFunc,
    loading: MyLoadingComponent,
    delay: 200,
  });
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
    component: _loadable(() => import('./order/order_list/index')),
    exact: true,
    name: '订单列表',
  },
];
