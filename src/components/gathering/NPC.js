import React from "react";
// import styled from 'styled-components';

// Dummy Component
const NPC = props => {
    return(
        <div style={styles.btn} id={props.id} atk={props.atk ? 'active' : 'inactive'} onClick={props.onClick}>
            <div>{props.name}</div> 
            <div>Type: {props.type}</div>
            <div style={styles.health}>{props.health} </div>
        </div>
    );
}
export default NPC;

const styles={
    btn:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'black',
        boxShadow:'0 4px 8px 0 rgb(255,192,203), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        color:'aqua',
        padding:'10px',
        marginTop:'5px',
        marginBottom: '12px',
        // marginLeft:'15px',
        fontSize: '14px',
        width: '100px',
        // height: '75px',
        cursor: 'pointer',
        
    },
    health: {
        display: 'flex',
        // flexDirection: 'column',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        bottom: '0px',
        margin: '0px',
        height: '15px'

    },
};