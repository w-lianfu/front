import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Header from '../component/header'

import './index.scss'

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Header />
        <p className='welcome'>Hello, Express!</p>
        <Link to='/my'>我的音乐</Link>
      </div>
    )
  }
}

export default Home
