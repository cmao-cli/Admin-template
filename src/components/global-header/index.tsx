import * as React from 'react';
import { Layout } from 'antd';
const { Header } = Layout;
import styles from './index.scss';

export const GlobalHeader:React.FunctionComponent = (props) => {
  return (
    <div className={styles.gheader}>
      <Header style={{ background: '#fff' }}>
        {props.children}
      </Header>
    </div>
  );
};
