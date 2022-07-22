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
      <div className="permissionPage">
        <div><img src={require('@/assets/images/permission.png')} alt="" /></div>
        <p>抱歉， 您无权限操作</p>
        <p>请联系管理员开通此功能</p>
      </div>
    )
  }
}

export default Page404
