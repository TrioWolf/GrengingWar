import React from 'react'

function Itemlist() {

    return (
        <div>

            <div style={styles.label} >items</div>
            <div style={styles.item}>
                <p>hatchet</p>
                <p>pickax</p>
            </div>
        
        
        
        </div>
    )
}
export default Itemlist;

const styles = {
    color: {
        backgroundColor: 'darkgray',
        color: 'black',
        maxWidth: '200px',
        
        height: '500px',
        margin: '5px'
    },
    Link: {
        fontSize: '18px',
        fontWeight: 'bold',
        margin: '10px',
        padding: '3%',
        textDecoration: 'none',
        color: 'rgb(255,192,203)'
    },
    label:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        backgroundColor:'black',
        boxShadow:'1px 1px 10px 5px rgb(255,192,203), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        color:'aqua',
        padding:'10px',
        marginTop:'5px',
        marginBottom: '12px',
        marginRight: '5px',
        fontSize: '14px',
        // width: '100px',
        alignItems: 'center',
        width: '200px',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',

    }
}