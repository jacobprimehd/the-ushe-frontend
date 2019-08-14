import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import Home from "./pages/Home/Home";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import Feed from './pages/Feed/feed';
import withSession from './components/withSession/withSession'

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import profileSearch from './pages/Profile/profileSearch';

const client = new ApolloClient({
    uri: "https://the-ushe-server.herokuapp.com/graphql",
    fetchOptions: {
        credentials: 'include'
    },
    request: operation => {
        const token = localStorage.getItem('token')
        operation.setContext({
            headers: {
                authorization: token
            }
        })
    },
    onError: ({ networkError}) => {
        if(networkError){
            console.log('Network Error', networkError)
        }
    }
})

const Root = ({refetch, session}) => (
    <Router>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" render={()=> <Login refetch={refetch}/>} />
    <Route exact path="/register" render={()=> <Register refetch={refetch}/>} />
    <Route exact path="/profile" render={()=> <Profile session={session}/>}/>
    <Route path="/profiles/:username" component={profileSearch}/>
    <Route exact path="/feed" render={()=> <Feed session={session}/>}/>
    <Redirect to="/" />
    </Switch>
    </Router>
)

const RootWithSession = withSession(Root);

ReactDOM.render(
    <ApolloProvider client={client}>
      <RootWithSession />
    </ApolloProvider>,
    document.getElementById("root")
  );
  