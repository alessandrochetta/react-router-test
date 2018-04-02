import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import About from './modules/About'
import Home from './modules/Home'

render((

    <Router history={browserHistory}>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </Router>

), document.getElementById('app'))
