import {Flex} from '@chakra-ui/core'

const Section = ({children, bg, color}) => {
    return ( 
        <Flex direction="row" width="100%" bg={bg} justify="center">
            <Flex px={2} py="2em" direction="column" align="center" color={color} width={["100%", "100%", "90%", "80%"]} bg={bg}>
                {children}
            </Flex>
        </Flex>
     );
}
 
export default Section;