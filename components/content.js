import { Flex } from '@chakra-ui/react';

const Content = ({children}) => {
    return ( 
        <Flex direction="column" mt={["4em", "4em", "5em", "6em"]} width="100%"> 
            {children}
        </Flex>
    );
}
 
export default Content;