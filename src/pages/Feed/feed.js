import React from "react";
import GlobalOrder from "../../components/globalorder/globalorder";
import Title from "../../components/title/title";
import NavBar from "../../components/navbar/navbar";
import { Query } from 'react-apollo'
import { GET_ALL_FAVS } from "../../queries"
import withAuth from "../../components/withAuth/withAuth";



const Feed = ({session}) => (
            <div>
                <NavBar/>
                <Title>THE USHER</Title>

                <Query query={GET_ALL_FAVS}>
                {({ data, loading, error }) => {
                  if (loading) return <div>Loading</div>;
                  if (error) return <div>Error</div>;
          
                  return data.getAllFavs.map(fav =>{
                    return <><GlobalOrder 
                    location={fav.place}
                    name={fav.username}
                    order={fav.order}
                    /><br/></>
                  });
                }}
              </Query>
            </div>
)

export default withAuth(session => session && session.getCurrentUser)(Feed);

