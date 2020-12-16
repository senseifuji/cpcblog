import { 
    Flex, Box, List, Button, Text, Textarea, Modal, ModalOverlay, ModalContent, 
    ModalBody, ModalCloseButton, useDisclosure, FormControl, Input} 
from "@chakra-ui/core";

import customTheme from '../customtheme';
import Logo from './svgs/cpclogo';
import ModalLogo from './svgs/modallogo'
import Link from 'next/link'

import {useState} from 'react';
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useWindowSize from '../hooks/usewindowsize';


const Header = ({position}) => {
    //Extracting colors

    const {yellow, white, red, black} = customTheme.colors.cpc
    const {gothamCondensed} = customTheme.fonts.cpc

    //state that is passed to the logo component on hover and unhover
    const [logoColor, setLogoColor] = useState(white)
    const [logoSize, setLogoSize] = useState("1.2em")
    const [linksPadding, setLinksPadding] = useState("20px")
    
    const router = useRouter() //router of app, to know in which page we're in
    let size = useWindowSize() //window hook, to resize logo...
    const { isOpen, onOpen, onClose } = useDisclosure(); //hook for states in modal


    // MEDIA QUERIES FOR CUSTOM RESIZINGS
    useEffect(() => {
        if(size.width > 990){  //desktop 
            setLogoSize("1.2em")
            setLinksPadding("20px")
        } 
        if(size.width < 990){   //tablet
            setLogoSize("1em")
            setLinksPadding("15px")
        } 
        if(size.width < 768){  //mobile
            setLogoSize(false)
            setLinksPadding(false)
        } 
    }, [size])


    return (
        <header>
            <Flex width="100%" justify="center">
                <Flex justify="space-between" align="center" width={["100%", "80%", "95%", "80%", "70%"]}>

                    {/* Menu for mobile */}
                    {!logoSize && (
                        <div id="menucontainer" onClick={onOpen}>
                            <span>
                                <i className="fas fa-bars"></i>
                            </span>
                            <Text fontFamily={gothamCondensed} fontSize="m">Menú</Text>
                        </div>
                    )}
                    {/* LOGO SECTION*/}
                   {logoSize && (
                        <Box>
                            <Link href="/">
                                <a id="logo"  onMouseEnter={() => setLogoColor(yellow)}  onMouseLeave={() => setLogoColor(white)}>
                                    <Logo id="logo" logofill={logoColor} letrasfill={white}  width={logoSize} height={logoSize}/>
                                </a>
                            </Link>
                        </Box>
                   )}

                    {/* LINKS SECTION */}
                    {linksPadding && (
                        <Flex color={white} direction="row" justify={["center", "center", "center", "left"]} fontFamily={gothamCondensed} fontSize="1.2em" width="inherit">
                            <List d="flex">
                                <li className={"item " +  (router.pathname === '/acerca' ? 'inpage':'')}> 
                                    <Link href="/acerca"><a >Acerca de</a></Link>
                                </li>
                                <li className={"item " + (router.pathname === '/faq' ? 'inpage':'')}>
                                    <Link href="/faq"><a >Preguntas Frecuentes</a></Link>
                                </li>
                                <li  className={"item " +  (router.pathname === '/publicaciones' ? 'inpage':'')}>
                                    <Link href="/publicaciones"><a >Publicaciones</a></Link>
                                </li>
                                <li  className={"item " +  (router.pathname === '/sesiones' ? 'inpage':'')}>
                                    <Link href="/sesiones"><a >Sesiones</a></Link>
                                </li>
                                <li  className={"item " +  (router.pathname === '/contacto' ? 'inpage':'')}>
                                    <Link href="/contacto"><a >Contacto</a></Link>
                                </li>
                               
                            </List>
                        </Flex>
                    )}

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


                 {/* MODAL        */}
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent bg={red} top="-3.75em">
                    <ModalCloseButton color={white}/>
                    <ModalBody>
                        <Flex direction="column" width="100%">
                            <Flex p={0} m={-1}>
                                <Link href="/">
                                    <a><ModalLogo filllogo={yellow} fillletras={white} logosize="12em"/></a>
                                </Link>
                            </Flex>
                            <Flex mb={4} mt={-10} width="100%">
                                 <List width="100%">
                                    <li className={"modalitem " +  (router.pathname === '/acerca' ? 'inpage':'')}> 
                                        <Link href="/acerca"><a >Acerca de</a></Link>
                                    </li>
                                    <li className={"modalitem " + (router.pathname === '/faq' ? 'inpage':'')}>
                                        <Link href="/faq"><a >Preguntas Frecuentes</a></Link>
                                    </li>
                                    <li  className={"modalitem " +  (router.pathname === '/publicaciones' ? 'inpage':'')}>
                                        <Link href="/publicaciones"><a >Publicaciones</a></Link>
                                    </li>
                                    <li  className={"modalitem " +  (router.pathname === '/sesiones' ? 'inpage':'')}>
                                        <Link href="/sesiones"><a >Sesiones</a></Link>
                                    </li>
                                    <li  className={"modalitem " + (router.pathname === '/contacto' ? 'inpage':'')}>
                                        <Link href="/contacto"><a >Contacto</a></Link>
                                    </li>
                                </List>
                            </Flex>
                        </Flex>
                    </ModalBody>
                    </ModalContent>
                </Modal>
            </Flex>

            {/* CSS */}
            <style jsx>{`
                header {
                    background: ${red};
                    position: ${position};
                    width: 100%;
                    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
                    z-index: 100;	
                    top: 0;
                }  

                {/* mobile menu */}
                #menucontainer{
                    font-size: 1.5em;
                    padding: 0.6em 0.5em;
                    color: ${white};
                    display: flex;
                    cursor: pointer;
                }

                #menucontainer span {
                    padding-right: 0.25em;
                    cursor: pointer;

                }

                #menucontainer:hover{
                    color: ${yellow}
                }

                {/* MODAL */}
                .modalitem{
                    color: ${white};
                    margin: 0.4em 0;
                    font-family: ${gothamCondensed};
                    font-size: 1.25em;
                    cursor: pointer;
                    border-bottom: 3px solid ${red};
                }

                .modalitem:hover {
                    border-bottom: 3px solid ${yellow};
                }

                {/* DESKTOP AND TABLET HEADER */}

                #logo{
                    font-size: 5em;
                }

                .item{
                    cursor: pointer;
                    padding-bottom: 0.25em;
                    transition: 0.3s;
                    padding: 0 ${linksPadding};
                    border-bottom: 3px solid ${red};

                }

                .item:hover{
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

                .inpage{
                    color: ${yellow};
                    border-bottom: 3px solid ${yellow};
                }
                                              
            `}</style>
        </header>
    );
}

 
export default Header;