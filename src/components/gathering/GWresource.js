import React from "react";
// import styled from 'styled-components';

// Dummy Component
const GWresource = props => {
    return(
        <div style={styles.btn}>
            <div>{props.name}</div> 
            <div>{ props.type}</div>
            <div style={styles.health}>{props.health}</div>
        </div>
    );
}
export default GWresource;

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