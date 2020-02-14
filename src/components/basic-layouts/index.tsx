import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routerData, menuData } from 'src/pages/routes';
import { PageNotFound } from 'src/components/page-not-found';
import ProLayout from '@ant-design/pro-layout';
import { layoutConfig } from './config';

export const BasicLayouts:React.FC = (props) => (
  <ProLayout
    route={menuData}
    {...layoutConfig}
  >
    <Switch>
      <Redirect
        exact
        from="/"
        to={{ pathname: routerData[0].path }} />
      {
        routerData.map((item) => (
          <Route
            exact={item.exact}
            key={item.path}
            path={item.path}
            component={item.component}
          />
        ))
      }
      <Route
        path="/"
        component={PageNotFound} />
    </Switch>
  </ProLayout>
);
