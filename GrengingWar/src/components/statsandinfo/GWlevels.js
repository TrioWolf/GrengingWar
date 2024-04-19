import React from "react";
import GWlevelsstat from "./GWlevelsstat";
// import GWinventoryslot from "../inventory/GWinventoryslot";
import './gwlevels.css'

// Dummy Component
const GWlevels = props => {
    const [title] = ['Levels']
    const [combat] = ['Combat']
    const [gathering] = ['Gathering']
    const [crafting] = ['Crafting']
    return (
        <div className="scroll">
        <div className="inventory" >
            <div className="title" >{title}</div>
                <div className="items">
                    {/* Main Level  */}
                    <GWlevelsstat level='0' currentxp='0' xptolevel='1000' totalxp='0' name='Main:'/>
                    {/* Gathering levels  */}
                    <div className="title" >{gathering}</div>
                    <GWlevelsstat level={props.mininglvl} currentxp={props.miningcurrentxp} xptolevel={props.miningxptolvl} totalxp={props.miningtotalxp} name='Mining:'/>
                    <GWlevelsstat level={props.ljlvl} currentxp={props.ljcurrentxp} xptolevel={props.ljxptolvl} totalxp={props.ljtotalxp} name='Lumberjack:'/>
                
                    {/* Combat levels  */}
                    <div className="title" >{combat}</div>
                    <GWlevelsstat level='0' currentxp='0' xptolevel='1000' totalxp='0' name='Melee:'/>
                    <GWlevelsstat level='0' currentxp='0' xptolevel='1000' totalxp='0' name='Range:'/>
                    <GWlevelsstat level='0' currentxp='0' xptolevel='1000' totalxp='0' name='Magic:'/>
                    {/* Creafting levels  */}
                    <div className="title" >{crafting}</div>
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

