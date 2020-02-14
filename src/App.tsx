import * as React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import * as History from 'history';
import { BasicLayouts } from 'src/components/basic-layouts';
import { ConfigProvider } from 'antd';
import locale from 'antd/es/locale-provider/zh_CN';
import { store } from './redux/root-store';

export const browserHistory = History.createBrowserHistory();
window.browserHistory = browserHistory;
declare global {
  /* tslint:disable-next-line */
  interface Window {
    browserHistory:History.History<any>;
    CODEMAOCONFIG:any;
  }
}

export const App = () => (
  <ConfigProvider locale={locale}>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/login" />
        <Route
          path="/"
          component={BasicLayouts} />
      </Router>
    </Provider>
  </ConfigProvider>
);
