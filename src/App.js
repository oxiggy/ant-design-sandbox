import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Auth from './views/Auth/Auth'

function App() {
  return (
    <Switch>
      <Route exact path="/auth" component={Auth}/>
      <Redirect from="/" to="/auth" />
    </Switch>
  );
}

export default App;
