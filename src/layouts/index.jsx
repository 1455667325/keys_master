import React, { Component, Fragment } from 'react'
import { connect } from 'dva'
import withRouter from 'umi/withRouter'
import BaseLayout from './BaseLayout'
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import Context from './MenuContext'
import './index.less'
@withRouter
class Layout extends Component {
  state = {
    pathname: ''
  }

  render () {
    const { children, location, history } = this.props
    if (location.pathname === '/404' || location.pathname === '/login') {
      return <Fragment>{children}</Fragment>
    }
    return (
      <LocaleProvider locale={zh_CN}>
        <Context.Provider>
          <BaseLayout history={history}>{children}</BaseLayout>
        </Context.Provider>
      </LocaleProvider>
    )
  }

  componentDidMount () {
  }

  UNSAFE_componentWillReceiveProps (nextProps) {
    const pathname = nextProps.history.location.pathname
    if (pathname === '/') {
      this.props.history.push('/indexPage')
    } else if (pathname !== this.state.pathname) {
      window.scrollTo(0, 0)
    }
  }
}

export default connect()(Layout)
