// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./home.css"
import GWNav from "../components/nav/GWNav"
import GWheader from "../components/header/GWheader"
import GWinventory from "../components/inventory/GWinventory";
import GWsector from "../components/map/GWsector";
// import GWresource from "./Components/gathering/GWresource";
import GWlevels from "../components/statsandinfo/GWlevels";
import GWresourceheld from "../components/resources/GWresource";
import GWplayertag from "../components/player/GWplayertag";
import GWmap from "../components/map/GWmap";
import NPC from "../components/gathering/NPC"
//utils 
import Timer from '../Utils/Tick';
import { NPCDATA, spawn34, spawn44 } from "../datafiles/NPC";
import content from "../Utils/MapContent";
import { GameProvider } from '../Utils/GameData';
import { useLocation } from 'react-router-dom';



function Home() {

    // -------------- min max damage --------------
    function rng(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }
    // ----------- spawn code ---------------------
     function toggle() {
        setatk(!atk);
        // for (let reload = seconds; reload === 0; attack)
        // console.log(reload)
    }
   
   
    const [data, setdata] = useState(spawn44)
    

    function spawns(name) {
        const newspawns = [...data, { name }];
        setdata(newspawns)
    };
    
    // ---------- food healing -----------
    // const [foodcount, setfoodcount] = useState(10);
    // const fooddamage = () =>{if (foodcount > 0 ) { setfoodcount(foodcount - 1)}};

    // ----------- profile fetching variables --------------------
    const location = useLocation();
    const [userProfile, setUserProfile] = useState([]);
    const [username, setUsername] = useState('');
    
    // adds resources to the counter for held items
    const [food, setfood] = useState(10);
    const [credit, setcredit] = useState(10);
    const [gwb, setgwb] = useState(10);
    const [seconds, setSeconds] = useState(0);
    const [atk, setatk] = useState(false);
    const [currentnpc, setcurrentnpc] = useState(0);
    // npc and resources 
    const [npc, setnpc] = useState([]);
    const [res, setRes] = useState([]);
    const [locationId, setLocation] = useState('1-1');
    const [inventory, setInventory] = useState([]); // used to hold the data for the inventory items collected 
    // fetch for database call for inventory items
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('')





    
    //-----------pulling data from map to here for api data to show npc resources-----------
    const handleLocationChange = (newLocationId) => {
        setLocation(newLocationId);
        // console.log('location id:' ,newLocationId);
        // console.log('locationId variable:', locationId);
        // console.log(`res variable location: ${newLocationId}`, res);
        // console.log('fetching berry bush resouces', res[0].resources[0].loot) // accessing the loot of a resource
        
    }

    const fetchUserData = async () => {
        try {
            const resourceResponse = await axios.get(`http://localhost:7000/api/data/${locationId}`);
            setRes(resourceResponse.data);
            // console.log(res)
            // console.log('resouceResponse api call',resourceResponse)
            // const npcResponse = await axios.get('http://localhost:5000/api/data/npc');
            // setnpc(npcResponse.data); console.log(npcResponse)
            
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
    
    //--------- attack function --------------------   
    const attack = (npcId) => {
        // Find the NPC by id
        const npcIndex = res.findIndex((npc) => npc.id === npcId);
        if (npcIndex !== -1) {
            // Reduce health by the attack power (atk)
            const updatedHealth = res[npcIndex].health - 40; // variable for attack power needs to be made 
    
            // If health is 0 or less, the NPC is dead
            if (updatedHealth <= 0) {
                // Log loot from the kill
                const resources = res[npcIndex].resources;
    
                // Iterate over resources
                resources.forEach(resource => {
                    const existingIndex = userProfile.inventory.findIndex(item => item.name === resource.name);
                    if (existingIndex !== -1) {
                        // Update existing inventory item
                        const updatedInventory = [...userProfile.inventory];
                        updatedInventory[existingIndex].loot += resource.loot;
                        setUserProfile(prevProfile => ({
                            ...prevProfile,
                            inventory: updatedInventory
                        }));
                    } else {
                        // Add new resource to inventory
                        setUserProfile(prevProfile => ({
                            ...prevProfile,
                            inventory: [...prevProfile.inventory, { name: resource.name, loot: resource.loot }]
                        }));
                    }

                });
    
                // Remove the NPC from the array
                const updatedRes = [...res];
                updatedRes.splice(npcIndex, 1);
                setRes(updatedRes);
            } else {
                // Update NPC's health
                const updatedRes = [...res];
                updatedRes[npcIndex].health = updatedHealth;
                setRes(updatedRes);
            }
        }
    };
    
    
    const profileInventoryUpdate = (newinventory) =>{
            setUserProfile(old => ({
                ...old,
                inventory: newinventory
            }))
            console.log('profile inventory',userProfile.inventory)
    }
        
    // ------- timer code for attacking -------------------

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const user = searchParams.get('userId');

        axios.get(`http://localhost:8000/api/user/profile/${user}`)
            .then(response => {
                setUserProfile(response.data.user);
                console.log('user profile:', userProfile);
                // setUsername(response.user.name);
                // console.log('user name:', username);
            })
            .catch(error => {
                console.error('failing to find user:', error);
            });
            console.log('profile inventory', userProfile.inventory)
    }, []);




    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {

        

            // Make a GET request to fetch user's profile by Google ID


        fetchUserData()
    
        let interval = null;
        if (atk) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
        } else if (!atk && seconds !== 0) {
            clearInterval(interval);
        }
        
    
        if (!atk) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
            if (!atk && seconds === 0) {
                setSeconds(0);
                clearInterval(interval);
            }
        }
    
        return () => clearInterval(interval);
    }, [atk, seconds,data,locationId,inventory, location,]);
    
  

    return (
        <div  className='container'>
            <header>
            <GWheader/>
            </header>
            {/* <div>
                <GWNav />
            </div> */}
            <GameProvider>
            <div  className='gameplay'>
                {/* 3 column inventory game stats */}
                <div>
                    {/* inventory  */}{userProfile && userProfile.inventory && (
                <GWinventory inventory={userProfile.inventory} />
            )}
                </div>
                <div  className='gamecol'>
                    {/* <div  className='resourcesheld'>
                        <GWresourceheld count="1-1" name="location: " />
                        <GWresourceheld count={food} name='Food:'/>
                         <GWresourceheld count={credit} name='Credit:'/>
                        <GWresourceheld count={gwb} name='Special:'/>
                    </div> */}
                    <div className='gamerow'>
                        <div className='map' >
                            {/* game map and timer */}
                            <GWmap onLocationChange={handleLocationChange}/>
                            {/* <Timer
                                atktext={ atk}
                                atk={ atk}
                                seconds={ seconds}
                                onClick={toggle }
                                atkbtn={atk}
                                    /> */}
                        </div>
                        <div id='player'  className='resources'> 
                            {/* resources/npcs  */}
                            <GWplayertag health='10' type='type: player' name={userProfile.name}/>
                        </div>
                        <div id='resources'  className='resources'> 
                            {/* resources/npcs  */}

                            {res.map((data) => (
                                
                                <NPC
                                    key={data.id}
                                    id={data.id}
                                    name={data.name}
                                    type={data.type}
                                    health={data.health}
                                    data={data}
                                    addNPC={spawns}
                                    onClick={() => { attack(data.id) }} // Passes the id directly to the attack function
                                    atk={atk}
                                    seconds={seconds}
                                />

                            ))}
                            
                        </div>
                    </div>
                </div>    
            </div>
            </GameProvider>
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
