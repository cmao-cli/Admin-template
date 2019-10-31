import * as React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import * as History from 'history';
import { create_store } from './redux/root_store';
import BasicLayouts from 'src/components/basic-layouts';
import { ConfigProvider } from 'antd';
import locale from 'antd/es/locale-provider/zh_CN';
const store = create_store();

export const browserHistory = History.createBrowserHistory();
window.browserHistory = browserHistory;

const App = () => (
  <ConfigProvider locale={locale}>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={BasicLayouts}></Route>
      </Router>
    </Provider>
  </ConfigProvider>
);
export default App;