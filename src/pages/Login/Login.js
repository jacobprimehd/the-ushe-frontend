import React, { Component } from "react";
import {  withRouter } from 'react-router-dom'
import "./login.css";

import Error from '../../components/Error/error'
import { Mutation } from "react-apollo";
import { SIGNIN_USER } from "../../queries";

const initialState = {
  username: "",
  password: ""
}

class Login extends Component {
  state = {...initialState};

  componentDidMount() {
    document.body.classList.add("background-register");
  }

  clearState = () => {
    this.setState({...initialState})
  }

  handleSubmit = (event, signinUser) => {
    event.preventDefault();
    signinUser().then(async({data}) => {
      console.log(data);
      localStorage.setItem('token', data.signinUser.token)
      await this.props.refetch();
      this.clearState();
      this.props.history.push('/profile')
    });
  };

  validateForm = () => {
    const { username, password } = this.state;
    const isInvalid = !username || !password;
    return isInvalid
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
      <div className="wrapper wrapper--w680">
        <div className="card card-4">
          <div className="card-body">
            <h2 className="title">Login</h2>
        <Mutation mutation={SIGNIN_USER} variables={{username, password}}>
        {(signinUser, {data,loading,error}) => {

          return (
            <form className="form" onSubmit={event => this.handleSubmit(event,signinUser)}>
            <div className="row row-space">
              <div className="col-6">
                <div className="input-group">
                  <label className="label">Username</label>
                  <input className="input--style-4" type="text" name="username" onChange={e => this.setState({ username: e.target.value })} value={username} />
                </div>
              </div>
              <div className="col-6">
                <div className="input-group">
                  <label className="label">Password</label>
                  <input className="input--style-4" type="password" name="password" onChange={e => this.setState({ password: e.target.value })} value={password} />
                </div>
              </div>
            </div>
           
            <div className="p-t-15">
              <button className="btn btn--radius-2 btn--blue" type="submit"  disabled={loading || this.validateForm()}>Submit</button>
            </div>
            {error&&<Error error={error}/>} 
          </form>
          )
        }}
      </Mutation>  
      </div>
      </div>
    </div>
    </div>
    );
  }
}

export default withRouter(Login);
