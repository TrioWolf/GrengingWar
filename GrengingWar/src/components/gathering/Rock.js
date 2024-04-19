import React from "react";
import './rock.css'

// Dummy Component
const Rock = props => {
    return(
        <div className="btn" onClick={props.damage}>
            <div>Rock</div> 
            <div>Type: Rock</div>
            <div className="health">{props.health}</div>
        </div>
    );
}
export default Rock;
