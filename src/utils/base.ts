import * as moment from 'moment';

import { IMenuDataItem } from 'src/pages/routes';

/**
 * recursively flatten the data
 * @param menus
 */
export const getFlatMenuKeys = (menuData:IMenuDataItem[]):string[] => {
  let keys:string[] = [];
  menuData.forEach((item) => {
    keys.push(item.path);
    if (item.children && item.children.length) {
      keys = keys.concat(getFlatMenuKeys(item.children));
    }
  });
  return keys;
};

export const exceedAddOmit = (str:string, max:number) => {
  if (!str) {
    return;
  }
  return str.length > max ? `${str.slice(0, max) }...` : str;
};

export const formatPrice = (price:number | number[]) => {
  if (Array.isArray(price)) {
    return price.map((item) => `¥${item}`).join(',');
  }
  return price.toString().includes('.') ? `¥ ${price}` : `¥ ${price}.00`;
};

/**
 * 转换时间戳
 * @time 秒级时间戳
 */
export const formatUnix = (time:number) => moment(time * 1000).format('YYYY/MM/DD HH:mm:ss');

/**
 * 根据predicate函数删除对象某些项
 */
export const omitBy = <T extends IObject, K extends keyof T>
  (object:T, predicate:(value:T[K]) => boolean) => {
  if (typeof object !== 'object') {
    return object;
  }
  const newObject:Partial<T> = {};

  Object.keys(object).forEach((item) => {
    if (predicate(object[item])) {
      newObject[item as K] = object[item];
    }
  });
  return newObject;
};

export const getCookie = (cname:string):string => {
  const cookieArr = window.document.cookie.split('; ');
  const cookieObj:IObject = cookieArr.reduce((prev:IObject, current) => {
    const [key, value] = current.split('=');
    prev[key] = value;
    return prev;

  }, {});
  return cookieObj[cname] || '';
};
