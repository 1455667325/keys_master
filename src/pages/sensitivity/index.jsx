import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import { Table, Pagination } from 'antd'
import { TooltipFn } from '@u/common'
import { Search } from '@c/index'
import api from '@/services'
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
      record: null
    }
  }

  componentDidMount () {
    this.getList()
  }

  render () {
    let { pagingParameter, body } = this.state
    const columns = [
      {
        title: '序号',
        dataIndex: 'name',
        width: 100,
        render: (text, record, index)=> `${index + 1}`
      },
      {
        title: '标题',
        dataIndex: 'title',
        render: text => TooltipFn(text)
      },
      {
        title: 'URL',
        dataIndex: 'url',
        render: text => {
          return <a href={text} rel="noopener noreferrer" target="_blank">{TooltipFn(text)}</a>
        }
      },
      {
        title: '域名',
        dataIndex: 'host',
        render: text => TooltipFn(text)
      },
      {
        title: '敏感词',
        dataIndex: 'listen_word',
        render: text => {
          text = text || []
          return TooltipFn(text.join(','))
        }
      },
      {
        title: '页面快照',
        dataIndex: 'pic',
        render: text => TooltipFn(text)
      },
      {
        title: '时间',
        dataIndex: 'update_time',
        render: text => moment(text).format('YYYY-MM-DD HH:mm:ss')
      },
      {
        title: '负责人',
        dataIndex: 'user',
        render: text => {
          text = text || []
          return TooltipFn(text.join(','))
        }
      }
    ]
    let list = [], total = 0
    if (body) {
      list = body.data
      total = body.total
    }
    const defaultFields = [
      { type: 'input', label: '综合查询', placeholder: '请输入', key: 'search', allowClear: true, maxLength: 512 }
    ]
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
      </div>
    )
  }

  //获取列表
  getList = () => {
    let { pagingParameter, searchValues } = this.state
    const params = {
      ...searchValues,
      ...pagingParameter
    }
    api.getSensitivityList(params).then(res => {
      (res.data || []).forEach((item, i) => {
        item.id = i
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
