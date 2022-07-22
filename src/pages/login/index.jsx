import { Component } from 'react'
import { connect } from 'dva'
import { Form, Input, Button, Layout } from 'antd'
import './index.less'

const { Item } = Form
const { Content } = Layout

@connect()
@Form.create()
class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentDidMount () {

  }
  render () {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        span: 4
      }
    }
    return (
      <div className="login-content">
        <Content className="loginCss">
          <div className="content-login">
            <h1>敏感词检测系统</h1>
            <p>请输入您的登录信息</p>
            <div className="form-wrap password-res-shows">
              <Form onSubmit={this.handleSubmit} autoComplete="off">
                <Item {...formItemLayout} label='' className="input-item">
                  {getFieldDecorator('user',
                    {
                      rules: [
                        { required: true, message: '请输入账号' }
                      ]
                    }
                  )(
                    <Input type='text' autoComplete="off" placeholder='账号' />
                  )}
                </Item>
                <Item {...formItemLayout} label='' className="input-item">
                  {getFieldDecorator('password',
                    {
                      rules: [
                        { required: true, message: '请输入密码' }
                      ]
                    }
                  )(
                    <div>
                      <Input type="password" placeholder='密码' autoComplete="new-password" />
                    </div>
                  )}
                </Item>
                <Button type='primary' htmlType='submit' className="login-btn">登录</Button>
              </Form>
            </div>
          </div>
        </Content>
      </div >
    )
  }

  // 登录
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({ type: 'common/login', payload: values })
      }
    })
  }
}
export default Index
