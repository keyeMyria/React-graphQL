import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Sidebar extends Component {
  render() {
    const { user } = this.props;

    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
      >
        <div className="logo">
          <Link to="/" className="ic-logo" />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

          <Menu.Item key="dashboard">
            <Link to="/"><Icon type="dashboard" />Dashboard</Link>
          </Menu.Item>

          {user.group.includes('ADMIN') &&
            <SubMenu
              key="users"
              title={<span><Icon type="user" /><span>Users</span></span>}
            >
              <Menu.Item key="admin">
                <Link to="/users/admin">Admin</Link>
              </Menu.Item>
              <Menu.Item key="users">
                <Link to="/users/user">Users</Link>
              </Menu.Item>
              <Menu.Item key="official">
                <Link to="/users/official">Officials</Link>
              </Menu.Item>
              <Menu.Item key="partner">
                <Link to="/users/partner">Partners</Link>
              </Menu.Item>
            </SubMenu>
          }
          <Menu.Item key="places">
            <Link to="/places"><Icon type="book" />Places</Link>
          </Menu.Item>
          <Menu.Item key="stories">
            <Link to="/stories"><Icon type="setting" />Stories</Link>
          </Menu.Item>

          {user.group.includes('ADMIN') &&
            <Menu.Item key="campaign">
              <Link to="/campaigns"><Icon type="tool" />Campaigns</Link>
            </Menu.Item>
          }

          {user.group.includes('ADMIN') &&
            <SubMenu
              key="feed"
              title={<span><Icon type="profile" /><span>Feed</span></span>}
            >
              <Menu.Item key="suggestUsers">
                <Link to="/feed/suggest">Suggest Users</Link>
              </Menu.Item>
            </SubMenu>
          }

          <Menu.Item key="collections">
            <Link to="/collections"><Icon type="inbox"/>User Collections</Link>
          </Menu.Item>

        </Menu>
      </Sider>
    );
  }
}

export default Sidebar;
