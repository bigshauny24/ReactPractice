import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';


class App extends Component {

constructor (){
  super();//allowsus to use the state
  this.state = {
     pi: 3.14,
     name: 'C#'
  }
}

//es6 arrow function
changeName = (name) => {
  this.setState(
    {name: name}
  )
  }

  

  render() {
    //javascript here
    return (

      //javascript here
      <div className="App">
        <Header name={this.state.name} change={this.changeName}/>



      </div>//this is javascript here
    );
  }
}

export default App;
