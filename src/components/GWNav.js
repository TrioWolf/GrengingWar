import { Link } from 'react-router-dom';
import GWnavbutton from "./gwbutton/GWnavbutton";

const GWNav = ({toggle}) => {  
    return (        
        <nav style={styles.nav}>

            {/* <Link to="/" style={styles.Link}><img src={Logo} alt="Trio Wolf logo" style={styles.logo} /></Link> */}
            <GWnavbutton style={styles.tab} btntext="Content comming soon" />
            <Link to='/home' ><GWnavbutton style={styles.tab} btntext="map" /></Link>
            <Link to='/crafting'  ><GWnavbutton style={styles.tab} btntext="Crafting" /></Link>
            <GWnavbutton style={styles.tab} btntext="Smithing" />
            <GWnavbutton style={styles.tab} btntext="Fletching" />
            <GWnavbutton style={styles.tab} btntext="Bank" />
            <GWnavbutton style={styles.tab} btntext="Stats" />
        </nav>
    )
}
export default GWNav;

const styles = {
    nav: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'stretch',
        fontSize: '1.5rem',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'black',
        color: 'pink',
        marginTop: '8px',
        boxShadow: '0 4px 8px 0 rgb(255,192,203), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    fixIt: {
        // display: 'flex',
        // flexDirection: 'row',
    },
    logo: {
        // display:'flex',
        // flexDirection:'row',
        // alignItems:'center',
        // width:'100%',
        // borderRadius:'50%'
    },
    Link: {
        // fontSize:'20px',
        // marginBottom:'8px',
        // padding:'3%',
        // color:'pink'    
    }
};