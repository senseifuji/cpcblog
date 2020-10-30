import { Flex, Box, List } from "@chakra-ui/core";

import customTheme from '../config/customTheme';

import Logo from './svgs/cpclogo';
import Link from 'next/link'

import {useState} from 'react';
import { useRouter } from 'next/router'


const Header = ({position}) => {
    //Extracting colors
    const {yellow, white, red} = customTheme.colors.cpc
    
    //state that is passed to the logo component on hover and unhover
    const [logoColor, setLogoColor] = useState(white)
    
    const router = useRouter() //router of app, to know in which page we're in
    
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
                            <li className={"item " +  (router.pathname === '/acerca' ? 'inpage':'')}> 
                                <Link href="/acerca"><a >Acerca de</a></Link>
                            </li>
                            <li className={"item " + (router.pathname === '/faqs' ? 'inpage':'')}>
                                <Link href="/faqs"><a >Preguntas Frecuentes</a></Link>
                            </li>
                            <li className={"item " +  (router.pathname === '/publicaciones' ? 'inpage':'')}>
                                <Link href="/publicaciones"><a >Publicaciones</a></Link>
                            </li>
                            <li className={"item " +  (router.pathname === '/sesiones' ? 'inpage':'')}>
                                <Link href="/sesiones"><a >Sesiones</a></Link>
                            </li>
                            <li className={"item " + (router.pathname === '/contacto' ? 'inpage':'')}>
                                <Link href="/contacto"><a >Contacto</a></Link>
                            </li>
                        </List>
                    </Flex>

                    {/* SOCIAL MEDIA SECTION */}
                    <Flex>
                        <List d="flex">
                            <li className="socialitem">
                                <Link href="https://www.facebook.com/cpcchih/">
                                    <a target="_blank"><i aria-hidden className="fab fa-facebook"></i></a>
                                </Link>
                            </li>
                            <li className="socialitem">
                                <Link href="http://twitter.com/cpc_chih">
                                    <a target="_blank"><i aria-hidden className="fab fa-twitter"></i></a>
                                </Link>
                            </li>
                            <li className="socialitem">
                                <Link href="https://www.youtube.com/channel/UCSzbJsei-QnAbjUMmHXBxYg?view_as=subscriber">
                                    <a target="_blank"><i aria-hidden className="fab fa-youtube"></i></a>
                                </Link>
                            </li>
                        </List>
                    </Flex>  
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
                    padding-bottom: 0.25em;

                }

                .item:hover{
                    border-bottom: 3px solid ${yellow};
                }

                .inpage{
                    color: ${yellow};
                    border-bottom: 3px solid ${yellow};
                }

                .socialitem{
                    padding: 0 0.5em;
                    color: white;
                    font-size: 1.55em;
                }

                .socialitem:hover{
                    color: ${yellow}
                }

               
                
                
            `}</style>


        </header>
      );
}

 
export default Header;