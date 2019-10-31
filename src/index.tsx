import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'moment/locale/zh-cn';
import App from './App';

require('src/commons/css/style.scss');
const root_element = document.getElementById('root');

ReactDOM.render(
  <App/>,
  root_element,
);