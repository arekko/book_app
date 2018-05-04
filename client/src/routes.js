import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home/Home'
import Layout from './hoc/Layout'
import BookView from './components/Books/index'
import Login from './containers/Admin/Login'
import User from './components/Admin'
import AddReview from './components/Admin/Add'

import Auth from './hoc/Auth'

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home,null)} />
        <Route path="/login" exact component={Auth(Login,false)} />
        <Route path="/user" exact component={Auth(User,true)} />
        <Route path="/user/add" exact component={Auth(AddReview,true)}/>
        <Route path="/books/:id" exact component={Auth(BookView)} />



      </Switch>
    </Layout>
  )
}

export default Routes
