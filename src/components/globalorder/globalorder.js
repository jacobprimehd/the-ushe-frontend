import React from "react";
import "./globalorder.css";


function Feed(props) {
  return (
  <>
  
  <div className="container">
  <font size="25" className="card-title"><i class="random name"> </i> {props.name} <small> Ordered Their Ushe </small><font size="5"><i class="fas fa-utensils fa-xs"></i> {props.order}</font></font>

      <div className="card-body">
      {/* <h3 className="card-title">{props.location}</h3> */}
    
    </div>

      <font size = "5"> @ {props.location}</font>
      {/* <li className="list-group-item"><i class="fas fa-utensils fa-xs"></i> Lemon Pound Cake</li> */}
    
    <div className="card-body">
    </div>
    </div>

    </>


          );
  }

export default Feed;