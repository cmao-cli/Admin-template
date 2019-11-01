import * as React from 'react';
import { Result, Button } from 'antd';

export const PageNotFound =  () => {
  const backHome = () => {
    window.browserHistory.push('/');
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，你访问的页面不存在"
      extra={<Button type="primary" onClick={backHome}>返回首页</Button>}
    />
  );
};