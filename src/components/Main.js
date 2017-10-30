import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CarList from './CarList'
import CarDetail from './CarDetail'

const Main = () => (
  <div className="content">
  <main>
    <Switch>
      <Route exact path='/' component={CarList}/>
      <Route path='/cars/:car_id' component={CarDetail}/>
    </Switch>
  </main>
  </div>
)

export default Main
