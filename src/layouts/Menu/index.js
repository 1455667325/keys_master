import { Component } from 'react'
import { Menu, Layout, Icon  } from 'antd'
import { withRouter } from 'umi'
import { router } from 'dva'
import menus from '@a/menuTree'
import { getLinkSaveUrl, getFlatList } from '@/utils/common'
import './index.less'
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3236376_1nt4ga235vg.js'
})

const { Sider } = Layout
const { NavLink } = router
const { SubMenu, Item } = Menu
// 需要往系统菜单添加内容项的 key
@withRouter
class Menus extends Component {
  constructor (props) {
    super(props)
    const { active } = getLinkSaveUrl()
    this.state = {
      selectedKeys: [active],
      openKeys: [],
      collapsed: false
    }
  }
  /**
   * 由于umi版本原因,无法在models的subscriptions中使用dispatch和history.push方法，因此获取菜单打开项和路由拦截功能放在此页面
   * dispatch方法会触发三次路由
   * history.push方法会递归跳转导致栈溢出
   **/
  componentDidMount () {
    this.generateMenuOpenKeys()
  }
  componentDidUpdate (nextProps) {
    const pathname = nextProps.location.pathname
    if (pathname === '/') {
      this.props.history.push('indexPage')
    }
  }
  UNSAFE_componentWillReceiveProps (nextProps) {
    const pathname = nextProps.location.pathname
    this.subscriptions(pathname)
    this.generateMenuOpenKeys(pathname)
  }

  //路由拦截
  subscriptions = (pathname = this.props.location.pathname) => {
    // 无须任何权限，可以直接进入该页面路由的集合
    const excludePaths = ['/login', '/401', '/404']
    const routers = getFlatList(menus)
    const current = routers.find(item => item.path.toLowerCase() === pathname.toLowerCase())
    if (current) {
      const { tag, path } = current
      if (!excludePaths.includes(path) && tag) {
        //先注释
        this.props.history.push('/401')
      }
    }
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      openKeys: []
    })
  }

  /**
   * 菜单点击事件
   * 把打开的折叠菜单记录下来，以便刷新界面时，快速展开之前的菜单
   * */
  onOpenChange = (keyPath) => {
    const newKeyPath = keyPath
    this.setState({ openKeys: newKeyPath })
    sessionStorage.setItem('openKeys', newKeyPath.join(','))
  }
  /**
   * 生成菜单的选中项，在刷新页面时，提供刷新之前选中的菜单项
   **/
  generateMenuSelectKeys () {
    const { pathname = '' } = this.props.history.location
    const urlArr = pathname.split('/').splice(1)
    return [urlArr.map((path) => `/${path}`).join('')]
  }
  /**
   * 生成菜单的展开项，在刷新页面时，提供刷新之前展开的菜单项
   **/
  generateMenuOpenKeys (pathname = this.props.location.pathname) {
    const { openKeys: _openKeys } = this.state
    const openKeys = this.findMenuOpenKey(_openKeys)
    const curOpenKey = `/${pathname.split('/')[1]}`
    if (!openKeys.includes(curOpenKey)) {
      openKeys.push(curOpenKey)
    }
    this.setState({ openKeys })
  }

  findMenuOpenKey = (list = []) => {
    const openKeys = (sessionStorage.getItem('openKeys') || '').split(',').filter(e => e)
    if (list.length) {
      const _openKey = []
      let curOpenKey = ''
      for (let i = 0, len = list.length; i < len - 1; ++i) {
        if (!openKeys.includes(list[i])) {
          curOpenKey += ('/' + list[i])
          _openKey.push(curOpenKey)
        }
      }
      return [...new Set([...openKeys, ..._openKey])]
    } else {
      return openKeys
    }
  }

  //获取菜单权限
  getMenu = menuTree => menuTree.map(item => {
    // 显示的子菜单的数量
    if (item.children) {
      return (
        <SubMenu
          key={item.path}
          title={
            <span>
              {item.icon ? <IconFont type={item.icon} /> : null}
              <span>{item.name}</span>
            </span>
          }>
          {
            this.getMenu(item.children)
          }
        </SubMenu>
      )
    }
    return (
      <Item key={item.path} icon={item.icon}>
        <NavLink to={item.path}>
          {item.icon ? <IconFont type={item.icon} /> : null}
          <span>{item.name}</span>
        </NavLink>
      </Item>
    )
  })

  render () {
    const { openKeys, collapsed } = this.state
    return (
      <Sider
        theme="dark"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <i className={`collapsed-icon iconfont ${collapsed ? 'icon-zhankaicaidan' : 'icon-shouqicaidan'}`} onClick={this.toggleCollapsed} />
        <Menu
          onOpenChange={this.onOpenChange}
          selectedKeys={this.generateMenuSelectKeys()}
          openKeys={openKeys}
          mode="inline"
          theme="dark"
          className='custom-menus'
        >
          {this.getMenu(menus)}
        </Menu>
      </Sider>

    )
  }
}
export default Menus

