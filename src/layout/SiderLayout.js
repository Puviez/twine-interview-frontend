import React from 'react';
import { Layout } from "antd";

const { Sider } = Layout;

export const SiderLayout = () => {
  return (
    <div>
      <Layout>
        <Sider>
          <div>Hello</div>
        </Sider>
      </Layout>
    </div>
  )
}
