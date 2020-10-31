// CUSTOM MADE COMPONENTS
import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content';
import Section from '../components/section'

// SVGS
import ManitasDineros from '../components/svgs/manitasdineros';
import MonoCovid from '../components/svgs/monocovid';
import Carrito from '../components/svgs/carrito';
import Camino from '../components/svgs/camino';

import {Box, Flex, Text, Image} from '@chakra-ui/core';

export default function AboutPage() {
    return (
        <Layout title="Acerca de - CPC Anticorrupcion">
            <Header position="fixed"/>
            <Content>
                {/* Main SECTION */}
                <Section bg="cpc.red" color="cpc.white">
                     <Text fontSize={["1.25em", "2em", "2em", "2em"]} fontFamily="cpc.gothamMedium" textAlign="center" lineHeight="1.18em">
                            <b>¿Has buscado en Google <br/> imágenes de la palabra corrupción?</b>
                        </Text>
                        <Text fontFamily='cpc.gothamCondensed' fontSize={["1em", "1.4em", "1.7em", "1.7em"]} d="inline-flex" alignItems="center">
                            ¿Cuantas veces has visto este emoji 
                            <Image src="/images/manitas.svg" alt="Manitas" width="1em" height="1em" />
                            junto con este otro &nbsp;
                            <Image src="/images/billetitos.svg" alt="Billetitos" width="1em" height="1em" />?
                        </Text>
                        <Flex direction="column" alignItems="center">
                            <ManitasDineros manitasSize="146px"/>
                            <Text fontFamily='cpc.gothamCondensed' fontSize={["1em", "1.4em", "1.7em", "1.7em"]} mt="-1em">Creemos que las suficientes como para afirmar que</Text>
                        </Flex>
                        <Text my="0.5em" fontFamily="cpc.gothamMedium" fontSize={["1.25em", "2em", "2em", "2em"]} lineHeight="1.2" textAlign="center">
                            <b>Nos urge una mejor <br/>definición de corrupción</b>
                        </Text>
                </Section>  

                {/* CARRITO-CAMINO-MONOVACUNAS SECTION */}
                <Section bg="cpc.yellow" color="cpc.black">
                   <Flex justify="space-evenly" direction={["column", 'column', 'row', 'row']}>
                        <Flex alignItems="center" direction={["column", 'column', 'row', 'row']} mx={4}>
                            <Box mx={["0em", "0em", "1em", "1.5em"]}>
                                <Camino size="100px"/>
                            </Box>
                            <Box mx={["0em", "0em", "1em", "1.5em"]} my="1em">
                                <Carrito size="100px"/>
                            </Box>
                            <Box mx={["0em", "0em", "1em", "1.5em"]} my="-1em">
                                <MonoCovid size="100px"/>
                            </Box>
                        </Flex>
                        <Flex width={["100%", "100%", "46%", "46%" ]}>
                            <Text my={4} fontFamily="cpc.gothamCondensedBook" fontSize={["1em", "1.2em", "1.1em", "1.2em"]} textAlign={["center", "center", "left", "left"]}>
                                Agua destilada disfrazada de medicinas para el cáncer; carreteras que se abren en dos por tener materiales de segunda; 
                                personas arrolladas por no tener la seguridad mínima en eventos deportivos; niñas y niños enfermos por habitar en viviendas 
                                populares construidas en una zona contaminada; edificios colapsados por no cumplir con las regulaciones de construcción antisismos. 
                                <strong> La corrupción mata</strong> y muchas veces va más allá del soborno, por eso desde el Comité de Participación Ciudadana de Chihuahua 
                                creemos que la forma de definir la corrupción debe de ser mucho más amplia, porque 
                                <strong> lo que no se define no se puede combatir</strong>.
                            </Text>
                        </Flex>
                   </Flex>
                </Section>                     
            </Content>
        </Layout>
    )
}


                    