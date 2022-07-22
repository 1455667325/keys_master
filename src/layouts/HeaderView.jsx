import React, { PureComponent } from 'react'
import { Layout, Avatar, Menu, Dropdown, Modal } from 'antd'
import ChangePwd from '@c/ChangePwd'
import './style.less'

const { Header } = Layout

class index extends PureComponent {
  state = {
    changePwdVisible: false, // 修改密码Modal
    confirmModalVisible: false  // 确认退出Modal
  }

  componentDidMount () {
    if (sessionStorage.resetPwd === 'true') {
      this.setState({
        changePwdVisible: true,
        resetModal: true
      })
    }
  }

  // 退出登录
  logout = () => {
    Modal.confirm({
      content: '请确认是否退出登录？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        sessionStorage.clear()
        this.props.history.push('/login')
      }
    })
  }
  /**
   * 设置modal是否显示
   * @param  {string} modalVisible   当前设置的modal
   * @param  {boolean} type          是否显示
   */
  setModalVisible = (modalVisible, type) => {
    this.setState({
      [modalVisible]: type
    })
  }

  changePage = () => {
    const { history } = this.props
    history.push('/event/alarm?alertLevel=3,4')
  }

  render () {
    const { changePwdVisible, resetModal } = this.state
    const menu = (
      <Menu>
        <Menu.Item key="pwd" onClick={() => { this.setModalVisible('changePwdVisible', true) }}>
          修改密码
        </Menu.Item>
        <Menu.Item key="SignOut" onClick={this.logout}>
          退出登录
        </Menu.Item>
      </Menu>
    )

    return (
      <Header style={{ padding: '0 10px' }}>
        <div className='header-left'>
          <span>敏感词检测系统</span>
        </div>
        <div className="header-right">
          <Dropdown overlay={menu} placement="bottomRight">
            <div className="head-user">
              <Avatar
                src={require('@a/images/user.png')}
              />
              <span className="user-name">admin</span>
            </div>
          </Dropdown>
        </div>
        <ChangePwd
          visible={changePwdVisible}
          resetModal={resetModal}
          history={this.props.history}
          onClose={() => { this.setModalVisible('changePwdVisible', false), this.setModalVisible('resetModal', false) }}
        ></ChangePwd>
      </Header>
    )
  }
}

export default index
