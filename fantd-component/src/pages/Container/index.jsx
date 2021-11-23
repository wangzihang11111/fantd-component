import React  from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import { Layout, Menu } from '@/components'
import SubContainer from './SubContainer';
import './index.scss'

const {
  Header,
  Content,
  Footer
} = Layout;
const { Item } = Menu;
function Container (props) {
  const {
    data,
    history
  } = props;
  const defaultSelectedLevel1Id = data.find(item => item.path === `/${location.pathname.split('/')[1]}`)?.name
  return (
    <Layout className="layout-container">
      <Header className="layout-container-header">
        <Menu
            className="header-menu"
            defaultSelectedId={defaultSelectedLevel1Id}
            mode="horizontal"
        >
          {data.map(item => (
            <Item id={item.name}
                key={item.name}
                onClick={() => {
              history.push(item.path)
            }}
            >{item.title}</Item>
          ))}
        </Menu>
      </Header>
      <Switch>
        {
          data.map(item => (
            <Route
                key={item.name}
                name={item.name}
                path={item.path}
                render={() => (item.children ?
                <SubContainer  data={item.children}
                    path={item.path}
                /> : <Content className="layout-container-content">{item.component}</Content>)}
            />
          ))
        }
        <Redirect exact
            from="/"
            to="/home"
        />
      </Switch>
      <Footer className="layout-container-footer">
        底部栏
      </Footer>
    </Layout>
  )
}
export default withRouter(Container)