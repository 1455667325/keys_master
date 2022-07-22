import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

@withRouter
class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className="page-container">
        配置页面
      </div>
    )
  }

}

export default Index
