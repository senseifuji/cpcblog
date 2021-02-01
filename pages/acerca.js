// CUSTOM MADE COMPONENTS
import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content';
import Section from '../components/section'

import customtheme from '../customtheme.js'

import {Flex, Text, Image, List, ListItem, Box, PseudoBox} from '@chakra-ui/core';
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
                    <Text fontSize={["1.75em", "2em", "2em", "2em"]} fontFamily="cpc.gothamBold" textAlign="center" lineHeight={["1em", "1em", "1.18em", "1.18em"]}>
                        <b>¿Has buscado en Google imágenes de la palabra corrupción?</b>
                    </Text>
                    <Text fontFamily='cpc.gothamCondensedBook' fontSize={["1.5em", "1.4em", "1.7em", "1.7em"]} d="inline-flex" alignItems="center">
                        ¿Cuantas veces has visto este emoji 🤝 junto con este otro 💵?
                    </Text>
                    <Flex direction="column" alignItems="center">
                        <ManitasDineros manitasSize="146px"/>
                        <Text fontFamily='cpc.gothamCondensedBook' fontSize={["1.5em", "1.4em", "1.7em", "1.7em"]} lineHeight={["1em", "1em", "1.18em", "1.18em"]} mt="-1em">Creemos que las suficientes como para afirmar que</Text>
                    </Flex>
                    <Text my="0.5em" fontFamily="cpc.gothamMedium" fontSize={["1.75em", "2em", "2em", "2.5em"]} lineHeight={["1em", "1em", "1.18em", "1.18em"]} textAlign="center">
                        <b>Nos urge una mejor <br/>definición de corrupción</b>
                    </Text>
                </Section> 
                {/* CARRITO-CAMINO-MONOVACUNAS SECTION */}
                <Section bg="cpc.yellowLight" color="cpc.black">
                   <Flex justify="space-evenly" direction={["column", 'column', 'column', 'row']}>
                        <Flex alignItems="center" direction={["column", 'column', 'column', 'row']}  mx={4}>
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
                        <Flex width={["100%", "100%", "%", "46%" ]}>
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
                 {/* Definicion de Corrupcion section*/}
                <Section bg="cpc.white" color="cpc.black" desktopWidth="58%">
                    <Flex direction="column" alignItems="center" textAlign="center">
                        <Text color="cpc.red" fontFamily="cpc.gothamMedium" fontSize={["1.5em", "2em", "2em", "2em"]}><b>Nuestra definición de corrupción*</b></Text>
                        <Text my="0.8em" fontFamily="cpc.gothamCondensedBook" fontSize={["1em", "1.4em", "1.7em", "1.7em"]} >Es un problema de <b>captura</b> que se traduce en la incapacidad del Estado para 
                            controlar el <b>particularismo</b>. Se trata de una <b>forma de organización social</b> que 
                            se caracteriza por la distribución de bienes sobre una base no universalista que 
                            <b> refleja el acceso y distribución restringida al poder.</b>
                        </Text>
                        <Text fontFamily="cpc.gothamCondensedBook" fontSize={["1em", "1.2em", "1.1em", "1.2em"]}>
                            *Basado en el trabajo de la 
                            <Link href="http://rendiciondecuentas.org.mx/wp-content/uploads/2018/06/PNA-AccountWordPressEduHdez.pdf">
                                <a className="redlink"> Red por la Rendición de Cuentas.</a>
                            </Link>
                        </Text>
                    </Flex>
                </Section>
                {/* Second top SECTION */}
                <Section bg="cpc.red" color="cpc.white" >
                    <Text fontSize={["1em", "1.5em", "3em", "3em"]} fontFamily="cpc.gothamBold" textAlign="center" lineHeight="1.18em">
                        <b>es por eso que para combatir la <br/> corrupción, trabajamos en el</b>
                    </Text>
                </Section>  

                {/* Sistema Estatal SECTION */}
                <Section bg="cpc.blueDark" color="cpc.white">
                   <Flex justify="space-evenly" direction={["column", 'column', 'row', 'row']}>
                        <Flex direction="column" alignItems="center" width={["100%", "100%", "70%", "60%" ]}>
                            <Image src="/images/sistemaestatal.svg" alt="Manitas" width={["15em", "15em", "20em", "20em"]} />                            
                            <Text my={4} lineHeight="1.1em" fontFamily="cpc.spaceMonoBold" fontSize={["1em", "1.2em", "1.5em", "1.5em"]} textAlign={["center", "center", "center", "left"]}>
                                Ente creado para coordinar acciones
                                interinstitucionales orientadas a:
                                combatir, prevenir, disuadir, sancionar
                                y reducir <span className="redText">los niveles de corrupción</span>
                                 &nbsp;en el Estado.
                            </Text>
                        </Flex>
                   </Flex>
                </Section>    
                {/* Definicion de Corrupcion section*/}
                <Section bg="cpc.white" color="cpc.black" desktopWidth="58%">
                    <Flex direction="column" alignItems="center" textAlign="center">
                        <Text color="cpc.black" fontFamily="cpc.gothamCondensedLight" fontSize={["1.5em", "2em", "2em", "3em"]}><b>Está formado por</b></Text>
                        <Text width={["300px", "400px", "500px", "600px"]} border="2px" borderRadius="lg" px="1.5em" py="0.5em" fontFamily="cpc.spaceMonoRegular" fontSize={["1em", "1.4em", "1.7em", "2.5em"]} >
                           Los <b>67 municipios</b><br/> del estado <br/> de Chihuahua
                        </Text>
                        <Text color="cpc.black" fontSize={["3em", "4em", "4em", "4em"]} > + </Text>
                        <Image src="/images/comitecoordinador.svg" alt="comite coordinador" width={["15em", "18em", "20em", "20em"]} my={5}/>            
                        <Text width={["300px", "400px", "500px", "600px"]} border="2px" borderRadius="lg" px={["1em", "1em", "3em", "3em"]} py="2em" fontFamily="cpc.spaceMonoItalic" borderColor="cpc.pink" fontSize={["1em", "1em", "1em", "1em"]} textAlign="left">
                            Integrado por:
                            <List styleType="disc">
                                <ListItem>La Secretaría de la Función Pública</ListItem>
                                <ListItem>La Auditoría Superior del Estado </ListItem>
                                <ListItem>El Tribunal de Justicia Administrativa </ListItem>
                                <ListItem>La Fiscalía Especializada Anticorrupción</ListItem>
                                <ListItem>El Consejo de la Judicatura Estatal </ListItem>
                                <ListItem>El ICHITAIP</ListItem>
                                <ListItem>y presidido por el Comité de Participación Ciudadana</ListItem>
                            </List>
                        </Text>
                    </Flex>
                </Section>
                <Section bg="cpc.white" color="cpc.black" desktopWidth="58%">
                    <Text color="cpc.black" fontSize={["3em", "4em", "4em", "4em"]} mt="-1em"> + </Text>
                    <Image src="/images/comiteparticipacion.svg" alt="comite participacion" width={["15em", "18em", "20em", "20em"]} my={5}/>            
                    <Text width={["300px", "400px", "500px", "600px"]} border="2px" borderRadius="lg" px={["1em", "1em", "3em", "3em"]} py="2em" my="0.8em" fontFamily="cpc.spaceMonoItalic" borderColor="cpc.pink" fontSize={["1em", "1em", "1em", "1em"]} textAlign="left">
                        5 personas de la academia o sociedad civil, con experiencia en:transparencia, 
                        participación ciudadana y anticorrupción
                    </Text>
                </Section>

                {/* FUNCION DEL COMITE  */}
                <Section bg="cpc.red" color="cpc.white">
                    <Text fontSize={["1em", "1.5em", "3em", "3em"]} fontFamily="cpc.gothamBold" textAlign="center" lineHeight="1.18em">
                        <b>¿Cuál es la función del Comité de Participación Ciudadana?</b>
                    </Text>
                    <Image src="/images/cpc.svg" alt="Manitas" my="3em" width={["10em", "15em", "17em", "17em"]} />   
                    <Text fontFamily="cpc.gothamCondensed" fontSize={["2.5em", "2em", "2em", "3.5em"]} >
                        ¿Qué <b>no</b> hacemos?
                    </Text>
                    <Text width={["90%", "80%", "500px", "750px"]} color="cpc.black" border="2px" borderRadius="lg" px={["1.25em", "1em", "2em", "2.5em"]} py="2em" fontFamily="cpc.gothamCondensedBook" borderColor="cpc.white" fontSize={["1.15em", "1.15em", "1.5em", "2em"]} textAlign="left">
                        <List styleType="disc">
                            <ListItem><b>No</b> metemos gente a la cárcel</ListItem>
                            <ListItem><b>No</b> llevamos expedientes de investigación </ListItem>
                            <ListItem><b>No</b> investigamos, substanciamos ni sancionamos </ListItem>
                        </List>
                    </Text>   
                </Section>  

                <Section bg="cpc.red" color="cpc.white">
                    <Text fontFamily="cpc.gothamCondensed" fontSize={["2.5em", "2em", "2em", "3.5em"]} >
                        ¿Qué <b>sí</b> hacemos?
                    </Text>
                    <Text width={["90%", "80%", "500px", "750px"]} color="cpc.black" border="2px" borderRadius="lg" px={["1.25em", "1em", "2em", "2.5em"]} py="1em" fontFamily="cpc.gothamCondensedBook" borderColor="cpc.white" fontSize={["1.5em", "1.15em", "1.5em", "2em"]} textAlign="left">
                        <List styleType="disc">
                            <ListItem my={5}>Proponer políticas anticorrupción, metodologías e indicadores de medición que permitan prevenir, detectar y sancionar faltas administrativas graves y no graves así como actos de corrupción.</ListItem>
                            <ListItem my={5}>Vigilar el funcionamiento del Sistema Estatal Anticorrupción.</ListItem>
                            <ListItem my={5}>Vincular a sociedad civil, academia y sector empresarial a través de: participación y vigilancia ciudadana. </ListItem>
                            <ListItem my={5}>Proponer mecanismos para que la sociedad participe en la prevención y denuncia de faltas administrativas y hechos de corrupción.</ListItem>
                            <ListItem my={5}>Llevar registro voluntario de las OSC que deseen colaborar de manera coordinada con el Comité de Participación Ciudadana.</ListItem>
                        </List>
                    </Text>   
                </Section>  

                {/* FOURTH SECTION FACES CIRCLES*/}
                 <Section bg="cpc.white" color="cpc.red"  desktopWidth="100%">
                    <Text fontSize={["1.25em", "1.5em", "3em", "3em"]} fontFamily="cpc.gothamBold" textAlign="center" lineHeight="1.18em" width={["90%","90%", "100%", "50%" ]}>
                        <b>¿Quienes integran al Comité de Participación Ciudadana?</b>
                    </Text> 
                    <Flex mt={10} direction="column" color="cpc.black" alignItems="center">
                        <Flex  direction="column" alignItems="center" my={["1em", "0.5em", "0em", "0em"]} >
                            <Link href="/integrantes/anaterrazas">
                                <a>
                                    <PseudoBox _hover={{filter: "drop-shadow(2px 4px 6px black)"}}>
                                        <Image src="/images/anaterrazas.svg" alt="ana terrazas" width={["15em", "15em", "18em", "18em"]} />            
                                    </PseudoBox>
                                    <Flex direction="column"  alignItems="center" mt={[-10]}>
                                        <Text fontSize={["2em","3em", "3em", "3em"]} fontFamily="cpc.gothamCondensed"><b>Ana Terrazas</b></Text>    
                                        <Text fontFamily="cpc.gothamCondensedBook" mt={[-4]} fontSize={["2em"]}>Presidenta</Text> 
                                        <Text fontFamily="cpc.gothamCondensedBook" mt={[-4]} fontSize={["2em"]}>1 Año</Text>   
                                    </Flex>  
                                </a>
                            </Link>
                        </Flex>     
                    </Flex>

                    <Flex direction={["column", "column", "row", "row"]} color="cpc.black" alignItems="center" justify="space-evenly" width="100%" mt={["0em", "0em", "-2em", "-8em"]}>
                        <Flex  direction="column" alignItems="center" my={["1em", "0.5em", "0em", "0em"]}>
                            <Link href="/integrantes/lilianaochoa">
                                <a>
                                    <PseudoBox _hover={{filter: "drop-shadow(2px 4px 6px black)"}}>
                                        <Image src="/images/lilianaochoa.svg" alt="ana terrazas" width={["15em", "15em", "18em", "18em"]} />             
                                    </PseudoBox>
                                    <Flex direction="column"  alignItems="center" mt={[-5]}>
                                        <Text fontSize={["2em","3em", "3em", "3em"]} fontFamily="cpc.gothamCondensed"><b>Liliana Ochoa</b></Text>    
                                        <Text fontFamily="cpc.gothamCondensedBook" mt={[-4]} fontSize={["2em"]}>Integrante - 2 Años</Text> 
                                    </Flex>  
                                </a>
                            </Link>

                        </Flex>  
                         <Flex  direction="column" alignItems="center" my={["1em", "0.5em", "0em", "0em"]}>
                             <Link href="/integrantes/renemoreno">
                                <a>
                                    <PseudoBox _hover={{filter: "drop-shadow(2px 4px 6px black)"}}>
                                        <Image src="/images/renemoreno.svg" alt="rene moreno" width={["15em", "15em", "18em", "18em"]} />            
                                    </PseudoBox>
                                    <Flex direction="column"  alignItems="center" mt={[-5]}>
                                        <Text fontSize={["2em","3em", "3em", "3em"]} fontFamily="cpc.gothamCondensed"><b>René Moreno</b></Text>    
                                        <Text fontFamily="cpc.gothamCondensedBook" mt={[-4]} fontSize={["2em"]}>Integrante - 3 Años</Text> 
                                    </Flex>  
                                </a>
                            </Link>
                        </Flex>    
                    </Flex>

                    <Flex mt={10} direction={["column", "column", "row", "row"]} color="cpc.black" alignItems="center" justify="center" width="100%" mt={["1em"]}>
                        <Flex  direction="column" alignItems="center" mx={[10]} my={["1em", "0.5em", "0em", "0em"]}>
                            <Link href="/integrantes/miguelgomez">
                                <a>
                                    <PseudoBox _hover={{filter: "drop-shadow(2px 4px 6px black)"}}>
                                        <Image src="/images/miguelgomez.svg" alt="miguel gomez" width={["15em", "15em", "18em", "18em"]} />            
                                    </PseudoBox>
                                    <Flex direction="column"  alignItems="center" mt={[-5]}>
                                        <Text fontSize={["2em","3em", "3em", "3em"]} fontFamily="cpc.gothamCondensed"><b>Miguel Gómez</b></Text>    
                                        <Text fontFamily="cpc.gothamCondensedBook" mt={[-4]} fontSize={["2em"]}>Integrante - 4 Años</Text> 
                                    </Flex>  
                                </a>
                            </Link>
                        </Flex>  
                        <Flex  direction="column" alignItems="center" mx={[10]} my={["1em", "0.5em", "0em", "0em"]}>
                            <Link href="/integrantes/carmenalvarez">
                                <a>
                                    <PseudoBox _hover={{filter: "drop-shadow(2px 4px 6px black)"}}>
                                        <Image src="/images/carmenalvarez.svg" alt="carmen alvarez" width={["15em", "15em", "18em", "18em"]} />            
                                    </PseudoBox>
                                    <Flex direction="column"  alignItems="center" mt={[-5]}>
                                        <Text fontSize={["2em","3em", "3em", "3em"]} fontFamily="cpc.gothamCondensed"><b>Carmen Álvarez</b></Text>    
                                        <Text fontFamily="cpc.gothamCondensedBook" mt={[-4]} fontSize={["2em"]}>Integrante - 5 Años</Text> 
                                    </Flex>  
                                </a>
                            </Link>
                        </Flex>    
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


                    
