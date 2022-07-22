import React, { Component, Fragment } from 'react'
import { Layout } from 'antd'
import './style.less'
import Header from './HeaderView'
import Breadcrumbs from '../components/Breadcrumbs'
import Menu from './Menu'
import menus from '@a/menuTree'
import './index.less'

const { Sider, Content } = Layout
class Index extends Component {
  state = {
  }
  render () {
    const { children, history } = this.props
    return (
      <Fragment>
        <Layout>
          <Header history={history} />
          <Layout>
            <Menu menus={menus} />
            <Content className='page-layout'>
              <Breadcrumbs />
              {children}
            </Content>
          </Layout>
        </Layout>
      </Fragment>
    )
  }
}
export default Index