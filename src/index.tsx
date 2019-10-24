import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as History from 'history';
import 'moment/locale/zh-cn';
import App from './App';
declare global {
  interface Window {
    browserHistory:History.History<any>;
    CODEMAOCONFIG:any;
  }
}

require('./commons/style.scss');
const root_element = document.getElementById('root');

ReactDOM.render(
  <App/>,
  root_element,
);

if ((module as any).hot) {
  (module as any).hot.accept('./App.tsx', () => {
    ReactDOM.render(
      <App/>,
      root_element,
    );
  });
}