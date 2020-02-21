/* eslint-disable react/display-name */
import { formatPrice, exceedAddOmit, formatUnix } from 'src/utils/base';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'antd';
import { ICommonColumn } from './index';
// 1. 金额 price
// 2. 跳转链接 link
// 3. 状态显示
// 4. 传入一个enums返回对应的值 enums
// 5. 日期 date
// 6. 手机号 phone
/*
 * column类型定义
 */
interface IFieldTypes {
  [key:string]:(value:any, column?:ICommonColumn<any>) => number | string | JSX.Element;
}
const MAX_LENGTH = 8;
// type类型定义
const fieldTypes:IFieldTypes = {
  normal: (value) => value,
  price: (value) => formatPrice(value),
  link: (value, { path }:IObject) => <Link to={`${path}id=${value}`}>{value}</Link>,
  date: (value) => formatUnix(value),
  enums: (value, { enums }:IObject) => enums[value],
  omit: (value) => <Tooltip title={value}><span>{exceedAddOmit(value, MAX_LENGTH)}</span></Tooltip>,
  array: (value) => value.join(','),
};

export type FieldKeys = 'price' | 'link' | 'normal' | 'date' | 'enums' | 'phone' | 'omit' | 'array';

// 根据type获取render函数的返回值
const getFieldValue = (value:any, column:any) => {
  const { type = 'normal' } = column;
  return fieldTypes[type](value, column);
};

// 如果column中没有定义render函数，将type转换为render函数
export const transformColumns = (columns:any[]) => columns.map((column) => {
  let { render } = column;
  const { ...others } = column;
  if (!render) {
    render = (value:any) => getFieldValue(value, column);
  }
  return {
    ...others,
    render,
  };
});
