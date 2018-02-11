import React, { Component } from 'react';
import Routes from './Routes/routes.js'
// import{Link} from 'react-router-dom'
import 'bulma/css/bulma.css'
import './main.css'
class App extends Component {
  render() {
    return (
      <div>
          <Routes/>
      </div>
    );
  }
}
export default App  