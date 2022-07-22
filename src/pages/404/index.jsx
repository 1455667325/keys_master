import { Component } from 'react'
import './index.less'
class Page404 extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div className="error-Page">
        <div><img src={require('@/assets/images/error.png')} alt="" /></div>
        <p>抱歉， 页面出现异常</p>
        <p>您可以尝试：刷新页面、联系管理员</p>
      </div>
    )
  }
}

export default Page404
