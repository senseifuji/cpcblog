import { Box } from '@chakra-ui/core';

const Content = ({children}) => {
    return ( 
        <Box mt={["4em", "4em", "5em", "6em"]} width="100%"> 
            {children}
        </Box>
    );
}
 
export default Content;