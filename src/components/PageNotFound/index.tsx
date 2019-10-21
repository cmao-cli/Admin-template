import * as React from 'react';
import { Result, Button } from 'antd';

export default () => {
  const back_home = () => {
    window.browserHistory.push('/');
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，你访问的页面不存在"
      extra={<Button type="primary" onClick={back_home}>返回首页</Button>}
    />
  );
};