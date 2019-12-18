import * as React from 'react';
import { Layout } from 'antd';
const { Header } = Layout;
import './index.scss';

export const GlobalHeader:React.FunctionComponent = (props) => {
  return (
    <div styleName={'gheader'}>
      <Header style={{ background: '#fff' }}>
        {props.children}
      </Header>
    </div>
  );
};
