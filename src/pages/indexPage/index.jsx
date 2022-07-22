import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import { Table, Pagination, Form, Button, message, Modal } from 'antd'
import { TooltipFn } from '@u/common'
import { Search, CommonModal } from '@c/index'
const { Item } = Form

@withRouter
class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchValues: {},
      pagingParameter: {
        pageSize: 10,
        currentPage: 1
      },
      body: {
        records: [
          {
            id: 1,
            webSite: '百度',
            title: '敏感词',
            url: 'www.baidu.com',
            key: '8964',
            link: 'www.baidu.com',
            time: 1643803974000
          },
          {
            id: 2,
            webSite: '百度',
            title: '国家领导人',
            url: 'www.baidu.com',
            key: '习近平',
            link: 'www.baidu.com',
            time: 1646803974000
          }
        ],
        total: 2
      },
      visible: false,
      record: null
    }
  }

  componentDidMount () {
    this.getList()
  }

  render () {
    let { record, pagingParameter, body, visible } = this.state
    const columns = [
      {
        title: '网站',
        dataIndex: 'webSite',
        render: text => TooltipFn(text)
      },
      {
        title: '主题',
        dataIndex: 'title'
      },
      {
        title: 'URL',
        dataIndex: 'url',
        render: text => TooltipFn(text)
      },
      {
        title: '匹配关键词',
        dataIndex: 'key',
        render: text => TooltipFn(text)
      },
      {
        title: '快照链接',
        dataIndex: 'link',
        render: text => <a onClick={() => this.openLink(text)}>{text}</a>
      },
      {
        title: '发现时间',
        dataIndex: 'time',
        render: text => moment(text).format('YYYY-MM-DD HH:mm:ss')
      },
      {
        title: '操作',
        dataIndex: 'operate',
        width: '10%',
        render: (text, record) => {
          return (
            <div className="operate-wrap">
              <a onClick={() => this.setState({ visible: true, record })}>编辑</a>
              <a onClick={() => this.delete(record)}>删除</a>
            </div>
          )
        }
      }
    ]
    let list = [], total = 0
    if (body) {
      list = body.records
      total = body.total
    }
    const defaultFields = [
      { type: 'input', label: '网站', placeholder: '请输入', key: 'website', allowClear: true, maxLength: 512 },
      { type: 'input', label: '主题', placeholder: '请输入', key: 'title', allowClear: true, maxLength: 512 },
      { type: 'input', label: 'URL', placeholder: '请输入', key: 'url', allowClear: true, maxLength: 512 },
      { type: 'input', label: '匹配关键词', placeholder: '请输入', key: 'key', allowClear: true, maxLength: 512 },
      { type: 'input', label: '快照链接', placeholder: '请输入', key: 'link', allowClear: true, maxLength: 512 }
    ]
    const formFields = [
      {
        name: '网站',
        key: 'website',
        defaultValue: record && record.name,
        type: 'input', rules: [{ required: true, message: '请输入网站' }, { max: 100, message: '最大10个字符' }, { whitespace: true, message: '不能为空！' }]
      },
      {
        name: '主题',
        key: 'title',
        defaultValue: record && record.name,
        type: 'input', rules: [{ required: true, message: '请输入主题' }, { max: 100, message: '最大10个字符' }, { whitespace: true, message: '不能为空！' }]
      },
      {
        name: 'URL',
        key: 'url',
        defaultValue: record && record.name,
        type: 'input', rules: [{ required: true, message: '请输入URL' }, { max: 100, message: '最大10个字符' }, { whitespace: true, message: '不能为空！' }]
      },
      {
        name: '匹配关键词',
        key: 'key',
        defaultValue: record && record.name,
        type: 'input', rules: [{ required: true, message: '请输入匹配关键词' }, { max: 100, message: '最大10个字符' }, { whitespace: true, message: '不能为空！' }]
      },
      {
        name: '快照链接',
        key: 'link',
        defaultValue: record && record.name,
        type: 'input', rules: [{ required: true, message: '请输入快照链接' }, { max: 100, message: '最大10个字符' }, { whitespace: true, message: '不能为空！' }]
      }
    ]
    const formLayout = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 18
      }
    }
    return (
      <div className="page-container">
        <div className="search-bar">
          <Search
            defaultFields={defaultFields}
            showExpand
            onSubmit={this.handleSubmit}
            onReset={this.handleReset}
            wrappedComponentRef={search => {
              if (search) {
                this.searchForm = search.props.form
                this.search = search
              }
            }}
          />
        </div>
        <div className='btn-container'>
          <Button type="primary" onClick={() => this.setState({ visible: true })}>新增关键词</Button>
        </div>
        <div className="table-wrap">
          <Table
            rowKey="id"
            columns={columns}
            dataSource={list}
            onChange={this.handleTableSort}
            pagination={false}
          />
          {
            total > 0 && <Pagination
              className="table-pagination"
              total={total}
              showQuickJumper
              showTotal={(total) => `共 ${total || 0} 条数据`}
              onChange={this.changePage}
              pageSize={pagingParameter.pageSize}
              current={pagingParameter.currentPage} />
          }
        </div>
        {
          visible && <CommonModal
            type="form"
            visible={visible}
            title={record ? '编辑关键词' : '新增关键词'}
            width={600}
            oktext="确定"
            className='add-user-modal'
            value={this.addUser}
            onClose={() => this.setState({ visible: false, record: null })}
            fields={formFields}
            column={1}
            FormItem={Item}
            formLayout={formLayout}
          />
        }
      </div>
    )
  }

  // 生效失效
  openLink = (text) => {
    window.open(`http://${text}`)
  }

  // 新增用户
  addUser = () => {
    message.success('操作成功')
    this.setState({
      visible: false
    })
  }

  // 删除用户
  delete = () => {
    Modal.confirm({
      content: '请确认是否删除该数据？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        message.success('删除成功')
      }
    })
  }

  //获取列表
  getList = () => {
  }

  handleSubmit = values => {
    this.setState({
      pagingParameter: {
        pageSize: 10,
        currentPage: 1
      },
      searchValues: values
    }, this.getList)
  }

  handleReset = () => {
    this.setState({
      pagingParameter: {
        pageSize: 10,
        currentPage: 1
      },
      searchValues: {}
    }, this.getList)
  }

  //改变当前页显示数量
  changePage = (currentPage, pageSize) => {
    this.setState({
      pagingParameter: {
        pageSize,
        currentPage
      }
    }, this.getList)
  }

}

export default Index
