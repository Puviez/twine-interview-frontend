import React from "react";
import { Layout, Menu } from "antd";
import { Route, useHistory } from "react-router-dom";

import routes from "routes";

const { Header, Content } = Layout;

const HeaderContent = ({ children, ...rest }) => {
  const history = useHistory();
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item
            key="polls"
            onClick={() => history.push(routes.cpoHqPolls)}
          >
            Polls
          </Menu.Item>
          <Menu.Item
            key="forum"
            onClick={() => history.push(routes.cpoHqForum)}
          >
            Forum
          </Menu.Item>
          <Menu.Item
            key="dashboard"
            onClick={() => history.push(routes.dashboard)}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            key="explorer"
            onClick={() =>
              history.push(routes.explorer.replace("/:reportId?", ""))
            }
          >
            Explorer
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{ padding: 50, minHeight: "calc(100vh - 64px)", height: "100%" }}
      >
        {children}
      </Content>
    </Layout>
  );
};

const HeaderContentLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <HeaderContent>
          <Component {...props} />
        </HeaderContent>
      )} 
    />
  )
};

export default HeaderContentLayout;
