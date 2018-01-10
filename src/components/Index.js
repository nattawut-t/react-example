import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import Layout from './Layout'
import Dashboard from './Dashboard'
import About from './About'
import Contact from './Contact'

const Index = () =>
  <div>
    <HashRouter>
      <Switch>
        <Route exact path="/dashboard" name="dashboard" render={() => <Layout><Dashboard /></Layout>} />
        <Route exact path="/about" name="dashboard" render={() => <Layout><About /></Layout>} />
        <Route exact path="/contact" name="dashboard" render={() => <Layout><Contact /></Layout>} />
        <Redirect from="/" to="/dashboard" />
        <Route render={() => <Layout><Dashboard /></Layout>} />
      </Switch>
    </HashRouter>
  </div>

export default Index
