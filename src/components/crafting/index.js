import React from 'react'
import GWNav from "../GWNav"
import GWheader from "../GWheader"
import GWinventory from "../inventory/GWinventory";
import Workshop from './workshop';
import Itemlist from './Itemlist';

const Crafting = () => {
  return (

<div style={styles.container}>
    <header>
    <GWheader/>
    </header>
    <div>
        <GWNav />
    </div>
    <div style={styles.gameplay}>
        <div>
            {/* inventory  */}
            <GWinventory/>
        </div>
        <div>
          <p style={styles.color} >content</p>
          <Workshop/>
        </div>
        <div>
          <p style={styles.color} >listing</p>
          <Itemlist />
        </div>
      </div>
      </div>
  )
}

export default Crafting;

const styles = {
    container: {
        display: 'flex',
        flexDirection:'column',
        backgroundColor: 'black',
        height: '100vh',
        color: 'aqua'
    },
    gameplay: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        backgroundColor: 'black',
        marginTop: '5px',
        height:'600px',
    },
    row: {
        display: 'flex',
      flexDirection:'row'  
    },
    map: {
        boxShadow: '1px 3px 3px 5px rgb(255,192,203), 1px 3px 3px 5px rgba(0, 0, 0, 0.19)',
        height: '280px',
        marginTop:'20px',
        marginRight: '20px',
    },
    resources: {
        marginTop: '12px',
        marginRight: '20px',
        width: '110px'
    },
    gamecol: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '20px',
    },
    gamerow: {
        display: 'flex',
        flexDirection:'row'
    },
    resourcesheld: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center'
        // height:'30px',
    },
  sectioncontent: {
    
       color: 'aqua'
    },
}

