import React from "react";
import "./cards.css";

function Card(props) {
    return (
<>
            <p> USER INFO </p>
    <div className="card-container">
                   
     <h3 className="name"><i class="random name"> </i>{props.username}</h3>
     <h4 className="location"> {props.city}, {props.state} </h4>
     <h5 className="bio"> {props.bio} </h5>

                 
        
    </div>
    </>

            );
    }

    export default Card;
