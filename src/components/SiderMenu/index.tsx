import * as React from 'react';
import { Drawer, Icon, Menu, Layout } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { getFlatMenuKeys } from 'src/utils/base';
import { MenuDataItem } from 'src/router/routes';
import { Location } from 'history';
import styles from './index.scss';

const { Sider } = Layout;
export interface SiderMenuProps {
  collapsed:boolean;
  onCollapse:(collapse:boolean) => void;
  menuData:MenuDataItem[];
  location:Location;
}

const SiderMenu:React.FC<SiderMenuProps> = (props) => {
  const { collapsed, onCollapse, menuData, location = { pathname: '/'} } = props;
  const getMenuItems = (menu:MenuDataItem[] = []) : React.ReactNode[] => {
    return menu.map((item) => {
      if (item.children && item.children.length) {
        return (
          <Menu.SubMenu
            title={item.icon ? <span><Icon type={item.icon}></Icon><span>{item.name}</span></span> : item.name}
            key={item.path}
          >
            {
              getMenuItems(item.children)
            }
          </Menu.SubMenu>
        );
      } else {
        return (
          <Menu.Item title={item.icon ? <Icon type={item.icon}></Icon> : item.name} key={item.path}>
            <Link to={item.path}>{item.name}</Link>
          </Menu.Item>
        );
      }
    });
  };

  /**
   * 获取当前路由下，应该选中的keys数组
   * @param pathname
   */
  // TODO: 如何优雅的判断是否匹配上
  const getSelectedKeys = (pathname:string) : string[] => {
    const flattenedKeys = getFlatMenuKeys(menuData);
    return flattenedKeys.filter((key) => key && pathname.includes(key));
  };

  const selectedKeys = getSelectedKeys(location.pathname);

  return (
      <Sider
        collapsible
        collapsed={collapsed}
        trigger={null}
        style={{ minHeight: '100vh'}}
      >
        <div className={styles.sider_menu_logo}>
          <a href="/">后台管理系统</a>
        </div>
        <Menu
          defaultOpenKeys={selectedKeys}
          mode="inline"
          theme="dark"
          selectedKeys={selectedKeys}
        >
          {getMenuItems(menuData)}
        </Menu>
      </Sider>
  );
};

export default withRouter(SiderMenu);