import { MenuDataItem } from 'src/pages/routes';
import * as moment from 'moment';
/**
 * recursively flatten the data
 * @param menus
 */
export const getFlatMenuKeys = (menuData:MenuDataItem[]) : string[] => {
  let keys:string[] = [];
  menuData.forEach((item) => {
    item.path ? keys.push(item.path) : '';
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
  if (!str) {
    return;
  }
  return getByteForUTF(str) > max * 3 ? str.slice(0, max) + '...' : str;
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
export const omitBy =<T extends IObject, K extends keyof T>(object:T, predicate:(value:T[K]) => boolean) : Partial<T> => { 
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


/**
 * 毫秒级转为秒级
 */
export const milliToSecond = (millisecond:number) => {
  return parseInt((millisecond / 1000).toString());
};

export const getCookie = (cname:string) : string => {
  const cookieArr = window.document.cookie.split('; ');
  const cookieObj:IObject = cookieArr.reduce((prev:IObject, current) => {
    const [ key, value ] = current.split('=');
    prev[key] = value;
    return prev;
    
  }, {});
  return cookieObj[cname] || '';
};

/**
 * 根据枚举值和枚举数组获取枚举标签
*/
export const getEnumLabel = (value:string, enums:{label:string, value:string}[]) => {
  const res = enums.filter((item) => item.value === value);
  res.length ? res[0].label : '';
};

/**
 * 根据querykey得出query值
*/
export const parseQuery = (queryString:string, queryKey:string) : string => {
  const query = queryString[0] === '?' ? queryString.substr(1) : queryString;
  let pairs = query.split('&');
  const queryMap:IObject = pairs.reduce((prev:IObject, current) => {
    const [ key, value ] = current.split('=');
    prev[key] = value;
    return prev;
  }, {});
  return queryMap[queryKey];
};

export const formatPhone = (phone:number | string) : string => {
  if (!phone) {
    return '';
  }
  phone = phone.toString();
  return phone.substr(0, 3) + '****' + phone.substr(7);
};
