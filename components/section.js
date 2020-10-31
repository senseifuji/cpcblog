import {Flex} from '@chakra-ui/core'
import customTheme from '../customtheme'

const Section = ({
    children, 
    bg, 
    color, 
    triangleDown = false, 
    triangleColor, 
    desktopWidth = "80%"
}) => {
    const {colors} = customTheme
    return ( 
        <>
        <Flex direction="row" width="100%" bg={bg} justify="center">
            <Flex px={2} py="2em" direction="column" align="center" color={color} width={["100%", "100%", "90%", desktopWidth]} bg={bg}>
                {children}
            </Flex>
        </Flex>

        {/* //Option to have triangle down section */}
        {triangleDown && (
            <Flex fill={triangleColor} display={["none", "none", "flex", "flex"]}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 10" preserveAspectRatio="none" height="23px">
                    <path class="elementor-shape-fill" d="M350,10L340,0h20L350,10z" ></path>
                </svg>		
            </Flex>
        )}
        </>
        
     );
}
 
export default Section;

