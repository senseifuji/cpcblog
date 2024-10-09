import {Flex} from '@chakra-ui/react'
import customtheme from '../customtheme'

const Section = ({
    children, 
    bg, 
    color, 
    miniTriangleDown = false, 
    miniTriangleColor, 
    splitBiBottom = false,
    splitBiBottomColorOne, 
    splitBiBottomColorTwo,
    splitBiBottomInverse = false,
    desktopWidth = "80%",
    tabletWidth= "70%",
    justify="center",
    triangleWidth="116%"
    
}) => {
    const {colors} = customtheme
    return ( 
        <>
        <Flex direction="row" width="100%" bg={bg} justify={justify}>
            <Flex px={2} py="2em" direction="column" align="center" color={color} width={["100%", "100%", tabletWidth, desktopWidth]} bg={bg}>
                {children}
            </Flex>
        </Flex>

        {/* option to triangle 100%width colors */}
        {splitBiBottom && (
            <div className={"splittriangleContainer " +  (splitBiBottomInverse  ? 'splitBiBottomInverse':'splitBiBottomNormal')}
            data-negative="false">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" width="100%" height="24px">
                    <path  d="M0,6V0h1000v100L0,6z"></path>
                </svg>
            </div>
        )}
        
        {/* //Option to have triangle down section */}
        {miniTriangleDown && (
            <Flex fill={miniTriangleColor} display={["none", "none", "flex", "flex"]} >
            <div data-negative="false" className="miniTriangleDownContainer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 10" preserveAspectRatio="none" width="100%" height="23px">
                    <path  d="M350,10L340,0h20L350,10z" ></path>
                </svg>	
            </div>	
            </Flex>
        )}

        <style jsx>{`
            {
                background-color: ${splitBiBottomColorTwo};
                fill: ${splitBiBottomColorOne};
                height: 24px;
                width: ${triangleWidth};
            }


            .splitBiBottomNormal {
                transform: translateX(0) rotateY(180deg);
            }

            .splitBiBottomInverse{
                transform: translateX(-50px) rotateY(380deg);

            }

            .miniTriangleDownContainer{
                width: 100%;
            }

            @media only screen and (max-width: 1024px) {
                {/* diagonal not working on mobile */}
                .splittriangleContainer{
                    display: none;
                }
            }
        `}</style>
        </>
     );
}
 
export default Section;

