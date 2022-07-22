import { Component } from 'react'
import { Form, message, Modal } from 'antd'
import { CommonModal } from '@c/index'
import { generateRules, encrypt } from '@u/common'
import { pwdPattern } from '@u/regExp'
import api from '@/services'
import './style.less'

const { Item } = Form
const formLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 16
  }
}
class UpgradeSet extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalFormValue: {}
    }
  }
  componentDidMount () {
  }
  //退出登录
  logout = () => {
    Modal.destroyAll()
    api.logout({ token: sessionStorage.getItem('token') }).then(res => {
      sessionStorage.clear()
      this.props.history.push('/login')
    }).catch(err => { })
  }
  modalHandleSubmit = values => {
    const { resetModal } = this.props
    this.setState({
      modalFormValue: values
    }, () => {
      if (values.oldPassword === values.newPassword) {
        message.error('新密码与原密码不能一致')
        return
      } else if (values.repeatPassword !== values.newPassword) {
        message.error('确认新密码不一致，请重新输入')
        return
      }
      values.oldPassword = encrypt(values.oldPassword)
      values.newPassword = encrypt(values.newPassword)
      values.id = sessionStorage.id
      delete values.repeatPassword
      api.userUpdatePassword(values).then(res => {
        this.props.onClose()
        if (resetModal) sessionStorage.setItem('resetPwd', false)
        const timer = setTimeout(() => {
          this.logout()
        }, 3000)
        Modal.warning({
          title: '更新密码成功,将在3秒后退出登录！',
          content: '',
          cancelText: '取消',
          okText: '退出',
          className: 'Change-pwd-Modal',
          onOk: () => {
            clearTimeout(timer)
            this.logout()
          },
          onCancel: () => { }
        })
      })
    })
  }
  render () {
    const { visible, onClose, resetModal } = this.props
    const modalFormFields = [
      { type: 'input', key: 'oldPassword', name: '原密码', unAutoComplete: true, inputType: 'passwordInput', rules: [{ required: true, message: '请输入原密码' }, ...generateRules()] },
      { type: 'input', key: 'newPassword', name: '新密码', unAutoComplete: true, inputType: 'passwordInput', rules: [{ required: true, message: '请输入新密码' }, { pattern: pwdPattern, message: '密码必须为8至32位，包含数字、大小字母及特殊符号' }, ...generateRules()] },
      { type: 'input', key: 'repeatPassword', unAutoComplete: true, name: '确认新密码', inputType: 'passwordInput', rules: [{ required: true, message: '请确认新密码' }, ...generateRules()] }
    ]
    if (resetModal) modalFormFields.unshift({ type: 'text', name: '为确保账号安全首次登录需要修改密码' })
    return (
      <CommonModal
        type="form"
        visible={visible}
        title={'修改密码'}
        width={600}
        oktext={'保存'}
        closable={false}
        keyboard={resetModal ? false : true}
        className={resetModal ? 'user-password-setting' : ''}
        value={this.modalHandleSubmit}
        onClose={onClose}
        // ref="pwdWrapper"
        fields={modalFormFields}
        column={1}
        FormItem={Item}
        formLayout={formLayout}
      >
      </CommonModal>
    )
  }
}
export default UpgradeSet
