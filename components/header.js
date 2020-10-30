import Logo from './svgs/cpclogo';
import Link from 'next/link'
import {useState} from 'react';
import customTheme from '../config/customTheme';
import { Flex, Box, List } from "@chakra-ui/core";
import { useRouter } from 'next/router'




const Header = ({position}) => {
    //Extracting colors
    const {yellow, white, red} = customTheme.colors.cpc

    //state that is passed to the logo component on hover and unhover
    const [logoColor, setLogoColor] = useState(white)

    return (
        <header>
            <Flex width="100%" justify="center">
                <Flex justify="space-between" align="center" width={["100%", "100%", "100%", "70%"]}>
                    {/* LOGO SECTION*/}
                    <Box>
                        <Link href="/">
                            <a id="logo"  onMouseEnter={() => setLogoColor(yellow)}  onMouseLeave={() => setLogoColor(white)}>
                                <Logo logofill={logoColor} letrasfill={white} width="1.2em" height="1.2em"/>
                            </a>
                        </Link>
                    </Box>

                    {/* LINKS SECTION */}
                    <Flex color={white} direction="row" justify="left" fontFamily="cpc.gotham" fontSize="1.2em" width="inherit">
                        <List d="flex">
                            <li className="item" > 
                                <Link href="/acerca"><a >Acerca de</a></Link>
                            </li>
                            <li className="item" >
                                <Link href="/faqs"><a >Preguntas Frecuentes</a></Link>
                            </li>
                            <li className="item" >
                                <Link href="/publicaciones"><a >Publicaciones</a></Link>
                            </li>
                            <li className="item" >
                                <Link href="/sesiones"><a >Sesiones</a></Link>
                            </li>
                            <li className="item" >
                                <Link href="/contacto"><a >Contacto</a></Link>
                            </li>
                        </List>
                    </Flex>

                    {/* SOCIAL MEDIA SECTION */}
                    <Box>
                        here goes social media
                    </Box>  
                </Flex>
            </Flex>

            {/* CSS */}
            <style jsx>{`
                header {
                    background: ${red};
                    position: ${position};
                    width: 100%;
                    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
                }  

                #logo{
                    font-size: 5em;
                }

                .item{
                    padding: 0 20px;
                    border-bottom: 3px solid ${red};
                    transition: 0.3s;
                    cursor: pointer;
                }

                .item:hover{
                    border-bottom: 3px solid ${yellow};
                }

                
            `}</style>


        </header>
      );
}

 
export default Header;