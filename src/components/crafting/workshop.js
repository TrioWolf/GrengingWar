import React from 'react'

function Workshop() {

    return (
        <div >
            <div style={styles.color} >
                <div style={styles.selection} >
                    <div>select the item to put in below</div>
                    <div>

                    </div>
                </div>
                <div style={styles.create}>
                    <div style={styles.item} >
                        hatchet
                    </div>
                    <div style={styles.materialcontainer}>
                        <div style={styles.row}>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                        </div>
                        <div style={styles.row}>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                        </div>
                        <div style={styles.row}>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                        </div>
                        <div style={styles.row}>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                        </div>
                        <div style={styles.row}>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                        </div>
                        <div style={styles.row}>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                            <div style={styles.material} >
                                item
                            </div>
                        </div>
                    
                            
                        </div>
                    
           
                </div>
                </div>
           <div style={styles.buildcontainer}>
                        <div style={styles.btn}>
                        build
                    </div>
                    <div style={styles.btn}>
                        clear
                    </div>
                </div>
        
        
            </div>
    )
}
export default Workshop;

const styles = {
    color: {
        backgroundColor: 'darkgray',
        color: 'black',
        maxWidth: '700px',
        width: '700px',
        height: '500px',
        margin: '10px',
        display: 'flex',
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
        marginRight: '5px',
        marginLeft: '5px',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '75px',
        height: '75px',
        backgroundColor: 'black',
        color: 'aqua',
        marginTop: '20px'
    },
    material: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px',
        maginLeft: '10px',
        marginRight: '10px',
        width: '50px',
        height: '50px',
        backgroundColor: 'black',
        color: 'aqua',
    },
    materialcontainer: {
        display: 'flex',
        flexDirection:'column'
        
    },
    buildcontainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // width: '75px',
        // height: '75px',
        // backgroundColor: 'black',
        color: 'aqua',
        marginTop: '20px'
    },
    btn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '75px',
        height: '35px',
        backgroundColor: 'darkgray',
        color: 'black',
        // font: 'bold',
        // marginTop: '40px',
        maginLeft: '5px',
        marginRight: '5px',
    },
    row: {
        display: 'flex',
        flexDirection:'row'
    },
    selection: {
        display: 'flex',
        width: '33%',
        padding: '30px'
    },
    create: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
    }
}