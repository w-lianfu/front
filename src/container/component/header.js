import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

import './header.scss'

class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <header>
        <div className='header-left'>
          <section>
            <h2>网易云音乐</h2>
            <nav>
              <NavLink exact to='/' activeClassName='active'>发现音乐</NavLink>
              <NavLink to='/find' activeClassName='active'>我的音乐</NavLink>
              <NavLink to='/friend' activeClassName='active'>朋友</NavLink>
              <NavLink to='/shop' activeClassName='active'>商城</NavLink>
              <NavLink to='/music' activeClassName='active'>音乐人</NavLink>
              <NavLink to='/client' activeClassName='active'>下载客户端</NavLink>
            </nav>
          </section>
        </div>
      </header>
    )
  }
}

export default Header
