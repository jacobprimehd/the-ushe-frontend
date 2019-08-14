import React from "react";
import "./ordercards.css";

function OrderCard(props) {
  console.log(props)
    return (

    <div className="container">
    <h3 className="order-name"><i class="random name"> </i>{props.username}</h3>

        <div className="card-body">
        <h3 className="card-title">{props.place}</h3>
     
      
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><i class="fas fa-utensils fa-xs"></i>  {props.order}</li>
      </ul>
      <div className="card-body">
      </div>
           
    </div>

            );
    }

    export default OrderCard;
