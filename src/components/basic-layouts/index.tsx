import * as React from 'react';
import { useState } from 'react';
import { Layout, Icon } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routerData, menuData } from 'src/pages/routes';
import SiderMenu from 'src/components/sider-menu';
import GlobalHeader from 'src/components/global-header';
import PageNotFound from 'src/components/page-not-found';

const { Content } = Layout;

const BasicLayouts:React.FC = (props) => {
  
  const [ collapsed, setCollapse ] = useState(false);

  return (
    <Layout style={{minHeight: '100vh'}}>
      <SiderMenu
        collapsed={collapsed}
        menuData={menuData}
      ></SiderMenu>
      <Layout>
        <GlobalHeader>
          <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() => { setCollapse(!collapsed); }}
            />
        </GlobalHeader>
        <Content>
          <Switch>
            <Redirect exact from="/" to={{ pathname: routerData[0].path }} />
            {
              routerData.map((item) => (
                <Route
                  exact={item.exact}
                  key={item.path}
                  path={item.path}
                  component={item.component}
                ></Route>
              ))
            }
            <Route path="/" component={PageNotFound} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayouts;