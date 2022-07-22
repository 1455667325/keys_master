import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Table, Pagination, Form, Button, message, Modal } from 'antd'
import { TooltipFn } from '@u/common'
import { Search, CommonModal } from '@c/index'
import api from '@/services'
const { Item } = Form

@withRouter
class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchValues: {},
      pagingParameter: {
        limit: 10,
        page: 1
      },
      body: {},
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
        title: '关键词',
        dataIndex: 'keyword',
        render: text => TooltipFn(text),
      },
      {
        title: '操作',
        dataIndex: 'operate',
        width: '10%',
        render: (text, record) => {
          return (
            <div className="operate-wrap">
              <a onClick={() => this.delete(record)}>删除</a>
            </div>
          )
        }
      }
    ]
    let list = [], total = 0
    if (body) {
      list = body.data
      total = body.total
    }
    const defaultFields = [
      { type: 'input', label: '关键词', placeholder: '请输入', key: 'keyword', allowClear: true, maxLength: 512 }
    ]
    const formFields = [
      {
        name: '关键词',
        key: 'keyword',
        defaultValue: record && record.keyword,
        type: 'input', rules: [{ required: true, message: '请输入关键词' }, { max: 10, message: '最大10个字符' }, { whitespace: true, message: '关键词不能为空！' }]
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
        {/* <div className="search-bar">
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
        </div> */}
        <div className='btn-container'>
          <Button type="primary" onClick={() => this.setState({ visible: true })}>创建关键词</Button>
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
              limit={pagingParameter.limit}
              current={pagingParameter.page} />
          }
        </div>
        {
          visible && <CommonModal
            type="form"
            visible={visible}
            title={record ? '编辑关键词' : '创建关键词'}
            width={600}
            oktext="确定"
            className='add-user-modal'
            value={this.handleRequest}
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

  // 新增、编辑提交接口
  handleRequest = (data) => {
    const { record } = this.state
    let url = 'addKeyword'
    if (record) {
      url = 'editKeyword'
    }
    api[url](data).then(res => {
      message.success('操作成功')
      this.setState({
        visible: false,
        record: null
      })
      this.getList()
    })
  }

  // 新增关键词
  addUser = () => {
    message.success('操作成功')
    this.setState({
      visible: false
    })
  }

  // 删除关键词
  delete = ({ keyword }) => {
    Modal.confirm({
      content: '请确认是否删除该数据？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        api.deleteKeyword({ keyword }).then(res => {
          message.success('删除成功')
          this.getList()
        })

      }
    })
  }

  //获取列表
  getList = () => {
    let { pagingParameter, searchValues } = this.state
    const params = {
      ...searchValues,
      ...pagingParameter
    }
    api.getKeywordList(params).then(res => {
      res.data = (res.data || []).map((item, i) => {
        return {
          id: i,
          keyword: item.word
        }
      })
      this.setState({
        body: res
      })
    })
  }

  handleSubmit = values => {
    this.setState({
      pagingParameter: {
        limit: 10,
        page: 1
      },
      searchValues: values
    }, this.getList)
  }

  handleReset = () => {
    this.setState({
      pagingParameter: {
        limit: 10,
        page: 1
      },
      searchValues: {}
    }, this.getList)
  }

  //改变当前页显示数量
  changePage = (page, limit) => {
    this.setState({
      pagingParameter: {
        limit,
        page
      }
    }, this.getList)
  }

}

export default Index
