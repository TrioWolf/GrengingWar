import React from "react";
// import styled from 'styled-components';

// Dummy Component
const GWsector = props => {
    return(
        <button style={styles.btn} id={props.id} onClick={props.onClick} >
            {props.name}
        </button>
    );
}
export default GWsector;

const styles={
    btn:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        backgroundColor:'aqua',
        // boxShadow:'0 4px 8px 0 rgb(255,192,203), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        color:'blue',
        // padding: '100px',
        margin: '5px',
        // marginTop:'15px',
        // marginBottom: '3px',
        // marginLeft: '15px',
        // marginRight: '15px',
        // fontSize: '14px',
        width: '30px',
        height:'30px',
        borderRadius: '50%',
        cursor:'pointer'

        
    }
};