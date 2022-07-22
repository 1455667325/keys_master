import { TooltipFn } from '@u/common'
import moment from 'moment'

//时间枚举
export const LOG_TIME_TYPE = [
  {
    type: '1',
    value: 'TODAY',
    cnValue: '今日'
  },
  {
    type: '2',
    value: 'YESTERDAY',
    cnValue: '昨日'
  },
  {
    type: '3',
    value: 'NEARLY_THREE_DAYS',
    cnValue: '近三天'
  },
  {
    type: '4',
    value: 'NEARLY_SEVEN_DAYS',
    cnValue: '近七天'
  },
  {
    type: '5',
    value: 'THIS_WEEK',
    cnValue: '本周'
  },
  {
    type: '7',
    value: '',
    cnValue: '自定义'
  }
]

export const STANDARD = [
  {
    name: 'and',
    value: 'and'
  },
  {
    name: 'or',
    value: 'or'
  },
  {
    name: 'not',
    value: 'not'
  }
]

//name字段为校验组装数据时使用，name字段为赋值在输入框中需要包含前后空格，_name字段为添加树形弹框时展现使用
export const OPR_LIST = [
  {
    name: ' = ',
    _name: '=',
    title: '等于',
    value: 'equal'
  },
  {
    name: ' ≠ ',
    _name: '≠',
    title: '不等于',
    value: 'notEqual'
  },
  {
    name: ' > ',
    _name: '>',
    title: '大于',
    value: 'greater'
  },
  {
    name: ' < ',
    _name: '<',
    title: '小于',
    value: 'less'
  },
  {
    name: ' ≥ ',
    _name: '≥',
    title: '大于等于',
    value: 'greaterEqual'
  },
  {
    name: ' ≤ ',
    _name: '≤',
    title: '小于等于',
    value: 'lessEqual'
  },
  {
    name: ' ⊆ ',
    _name: '⊆',
    title: '包含',
    value: 'contain'
  },
  {
    name: ' ⊄ ',
    _name: '⊄',
    title: '不包含',
    value: 'notContain'
  },
  {
    name: ' ∈ ',
    _name: '∈',
    title: '属于',
    value: 'belong'
  },
  {
    name: ' ∉ ',
    _name: '∉',
    title: '不属于',
    value: 'not belong'
  }
]

//IOC可筛选的表头
export const LOG_IOC_HIDE_HEADER = _this => {
  return [
    _this.getIp('sip', false),
    _this.getIp('dip', false),
    {
      title: '任务号',
      key: 'taskId',
      dataIndex: 'taskId',
      isShow: false,
      render: (text, record) => {
        const data = {
          name: '任务号',
          key: 'taskId',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '应用层协议',
      key: 'appProto',
      dataIndex: 'appProto',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '应用层协议',
          key: 'appProto',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '传输层协议',
      key: 'tranProto',
      dataIndex: 'tranProto',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '传输层协议',
          key: 'tranProto',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '源端口',
      key: 'sport',
      dataIndex: 'sport',
      isShow: false,
      render: (text, record) => {
        const data = {
          name: '源端口',
          key: 'sport',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '源IP机构名',
      key: 'sipOrganization',
      dataIndex: 'sipOrganization',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '源IP机构名',
          key: 'sipOrganization',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '目的IP机构名',
      key: 'dipOrganization',
      dataIndex: 'dipOrganization',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '目的IP机构名',
          key: 'dipOrganization',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '攻击IP机构名',
      key: 'aipOrganization',
      dataIndex: 'aipOrganization',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '攻击IP机构名',
          key: 'aipOrganization',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '受害者IP机构名',
      key: 'vipOrganization',
      dataIndex: 'vipOrganization',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '受害者IP机构名',
          key: 'vipOrganization',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },

    {
      title: '目的端口',
      key: 'dport',
      dataIndex: 'dport',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '目的端口',
          key: 'dport',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '源IP国家/地区',
      key: 'sipCountry',
      dataIndex: 'sipCountry',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '源IP国家/地区',
          key: 'sipCountry',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '源IP城市',
      key: 'sipCity',
      dataIndex: 'sipCity',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '源IP城市',
          key: 'sipCity',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '源IP运营商',
      key: 'sipISP',
      dataIndex: 'sipISP',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '源IP运营商',
          key: 'sipISP',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '源IP纬度',
      key: 'sipLatitude',
      dataIndex: 'sipLatitude',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '源IP纬度',
          key: 'sipLatitude',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '源IP经度',
      key: 'sipLongitude',
      dataIndex: 'sipLongitude',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '源IP经度',
          key: 'sipLongitude',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '源IP AS信息',
      key: 'sipAS',
      dataIndex: 'sipAS',
      isShow: false,
      width: 150,
      render: text => TooltipFn(text)
    },
    {
      title: '目的IP国家/地区',
      key: 'dipCountry',
      dataIndex: 'dipCountry',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '目的IP国家/地区',
          key: 'dipCountry',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '目的IP城市',
      key: 'dipCity',
      dataIndex: 'dipCity',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '目的IP城市',
          key: 'dipCity',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '目的IP纬度',
      key: 'dipLatitude',
      dataIndex: 'dipLatitude',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '目的IP纬度',
          key: 'dipLatitude',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '目的IP经度',
      key: 'dipLongitude',
      dataIndex: 'dipLongitude',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '目的IP经度',
          key: 'dipLongitude',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '目的IP运营商',
      key: 'dipISP',
      dataIndex: 'dipISP',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '目的IP运营商',
          key: 'dipISP',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '目的IP AS信息',
      key: 'dipAS',
      dataIndex: 'dipAS',
      isShow: false,
      width: 150,
      render: text => TooltipFn(text)
    },
    {
      title: '攻击者国家/地区',
      key: 'aipCountry',
      dataIndex: 'aipCountry',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '攻击者国家/地区',
          key: 'aipCountry',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '攻击者IP城市',
      key: 'aipCity',
      dataIndex: 'aipCity',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '攻击者城市',
          key: 'aipCity',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '攻击者端口',
      key: 'aport',
      dataIndex: 'aport',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '攻击者端口',
          key: 'aport',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '攻击者IP运营商',
      key: 'aipISP',
      dataIndex: 'aipISP',
      isShow: false,
      width: 150,
      render: text => TooltipFn(text)
    },
    {
      title: '攻击者IP纬度',
      key: 'aipLatitude',
      dataIndex: 'aipLatitude',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '攻击者IP纬度',
          key: 'aipLatitude',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '攻击者IP经度',
      key: 'aipLongitude',
      dataIndex: 'aipLongitude',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '攻击者IP经度',
          key: 'aipLongitude',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '攻击者IP AS信息',
      key: 'aipAS',
      dataIndex: 'aipAS',
      isShow: false,
      width: 150,
      render: text => TooltipFn(text)
    },
    {
      title: '受害者国家/地区',
      key: 'vipCountry',
      dataIndex: 'vipCountry',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '受害者国家/地区',
          key: 'vipCountry',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '受害者IP城市',
      key: 'vipCity',
      dataIndex: 'vipCity',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '受害者IP城市',
          key: 'vipCity',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '受害者端口',
      key: 'vport',
      dataIndex: 'vport',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '受害者端口',
          key: 'vport',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },

    {
      title: '受害者IP纬度',
      key: 'vipLatitude',
      dataIndex: 'vipLatitude',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '受害者IP纬度',
          key: 'vipLatitude',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '受害者IP经度',
      key: 'vipLongitude',
      dataIndex: 'vipLongitude',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '受害者IP经度',
          key: 'vipLongitude',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '受害者IP运营商',
      key: 'vipISP',
      dataIndex: 'vipISP',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '受害者IP运营商',
          key: 'vipISP',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '受害者IP AS信息',
      key: 'vipAS',
      dataIndex: 'vipAS',
      isShow: false,
      width: 150,
      render: text => TooltipFn(text)
    },
    {
      title: '攻击链',
      key: 'killChain',
      dataIndex: 'killChain',
      isShow: false,
      render: (text, record) => {
        const data = {
          name: '攻击链',
          key: 'killChain',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '厂商ID',
      key: 'vendorId',
      dataIndex: 'vendorId',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '厂商ID',
          key: 'vendorId',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '设备IP',
      key: 'deviceIp',
      dataIndex: 'deviceIp',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '设备IP',
          key: 'deviceIp',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '置信度',
      key: 'confidence',
      dataIndex: 'confidence',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '置信度',
          key: 'confidence',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '黑名单类型',
      key: 'blackList',
      dataIndex: 'blackList',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '黑名单类型',
          key: 'blackList',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '近期末次告警时刻',
      key: 'LRLastAlertDate',
      dataIndex: 'LRLastAlertDate',
      width: 180,
      render: text => text ? TooltipFn(moment(text - 0).format('YYYY-MM-DD HH:mm:ss')) : '--'
    },
    {
      title: '内部聚合值',
      key: 'innerAggregateVaule',
      dataIndex: 'innerAggregateVaule',
      isShow: false,
      width: 180,
      render: (text, record) => {
        const data = {
          name: '内部聚合值',
          key: 'innerAggregateVaule',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '外部聚合值',
      key: 'externalAggregateVaule',
      dataIndex: 'externalAggregateVaule',
      isShow: false,
      width: 180,
      render: (text, record) => {
        const data = {
          name: '外部聚合值',
          key: 'externalAggregateVaule',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '日志ID',
      key: 'metaGuid',
      dataIndex: 'metaGuid',
      isShow: false,
      width: 180,
      render: (text, record) => {
        const data = {
          name: '日志ID',
          key: 'metaGuid',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '威胁检测元数据类型',
      key: 'metaInfoType',
      dataIndex: 'metaInfoType',
      isShow: false,
      width: 180,
      render: (text, record) => {
        const data = {
          name: '威胁检测元数据类型',
          key: 'metaInfoType',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '域名',
      key: 'domain',
      width: 300,
      dataIndex: 'domain',
      isShow: false,
      render: (text, record) => {
        const data = {
          name: '域名',
          key: 'domain',
          value: record.dnsDesc && record.dnsDesc.domain ? record.dnsDesc.domain : null,
          tag: record.domainTag
        }
        return _this.renderTableText(record, data)
      }
    }
  ]
}

//沙箱可筛选的表头
export const LOG_SAND_HIDE_HEADER = _this => {
  return [
    _this.getLineInfo(false),
    {
      title: '源IP国家/地区',
      key: 'sipCountry',
      dataIndex: 'sipCountry',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '源IP国家/地区',
          key: 'sipCountry',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '源IP城市',
      key: 'sipCity',
      dataIndex: 'sipCity',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '源IP城市',
          key: 'sipCity',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '源端口',
      key: 'sport',
      dataIndex: 'sport',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '源端口',
          key: 'sport',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '源IP运营商',
      key: 'sipISP',
      dataIndex: 'sipISP',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '源IP运营商',
          key: 'sipISP',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '源IP纬度',
      key: 'sipLatitude',
      dataIndex: 'sipLatitude',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '源IP纬度',
          key: 'sipLatitude',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '源IP经度',
      key: 'sipLongitude',
      dataIndex: 'sipLongitude',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '源IP经度',
          key: 'sipLongitude',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '源IP机构名',
      key: 'sipOrganization',
      dataIndex: 'sipOrganization',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '源IP机构名',
          key: 'sipOrganization',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '源IP AS信息',
      key: 'sipAS',
      dataIndex: 'sipAS',
      isShow: false,
      width: 150,
      render: text => TooltipFn(text)
    },
    {
      title: '目的IP国家/地区',
      key: 'dipCountry',
      dataIndex: 'dipCountry',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '目的IP国家/地区',
          key: 'dipCountry',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '目的IP城市',
      key: 'dipCity',
      dataIndex: 'dipCity',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '目的IP城市',
          key: 'dipCity',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '目的IP运营商',
      key: 'dipISP',
      dataIndex: 'dipISP',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '目的IP运营商',
          key: 'dipISP',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '目的IP机构名',
      key: 'dipOrganization',
      dataIndex: 'dipOrganization',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '目的IP机构名',
          key: 'dipOrganization',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '目的端口',
      key: 'dport',
      dataIndex: 'dport',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '目的端口',
          key: 'dport',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '目的IP纬度',
      key: 'dipLatitude',
      dataIndex: 'dipLatitude',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '目的IP纬度',
          key: 'dipLatitude',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '目的IP经度',
      key: 'dipLongitude',
      dataIndex: 'dipLongitude',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '目的IP经度',
          key: 'dipLongitude',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '目的IP AS信息',
      key: 'dipAS',
      dataIndex: 'dipAS',
      isShow: false,
      width: 150,
      render: text => TooltipFn(text)
    },
    {
      title: '文件大小',
      key: 'fileSize',
      dataIndex: 'fileSize',
      isShow: false,
      width: 150,
      render: text => TooltipFn(text)
    },
    {
      title: '厂商ID',
      key: 'vendorId',
      dataIndex: 'vendorId',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '厂商ID',
          key: 'vendorId',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '应用层协议',
      key: 'appProto',
      dataIndex: 'appProto',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '应用层协议',
          key: 'appProto',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '传输层协议',
      key: 'tranProto',
      dataIndex: 'tranProto',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '传输层协议',
          key: 'tranProto',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '设备IP',
      key: 'deviceIp',
      dataIndex: 'deviceIp',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '设备IP',
          key: 'deviceIp',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '原始元数据',
      key: 'metaInfo',
      dataIndex: 'metaInfo',
      isShow: false,
      width: 150,
      render: text => TooltipFn(text)
    },
    {
      title: '日志ID',
      key: 'metaGuid',
      dataIndex: 'metaGuid',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '日志ID',
          key: 'metaGuid',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '关联值',
      key: 'associatedValue',
      dataIndex: 'associatedValue',
      isShow: false,
      width: 150,
      render: text => TooltipFn(text)
    },
    {
      title: '网络活动行为',
      key: 'networkBehavior',
      dataIndex: 'networkBehavior',
      isShow: false,
      width: 150,
      render: text => TooltipFn(text)
    },
    {
      title: '关联IP、域名',
      key: 'associatedIp',
      dataIndex: 'associatedIp',
      isShow: false,
      width: 150,
      render: text => TooltipFn(text)
    },
    {
      title: '是否恶意',
      key: 'malicious',
      dataIndex: 'malicious',
      isShow: false,
      width: 150,
      render: (text, record) => {
        if (text === null || text === undefined) {
          return '--'
        }
        return text ? '是' : '否'
      }
    },
    {
      title: '恶意家族名称',
      key: 'maliciousFamily',
      dataIndex: 'maliciousFamily',
      isShow: false,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '恶意家族名称',
          key: 'maliciousFamily',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: '是否定向攻击',
      key: 'targeted',
      dataIndex: 'targeted',
      isShow: false,
      width: 150,
      render: (text, record) => {
        if (text === null || text === undefined) {
          return '--'
        }
        return text ? '是' : '否'
      }
    },
    {
      title: 'APT团伙名称',
      key: 'campaign',
      dataIndex: 'campaign',
      isShow: false,
      width: 150,
      render: text => TooltipFn(text)
    },
    {
      title: '首次发现时间',
      key: 'firstSeen',
      dataIndex: 'firstSeen',
      isShow: false,
      width: 180,
      render: text => text ? TooltipFn(moment(text - 0).format('YYYY-MM-DD HH:mm:ss')) : '--'
    }
  ]
}

//IOC表头
export const LOG_IOC_COLUMNS = _this => {
  return [
    {
      title: '告警时间',
      key: 'writeDate',
      dataIndex: 'writeDate',
      sorter: true,
      isShow: true,
      width: 170,
      render: text => text ? TooltipFn(moment(text - 0).format('YYYY-MM-DD HH:mm:ss')) : '--'
    },
    {
      title: '近期首次告警时刻',
      key: 'LRFirstAlertDate',
      dataIndex: 'LRFirstAlertDate',
      isShow: true,
      width: 170,
      render: text => text ? TooltipFn(moment(text - 0).format('YYYY-MM-DD HH:mm:ss')) : '--'
    },
    {
      title: '近期告警次数',
      key: 'LRAlertTimes',
      dataIndex: 'LRAlertTimes',
      isShow: true,
      width: 120,
      render: (text, record) => {
        const data = {
          name: '近期告警次数',
          key: 'LRAlertTimes',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    _this.getSeverity(),
    {
      title: '威胁类型',
      key: 'attackTypeParentMsg',
      dataIndex: 'attackTypeParentMsg',
      isShow: true,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '威胁类型',
          key: 'attackTypeParentMsg',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    _this.getAttackTypeMsg(),
    _this.getIp('aip', true),
    _this.getIp('vip', true),
    _this.getLineInfo(true),
    {
      title: '白名单类型',
      key: 'whiteList',
      dataIndex: 'whiteList',
      isShow: true,
      width: 110,
      render: (text, record) => {
        const data = {
          name: '白名单类型',
          key: 'whiteList',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    }
  ]
}

//沙箱表头
export const LOG_SAND_COLUMNS = _this => {
  return [
    {
      title: '告警时间',
      key: 'writeDate',
      dataIndex: 'writeDate',
      sorter: true,
      isShow: true,
      width: 170,
      render: text => text ? TooltipFn(moment(text - 0).format('YYYY-MM-DD HH:mm:ss')) : '--'
    },
    _this.getSeverity(),
    {
      title: '威胁类型',
      key: 'attackTypeParentMsg',
      dataIndex: 'attackTypeParentMsg',
      isShow: true,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '威胁类型',
          key: 'attackTypeParentMsg',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    },
    _this.getAttackTypeMsg(),
    _this.getIp('sip', true),
    _this.getIp('dip', true),
    {
      title: '文件名称',
      key: 'fileName',
      dataIndex: 'fileName',
      isShow: true,
      width: 150,
      render: (text, record) => {
        const data = {
          name: '文件名称',
          key: 'fileName',
          value: text,
          tag: record.fileTag
        }
        return _this.renderTableText(record, data)
      }
    },
    {
      title: 'MD5',
      key: 'fileMd5',
      dataIndex: 'fileMd5',
      width: 150,
      isShow: true,
      render: text => TooltipFn(text)
    },
    {
      title: '文件类型',
      key: 'fileType',
      dataIndex: 'fileType',
      isShow: true,
      width: 100,
      render: text => TooltipFn(text)
    },
    {
      title: '任务号',
      key: 'taskId',
      dataIndex: 'taskId',
      isShow: true,
      render: (text, record) => {
        const data = {
          name: '任务号',
          key: 'taskId',
          value: text
        }
        return _this.renderTableText(record, data)
      }
    }
  ]
}

//日志危害等级对应的颜色
export const LOG_LEVEL = [
  {
    name: '低危',
    class: 'blue'
  },
  {
    name: '中危',
    class: 'yellow'
  },
  {
    name: '高危',
    class: 'red'
  },
  {
    name: '自定义',
    class: 'purple'
  }
]

