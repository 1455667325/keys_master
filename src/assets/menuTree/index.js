export default [
  // {
  //   name: '首页',
  //   key: 'indexPage',
  //   path: '/indexPage',
  //   icon: 'icon-shouye'
  // },
  {
    name: '关键词监控结果管理',
    key: 'sensitivity',
    path: '/sensitivity',
    icon: 'icon-minganxinxileixingshu'
  },
  {
    name: '关键词库管理',
    path: '/key',
    key: 'key',
    icon: 'icon-minganguanjianzi',
    children: [
      // {
      //   name: '关键词列表',
      //   key: 'keyList',
      //   path: '/key/list'
      // },
      {
        name: '监控关键词管理',
        key: 'keyFind',
        path: '/key/list'
      }
      // {
      //   name: '关键词匹配',
      //   key: 'keyMatch',
      //   path: '/key/Match'
      // },
      // {
      //   name: '关键词定位',
      //   key: 'keyLocation',
      //   path: '/key/location'
      // }
    ]
  },
  {
    name: '全文搜索',
    key: 'fullSearch',
    path: '/fullSearch',
    icon: 'icon-minganxinxileixingshu'
  },
  // {
  //   name: '网络爬虫',
  //   key: 'crawler',
  //   path: '/crawler',
  //   icon: 'icon-bug',
  //   children: [
  //     {
  //       name: '爬虫状态查看',
  //       key: 'crawlerList',
  //       path: '/crawler/list'
  //     },
  //     {
  //       name: '爬虫配置',
  //       key: 'crawlerConfig',
  //       path: '/crawler/config'
  //     }
  //   ]
  // },
  // {
  //   name: '网络信息索引检索',
  //   path: '/netWork',
  //   key: 'netWork',
  //   icon: 'icon-a-icon_jiansuosousuo_1'
  // },
  {
    name: '系统管理',
    key: 'system',
    path: '/system',
    icon: 'icon-xitongguanli',
    children: [
      {
        name: '用户管理',
        key: 'systemUser',
        path: '/system/user'
      }
      // {
      //   name: '权限管理',
      //   key: 'systemPermission',
      //   path: '/system/permission'
      // }
    ]
  }
]
