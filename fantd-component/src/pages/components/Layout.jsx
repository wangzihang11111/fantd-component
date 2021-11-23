import React  from 'react';
import { Panel, Layout } from '@/components'

const {
  Header,
  Footer,
  Content,
  Sider
} = Layout
export default function () {
  return (
    <div>
      <Panel>
        <Layout className="layout-demo">
          <Header className="layout-demo-header">
            头部栏
          </Header>
          <Content className="layout-demo-content">内容</Content>
          <Footer className="layout-demo-footer">
            底部栏
          </Footer>
        </Layout>
      </Panel>
      <Panel>
        <Layout className="layout-demo">
          <Header className="layout-demo-header">
            头部栏
          </Header>
          <Layout>
            <Sider className="layout-demo-sider">菜单栏</Sider>
            <Content className="layout-demo-content">内容</Content>
          </Layout>
          <Footer className="layout-demo-footer">
            底部栏
          </Footer>
        </Layout>
      </Panel>
      <Panel>
        <Layout className="layout-demo">
          <Header className="layout-demo-header">
            头部栏
          </Header>
          <Layout>
            <Content className="layout-demo-content">内容</Content>
            <Sider className="layout-demo-sider">菜单栏</Sider>
          </Layout>
          <Footer className="layout-demo-footer">
            底部栏
          </Footer>
        </Layout>
      </Panel>
      <Panel>
        <Layout className="layout-demo">
          <Sider className="layout-demo-sider">菜单栏</Sider>
          <Layout>
            <Header className="layout-demo-header">
              头部栏
            </Header>
            <Content className="layout-demo-content">内容</Content>
            <Footer className="layout-demo-footer">
              底部栏
            </Footer>
          </Layout>
        </Layout>
      </Panel>
    </div>
  )
}