import React, { Component } from "react";
import "./home.css";


class Home extends Component {
  componentDidMount() {
    document.body.classList.add("background");
  }
  render() {
    return (
      <div>
   
      <h1 className= "header-main" >The Ushe</h1>
      <h2 className= "header-home"> What's your Ushe?</h2>
      <h3 className= "header-second" > Share your favorite food and drink orders with the world. </h3>
      <button type="button" class="btn btn-outline-primary"><a href="/login">Login</a></button>
      <button type="button" class="btn btn-outline-primary"><a href="/register">Register</a></button>
      </div>
    );
  }
}

export default Home;
