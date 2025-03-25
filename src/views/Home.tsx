
import { Breadcrumb, Layout, message, Button } from 'antd';
import React, { useState } from 'react';
import { Outlet,useNavigate } from "react-router-dom"
import MainMenu from "@/components/MainMenu"
const { Header, Content, Footer, Sider } = Layout;

const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigateTo = useNavigate()
  // 退出登录函数
  const logout = () => {
    // 删除本地存储的 token
    localStorage.removeItem("lege-react-management-token");
    // 跳转到登录页面
    navigateTo("/login");
    message.success("退出登录成功！");
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 左边侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="logo"></div>
        <MainMenu></MainMenu>
      </Sider>
      {/* 右边内容 */}
      <Layout className="site-layout">
        {/* 右边头部 */}
        <Header className="site-layout-background" style={{ backgroundColor: '#ADD8E6' }} >
          {/* 面包屑 */}
          {/* <Breadcrumb style={{ lineHeight:'64px' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          {/* 退出登录按钮 */}
          <Button onClick={logout} style={{ float: 'right',marginTop: "16px" }}>退出登录</Button>
        </Header>
        {/* 右边内容部分-白色底盒子 */}
        <Content style={{ margin: '16px 16px 0' }} className="site-layout-background">
            {/* 窗口部分 */}
            <Outlet />
        </Content>
        {/* 右边底部 */}
        <Footer style={{ textAlign: 'center', padding:0, lineHeight:"48px" }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default View;