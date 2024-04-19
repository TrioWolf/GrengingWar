import React from "react";
import './npc.css'

// Dummy Component
const NPC = props => {
    return(
        <div className="npc-btn" id={props.id} atk={props.atk ? 'active' : 'inactive'} onClick={props.onClick}>
            <div>{props.name}</div> 
            <div>Type: {props.type}</div>
            <div className="health">{props.health} </div>
        </div>
    );
}
export default NPC;
