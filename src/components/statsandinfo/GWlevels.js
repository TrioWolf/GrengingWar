import React from "react";
import GWlevelsstat from "./GWlevelsstat";
// import GWinventoryslot from "../inventory/GWinventoryslot";
// import styled from 'styled-components';

// Dummy Component
const GWlevels = props => {
    const [title] = ['Levels']
    const [combat] = ['Combat']
    const [gathering] = ['Gathering']
    const [crafting] = ['Crafting']
    return (
        <div style={styles.scroll}>
        <div style={styles.inventory} >
            <div style={styles.title} >{title}</div>
                <div style={styles.items}>
                    {/* Main Level  */}
                    <GWlevelsstat level='0' currentxp='0' xptolevel='1000' totalxp='0' name='Main:'/>
                    {/* Gathering levels  */}
                    <div style={styles.title} >{gathering}</div>
                    <GWlevelsstat level={props.mininglvl} currentxp={props.miningcurrentxp} xptolevel={props.miningxptolvl} totalxp={props.miningtotalxp} name='Mining:'/>
                    <GWlevelsstat level={props.ljlvl} currentxp={props.ljcurrentxp} xptolevel={props.ljxptolvl} totalxp={props.ljtotalxp} name='Lumberjack:'/>
                
                    {/* Combat levels  */}
                    <div style={styles.title} >{combat}</div>
                    <GWlevelsstat level='0' currentxp='0' xptolevel='1000' totalxp='0' name='Melee:'/>
                    <GWlevelsstat level='0' currentxp='0' xptolevel='1000' totalxp='0' name='Range:'/>
                    <GWlevelsstat level='0' currentxp='0' xptolevel='1000' totalxp='0' name='Magic:'/>
                    {/* Creafting levels  */}
                    <div style={styles.title} >{crafting}</div>
                    <GWlevelsstat level='0' currentxp='0' xptolevel='1000' totalxp='0' name='Cooking:'/>
                    <GWlevelsstat level='0' currentxp='0' xptolevel='1000' totalxp='0' name='Crafting:'/>
                    <GWlevelsstat level='0' currentxp='0' xptolevel='1000' totalxp='0' name='Fletching:' />
                    <GWlevelsstat level='0' currentxp='0' xptolevel='1000' totalxp='0' name='Smithing:'/>
                
                </div>
            </div>
        </div>
    );
}
export default GWlevels;

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
