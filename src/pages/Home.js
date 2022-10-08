// import React from 'react';
import React, { useState, useEffect } from 'react';
import GWNav from "../components/GWNav"
import GWheader from "../components/GWheader"
import GWinventory from "../components/inventory/GWinventory";
import GWsector from "../components/map/GWsector";
// import GWresource from "./Components/gathering/GWresource";
import GWlevels from "../components/statsandinfo/GWlevels";
import GWresourceheld from "../components/resources/GWresource";
import GWplayertag from "../components/player/GWplayertag";
// import Tree from "./Components/gathering/Tree";
// import Rock from "./Components/gathering/Rock";
// import Berrybush from "./Components/gathering/Berrybush";
import NPC from "../components/gathering/NPC"
//utils 
import { Direction8, Direction3, Direction5 } from '../Utils/Utilsmap';
import Timer from '../Utils/Tick';
import { NPCDATA, spawn34, spawn44 } from "../datafiles/NPC";

function Home() {
    
    // remove function sectors and ending currly brace to make active
    // function sectors() {
        // ----------- row 1 ---------
        function sectorclicked11() {
            const sectorid = document.getElementById("home/1/1");
            const home12 = document.getElementById('home/1/2');
            const home22 = document.getElementById('home/2/2');
            const home21 = document.getElementById('home/2/1');
            Direction3(home12, home22, home21, sectorid)
        };
        function sectorclicked12() {
            const sectorid = document.getElementById("home/1/2");
            const home11 = document.getElementById("home/1/1");
            const home21 = document.getElementById("home/2/1");
            const home22 = document.getElementById("home/2/2");
            const home23 = document.getElementById("home/2/3");
            const home13 = document.getElementById("home/1/3");
            Direction5(home11, home21, home22, home23, home13, sectorid)
        };
        function sectorclicked13() {
            const sectorid = document.getElementById("home/1/3");
            const home12 = document.getElementById("home/1/2");
            const home22 = document.getElementById("home/2/2");
            const home23 = document.getElementById("home/2/3");
            const home24 = document.getElementById("home/2/4");
            const home14 = document.getElementById("home/1/4");
            Direction5(home12, home22, home23, home24, home14, sectorid)
        };
        function sectorclicked14() {
            const sectorid = document.getElementById("home/1/4");
            const home13 = document.getElementById("home/1/3");
            const home23 = document.getElementById("home/2/3");
            const home24 = document.getElementById("home/2/4");
            const home25 = document.getElementById("home/2/5");
            const home15 = document.getElementById("home/1/5");
            Direction5(home13, home23, home24, home25, home15, sectorid)
        };
        function sectorclicked15() {
            const sectorid = document.getElementById("home/1/5");
            const home14 = document.getElementById("home/1/4");
            const home24 = document.getElementById("home/2/4");
            const home25 = document.getElementById("home/2/5");
            const home26 = document.getElementById("home/2/6");
            const home16 = document.getElementById("home/1/6");
            Direction5(home14, home24, home25, home26, home16, sectorid)
        };
        function sectorclicked16() {
            const sectorid = document.getElementById("home/1/6");
            const home15 = document.getElementById("home/1/5");
            const home25 = document.getElementById("home/2/5");
            const home26 = document.getElementById("home/2/6");
            const home27 = document.getElementById("home/2/7");
            const home17 = document.getElementById("home/1/7");
            Direction5(home15, home25, home26, home27, home17, sectorid)
        };
        function sectorclicked17() {
            const sectorid = document.getElementById("home/1/7");
            const home16 = document.getElementById('home/1/6');
            const home26 = document.getElementById('home/2/6');
            const home27 = document.getElementById('home/2/7');
            Direction3(home16, home26, home27, sectorid)
        };
        // --------- row 2 -------------
        function sectorclicked21() {
            const sectorid = document.getElementById("home/2/1");
            const home31 = document.getElementById("home/3/1");
            const home32 = document.getElementById("home/3/2");
            const home22 = document.getElementById("home/2/2");
            const home12 = document.getElementById("home/1/2");
            const home11 = document.getElementById("home/1/1");
            Direction5(home31, home32, home22, home12, home11, sectorid)
        };
        function sectorclicked22() {
            const sectorid = document.getElementById("home/2/2");
            const home11 = document.getElementById('home/1/1');
            const home12 = document.getElementById('home/1/2');
            const home13 = document.getElementById('home/1/3');
            const home23 = document.getElementById('home/2/3');
            const home33 = document.getElementById('home/3/3');
            const home31 = document.getElementById('home/3/1');
            const home32 = document.getElementById('home/3/2');
            const home21 = document.getElementById('home/2/1');
            Direction8(home12, home13, home23, home33, home32, home31, home21, home11, sectorid)
        };
        function sectorclicked23() {
            const sectorid = document.getElementById("home/2/3");
            const home14 = document.getElementById('home/1/4');
            const home12 = document.getElementById('home/1/2');
            const home13 = document.getElementById('home/1/3');
            const home22 = document.getElementById('home/2/2');
            const home24 = document.getElementById('home/2/4');
            const home32 = document.getElementById('home/3/2');
            const home33 = document.getElementById('home/3/3');
            const home34 = document.getElementById('home/3/4');
            Direction8(home13, home14, home24, home34, home33, home32, home22, home12, sectorid)
        };
        function sectorclicked24() {
            const sectorid = document.getElementById("home/2/4");
            const home14 = document.getElementById('home/1/4');
            const home15 = document.getElementById('home/1/5');
            const home13 = document.getElementById('home/1/3');
            const home25 = document.getElementById('home/2/5');
            const home23 = document.getElementById('home/2/3');
            const home35 = document.getElementById('home/3/5');
            const home33 = document.getElementById('home/3/3');
            const home34 = document.getElementById('home/3/4');
            Direction8(home14, home15, home25, home35, home34, home33, home23, home13, sectorid)
        };
        function sectorclicked25() {
            const sectorid = document.getElementById("home/2/5");
            const home14 = document.getElementById("home/1/4");
            const home15 = document.getElementById("home/1/5");
            const home16 = document.getElementById("home/1/6");
            const home24 = document.getElementById("home/2/4");
            const home26 = document.getElementById("home/2/6");
            const home34 = document.getElementById("home/3/4");
            const home35 = document.getElementById("home/3/5");
            const home36 = document.getElementById("home/3/6");
            Direction8(home15, home16, home24, home34, home35, home36, home26, home14, sectorid)
        };

        function sectorclicked26() {
            const sectorid = document.getElementById("home/2/6");
            const home15 = document.getElementById("home/1/5");
            const home16 = document.getElementById("home/1/6");
            const home17 = document.getElementById("home/1/7");
            const home25 = document.getElementById("home/2/5");
            const home27 = document.getElementById("home/2/7");
            const home35 = document.getElementById("home/3/5");
            const home36 = document.getElementById("home/3/6");
            const home37 = document.getElementById("home/3/7");
            Direction8(home16, home17, home25, home35, home36, home37, home27, home15, sectorid)
        };
        function sectorclicked27() {
            const sectorid = document.getElementById("home/2/7");
            const home17 = document.getElementById("home/1/7");
            const home16 = document.getElementById("home/1/6");
            const home26 = document.getElementById("home/2/6");
            const home36 = document.getElementById("home/3/6");
            const home37 = document.getElementById("home/3/7");
            Direction5(home17, home16, home26, home36, home37, sectorid)
        };
        // --------- row 3 -----------
        function sectorclicked31() {
            const sectorid = document.getElementById("home/3/1");
            const home21 = document.getElementById("home/2/1");
            const home22 = document.getElementById("home/2/2");
            const home32 = document.getElementById("home/3/2");
            const home42 = document.getElementById("home/4/2");
            const home41 = document.getElementById("home/4/1");
            Direction5(home21, home22, home32, home42, home41, sectorid)
        };
        function sectorclicked32() {
            const sectorid = document.getElementById("home/3/2");
            const home21 = document.getElementById("home/2/1");
            const home22 = document.getElementById("home/2/2");
            const home23 = document.getElementById("home/2/3");
            const home31 = document.getElementById("home/3/1");
            const home33 = document.getElementById("home/3/3");
            const home41 = document.getElementById("home/4/1");
            const home42 = document.getElementById("home/4/2");
            const home43 = document.getElementById("home/4/3");
            Direction8(home22, home23, home31, home43, home42, home41, home33, home21, sectorid)
        };
        function sectorclicked33() {
            const sectorid = document.getElementById("home/3/3");
            const home23 = document.getElementById("home/2/3");
            const home24 = document.getElementById("home/2/4");
            const home34 = document.getElementById("home/3/4");
            const home44 = document.getElementById("home/4/4");
            const home43 = document.getElementById("home/4/3");
            const home42 = document.getElementById("home/4/2");
            const home32 = document.getElementById("home/3/2");
            const home22 = document.getElementById("home/2/2");
            Direction8(home23, home24, home34, home44, home43, home42, home32, home22, sectorid)
        };
        function sectorclicked34() {
            const sectorid = document.getElementById("home/3/4");
            const home23 = document.getElementById("home/2/3");
            const home24 = document.getElementById("home/2/4");
            const home25 = document.getElementById("home/2/5");
            const home33 = document.getElementById("home/3/3");
            const home35 = document.getElementById("home/3/5");
            const home43 = document.getElementById("home/4/3");
            const home44 = document.getElementById("home/4/4");
            const home45 = document.getElementById("home/4/5");
            Direction8(home24, home25, home35, home45, home44, home43, home33, home23, sectorid)
            setdata(spawn34)
            
        };
        function sectorclicked35() {
            const sectorid = document.getElementById("home/3/5");
            const home24 = document.getElementById("home/2/4");
            const home25 = document.getElementById("home/2/5");
            const home26 = document.getElementById("home/2/6");
            const home34 = document.getElementById("home/3/4");
            const home36 = document.getElementById("home/3/6");
            const home44 = document.getElementById("home/4/4");
            const home45 = document.getElementById("home/4/5");
            const home46 = document.getElementById("home/4/6");
            Direction8(home25, home26, home36, home46, home45, home44, home34, home24, sectorid)
        };
        function sectorclicked36() {
            const sectorid = document.getElementById("home/3/6");
            const home25 = document.getElementById("home/2/5");
            const home26 = document.getElementById("home/2/6");
            const home27 = document.getElementById("home/2/7");
            const home35 = document.getElementById("home/3/5");
            const home37 = document.getElementById("home/3/7");
            const home45 = document.getElementById("home/4/5");
            const home46 = document.getElementById("home/4/6");
            const home47 = document.getElementById("home/4/7");
            Direction8(home26, home27, home37, home47, home46, home45, home35, home25, sectorid)
        };
        function sectorclicked37() {
            const sectorid = document.getElementById("home/3/7");
            const home27 = document.getElementById("home/2/7");
            const home26 = document.getElementById("home/2/6");
            const home36 = document.getElementById("home/3/6");
            const home46 = document.getElementById("home/4/6");
            const home47 = document.getElementById("home/4/7");
            Direction5(home27, home26, home36, home46, home47, sectorid)
        };
        // --------- row 4 -----------
        function sectorclicked41() {
            const sectorid = document.getElementById("home/4/1");
            const home31 = document.getElementById("home/3/1");
            const home32 = document.getElementById("home/3/2");
            const home42 = document.getElementById("home/4/2");
            const home52 = document.getElementById("home/5/2");
            const home51 = document.getElementById("home/5/1");
            Direction5(home31, home32, home42, home52, home51, sectorid)
        };
        function sectorclicked42() {
            const sectorid = document.getElementById("home/4/2");
            const home31 = document.getElementById("home/3/1");
            const home32 = document.getElementById("home/3/2");
            const home33 = document.getElementById("home/3/3");
            const home41 = document.getElementById("home/4/1");
            const home43 = document.getElementById("home/4/3");
            const home51 = document.getElementById("home/5/1");
            const home52 = document.getElementById("home/5/2");
            const home53 = document.getElementById("home/5/3");
            Direction8(home32, home33, home43, home53, home52, home51, home41, home31, sectorid)
        };
        function sectorclicked43() {
            const sectorid = document.getElementById("home/4/3");
            const home32 = document.getElementById("home/3/2");
            const home33 = document.getElementById("home/3/3");
            const home34 = document.getElementById("home/3/4");
            const home42 = document.getElementById("home/4/2");
            const home44 = document.getElementById("home/4/4");
            const home52 = document.getElementById("home/5/2");
            const home53 = document.getElementById("home/5/3");
            const home54 = document.getElementById("home/5/4");
            Direction8(home33, home34, home44, home54, home53, home52, home42, home32, sectorid)
        };
        function sectorclicked44() {
            const sectorid = document.getElementById("home/4/4");
            const home33 = document.getElementById("home/3/3");
            const home34 = document.getElementById("home/3/4");
            const home35 = document.getElementById("home/3/5");
            const home43 = document.getElementById("home/4/3");
            const home45 = document.getElementById("home/4/5");
            const home53 = document.getElementById("home/5/3");
            const home54 = document.getElementById("home/5/4");
            const home55 = document.getElementById("home/5/5");
            Direction8(home34, home35, home45, home55, home54, home53, home43, home33, sectorid)
        };
        function sectorclicked45() {
            const sectorid = document.getElementById("home/4/5");
            const home34 = document.getElementById("home/3/4");
            const home35 = document.getElementById("home/3/5");
            const home36 = document.getElementById("home/3/6");
            const home44 = document.getElementById("home/4/4");
            const home46 = document.getElementById("home/4/6");
            const home54 = document.getElementById("home/5/4");
            const home55 = document.getElementById("home/5/5");
            const home56 = document.getElementById("home/5/6");
            Direction8(home35, home36, home46, home56, home55, home54, home44, home34, sectorid)
            //    add tree to this sector 
            // Spawn()
        };
        function sectorclicked46() {
            const sectorid = document.getElementById("home/4/6");
            const home35 = document.getElementById("home/3/5");
            const home36 = document.getElementById("home/3/6");
            const home37 = document.getElementById("home/3/7");
            const home45 = document.getElementById("home/4/5");
            const home47 = document.getElementById("home/4/7");
            const home55 = document.getElementById("home/5/5");
            const home56 = document.getElementById("home/5/6");
            const home57 = document.getElementById("home/5/7");
            Direction8(home36, home37, home47, home57, home56, home55, home45, home35, sectorid)
        };
        function sectorclicked47() {
            const sectorid = document.getElementById("home/4/7");
            const home37 = document.getElementById("home/3/7");
            const home36 = document.getElementById("home/3/6");
            const home46 = document.getElementById("home/4/6");
            const home56 = document.getElementById("home/5/6");
            const home57 = document.getElementById("home/5/7");
            Direction5(home37, home36, home46, home56, home57, sectorid)
        };
        // --------- row 5 -----------
        function sectorclicked51() {
            const sectorid = document.getElementById("home/5/1");
            const home41 = document.getElementById("home/4/1");
            const home42 = document.getElementById("home/4/2");
            const home52 = document.getElementById("home/5/2");
            const home62 = document.getElementById("home/6/2");
            const home61 = document.getElementById("home/6/2");
            Direction5(home41, home42, home52, home62, home61, sectorid)
        };
        function sectorclicked52() {
            const sectorid = document.getElementById("home/5/2");
            const home41 = document.getElementById("home/4/1");
            const home42 = document.getElementById("home/4/2");
            const home43 = document.getElementById("home/4/3");
            const home51 = document.getElementById("home/5/1");
            const home53 = document.getElementById("home/5/3");
            const home61 = document.getElementById("home/6/1");
            const home62 = document.getElementById("home/6/2");
            const home63 = document.getElementById("home/6/3");
            Direction8(home42, home43, home53, home63, home62, home61, home51, home41, sectorid)
        };
        function sectorclicked53() {
            const sectorid = document.getElementById("home/5/3");
            const home42 = document.getElementById("home/4/2");
            const home43 = document.getElementById("home/4/3");
            const home44 = document.getElementById("home/4/4");
            const home52 = document.getElementById("home/5/2");
            const home54 = document.getElementById("home/5/4");
            const home62 = document.getElementById("home/6/2");
            const home63 = document.getElementById("home/6/3");
            const home64 = document.getElementById("home/6/4");
            Direction8(home43, home44, home54, home64, home63, home62, home52, home42, sectorid)
        };
        function sectorclicked54() {
            const sectorid = document.getElementById("home/5/4");
            const home43 = document.getElementById("home/4/3");
            const home44 = document.getElementById("home/4/4");
            const home45 = document.getElementById("home/4/5");
            const home53 = document.getElementById("home/5/3");
            const home55 = document.getElementById("home/5/5");
            const home63 = document.getElementById("home/6/3");
            const home64 = document.getElementById("home/6/4");
            const home65 = document.getElementById("home/6/5");
            Direction8(home44, home45, home55, home65, home64, home63, home53, home43, sectorid)
        };
        function sectorclicked55() {
            const sectorid = document.getElementById("home/5/5");
            const home44 = document.getElementById("home/4/4");
            const home45 = document.getElementById("home/4/5");
            const home46 = document.getElementById("home/4/6");
            const home54 = document.getElementById("home/5/4");
            const home56 = document.getElementById("home/5/6");
            const home64 = document.getElementById("home/6/4");
            const home65 = document.getElementById("home/6/5");
            const home66 = document.getElementById("home/6/6");
            Direction8(home45, home46, home56, home66, home65, home64, home54, home44, sectorid)
        };
        function sectorclicked56() {
            const sectorid = document.getElementById("home/5/6");
            const home45 = document.getElementById("home/4/5");
            const home46 = document.getElementById("home/4/6");
            const home47 = document.getElementById("home/4/7");
            const home55 = document.getElementById("home/5/5");
            const home57 = document.getElementById("home/5/7");
            const home65 = document.getElementById("home/6/5");
            const home66 = document.getElementById("home/6/6");
            const home67 = document.getElementById("home/6/7");
            Direction8(home46, home47, home57, home67, home66, home65, home55, home45, sectorid)
        };
        function sectorclicked57() {
            const sectorid = document.getElementById("home/5/7");
            const home47 = document.getElementById("home/4/7");
            const home46 = document.getElementById("home/4/6");
            const home56 = document.getElementById("home/5/6");
            const home66 = document.getElementById("home/6/6");
            const home67 = document.getElementById("home/6/7");
            Direction5(home47, home46, home56, home66, home67, sectorid)
        };
        // --------- row 6 -----------
        function sectorclicked61() {
            const sectorid = document.getElementById("home/6/1");
            const home51 = document.getElementById("home/5/1");
            const home52 = document.getElementById("home/5/2");
            const home62 = document.getElementById("home/6/2");
            const home72 = document.getElementById("home/7/2");
            const home71 = document.getElementById("home/7/1");
            Direction5(home51, home52, home62, home72, home71, sectorid)
        };
        function sectorclicked62() {
            const sectorid = document.getElementById("home/6/2");
            const home51 = document.getElementById("home/5/1");
            const home52 = document.getElementById("home/5/2");
            const home53 = document.getElementById("home/5/3");
            const home61 = document.getElementById("home/6/1");
            const home63 = document.getElementById("home/6/3");
            const home71 = document.getElementById("home/7/1");
            const home72 = document.getElementById("home/7/2");
            const home73 = document.getElementById("home/7/3");
            Direction8(home52, home53, home63, home73, home72, home71, home61, home51, sectorid)
        };
        function sectorclicked63() {
            const sectorid = document.getElementById("home/6/3");
            const home52 = document.getElementById("home/5/2");
            const home53 = document.getElementById("home/5/3");
            const home54 = document.getElementById("home/5/4");
            const home62 = document.getElementById("home/6/2");
            const home64 = document.getElementById("home/6/4");
            const home72 = document.getElementById("home/7/2");
            const home73 = document.getElementById("home/7/3");
            const home74 = document.getElementById("home/7/4");
            Direction8(home53, home54, home64, home74, home73, home72, home62, home52, sectorid)
        };
        function sectorclicked64() {
            const sectorid = document.getElementById("home/6/4");
            const home53 = document.getElementById("home/5/3");
            const home54 = document.getElementById("home/5/4");
            const home55 = document.getElementById("home/5/5");
            const home63 = document.getElementById("home/6/3");
            const home65 = document.getElementById("home/6/5");
            const home73 = document.getElementById("home/7/3");
            const home74 = document.getElementById("home/7/4");
            const home75 = document.getElementById("home/7/5");
            Direction8(home54, home55, home65, home75, home74, home73, home63, home53, sectorid)
        };
        function sectorclicked65() {
            const sectorid = document.getElementById("home/6/5");
            const home54 = document.getElementById("home/5/4");
            const home55 = document.getElementById("home/5/5");
            const home56 = document.getElementById("home/5/6");
            const home64 = document.getElementById("home/6/4");
            const home66 = document.getElementById("home/6/6");
            const home74 = document.getElementById("home/7/4");
            const home75 = document.getElementById("home/7/5");
            const home76 = document.getElementById("home/7/6");
            Direction8(home55, home56, home66, home76, home75, home74, home64, home54, sectorid)
        };
        function sectorclicked66() {
            const sectorid = document.getElementById("home/6/6");
            const home55 = document.getElementById("home/5/5");
            const home56 = document.getElementById("home/5/6");
            const home57 = document.getElementById("home/5/7");
            const home65 = document.getElementById("home/6/5");
            const home67 = document.getElementById("home/6/7");
            const home75 = document.getElementById("home/7/5");
            const home76 = document.getElementById("home/7/6");
            const home77 = document.getElementById("home/7/7");
            Direction8(home56, home57, home67, home77, home76, home75, home65, home55, sectorid)
        };
        function sectorclicked67() {
            const sectorid = document.getElementById("home/6/7");
            const home57 = document.getElementById("home/5/7");
            const home56 = document.getElementById("home/5/6");
            const home66 = document.getElementById("home/6/6");
            const home76 = document.getElementById("home/7/6");
            const home77 = document.getElementById("home/7/7");
            Direction5(home57, home56, home66, home76, home77, sectorid)
        };
        // --------- row 7 -----------
        function sectorclicked71() {
            const sectorid = document.getElementById("home/7/1");
            const home61 = document.getElementById("home/6/1");
            const home62 = document.getElementById("home/6/2");
            const home72 = document.getElementById("home/7/2");
            Direction3(home61, home62, home72, sectorid)
        };
        function sectorclicked72() {
            const sectorid = document.getElementById("home/7/2");
            const home62 = document.getElementById("home/6/2");
            const home63 = document.getElementById("home/6/3");
            const home73 = document.getElementById("home/7/3");
            const home71 = document.getElementById("home/7/1");
            const home61 = document.getElementById("home/6/1");
            Direction5(home62, home63, home73, home71, home61, sectorid)
        };
        function sectorclicked73() {
            const sectorid = document.getElementById("home/7/3");
            const home63 = document.getElementById("home/6/3");
            const home64 = document.getElementById("home/6/4");
            const home74 = document.getElementById("home/7/4");
            const home72 = document.getElementById("home/7/2");
            const home62 = document.getElementById("home/6/2");
            Direction5(home63, home64, home74, home72, home62, sectorid)
        };
        function sectorclicked74() {
            const sectorid = document.getElementById("home/7/4");
            const home64 = document.getElementById("home/6/4");
            const home65 = document.getElementById("home/6/5");
            const home75 = document.getElementById("home/7/5");
            const home73 = document.getElementById("home/7/3");
            const home63 = document.getElementById("home/6/3");
            Direction5(home64, home65, home75, home73, home63, sectorid)
        };
        function sectorclicked75() {
            const sectorid = document.getElementById("home/7/5");
            const home65 = document.getElementById("home/6/5");
            const home66 = document.getElementById("home/6/6");
            const home76 = document.getElementById("home/7/6");
            const home74 = document.getElementById("home/7/4");
            const home64 = document.getElementById("home/6/4");
            Direction5(home65, home66, home76, home74, home64, sectorid)
        };
        function sectorclicked76() {
            const sectorid = document.getElementById("home/7/6");
            const home66 = document.getElementById("home/6/6");
            const home67 = document.getElementById("home/6/7");
            const home77 = document.getElementById("home/7/7");
            const home75 = document.getElementById("home/7/5");
            const home65 = document.getElementById("home/6/5");
            Direction5(home66, home67, home77, home75, home65, sectorid)
        };
        function sectorclicked77() {
            const sectorid = document.getElementById("home/7/7");
            const home66 = document.getElementById("home/6/6");
            const home67 = document.getElementById("home/6/7");
            const home76 = document.getElementById("home/7/6");
            Direction3(home66, home67, home76, sectorid)
        };
    // }
    // -------------- min max damage --------------
    function rng(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }
    // ----------- spawn code ---------------------
 
    const [data, setdata] = useState(spawn44)
    

    function spawns(name) {
        const newspawns = [...data, { name }];
        setdata(newspawns)
    };

    // ---------- food healing -----------
    // const [foodcount, setfoodcount] = useState(10);
    // const fooddamage = () =>{if (foodcount > 0 ) { setfoodcount(foodcount - 1)}};
    
    // adds resources to the counter for held items
    const [food, setfood] = useState(10);
    const [credit, setcredit] = useState(10);
    const [gwb, setgwb] = useState(10);
    const [seconds, setSeconds] = useState(0);
    const [atk, setatk] = useState(false);
    const [currentnpc, setcurrentnpc] = useState(0)

    //--------- attack function --------------------   
    const attack = (item) => {
        setatk(!atk)
        setgwb(10)
        // -------- item 1 in list of npc/res to gather -------------
        
        if (item === 0) {
            setcurrentnpc(item)
        }
        // -------- item 2 in list of npc/res to gather -------------
        
        else if (item === 1) {
            setcurrentnpc(item)
        }

        // -------- item 3 in list of npc/res to gather -------------

        else if (item === 2) {
            setcurrentnpc(item)
        }
        
        // -------- item 4 in list of npc/res to gather -------------
        
        else if (item === 3) {
            setcurrentnpc(item)
        }
                    
    };
                
    // -------------- starting sector ---------------------
    function startsector() {
        const start = document.getElementById("home/4/4");
        const starting = start.style.backgroundColor;
        if (starting === 'aqua') {
            start.style.backgroundColor = 'yellow'
        }
    }
    // ------- timer code for attacking -------------------


    function toggle() {
        setatk(!atk);
        // for (let reload = seconds; reload === 0; attack)
        // console.log(reload)
    }



    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // ---------- starting sector color sector ---------
        startsector()
        // attack()
        //--------timer block of code ----------
        let interval = null;
        if (atk) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
        } else if (!atk && seconds !== 0) {
            clearInterval(interval);
        } if (atk && seconds === 0) {
            setSeconds(3)
            const npcid = data[currentnpc].id
            const hpdmg = data[currentnpc].health - rng(50, 50)
            const lootfood = data[currentnpc].loot1.food
            const lootcredit = data[currentnpc].loot1.credit
            const lootdisplay = NPCDATA[currentnpc].loot1.message
            // ---------------- item 1 in list mechanics to despawn --------------  
            // if total of max 4 items de-spawn code 
            if (currentnpc === 0) {
                const id0 = data.map(obj => {
                    if (obj.id === npcid) {
                        return { ...obj, health: hpdmg };
                    }
                    return obj;
                    
                });
                setdata(id0)
                if (hpdmg <= 1) {
                    console.log(`${lootdisplay} `)
                    setfood(lootfood + food)
                    setcredit(lootcredit + credit)
                    const spawn = [...data.slice(1)];
                    console.log(spawn)
                    setdata(spawn)
                    clearInterval(interval)
                    if (atk === true) {
                        return setatk(false);
                    }
                    return spawn;
                };
            }
            // ---------------- item 2 in list mechanics to despawn --------------
            if (currentnpc === 1) {
                const id1 = data.map(obj => {
                    if (obj.id === npcid) {
                        return { ...obj, health: hpdmg };
                    }
                    return obj;
                });
                setdata(id1)
                if (hpdmg <= 1) {
                    console.log(lootdisplay)
                    setfood(lootfood + food)
                    setcredit(lootcredit + credit)
                    const spawn = data.filter(function remove(item) {
                        if (item.id !== npcid) {
                            return true
                        }
                        return false;
                    });
                    console.log(spawn)
                    setdata(spawn)
                    clearInterval(interval)
                    if (atk === true) {
                        return setatk(false);
                    }
                    return spawn;
                };
            };
            // ---------------- item 3 in list mechanics to despawn --------------
            if (currentnpc === 2) {
                const id2 = data.map(obj => {
                    if (obj.id === npcid) {
                        return { ...obj, health: hpdmg };
                    }
                    return obj;
                });
                setdata(id2)
                if (hpdmg <= 1) {
                    console.log(lootdisplay)
                    setfood(lootfood + food)
                    setcredit(lootcredit + credit)
                    const spawn = data.filter(function remove(item) {
                        if (item.id !== npcid) {
                            return true
                        }
                        return false;
                    });
                    console.log(spawn)
                    setdata(spawn)
                    clearInterval(interval)
                    if (atk === true) {
                        return setatk(false);
                    }
                    return spawn;
                };
            };
            // ---------------- item 4th in list mechanics to despawn --------------
            if (currentnpc === 3) {
                const id3 = data.map(obj => {
                    if (obj.id === npcid) {
                        return { ...obj, health: hpdmg };
                    }
                    return obj;
                });
                setdata(id3)
                if (hpdmg <= 1) {
                    console.log(lootdisplay)
                    setfood(lootfood + food)
                    setcredit(lootcredit + credit)
                    const spawn = data.filter(function remove(item) {
                        if (item.id !== npcid) {
                            return true
                        }
                        return false;
                    });
                    console.log('spawn initalize')
                    console.log(spawn)
                    setdata(spawn)
                    clearInterval(interval)
                    if (atk === true) {
                        return setatk(false);
                    }
                    return spawn;
                    // setdata(spawn)
                };
                console.log("id3")
                console.log(id3)
            };
        }
        // const npc1 = NPCDATA[0]
        const length = data.length
        if (length === 0) {
                setdata(spawn44)
            console.log(data)
            }
    //    } 
        
    
    if (!atk) {
        interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);
        if (!atk && seconds === 0) {
            setSeconds(0)
            clearInterval(interval)
        }
    }
    return () => clearInterval(interval);
}, [atk, seconds,credit, currentnpc, data, food]);
  

    return (
        <div style={styles.container}>
            <header>
            <GWheader/>
            </header>
            <div>
                <GWNav />
            </div>
            <div style={styles.gameplay}>
                {/* 3 column inventory game stats */}
                <div>
                    {/* inventory  */}
                    <GWinventory/>
                </div>
                <div style={styles.gamecol}>
                    <div style={styles.resourcesheld}>
                        <GWresourceheld count={food} name='Food:'/>
                         <GWresourceheld count={credit} name='Credit:'/>
                        <GWresourceheld count={gwb} name='Special:'/>
                    </div>
                    <div style={styles.gamerow}>
                        <div style={styles.map} >
                            {/* game  */}
                            <div style={styles.row}>
                                <GWsector name='1/1' id='home/1/1' onClick={sectorclicked11} />
                                <GWsector name='1/2' id='home/1/2' onClick={sectorclicked12} />
                                <GWsector name='1/3' id='home/1/3' onClick={sectorclicked13} />
                                <GWsector name='1/4' id='home/1/4' onClick={sectorclicked14} />
                                <GWsector name='1/5' id='home/1/5' onClick={sectorclicked15} />
                                <GWsector name='1/6' id='home/1/6' onClick={sectorclicked16} />
                                <GWsector name='1/7' id='home/1/7' onClick={sectorclicked17} />
                            </div>
                            <div style={styles.row}>
                                <GWsector name='2/1' id='home/2/1' onClick={sectorclicked21} />
                                <GWsector name='2/2' id='home/2/2' onClick={sectorclicked22} />
                                <GWsector name='2/3' id='home/2/3' onClick={sectorclicked23} />
                                <GWsector name='2/4' id='home/2/4' onClick={sectorclicked24} />
                                <GWsector name='2/5' id='home/2/5' onClick={sectorclicked25} />
                                <GWsector name='2/6' id='home/2/6' onClick={sectorclicked26} />
                                <GWsector name='2/7' id='home/2/7' onClick={sectorclicked27} />
                            </div>
                            <div style={styles.row}>
                                <GWsector name='3/1' id='home/3/1' onClick={sectorclicked31} />
                                <GWsector name='3/2' id='home/3/2' onClick={sectorclicked32} />
                                <GWsector name='3/3' id='home/3/3' onClick={sectorclicked33} />
                                <GWsector name='3/4' id='home/3/4' onClick={sectorclicked34} />
                                <GWsector name='3/5' id='home/3/5' onClick={sectorclicked35} />
                                <GWsector name='3/6' id='home/3/6' onClick={sectorclicked36} />
                                <GWsector name='3/7' id='home/3/7' onClick={sectorclicked37} />
                            </div>
                            <div style={styles.row}>
                                <GWsector name='4/1' id='home/4/1' onClick={sectorclicked41} />
                                <GWsector name='4/2' id='home/4/2' onClick={sectorclicked42} />
                                <GWsector name='4/3' id='home/4/3' onClick={sectorclicked43} />
                                <GWsector name='4/4' id='home/4/4' onClick={sectorclicked44} />
                                <GWsector name='4/5' id='home/4/5' onClick={sectorclicked45} />
                                <GWsector name='4/6' id='home/4/6' onClick={sectorclicked46} />
                                <GWsector name='4/7' id='home/4/7' onClick={sectorclicked47} />
                            </div>
                            <div style={styles.row}>
                                <GWsector name='5/1' id='home/5/1' onClick={sectorclicked51} />
                                <GWsector name='5/2' id='home/5/2' onClick={sectorclicked52} />
                                <GWsector name='5/3' id='home/5/3' onClick={sectorclicked53} />
                                <GWsector name='5/4' id='home/5/4' onClick={sectorclicked54} />
                                <GWsector name='5/5' id='home/5/5' onClick={sectorclicked55} />
                                <GWsector name='5/6' id='home/5/6' onClick={sectorclicked56} />
                                <GWsector name='5/7' id='home/5/7' onClick={sectorclicked57} />
                            </div>
                            <div style={styles.row}>
                                <GWsector name='6/1' id='home/6/1' onClick={sectorclicked61} />
                                <GWsector name='6/2' id='home/6/2' onClick={sectorclicked62} />
                                <GWsector name='6/3' id='home/6/3' onClick={sectorclicked63} />
                                <GWsector name='6/4' id='home/6/4' onClick={sectorclicked64} />
                                <GWsector name='6/5' id='home/6/5' onClick={sectorclicked65} />
                                <GWsector name='6/6' id='home/6/6' onClick={sectorclicked66} />
                                <GWsector name='6/7' id='home/6/7' onClick={sectorclicked67} />
                            </div>
                            <div style={styles.row}>
                                <GWsector name='7/1' id='home/7/1' onClick={sectorclicked71} />
                                <GWsector name='7/2' id='home/7/2' onClick={sectorclicked72} />
                                <GWsector name='7/3' id='home/7/3' onClick={sectorclicked73} />
                                <GWsector name='7/4' id='home/7/4' onClick={sectorclicked74} />
                                <GWsector name='7/5' id='home/7/5' onClick={sectorclicked75} />
                                <GWsector name='7/6' id='home/7/6' onClick={sectorclicked76} />
                                <GWsector name='7/7' id='home/7/7' onClick={sectorclicked77} />
                            </div>
                            <Timer
                                atktext={ atk}
                                atk={ atk}
                                seconds={ seconds}
                                onClick={toggle }
                                atkbtn={atk}
                                    />
                        </div>
                        <div id='player' style={styles.resources}> 
                            {/* resources/npcs  */}
                            <GWplayertag health='10' type='type: player' name="Kittien"/>
                        </div>
                        <div id='resources' style={styles.resources}> 
                            {/* resources/npcs  */}
                            {/* <div style={styles.test} >{test}</div> */}
                            {data.map((data, id) => (
                                <NPC
                                    key={id}
                                    id={id}
                                    name={data.name}
                                    type={data.type}
                                    health={data.health}
                                    data={data}
                                    addNPC={spawns}
                                    onClick={() => { attack(id) }}
                                    atk={atk}
                                    seconds={seconds}
                                />
                            ))}
                            
                        </div>
                    </div>
                </div>    
                <div style={styles.level}>
                    {/* levels information */}
                    <GWlevels
                        // lumber jack levels and information
                        // ljlvl={lumberjacklvl} ljcurrentxp={lumberjackxp} ljxptolvl='1000' ljtotalxp={lumberjackxp}
                        // // mining levels and information
                        // mininglvl={mininglvl} miningcurrentxp={miningxp} miningxptolvl='1000' miningtotalxp={miningxp}
                    />
                </div>
            </div>

        </div>
    )
}
 
export default Home;

const styles = {
    container: {
        display: 'flex',
        flexDirection:'column',
        backgroundColor: 'black',
        height:'100vh'
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
    test: {
        color: "aqua"
    },
}

