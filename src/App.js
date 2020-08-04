import React from 'react';
import './App.css';
import Router from './route/index';

class App extends React.Component{

  render(){
    return(
      <div className="App" style={{display: 'flex', flex: '1'}}>
          <Router/>
      </div>
    )
  }
}

export default App;
