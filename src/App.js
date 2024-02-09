import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
import styles from './App.module.css'
import './common.css'
function App() {
  return (
    <div style={{height:"100vh"}}>
    <Provider store={store}>
      <div className={styles.appContainer}>
       <Home/>
      </div>
    </Provider>
    </div>

  );
}

export default App;
