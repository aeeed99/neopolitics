import React, { Component } from 'react';
import './App.css';
import UserList from './UserList';

class App extends Component {

  constructor(props) {
    super(props);
    this.visRef = React.createRef();
  }

  componentDidMount() {
    const config = {
      container_id: (this.visRef.current||{}).id,
    };

    /*
      Since there is no neovis package on NPM at the moment, we have to use a "trick":
      we bind Neovis to the window object in public/index.html.js
    */
    this.vis = new window.NeoVis.default(config);
    this.vis.render();
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={process.env.PUBLIC_URL + '/img/grandstack.png'} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to GRANDstack</h1>
        </header>
        
        <UserList />
      </div>
    );
  }
}

export default App;
