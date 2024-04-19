import React from "react";
import './berrybush.css'

// Dummy Component
const Berrybush = props => {
    return(
        <div className="btn" onClick={props.click}>
            <div>Berry Bush</div> 
            <div>Type: Food</div>
            <div className="health">{props.health} </div>
        </div>
    );
}
export default Berrybush;
