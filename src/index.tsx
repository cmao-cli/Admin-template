import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import * as History from 'history';
import { create_store } from './redux/root_store';
import BasicLayouts from 'src/components/BasicLayouts';
import PrivateRoute from 'src/components/PrivateRoute';
import { ConfigProvider } from 'antd';
import locale from 'antd/es/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

declare global {
  interface Window {
    browserHistory:History.History<any>;
    CODEMAOCONFIG:any;
  }
}
export const browserHistory = History.createBrowserHistory();
window.browserHistory = browserHistory;

require('./commons/style.scss');
const store = create_store();
const root_element = document.getElementById('root');
const App = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <PrivateRoute render={(props) => <Route path="/" component={BasicLayouts}></Route>}></PrivateRoute>
    </Router>
  </Provider>
);

ReactDOM.render(
  <ConfigProvider locale={locale}>
    {
      App()
    }
  </ConfigProvider>,
  root_element,
);