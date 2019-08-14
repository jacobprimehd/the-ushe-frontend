import React from "react";
import "./Profile.css";
import Card from "../../components/cards/cards"
import UserFav from '../../components/userFavs/userFavs'
import withAuth from "../../components/withAuth/withAuth";
import {Query} from 'react-apollo';
import {GET_USER_INFO} from '../../queries/index';
import { withRouter } from "react-router-dom";
const Profile  =({session, match}) => {
    const { username } = match.params;
        return (
       <Query query={GET_USER_INFO} variables={{username}}>
       {({data,loading,error}) => {
        if(loading) return <div>Loading</div>
        if(error) return <div>Error</div>
        console.log(data.getUserInfo)
        return(        <div className="profile">
        <h1> THE USHE</h1>
        <h2> PROFILE </h2>

        <div className="profile-section friends-container">
        <Card username={data.getUserInfo[0].username} city={data.getUserInfo[0].city} state={data.getUserInfo[0].state} bio={data.getUserInfo[0].bio}/>
        </div>

        <div className="Orders">
       <div className="cards-container">
            
        <UserFav username={data.getUserInfo[0].username}/>
        </div>
        </div> 
       
        </div>)
       }}
       </Query>  )
}
const authCheck = withAuth(session => session && session.getCurrentUser)(Profile);
export default withRouter(authCheck);