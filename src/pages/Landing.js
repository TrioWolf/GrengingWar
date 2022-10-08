import { Image, Center, Square, Circle, Box, Flex, Spacer, HStack, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  sm: '400px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}




function Landing() {
    return (
        <div style={styles.body} >
            <Box
                bg='black'
                color='pink'
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                fontSize='6xl'
                fontWeight='bold'
                h='100vh'
            >
                <Box>    
                    Grenging War
                </Box>
                <Link to="/home"  >        
                    <Box
                        bg='pink'
                        color='black'
                        px='10'
                        borderRadius='lg'
                    >
                        Play
                    </Box>
                </Link>  
            </Box>
        </div>
        
    )
}

export default Landing

const styles = {
    body: {
        backgroundColor: 'black'
    },
    main: {
        // display: 'flex',
        // flexDirection: 'row',
        // width:'150px'
        width: '90%',
        margin:'5px'
    }
}