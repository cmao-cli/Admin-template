import { IMenuDataItem } from 'src/pages/routes';
import * as moment from 'moment';
/**
 * recursively flatten the data
 * @param menus
 */
export const getFlatMenuKeys = (menuData:IMenuDataItem[]) : string[] => {
  let keys:string[] = [];
  menuData.forEach((item) => {
    keys.push(item.path);
    if (item.children && item.children.length) {
      keys = keys.concat(getFlatMenuKeys(item.children));
    }
  });
  return keys;
};

export const getByteForUTF = (s:string) => {
  const a = s.replace(/[\u0000-\u007f]/g, '\u0061');
  const b = a.replace(/[\u0080-\u07ff]/g, '\u0061\u0061');
  const c = b.replace(/[\u0800-\uffff]/g, '\u0061\u0061\u0061');
  return c.length;
};

export const exceedAddOmit = (str:string, max:number) => {
  const len = 3;
  if (!str) {
    return;
  }
  return getByteForUTF(str) > max * len ? str.slice(0, max) + '...' : str;
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
export const omitBy = <T extends IObject, K extends keyof T>(object:T, predicate:(value:T[K]) => boolean) : Partial<T> => {
  if (typeof object !== 'object') {
    return object;
  }
  const newObject:Partial<T> = {};

  Object.keys(object).forEach((item) => {
    if (predicate(object[item])) {
      newObject[item] = object[item];
    }
  });
  return newObject;
};

export const getCookie = (cname:string) : string => {
  const cookieArr = window.document.cookie.split('; ');
  const cookieObj:IObject = cookieArr.reduce((prev:IObject, current) => {
    const [key, value] = current.split('=');
    prev[key] = value;
    return prev;

  }, {});
  return cookieObj[cname] || '';
};
