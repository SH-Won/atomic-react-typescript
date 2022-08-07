import React, { lazy } from 'react'
import {Route,Switch} from 'react-router-dom';
import { ThemeProvider } from 'styled-components'


const LandingPage = lazy(()=>import('./page/LandingPage'));

const App = () => {

  return (
    <div id="root">
       <Switch>
         <Route path='/' component={LandingPage}/>
       </Switch>
    </div>
  )
}

export default App