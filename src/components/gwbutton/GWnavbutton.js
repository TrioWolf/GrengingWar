import React from "react";
// import styled from 'styled-components';

// Dummy Component
const ButtonCard = props => {
    return(
        <button style={styles.btn}>
            {props.btntext}
        </button>
    );
}
export default ButtonCard;

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
        marginBottom:'12px',
        fontSize: '14px',
        // width: '100px',
        alignItems: 'center',
        
    }
};