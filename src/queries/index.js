import { gql } from "apollo-boost";

export const ADD_FAV = gql`
mutation($place: String!, $order: String!, $username: String!){
  addFav(place: $place,order: $order, username: $username){
    place
    order
    createdDate
    username
  }
}

`;



export const GET_ALL_FAVS = gql`
  query {
    getAllFavs {
      place
      order
      createdDate
      username
    }
  }
`;

export const SIGNUP_USER = gql`
mutation($email: String!,$password: String!, $username: String!, $city: String!,$state: String!, $allergies: String, $bio: String){
  signupUser(email: $email, password: $password, username: $username, city: $city, state: $state, allergies: $allergies, bio: $bio){
    token
  }
}
`;

export const SIGNIN_USER = gql`
mutation($username: String!, $password: String!){
  signinUser(username: $username, password: $password){
    token
  }
}`;


export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser{
      _id
      username
      city
      state
      allergies
      bio
    }
  }

`;


export const GET_USER_FAV = gql`
  query($username: String!){
    getUserFav(username: $username){
      _id
      place
      order
      username
    }

  }
`;

export const GET_USER_INFO = gql`
  query($username: String!){
    getUserInfo(username: $username){
      _id
      username
      city
      state
      allergies
      bio
    }
  }
`;