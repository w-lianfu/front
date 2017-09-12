import React, { Component } from 'react'

import './index.scss'

class My extends Component {
  constructor(props) {
    super(props)
  }

  back() {
    console.log(this.props)
    this.props.history.goBack()
  }

  render() {
    return (
      <div className='my'>
        <p>My Music Page...</p>
        <button onClick={this.back.bind(this)}>返回</button>
      </div>
    )
  }
}

export default My
