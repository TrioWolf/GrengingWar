import React from "react";
// import styled from 'styled-components';

// Dummy Component
const GWlevelsstat = props => {
    return(
        <div style={styles.btn}>
            <div>{props.name} {props.level}</div>
            <div>{props.currentxp}/{props.xptolevel}</div>
            <div>Total xp {props.totalxp}</div>
        </div>
    );
}
export default GWlevelsstat;

const styles={
    btn:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        backgroundColor:'black',
        boxShadow:'0 4px 8px 0 rgb(255,192,203), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        color:'aqua',
        padding:'10px',
        marginTop:'5px',
        marginBottom:'5px',
        fontSize: '14px',
        width: '175px',
        // height:'100vh',
        
    }
};