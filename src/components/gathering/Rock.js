import React from "react";
// import styled from 'styled-components';

// Dummy Component
const Rock = props => {
    return(
        <div style={styles.btn} onClick={props.damage}>
            <div>Rock</div> 
            <div>Type: Rock</div>
            <div style={styles.health}>{props.health}</div>
        </div>
    );
}
export default Rock;

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
        height:'50px',
        cursor: 'pointer',
        
    },
    health: {
        display: 'flex',
        // flexDirection: 'column',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top:'8px'

    },
};