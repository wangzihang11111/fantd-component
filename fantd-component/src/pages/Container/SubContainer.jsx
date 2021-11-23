import React  from 'react';
import { Layout, Menu } from '@/components'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';

const {
  Content,
  Sider
} = Layout;
const { Item, SubMenu } = Menu;
function SubContainer (props) {
  const { data, history, path } = props
  let routerArr = []
  data.forEach(item => {
    if (item.children) {
      routerArr = routerArr.concat(item.children)
    } else {
      routerArr.push(item)
    }
  })
  const defaultSelectedLevel2Id = routerArr.find(item => item.path === location.pathname)?.name
  return (
    <Layout>
        <Sider className="layout-container-sider">
          <Menu className="layout-container-menu"
              defaultSelectedId={defaultSelectedLevel2Id}
          >
            {
              data.map(item => (
                (
                  item.children ? (
                    <SubMenu
                        key={item.name}
                        title={item.title}
                    >
                      {
                        item.children.map(child => (
                          <Item id={child.name}
                              key={child.name}
                              onClick={() => {
                                history.push(child.path)
                              }}
                          >
                            {`${child.desc ?? ''} ${child.title}`}
                          </Item>
                        ))
                      }
                    </SubMenu>
                  ) : (
                    <Item id={item.name}
                        key={item.name}
                        onClick={() => {
                          history.push(item.path)
                        }}
                    >
                      {`${item.desc ?? ''} ${item.title}`}
                    </Item>
                  )
                )
              ))
            }
          </Menu>
        </Sider>
        <Content className="layout-container-content">
          <div className="side-layout-content">
            <Switch>
              {routerArr.map(route => (
                <Route
                    component={() => route.component}
                    exact
                    key={route.name}
                    path={route.path}
                />
              ))}
              <Redirect exact
                  from={path}
                  to={`${path}/index`}
              />
            </Switch>
          </div>
        </Content>
      </Layout>
  )
}

export default withRouter(SubContainer)