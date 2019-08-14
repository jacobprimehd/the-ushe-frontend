import React, { Component } from "react";
import "./Profile.css";
import Card from "../../components/cards/cards";
import UserFav from "../../components/userFavs/userFavs";
import Modal from "../../components/modal/modal";
import withAuth from "../../components/withAuth/withAuth";
import Navbar from '../../components/navbar/navbar'
import { ADD_FAV } from "../../queries/index";
import { Mutation } from "react-apollo";
import Error from '../../components/Error/error'
const initialState = {
  order: "",
  place: "",
  isShowing: false
};
class Profile extends Component {
  state = {
    ...initialState,
    username: this.props.session.getCurrentUser.username,
    session: this.props.session.getCurrentUser
  };
  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  };

  handleSubmit = (event,addFav) => {
    addFav().then(({data}) =>{
        console.log(data)
    })
  }

  validateForm = () => {
    const { username, order, place } = this.state;
    const isInvalid = !username || !order || !place;
    return isInvalid;
  }

  render() {
    const { session, username, order, place } = this.state;
    return (
      <div>
        <Navbar/>
        <h1> THE USHE</h1>
        <h2> PROFILE </h2>

        <div className="profile" />
        <div className="profile-section">
          <Card
            username={session.username}
            city={session.city}
            state={session.state}
            bio={session.bio}
          />
          <div class="friends-container" />
          {this.state.isShowing ? (
            <div onClick={this.closeModalHandler} className="back-drop" />
          ) : null}

          <button className="modal-btn" onClick={this.openModalHandler}>
            Add a New Ushe{" "}
          </button>

          <div class="cards-container">
            <UserFav username={session.username} />
          </div>
        </div>
        {this.state.isShowing ? (
            <div onClick={this.closeModalHandler} className="back-drop" />
          ) : null}
          <Mutation mutation={ADD_FAV} variables={{username, order, place}}>
            {(addFav,{data,loading, error}) => {
              return (
                
          
                  <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}
                  >
                <form onSubmit={(event) =>this.handleSubmit(event, addFav)}>
                  <div class="form-group">
                    <label className="form-input" for="formGroupExampleInput">
                      Name of Place
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Name of Place"
                      name="place"
                      onChange={e => this.setState({ place: e.target.value })}
                      value={place}
                    />
                  </div>
                  <div class="form-group">
                    <label className="form-input" for="formGroupExampleInput">
                      {" "}
                      Add Your Order Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Name of Order"
                      name="order"
                      onChange={e => this.setState({ order: e.target.value })}
                      value={order}
                    />
                    <button type="submit" disabled={loading || this.validateForm()}>submit</button>
                  </div>
                  {error && <Error error={error}/>}
                </form>         </Modal>
              );
            }}
          </Mutation>

      </div>
    );
  }
}

export default withAuth(session => session && session.getCurrentUser)(Profile);
