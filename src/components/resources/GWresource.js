import React from "react";
// import styled from 'styled-components';

// Dummy Component
const GWresourceheld = props => {
    return(
        <div style={styles.btn}>
            <div style={styles.text}>{props.name}</div>
            <div style={styles.text}>{props.count}</div>
        </div>
    );
}
export default GWresourceheld;

const styles={
    btn:{
        display:'flex',
        flexDirection: 'row',
        backgroundColor:'black',
        boxShadow:'0 4px 8px 0 rgb(255,192,203), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        color:'aqua',
        // padding:'10px',
        marginTop:'5px',
        // marginBottom:'5px',
        fontSize: '14px',
        width: '100px',
        height:'30px',
        
    },
    text: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:'3px'
    }
};