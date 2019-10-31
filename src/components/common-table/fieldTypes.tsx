import { formatPrice, exceedAddOmit, formatUnix, formatPhone } from 'src/utils/base';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'antd';
import { CommonColumn } from './index';
// 1. 金额 price
// 2. 跳转链接 link
// 3. 状态显示
// 4. 传入一个enums返回对应的值 enums
// 5. 日期 date
// 6. 手机号 phone
/*
 * column类型定义
 */
interface FieldTypes {
  [key:string]:(value:any, column?:CommonColumn<any>) => number | string | JSX.Element;
}
const fieldTypes:FieldTypes = {
  normal: (value) => value,
  price: (value) => formatPrice(value),
  link: (value, { path }:IObject) => <Link to={`${path}id=${value}`}>{value}</Link>,
  date: (value) => formatUnix(value),
  enums: (value, { enums }:IObject) => enums[value],
  phone: (value) => <Tooltip trigger="click" title={value}><span style={{ cursor: 'pointer' }}>{formatPhone(value)}</span></Tooltip>,
  omit: (value) => <Tooltip title={value}><span>{exceedAddOmit(value, 8)}</span></Tooltip>,
  array: (value) => value.join(','),
};

export type FieldKeys = 'price' | 'link' | 'normal' | 'date' | 'enums' | 'phone' | 'omit' | 'array';

const getFieldValue = (value:any, column:any) => {
  let { type = 'normal' } = column;
  return fieldTypes[type](value, column);``
};
const transformColumns = (columns:any[]) => {
  return columns.map((column) => {
    let { render, ...others } = column;
    if (!render) {
      render = (value:any) => {
        return getFieldValue(value, column);
      };
    }
    return {
      ...others,
      render,
    };
  });
};
export default transformColumns;