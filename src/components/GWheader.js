import React from "react";

function Template() {
    const [pageTitle] = ['Grenging War']
    
    return (
        <div style={styles.container}>
            <div style={styles.h1}>{pageTitle}</div>
        </div>
    )
}
 
export default Template;

const styles = {
    container:{
        
        backgroundColor: 'black',
    },
    h1:{
        textAlign: 'center',
        color: 'Pink',
        padding: '25px',
        fontSize: '2rem',
        fontWeight: 'bold',
        boxShadow:'0 4px 8px 0 rgb(255,192,203), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    
    }
}