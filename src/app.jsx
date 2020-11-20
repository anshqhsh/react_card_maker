import React from 'react';
import Login from './components/login/login';
import styles from './app.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Maker from './components/maker/maker';

function App({ authService }) {//props안에 authService를 받아옴 <></>스타일링을위해 가운데로
  return( 
  <div className = {styles.app}>
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Login authService={authService} />
      </Route>
      <Route exact path="/maker">
        <Maker authService={authService}/>
      </Route>
    </Switch>
    </BrowserRouter>
  </div>
);
}

export default App;
