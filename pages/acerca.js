// CUSTOM MADE COMPONENTS
import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content';
import Section from '../components/section'

import customtheme from '../customtheme.js'

import {Flex, Text, Image, List, ListItem, Box, PseudoBox, Avatar} from '@chakra-ui/core';
import Link from 'next/link'
import { useRouter } from 'next/router'
import CpcSeo from '../components/cpcseo';

// SVGS
import ManitasDineros from '../components/svgs/manitasdineros';
import MonoCovid from '../components/svgs/monocovid';
import Carrito from '../components/svgs/carrito';
import Camino from '../components/svgs/camino';

export default function AboutPage() {
    const {colors} = customtheme
    const router = useRouter()
    const path = process.env.NEXT_PUBLIC_BASE_URL + router.asPath

    return (
        <>
            {/* SEO OF ABOUT PAGE */}        
         <CpcSeo 
             title="Acerca del CPC - Comité Participativo Ciudadano de Chihuahua"
            description="Conoce lo que hacemos en el Comité de Participación Ciudadana de Chihuahua (CPC)."
            url={path}
            imageUrl={process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_URL}
         /> 
        <Layout>
            <Header position="fixed"/>
            <Content>
                <Section bg="cpc.red" color="cpc.white">
                    <Text fontSize={["1.75em", "2em", "2em", "2em"]} fontFamily="cpc.gothamBold" fontWeight="300" textAlign="center" lineHeight={["1em", "1em", "1.18em", "1.18em"]} letterSpacing={["-.05em", "-.05em", "0", "0"]} width={["100%", "90%", "70%", "60%"]}>
                        ¿Has buscado en Google imágenes de la palabra corrupción?
                    </Text>
                    <Text fontFamily='cpc.gothamCondensedBook' fontSize={["1.5em", "1.5em", "1.7em", "1.7em"]} fontWeight="300" textAlign="center" d="inline-flex" alignItems="center" mt={["1em", "0.75em", "0em", "0em"]}>
                        ¿Cuantas veces has visto este emoji 🤝 junto con este otro 💵?
                    </Text>
                    <Flex direction="column" alignItems="center">
                        <ManitasDineros manitasSize="146px"/>
                        <Text fontFamily='cpc.gothamCondensedBook' fontSize={["1.5em", "1.5em", "1.7em", "1.7em"]} fontWeight="300" textAlign="center" lineHeight={["1em", "1em", "1.18em", "1.18em"]} mt="-1em">
                        Creemos que las suficientes como para afirmar que</Text>
                    </Flex>
                    <Text my="0.5em" fontFamily="cpc.gothamBold" fontSize={["1.75em", "1.75em", "2em", "2em"]} fontWeight="300" lineHeight={["1em", "1em", "1.18em", "1.18em"]} textAlign="center" letterSpacing={["-.05em", "0", "0", "0"]} width={["100%", "90%", "70%", "60%"]}>
                        Nos urge una mejor definición de corrupción
                    </Text>
                </Section> 
                {/* CARRITO-CAMINO-MONOVACUNAS SECTION */}
                <Section bg="cpc.yellowLight" color="cpc.black">
                   <Flex justify="space-evenly" direction={["column", 'column', 'row', 'row']}>
                        <Flex justify="space-evenly" width={["100%", '100%', '100%', '120px']} alignItems="center" alignSelf="center" direction={["column", 'row', 'row', 'column']}  mx={4}>
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
                        <Flex width={["100%", "100%", "%", "420px" ]}>
                            <Text my={4} fontFamily="cpc.gothamCondensedBook" fontSize={["1.3em", "1.3em", "1.4em", "1.4em"]} textAlign={["left", "left", "left", "left"]} mt={["1em", "1em", "1em", "0"]} pl={["1em", "1em", "0", "1.5em"]} pr={[".5em", "0.5em", "0", "0"]} lineHeight={["1.2em", "1.2em", "1.2em", "1.2em"]}>
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
                 {/* Definicion de Corrupcion section*/}
                <Section bg="cpc.white" color="cpc.black" desktopWidth="58%">
                    <Flex direction="column" alignItems="center" textAlign="center">
                        <Text color="cpc.red" fontSize={["1.75em", "1.75em", "2em", "2em"]} fontFamily="cpc.gothamBold" fontWeight="300" textAlign="center" lineHeight={["1em", "1em", "1.18em", "1.18em"]} letterSpacing={["-.05em", "0", "0", "0"]}>Nuestra definición de corrupción*</Text>
                        <Text my="0.8em" fontFamily="cpc.gothamCondensedBook" fontSize={["1.3em", "1.3em", "1.4em", "1.4em"]} textAlign={["left", "left", "left", "left"]} mt={["1em", "1em", "1em", "1em"]} pl={["1em", "1em", "0", "0"]} pr={[".5em", "0.5em", "0", "0"]} lineHeight={["1.2em", "1.2em", "1.2em", "1.2em"]} width={["100%", "100%", "80%", "80%"]}>
                            Es un problema de <b>captura</b> que se traduce en la incapacidad del Estado para 
                            controlar el <b>particularismo</b>. Se trata de una <b>forma de organización social</b> que 
                            se caracteriza por la distribución de bienes sobre una base no universalista que 
                            <b> refleja el acceso y distribución restringida al poder.</b>
                        </Text>
                        <Text fontFamily="cpc.gothamCondensedBook" fontSize={["1.1em", "1.1em", "1.2em", "1.2em"]} pl={["1em", "0", "0", "0"]} pr={[".5em", "0", "0", "0"]} textAlign="left">
                            *Basado en el trabajo de la 
                            <Link href="http://rendiciondecuentas.org.mx/wp-content/uploads/2018/06/PNA-AccountWordPressEduHdez.pdf">
                                <a className="redlink"> Red por la Rendición de Cuentas.</a>
                            </Link>
                        </Text>
                    </Flex>
                </Section>
                {/* Second top SECTION */}
                <Section bg="cpc.red" color="cpc.white" >
                    <Text fontSize={["1.75em", "1.75em", "2em", "2em"]} fontFamily="cpc.gothamBold" fontWeight="300" textAlign="center" lineHeight={["1em", "1em", "1.18em", "1.18em"]} letterSpacing={["-.05em", "0", "0", "0"]} width={["100%", "80%", "70%", "75%"]}>
                        es por eso que para combatir la corrupción, trabajamos en el
                    </Text>
                </Section>  

                {/* Sistema Estatal SECTION */}
                <Section bg="cpc.blueDark" color="cpc.white">
                   <Flex justify="space-evenly" direction={["column", 'column', 'row', 'row']}>
                        <Flex direction="column" alignItems="center" width={["100%", "100%", "70%", "60%" ]}>
                            <Image src="/images/sistemaestatal.svg" alt="SEA" width={["15em", "15em", "20em", "20em"]} mb={["0", "0", "0em", "1.2em"]} />                            
                            <Text lineHeight="1.1em" fontFamily="cpc.spaceMonoRegular" fontSize={["1em", "1em", "1em", "1em"]} fontWeight="300" textAlign={["left", "center", "center", "left"]} my={["1rem", "1em", "0", "0"]} pl={["1em", "0", "0", "0"]} pr={[".5em", "0", "0", "0"]} width={["100%", "80%", "70%", "75%"]}>
                                Ente creado para coordinar acciones
                                interinstitucionales orientadas a:
                                combatir, prevenir, disuadir, sancionar
                                y reducir <Text fontFamily="cpc.spaceMonoRegular" d="inline" color="cpc.redAnti">los niveles de corrupción </Text>
                                en el Estado.
                            </Text>
                        </Flex>
                   </Flex>
                </Section>    
                {/* Partes del SEA section*/}
                <Section bg="cpc.white" color="cpc.black" desktopWidth="58%">
                    <Flex direction="column" alignItems="center" textAlign="center">
                        <Text color="cpc.black" pb={[".4em", "1em", "0", "1em"]} fontFamily="cpc.gothamCondensedBook" textWeight="300" fontSize={["1.5em", "2em", "1.7em", "1.7em"]}>
                        Está formado por</Text>
                        <Text width={["90%", "400px", "400px", "400px"]} border="2px" borderRadius="lg" px={["1.5em", "1em", "1em", "1em"]} py={["0.5em", "1em", "1em", "1em"]} fontFamily="cpc.spaceMonoRegular" fontSize={["1em", "1em", "1em", "1em"]} lineHeight={["1.2em", "1.2em", "1.2em", "1.2em"]}>
                           Los <b>67 municipios</b> del estado de Chihuahua
                        </Text>
                        <Text color="cpc.black" mt={["-.1em", "0", "0", "0"]} mb={["-.4em", "0", "0", "0"]} fontSize={["3em", "4em", "4em", "4em"]} > + </Text>
                        <Image src="/images/comitecoordinador.svg" alt="Comité Coordinador" width={["15em", "18em", "20em", "20em"]} mt={["1em", "0", "0", "0"]} mb={[".6em", "0.6em", "0.6em", "0.6em"]} />            
                        <Text width={["90%", "400px", "400px", "400px"]} border="2px" borderRadius="lg" px={["1.5em", "1em", "1.2em", "1.2em"]} py={["0.5em", "1em", ".5em", ".5em"]} fontFamily="cpc.spaceMonoRegular" borderColor="cpc.redCoor" fontSize={["1em", "1em", "1em", "1em"]} textAlign="left" lineHeight={["1.2em", "1.2em", "1.2em", "1.2em"]}>
                            Integrado por:
                            <List styleType="disc">
                                <ListItem>Secretaría de la Función Pública</ListItem>
                                <ListItem>Auditoría Superior del Estado </ListItem>
                                <ListItem>Tribunal de Justicia Administrativa </ListItem>
                                <ListItem>Fiscalía Especializada Anticorrupción</ListItem>
                                <ListItem>Consejo de la Judicatura Estatal </ListItem>
                                <ListItem>ICHITAIP</ListItem>
                                <ListItem>Comité de Participación Ciudadana</ListItem>
                            </List>
                        </Text>
                    </Flex>
                </Section>
                <Section bg="cpc.white" color="cpc.black" desktopWidth="58%">
                    <Text color="cpc.black" fontSize={["3em", "4em", "4em", "4em"]} mt={["-1.5em", "-1em", "-.8em", "-.8em"]}> + </Text>
                    <Image src="/images/comiteparticipacion.svg" alt="Comité de Participación Ciudadana" width={["15em", "18em", "20em", "20em"]} mt={["0", "1.25em", "1.25em", "1.25em"]} mb={["0", "0em", "0em", "0em"]}/>            
                    <Text width={["90%", "400px", "400px", "400px"]} border="2px" borderRadius="lg" px={["1.5em", "1em", "1.2em", "1.2em"]} py={["0.5em", "1em", ".5em", ".5em"]} my="0.8em" fontFamily="cpc.spaceMonoRegular" borderColor="cpc.red" fontSize={["1em", "1em", "1em", "1em"]} textAlign={["center", "left", "center", "center"]} lineHeight={["1.2em", "1.2em", "1.2em", "1.2em"]}>
                        5 personas de la academia o sociedad civil, con experiencia en: transparencia, 
                        participación ciudadana y anticorrupción
                    </Text>
                </Section>

                {/* FUNCION DEL COMITE  */}
                <Section bg="cpc.red" color="cpc.white">
                    <Text fontSize={["1.75em", "1.75em", "2em", "2em"]} fontFamily="cpc.gothamBold" fontWeight="300" textAlign="center" lineHeight={["1em", "1em", "1.18em", "1.18em"]} letterSpacing={["-.05em", "0", "0", "0"]} width={["100%", "100%", "70%", "75%"]}>
                        ¿Cuál es la función del Comité de Participación Ciudadana?
                    </Text>
                    <Image src="/images/cpc.svg" alt="CPC logo" my="3em" width={["10em", "15em", "17em", "17em"]} mt={["1em", "1em", "1em", "1em"]}/>   
                    <Text fontFamily="cpc.gothamCondensed" fontSize={["1.5em", "1.5em", "1.7em", "1.7em"]} fontWeight="300">
                        ¿Qué <b>no</b> hacemos?
                    </Text>
                    <Text width={["90%", "400px", "400px", "400px"]} color="cpc.white" border="2px" borderRadius="lg" px={[".7em", "1em", "1em", "1em"]} py={["0.5em", "1em", "1em", "1em"]} fontFamily="cpc.gothamCondensedBook" borderColor="cpc.white" fontSize={["1.3em", "1.3em", "1.4em", "1.4em"]} textAlign="left" lineHeight={["1.2em", "1.2em", "1.2em", "1.2em"]}>
                        <List styleType="square">
                            <ListItem><b>No</b> metemos gente a la cárcel</ListItem>
                            <ListItem><b>No</b> llevamos expedientes de investigación </ListItem>
                            <ListItem><b>No</b> investigamos, substanciamos ni sancionamos</ListItem>
                        </List>
                    </Text>   
                </Section>  

                <Section bg="cpc.red" color="cpc.white">
                    <Text fontFamily="cpc.gothamCondensed" fontSize={["1.5em", "1.5em", "1.7em", "1.7em"]} fontWeight="300" mt="-1em">
                        ¿Qué <b>sí</b> hacemos?
                    </Text>
                    <Text width={["90%", "400px", "400px", "400px"]} color="cpc.white" border="2px" borderRadius="lg" mb="1.5em" px={[".7em", "1em", "1em", "1em"]} py={["0.5em", "1em", "1em", "1em"]} fontFamily="cpc.gothamCondensedBook" borderColor="cpc.white" fontSize={["1.3em", "1.3em", "1.4em", "1.4em"]} textAlign="left" lineHeight={["1.2em", "1.2em", "1.2em", "1.2em"]}>
                        <List styleType="square">
                            <ListItem>Proponemos políticas públicas que permitan prevenir, detectar y sancionar actos de corrupción</ListItem>
                            <ListItem>Vigilamos el funcionamiento del Sistema Estatal Anticorrupción</ListItem>
                            <ListItem>Vinculamos a sociedad civil, academia, profesionistas y empresas a través de la Red Ciudadana Anticorrupción</ListItem>
                            <ListItem>Acompañamos a denunciantes de actos de corrupción</ListItem>
                        </List>
                    </Text>   
                </Section>  

                {/* Integrantes del CPC*/}
                 <Section bg="cpc.white" color="cpc.red"  desktopWidth="100%">
                    <Text fontSize={["1.75em", "2em", "2em", "2em"]} fontFamily="cpc.gothamBold" fontWeight="300" textAlign="center" lineHeight={["1em", "1em", "1.18em", "1.18em"]} letterSpacing={["-.05em", "0", "0", "0"]} width={["100%", "100%", "70%", "70%"]}>
                        ¿Quienes integran al Comité de Participación Ciudadana?
                    </Text>
                    
                    <Box width={["300px", "600px", "850px", "850px"]} overflow="scroll" display="flex" pt="20px">
                        
                        <Box maxWidth="200px" display="flex" flexDirection="column" backgroundColor="white" p="16px">
                            <Link href="/integrantes/anaterrazas">
                            <a>
                            <Box maxWidth="200px" maxHeight="200px"pb="16px" textAlign="center">
                                <Image width="200px" height="200px" src="/images/anaterrazas.svg" alt="Ana Terrazas" />
                            </Box>
                            <Box maxWidth="200px">
                                <Text fontFamily='cpc.gothamCondensed' color="black" fontSize="27px" 
                                fontWeight="300" textAlign="left" isTruncated>
                                    Ana Isabel Terrazas Cerros
                                </Text>
                            </Box>
                            <Box maxWidth="200px">
                                <Text fontFamily='cpc.gothamCondensedBook' color="black" fontSize="27px" 
                                fontWeight="300" textAlign="left" isTruncated>
                                    Presidenta del CPC
                                </Text>
                            </Box>
                            </a>
                            </Link>
                        </Box>
        
                        <Box maxWidth="200px" display="flex" flexDirection="column" backgroundColor="white" p="16px">
                            <Link href="/integrantes/lilianaochoa">
                            <a>
                            <Box maxWidth="200px" maxHeight="200px" pb="16px" textAlign="center">
                                <Image width="200px" height="200px" alt="Liliana Ochoa" src="/images/lilianaochoa.svg" />
                            </Box>
                            <Box maxWidth="200px">
                                <Text fontFamily='cpc.gothamCondensed' color="black" fontSize="27px" 
                                fontWeight="300" textAlign="left" isTruncated>
                                    Liliana Ochoa Terrazas
                                </Text>
                            </Box>
                            <Box maxWidth="200px">
                                <Text fontFamily='cpc.gothamCondensedBook' color="black" fontSize="27px" 
                                fontWeight="300" textAlign="left" isTruncated>
                                    Integrante del CPC
                                </Text>
                            </Box>
                            </a>
                            </Link>
                        </Box>
        
                        <Box maxWidth="200px" display="flex" flexDirection="column" backgroundColor="white" p="16px">
                            <Link href="/integrantes/renemoreno">
                            <a>
                            <Box maxWidth="200px" maxHeight="200px" pb="16px" textAlign="center">
                                <Image width="200px" height="200px" alt="René Moreno" src="/images/renemoreno.svg" />
                            </Box>
                            <Box maxWidth="200px">
                                <Text fontFamily='cpc.gothamCondensed' color="black" fontSize="27px" 
                                fontWeight="300" textAlign="left" isTruncated>
                                    René Moreno Medina
                                </Text>
                            </Box>
                            <Box maxWidth="200px">
                                <Text fontFamily='cpc.gothamCondensedBook' color="black" fontSize="27px" 
                                fontWeight="300" textAlign="left" isTruncated>
                                    Integrante del CPC
                                </Text>
                            </Box>
                            </a>
                            </Link>
                        </Box>
        
                        <Box maxWidth="200px" display="flex" flexDirection="column" backgroundColor="white" p="16px">
                            <Link href="/integrantes/miguelgomez">
                            <a>
                            <Box maxWidth="200px" maxHeight="200px" pb="16px" textAlign="center">
                                <Image width="200px" height="200px" alt="Miguel Gómez" src="/images/miguelgomez.svg" />
                            </Box>
                            <Box maxWidth="200px">
                                <Text fontFamily='cpc.gothamCondensed' color="black" fontSize="27px" 
                                fontWeight="300" textAlign="left" isTruncated>
                                    Miguel Salvador Gómez González
                                </Text>
                            </Box>
                            <Box maxWidth="200px">
                                <Text fontFamily='cpc.gothamCondensedBook' color="black" fontSize="27px" 
                                fontWeight="300" textAlign="left" isTruncated>
                                    Integrante del CPC
                                </Text>
                            </Box>
                            </a>
                            </Link>
                        </Box>
        
                        <Box maxWidth="200px" display="flex" flexDirection="column" backgroundColor="white" p="16px">
                            <Link href="/integrantes/carmenalvarez">
                            <a>
                            <Box maxWidth="200px" maxHeight="200px" pb="16px" textAlign="center">
                                <Image width="200px" height="200px" alt="Miguel Gómez" src="/images/carmenalvarez.svg" />
                            </Box>
                            <Box maxWidth="200px">
                                <Text fontFamily='cpc.gothamCondensed' color="black" fontSize="27px" 
                                fontWeight="300" textAlign="left" isTruncated>
                                    Carmen Lucila Álvarez González
                                </Text>
                            </Box>
                            <Box maxWidth="200px">
                                <Text fontFamily='cpc.gothamCondensedBook' color="black" fontSize="27px" 
                                fontWeight="300" textAlign="left" isTruncated>
                                    Integrante del CPC
                                </Text>
                            </Box>
                            </a>
                            </Link>
                        </Box>        
        
                </Box>
                   
                    </Flex>
                </Section> 

                {/* COMO HACEMOS POLITICA PUBLICA */}
                <Section bg="cpc.yellow" color="cpc.white">
                    <Text fontSize={["1em", "1.5em", "3em", "3em"]} fontFamily="cpc.gothamBold" textAlign="center" lineHeight="1.18em">
                       ¿Cómo hacemos política pública?
                    </Text>
                </Section> 

                {/* //FACES SECTION TWO */}
                 <Section bg="cpc.white" color="cpc.black">
                    <Flex direction={["column", "row", "row", "row"]} border={["0px", "2px", "2px", "2px"]} borderRadius="lg" borderColor="cpc.black" p="2em" width={["95%","90%", "600px", "800px"]} justify="center" alignItems="center">
                        <Image src="/images/liliana2.svg" alt="liliana" width={["7em", "7em", "8em", "8em"]} mx={2}   my={2}/>            
                        <Image src="/images/rene2.svg" alt="rene" width={["7em", "7em", "8em", "8em"]}  mx={2} my={2}/>            
                        <Image src="/images/miguel2.svg" alt="miguel" width={["7em", "7em", "8em", "8em"]}  mx={2} my={2}/>            
                        <Image src="/images/carmen2.svg" alt="carmen" width={["7em", "7em", "8em", "8em"]}  mx={2} my={2}/>            
                    </Flex>
                    <Text color="cpc.black" fontSize={["3em", "4em", "4em", "4em"]}> + </Text>
                    <Image src="/images/secretariaejecutiva.svg" alt="secretaria ejecutiva" width={["15em", "18em", "20em", "20em"]} my={5}/>            
                    <Flex direction="column" border="2px" borderRadius="lg" borderColor="cpc.black" p="2em"  width={["95%","90%", "600px", "800px"]} justify="center" alignItems="center">
                        <Text fontFamily="cpc.gothamCondensedBook" fontSize={["1.15em", "1.15em", "1.5em", "2em"]}> Las 4 personas que no presiden el Comité de Participación Ciudadana (integrantes) junto con la persona titular de la Secretaría Ejecutiva proponen proyectos de política pública, metodologías e indicadores a ser implementados a nivel estatal. </Text>
                    </Flex>

                    <Text color="cpc.black" fontSize={["3em", "4em", "4em", "4em"]}> = </Text>
                    <Flex direction="column" border="2px" borderRadius="lg" borderColor="cpc.black" p="2em"  width={["95%","90%", "600px", "800px"]} justify="center" alignItems="center">
                        <Text fontFamily="cpc.gothamCondensedBook" fontSize={["1.15em", "1.15em", "1.5em", "2em"]}> Este espacio de trabajo se conoce como: </Text>
                        <Image src="/images/comisionejecutiva.svg" alt="comision ejecutiva" width={["15em", "18em", "20em", "20em"]} my={5}/>            
                    </Flex>
                    <Text color="cpc.black" fontSize={["3em", "4em", "4em", "4em"]}> ↓ </Text>
                    
                    <Flex direction="column" border="2px" borderRadius="lg" borderColor="cpc.black" p="2em"  width={["95%","90%", "600px", "800px"]} justify="center" alignItems="center">
                        <Text fontFamily="cpc.gothamCondensedBook" fontSize={["1.15em", "1.15em", "1.5em", "2em"]}> El trabajo que realiza la Comisión Ejecutiva Anticorrupción es enviado a la persona que preside el Comité de Participación Ciudadana para que cabildee y defienda esos proyectos de política pública, metodologías e indicadores en el Comité Coordinador del Sistema Estatal Anticorrupción. </Text>
                        <Image src="/images/ana2.svg" alt="ana terrazas" width={["7em", "10em", "10em", "10em"]} my={5}/>            
                    </Flex>
                </Section>   
                
            </Content>
            <style jsx>{`
                .redlink {
                    color: ${colors.cpc.red};
                    cursor: pointer;
                    text-decoration: underline;
                }
                .redText {
                    color: ${colors.cpc.red};
                }
            `}</style>
        </Layout>
        </>
    )
}


                    
