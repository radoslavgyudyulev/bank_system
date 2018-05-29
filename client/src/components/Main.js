import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Popup from './Popup'
import Account from './Account'
import Bank from './Bank'

 const Main = () => (
    <Switch>
    <Route exact path='/' component={Popup} />
    <Route path='/bank' component={Bank} />
    <Route path='/account' component={Account} />
   </Switch>
 )

 export default Main