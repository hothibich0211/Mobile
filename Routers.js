import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Signup from './Screen/Signup.js'
import Signups from './Screen/Signup.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "signup" Screen = {Signup} title = "Sign up" initial = {true} />
         <Scene key = "signups" Screen = {Signups} title = "sign ups" />
      </Scene>
   </Router>
)
export default Routes