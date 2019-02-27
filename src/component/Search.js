import React, { Component } from 'react';
import './search.css';


class Search extends Component {
  render() {

    return (

      <div className="App-header">
        <img src="https://vignette.wikia.nocookie.net/logopedia/images/9/94/Seat-logo.png/revision/latest?cb=20170703190447" className="App-logo2" alt="logo" />
        <h1>Book a trip</h1>
        <label>Pick-up point</label>
        <input type="text" placeholder="address" />
        <label >Drop-off point</label>
        <input type="text" placeholder="adress" />
        <label>Time</label>
        <input type="time" name="" id="" />
        <a href="/map.html"><button className="button">Search</button></a>

      </div>
    )
  }
}

export default Search;