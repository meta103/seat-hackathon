import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Search from './component/Search';
import Mapbox from './component/Map';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/home' >
          <div className="App">
            <div className="App-header">
              <img src="https://vignette.wikia.nocookie.net/logopedia/images/9/94/Seat-logo.png/revision/latest?cb=20170703190447" className="App-logo" alt="logo" />
              <Link to='/search'>
                <button className="button">
                  START
              </button>
              </Link>
            </div>

          </div>

        </Route>
        <Route exact path='/search' component={Search} />
        <Route exact path='/map' component={Mapbox} />

      </Switch>
    );
  }
}

export default App;
