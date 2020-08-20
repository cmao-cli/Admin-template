import { useState, useEffect } from 'react';
import { message } from 'antd';
import { omitBy } from 'src/utils/base';

/**
 * @param fetchPromiseFunc 请求promise函数
 * @param params 请求参数
 * @param initialData state的初始值
 * @param deps useEffect deps
 */
const useFetchHook = (fetchPromiseFunc:(params?:any) => Promise<any>, params?:any, initialData?:any, deps?:ReadonlyArray<any>) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  // 处理对象参数：当value为空时，omit该参数
  const formatedParams = omitBy(params, (item) => !item );
  useEffect(() => {
    const fetchData = async() => {
      try {
        setLoading && setLoading(true);
        const result = await fetchPromiseFunc(formatedParams);
        if (result.status !== 200) {
          message.error('获取数据失败');
        } else {
          setData(result.data);
        }
        setLoading && setLoading(false);
      } catch (error) {
        setLoading && setLoading(false);
      }
    };
    fetchData();
  }, deps ? deps : []);
  return [data, loading];
};

export default useFetchHook;
