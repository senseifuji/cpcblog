import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content';
import Section from '../components/section';
import { useRouter} from 'next/router'
import {useState} from 'react';
import CpcSeo from '../components/cpcseo'
import customtheme from '../customtheme.js'
import { Flex, Text, Box, Image, PseudoBox, Input, Textarea, Button, FormControl} from '@chakra-ui/core';
import Link from 'next/link'



    return (
        <>
            <CpcSeo 
                title="Contacto CPC - Comité de Participación Ciudadana de Chihuahua"
                description="Contacta a las personas que integran el Comité de Participación Ciudadana del Sistema Estatal Anticorrupción de Chihuahua"
                url={path}
                imageUrl={process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_URL}
            /> 
            <Layout >
                <Header position="fixed"/>
                <Content>
                    <Section bg="cpc.red" color="cpc.white">
                        <Text fontSize={["1.25em", "1.5em", "3em", "3em"]} fontFamily="cpc.gothamBold" textAlign="center" lineHeight="1.18em">
                            <b>Contáctanos!</b>
                        </Text>
                        <Text lineheight="1em" px={5} display={{xs: "none", md: "inherit"}} textAlign="center">Llena el formulario para contactarnos o si prefieres da click en el integrante de tu preferencia.</Text>
                    </Section> 


                    {/* //Faces  */}
                    <Flex justify="space-around" alignItems="top"  direction={["column", "column", "row", "row"]} width="100%" mt={["2em", "2em", "5em", "5em"]}>
                        <Flex  bg="cpc.white" color="cpc.red" direction="column" justify="center" alignItems="center" width="100%" py={2}>
                            <PseudoBox _hover={{filter: "drop-shadow(2px 4px 6px black)"}}>
                                <Link href="/integrantes/anaterrazas">
                                    <a><Image src="/images/anaterrazas.svg" alt="anaterrazas" mt={[3]} width={["10em", "10em", "10em", "10em"]} />  </a>
                                </Link>
                            </PseudoBox>          
                            <Box fontSize={["1.5em", "1.5em", "1.5em", "1.5em"]} lineHeight={["1em"]} textAlign="center">
                                <Text fontFamily="cpc.gothamMedium" ><b>Ana Terrazas</b></Text>
                            </Box>
                        </Flex>
                         <Flex  bg="cpc.white" color="cpc.red" direction="column" justify="center" alignItems="center" width="100%" py={2}>
                            <PseudoBox _hover={{filter: "drop-shadow(2px 4px 6px black)"}}>
                                <Link href="/integrantes/lilianaochoa">
                                    <a>
                                        <Image src="/images/lilianaochoa.svg" alt="lilianaochoa" mt={[3]} width={["10em", "10em", "10em", "10em"]} />            
                                    </a>
                                </Link>
                            </PseudoBox>
                            <Box fontSize={["1.5em", "1.5em", "1.5em", "1.5em"]} lineHeight={["1em"]} textAlign="center">
                                <Text fontFamily="cpc.gothamMedium" ><b>Liliana Ochoa</b></Text>
                            </Box>
                        </Flex>
                         <Flex  bg="cpc.white" color="cpc.red" direction="column" justify="center" alignItems="center" width="100%" py={2}>
                            <PseudoBox _hover={{filter: "drop-shadow(2px 4px 6px black)"}}>
                                 <Link href="/integrantes/renemoreno">
                                     <a>
                                        <Image src="/images/renemoreno.svg" alt="renemoreno" mt={[3]} width={["10em", "10em", "10em", "10em"]} />            
                                     </a>
                                </Link>
                            </PseudoBox>
                            <Box fontSize={["1.5em", "1.5em", "1.5em", "1.5em"]} lineHeight={["1em"]} textAlign="center">
                                <Text fontFamily="cpc.gothamMedium" ><b>René Moreno</b></Text>
                            </Box>
                        </Flex>
                         <Flex  bg="cpc.white" color="cpc.red" direction="column" justify="center" alignItems="center" width="100%" py={2}>
                            <PseudoBox _hover={{filter: "drop-shadow(2px 4px 6px black)"}}>
                                 <Link href="/integrantes/miguelgomez">
                                     <a>
                                        <Image src="/images/miguelgomez.svg" alt="miguelgomez" mt={[3]} width={["10em", "10em", "10em", "10em"]} />            
                                     </a>
                                </Link>
                            </PseudoBox>
                            <Box fontSize={["1.5em", "1.5em", "1.5em", "1.5em"]} lineHeight={["1em"]} textAlign="center">
                                <Text fontFamily="cpc.gothamMedium" ><b>Miguel Gómez</b></Text>
                            </Box>
                        </Flex>
                         <Flex  bg="cpc.white" color="cpc.red" direction="column" justify="center" alignItems="center" width="100%" py={2}>
                            <PseudoBox _hover={{filter: "drop-shadow(2px 4px 6px black)"}}>
                                 <Link href="/integrantes/carmenalvarez">
                                     <a>
                                        <Image src="/images/carmenalvarez.svg" alt="carmenalvarez" mt={[3]} width={["10em", "10em", "10em", "10em"]} />            
                                     </a>
                                </Link>
                            </PseudoBox>
                            <Box fontSize={["1.5em", "1.5em", "1.5em", "1.5em"]} lineHeight={["1em"]} textAlign="center">
                                <Text fontFamily="cpc.gothamMedium" ><b>Carmen Álvarez</b></Text>
                            </Box>
                        </Flex>
                    </Flex>
                </Content>
            </Layout>
        </>
    )
}
