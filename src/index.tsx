import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'moment/locale/zh-cn';
import { App }  from './App';

/* tslint:disable-next-line */
require('src/commons/css/style.scss');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <App/>,
  rootElement,
);