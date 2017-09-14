import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import Home from './container/home'
import My from './container/my'

import './container/scss/common.scss'

ReactDOM.render(
  <Router>
    <div>
      <Route path='/' component={Home} />
      <Route path='/my' component={My} />
    </div>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker();
