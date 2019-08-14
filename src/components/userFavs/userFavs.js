import React from 'react';
import OrderCard from '../ordercards/ordercards'

import {Query} from 'react-apollo';
import {GET_USER_FAV} from '../../queries/index'


const UserFavs = ({username}) => (
    <>
    <p> FAVORITES <i class="fas fa-heart"></i></p>
    <Query query={GET_USER_FAV} variables={{username}}>
        {({data,loading,error}) => {
            if(loading) return <div>Loading</div>
            if(error) return <div>Error</div>
            console.log(data)
            return data.getUserFav.map(fav => {
                return <><OrderCard username={fav.username} place={fav.place} order={fav.order}/><br/></>
            })
            
        }}
    </Query>
    </>
)

export default UserFavs;