import React from 'react';
import Login from './components/login/login';
import styles from './app.module.css';

function App({ authService }) {//props안에 authService를 받아옴 <></>스타일링을위해 가운데로
  return( 
  <div className = {styles.app}>
    <Login authService={authService}/>
  </div>
);
}

export default App;
