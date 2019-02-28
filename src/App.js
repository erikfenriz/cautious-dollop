import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Search from './views/Search';
import Weather from './views/Weather';
class App extends Component {
  render() {
    return (
      <div className="app">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/weather" component={Weather} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
