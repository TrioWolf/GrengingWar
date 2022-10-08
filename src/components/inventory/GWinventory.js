import React from "react";
import GWinventoryslot from "./GWinventoryslot";
// import styled from 'styled-components';

// Dummy Component
const GWinventory = props => {
    const [title] = ['Inventory']
    return(
        <div style={styles.scroll} >
            <div style={styles.inventory}>
            <div style={styles.title} >{title}</div>
            <div style={styles.items}>
                <div style={styles.row} >
                    <GWinventoryslot name='dead log:' count='10'   />
                </div>
                <div style={styles.row} >
                    <GWinventoryslot name='oak log:' count='10' />
                </div>
                <div style={styles.row} >
                    <GWinventoryslot name='stone:' count='1,000,000,000' />
                </div>
                <div style={styles.row} >
                    <GWinventoryslot name='hard stone:' count='1,000' />
                </div>
                <div style={styles.row} >
                    <GWinventoryslot name='super hard stone:' count='1,000' />
                </div>
                {/* <div style={styles.row} >
                    <GWinventoryslot />
                </div>
                <div style={styles.row} >
                    <GWinventoryslot />
                </div>
                <div style={styles.row} >
                    <GWinventoryslot />
                </div> */}
                </div>
            </div>
        </div>
    );
}
export default GWinventory;

const styles = {
    inventory: {
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: '175px',
        height: '600px',
        color: 'pink',
        boxShadow:'0 4px 8px 0 rgb(255,192,203), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    title: {
        boxShadow:'0 4px 8px 0 rgb(255,192,203), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        padding: '10px',
        width: '155px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // textAlign:'center'
    },
    items: {
        display: 'flex',
        flexDirection:'column',
    },
    row: {
        display:'flex',
        flexDirection:'row'
    },
    scroll: {
        height: '600px',
        width:'190px',
        overflow:'scroll'
    },
};
