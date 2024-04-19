import React from "react";
import './tree.css'

// Dummy Component
const Tree = props => {
    return(
        <div className="btn"  onClick={props.damage}>
            <div>Tree</div> 
            <div>Type: Wood</div>
            <div  className="health">{props.health}</div>
        </div>
    );
}
export default Tree;
