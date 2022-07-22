// 表格分页页面
export const PAGE_SIZE_LIST = ['20', '30', '50', '100']
// 默认每页数量
export const PAGE_SIZE_DEFAULT = Number(PAGE_SIZE_LIST[2])
// 弹窗和表格展开内部的默认每页数量
export const MODAL_PAGE_SIZE_DEFAULT = Number(PAGE_SIZE_LIST[0])
// echart 坐标线颜色
export const SPLIT_LINE_COLOR = 'rgba(255, 255, 255, 0.2)'
/**
 * 需要处置重新登录的错误码
 */
export const LOGINOUT_CODES = {
  NOT_PERMISSION: '403', // 没有权限
  SYS_TOKEN_EXPIRE: '421', // 您的登录状态已经失效,请重新登录
  ACCOUNT_REPEAT_LOGIN: '422', // 当前账号已有其他人使用，您被退出，请检查账号信息或联系管理员
  SYS_TOKEN_ANONYMOUS: '429', //未携带token访问无效
  SYS_TOKEN_INVALIDOREXCEPTION: '430' //token无效或异常不能获取用户信息
}
export const COLORS = ['#4083FF', '#46ECFF', '#A569FF', '#22B37A', '#FFDA38', '#FF8E64', '#2E2EFF']
export const LINE_COLORS = [
  '#F37E57',
  '#FFCD3A',
  '#94FF50',
  '#57F5A1',
  '#15D7DE',
  '#78B1FF',
  '#817CFF'
]
export const ALERT_LEVEL = [
  {
    name: '危急',
    color: '#C22A4E',
    value: 4
  },
  {
    name: '高危',
    color: '#FF8E64',
    value: 3
  },
  {
    name: '中危',
    color: '#FFDA38',
    value: 2
  },
  {
    name: '低危',
    color: '#4083FF',
    value: 1
  },
  {
    name: '事件级别',
    color: '#4083FF',
    value: 5
  }
]
export const ALERT_STATUS = [
  {
    name: '待处置',
    value: 1
  },
  {
    name: '处置中',
    value: 2
  },
  {
    name: '已处置',
    value: 3
  }
]
export const STATUS_DATA = [{ name: '是', value: 'true' }, { name: '否', value: 'false' }]
export const RULE_MODEL = [
  {
    name: '条件匹配模板',
    desc: '基于单个事件的触发',
    value: 1
  },
  {
    name: '计数去重模板',
    desc: '多次事件中某个属性出现不同的次数符合条件',
    value: 2
  },
  {
    name: '计数模板',
    desc: '某事件发生的次数符合条件',
    value: 3
  },
  {
    name: 'A事件后发生B事件模板',
    desc: '某事件A之后发生了事件B',
    value: 4
  },
  {
    name: 'A,B关联事件模板',
    desc: '事件A和事件B均发生，但无发生时间先后要求',
    value: 5
  }
]
//窗口大小时间频率
export const RULE_TIMETYPE = [
  {
    name: '分钟',
    value: 5
  },
  {
    name: '小时',
    value: 1
  },
  {
    name: '天',
    value: 2
  }
]
//输出属性取值
export const OUTPUT_VALUES = [
  {
    name: '第一个',
    value: '1'
  },
  {
    name: '最后一个',
    value: '2'
  },
  {
    name: '无',
    value: '3'
  }
]
//输出属性
export const OUTPUT_LABELS = [
  // {
  //   name: '告警编号',
  //   value: '1'
  // },
  // {
  //   name: '告警类型',
  //   value: '2'
  // },
  // {
  //   name: '告警级别',
  //   value: '3'
  // },
  {
    name: '源IP',
    value: '4'
  },
  {
    name: '目的IP',
    value: '5'
  },
  {
    name: '上报设备',
    value: '6'
  }
]
export const MATHICONS = [
  {
    name: '>',
    value: 'greater'
  }
  // {
  //   name: '>=',
  //   value: 'greaterEqual'
  // }
]
export const RULE_TIMECHECK = [
  {
    name: '发生时间',
    value: 1
  },
  {
    name: '结束时间',
    value: 2
  }
]
//黑白名单
export const BLACK_WHITE = [
  {
    name: '黑名单',
    value: 1
  },
  {
    name: '白名单',
    value: 0
  }
]

export const BLACK_WHITE_IS = [
  {
    name: '攻击',
    value: 1
  },
  {
    name: '受害',
    value: 0
  }
]
export const LEVEL_IMPORTANT = [
  {
    name: '高',
    value: 1
  },
  {
    name: '中',
    value: 2
  },
  {
    name: '低',
    value: 3
  }
]
export const stopColor = { color: '#98ACD9', title: '停用' } // 停用
export const nomalColor = { color: '#22B37A', title: '正常' } // 正常
export const abnormalColor = { color: '#FF426F', title: '异常' } // 异常
//漏洞危害等级
export const THREAT_GRADE = [
  {
    name: '超危',
    value: '超危'
  },
  {
    name: '高危',
    value: '高危'
  },
  {
    name: '中危',
    value: '中危'
  },
  {
    name: '低危',
    value: '低危'
  }
]
//一级、二级聚合数据
export const POLYMERIZATION_LIST = [
  {
    name: '告警名称',
    value: 'name'
  },
  {
    name: '告警类型',
    value: 'alert_type'
  },
  {
    name: '告警级别',
    value: 'alert_level'
  },
  {
    name: '源IP',
    value: 'src_ip'
  },
  {
    name: '目的IP',
    value: 'dest_ip'
  },
  {
    name: '资产IP',
    value: 'asset_ip'
  }
]
//聚合规则是否启用
export const POLYMERIZATION_DISABLED = [
  {
    name: '是',
    value: 1
  },
  {
    name: '否',
    value: 2
  }
]
//时间枚举
export const TIME_TYPE = [
  {
    type: '1',
    value: 'TODAY'
  },
  {
    type: '2',
    value: 'YESTERDAY'
  },
  {
    type: '3',
    value: 'THREEDAY'
  },
  {
    type: '4',
    value: 'SEVENDAY'
  },
  {
    type: '5',
    value: 'THISWEEK'
  },
  {
    type: '7',
    value: 'CUSTOM'
  }
]
//时间枚举
export const TASK_STATUS = [
  {
    name: '分析中',
    value: 1
  },
  {
    name: '分析完成',
    value: 2
  }
]
// 重要性等级
export const IMPORTANCE_DROPDOWN = [
  {
    value: 5,
    name: '很高'
  },
  {
    value: 4,
    name: '高'
  },
  {
    value: 3,
    name: '中'
  },
  {
    value: 2,
    name: '低'
  },
  {
    value: 1,
    name: '很低'
  }
]

//接口前缀，导出导入时可拼接上，避免全局修改
// export const BASE_URL = process.env.NODE_ENV === 'development' ? '/api/v1' : '/api/v1'
export const BASE_URL = process.env.NODE_ENV === 'development' ? '/api/v1' : '/api/v1'
export const LABEL_TYPE = [
  {
    value: 1,
    name: '字符'
  },
  {
    value: 2,
    name: '数字'
  },
  {
    value: 3,
    name: '时间'
  },
  {
    value: 4,
    name: 'IP'
  }
]

/**********警告列表**********/
// 预警维度
export const WARN_CODE = [
  {
    value: 0,
    name: '全部'
  },
  {
    value: 1,
    name: '安全域'
  },
  {
    value: 2,
    name: '业务'
  },
  {
    value: 3,
    name: '网段'
  },
  {
    value: 4,
    name: '操作系统'
  },
  {
    value: 5,
    name: '部门'
  }
]

// 预警状态
export const WARN_STATUS = [
  {
    value: 0,
    name: '全部'
  },
  {
    value: 1,
    name: '未查看'
  },
  {
    value: 2,
    name: '已查看'
  },
  {
    value: 3,
    name: '已忽略'
  }
]

// 预警类型
export const WARN_TYPE = [
  {
    value: 0,
    name: '全部'
  },
  {
    value: 1,
    name: '资产预警'
  },
  {
    value: 2,
    name: '漏洞预警'
  },
  {
    value: 3,
    name: '威胁预警'
  }
]

//
export const COLORS_MAP = [
  {
    name: '高危',
    color: '#D4331E'
  },
  {
    name: '中危',
    color: '#E8AE00'
  },
  {
    name: '低危',
    color: '#00B2FF'
  },
  {
    name: '自定义',
    color: '#624CFF'
  }
]

//威胁态势
export const COLORS_THREATEN = [
  {
    name: '低危',
    color: '#4083FF'
  },
  {
    name: '中危',
    color: '#FFDA38'
  },
  {
    name: '高危',
    color: '#FF8E64'
  },
  {
    name: '危急',
    color: '#C22A4E'
  }
]

export const HOME_COLORS = ['#FF853A', '#FFCD3A', '#51E5CA', '#4996FF', '#425EE6', '#817CFF', '#EAFF98']