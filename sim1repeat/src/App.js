import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
// import Binroutes from './Binroutes';
// import Createroutes from './Createroutes';


class App extends Component {
  render() {
    return (
      <div >
        <div>
          <Routes/> 
          {/* <Binroutes/> */}
          {/* <Createroutes/> */}
        </div>
      </div>
    );
  }
}

export default App;
