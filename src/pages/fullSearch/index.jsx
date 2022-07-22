import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Table, Pagination, Button } from 'antd'
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
      visible: false,
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
        title: '标题',
        dataIndex: 'title',
        render: text => TooltipFn(text)
      },
      {
        title: '内容',
        dataIndex: 'content',
        render: text => TooltipFn(text)
      },
      {
        title: '域名',
        dataIndex: 'host',
        render: text => TooltipFn(text)
      },
      {
        title: 'URL',
        dataIndex: 'url',
        render: text => TooltipFn(text)
      },
      {
        title: '更新时间',
        dataIndex: 'update_time',
        render: text => TooltipFn(text)
      }
    ]
    let list = [], total = 0
    if (body) {
      list = body.data
      total = body.total
    }
    const defaultFields = [
      { type: 'input', label: '综合查询', placeholder: '请输入', key: 'search', allowClear: true, maxLength: 512 },
      { type: 'input', label: '域名', placeholder: '请输入', key: 'host', allowClear: true, maxLength: 512 },
      { type: 'input', label: '标题', placeholder: '请输入', key: 'title', allowClear: true, maxLength: 512 }
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
    api.getFullSearchList(params).then(res => {
      res.data = (res.data || []).map((item, i) => {
        return {
          id: i,
          ...item
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
