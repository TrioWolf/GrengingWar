import React from "react";
// import styled from 'styled-components';

// Dummy Component
const GWinventoryslot = props => {
    return(
        <button style={styles.btn}>
            <div style={styles.name}>{props.name}</div>
            <div style={styles.count}>{props.count}</div>
        </button>
    );
}
export default GWinventoryslot;

const styles={
    btn:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignContent: 'space-evenly',
        backgroundColor:'black',
        boxShadow:'0 4px 8px 0 rgb(255,192,203), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        color:'aqua',
        paddingTop:'2px',
        marginTop:'5px',
        marginBottom: '5px',
        marginLeft: '3px',
        fontSize: '14px',
        width: '165px',
        height: '25px'
        
    },
    name: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignContent:'start'
    },
    count: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'justify',
        textAlignLast: 'right',
        color: 'green'
    }
};