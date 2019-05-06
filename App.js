import React, { Component } from 'react';
import './css/App.css';
import Head from './Head';
import Body from './Body';
import Result from './Result';
import Example from './Example';
import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Head/>
        <Route exact path="/" component={Body} />
        <Route path="/result" component={Result} />
        <Route path="/example" component={Example} />
      </div>
    );
  }
}

export default App;
