import {Flex} from '@chakra-ui/core'
import customTheme from '../customtheme'

const Section = ({
    children, 
    bg, 
    color, 
    miniTriangleDown = false, 
    miniTriangleColor, 
    triangleBiBottom = false,
    triangleBiBottomColorOne, 
    triangleBiBottomColorTwo,
    desktopWidth = "80%",
    tabletWidth= "90%",
    
}) => {
    const {colors} = customTheme
    return ( 
        <>
        <Flex direction="row" width="100%" bg={bg} justify="center">
            <Flex px={2} py="2em" direction="column" align="center" color={color} width={["100%", "100%", tabletWidth, desktopWidth]} bg={bg}>
                {children}
            </Flex>
        </Flex>

        {/* option to triangle 100%width colors */}
        {triangleBiBottom && (
            <div className="bicolortriangleContainer" data-negative="false">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path  d="M0,6V0h1000v100L0,6z"></path>
                </svg>
            </div>
        )}
        
        {/* //Option to have triangle down section */}
            {miniTriangleDown && (
                <Flex fill={miniTriangleColor} display={["none", "none", "flex", "flex"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 10" preserveAspectRatio="none">
                        <path className="elementor-shape-fill" d="M350,10L340,0h20L350,10z" ></path>
                    </svg>		
                </Flex>
            )}

        <style jsx>{`
            .bicolortriangleContainer{
                background-color: ${triangleBiBottomColorTwo};
                fill: ${triangleBiBottomColorOne};
                transform: translateX(0) rotateY(180deg);
                height: 24px;
                width: 100%;
                top: -1;
            }

            .bicolortriangleContenter > svg{
                height: 24px;
                width: 100%;
            }
        `}</style>


        </>
     );
}
 
export default Section;

