// CUSTOM MADE COMPONENTS
import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content';
import Section from '../components/section'

import customtheme from '../customtheme.js'

import {Flex, Text, Image, List, ListItem} from '@chakra-ui/core';

export default function AboutPage() {

    const {colors} = customtheme

    return (
        <Layout title="Acerca de - CPC Anticorrupcion">
            <Header position="fixed"/>
            <Content>
                {/* Top SECTION */}
                <Section bg="cpc.red" color="cpc.white" 
                    splitBiBottom="true"
                    splitBiBottomColorOne={colors.cpc.red}
                    splitBiBottomColorTwo={colors.cpc.blueDark}
                >
                    <Text fontSize={["1em", "1.5em", "3em", "3em"]} fontFamily="cpc.gothamBold" textAlign="center" lineHeight="1.18em">
                        <b>es por eso que para combatir la <br/> corrupción, trabajamos en el</b>
                    </Text>
                </Section>  

                {/* Sistema Estatal SECTION */}
                <Section bg="cpc.blueDark" color="cpc.white" miniTriangleDown="true" miniTriangleColor={colors.cpc.blueDark}>
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
                <Section bg="cpc.white" color="cpc.black" desktopWidth="58%" miniTriangleDown="true" miniTriangleColor={colors.cpc.blueDark}>
                    <Flex direction="column" alignItems="center" textAlign="center">
                        <Text color="cpc.black" fontFamily="cpc.gothamCondensedLight" fontSize={["1.5em", "2em", "2em", "3em"]}><b>Está formado por</b></Text>
                        <Text width={["300px", "400px", "500px", "600px"]} border="2px" borderRadius="lg" px="1.5em" py="0.5em" fontFamily="cpc.spaceMonoRegular" fontSize={["1em", "1.4em", "1.7em", "2.5em"]} >
                           Los <b>67 municipios</b><br/> del estado <br/> de Chihuahua
                        </Text>
                        <Text color="cpc.black" fontSize={["1.5em", "2em", "2em", "4em"]} > + </Text>
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
                         <Text color="cpc.black" fontSize={["1.5em", "2em", "2em", "4em"]} > + </Text>
                        <Text width={["300px", "400px", "500px", "600px"]} border="2px" borderRadius="lg" px={["1em", "1em", "3em", "3em"]} py="2em" my="0.8em" fontFamily="cpc.spaceMonoItalic" borderColor="cpc.pink" fontSize={["1em", "1em", "1em", "1em"]} textAlign="left">
                            5 personas de la academia o sociedad civil, con experiencia en:transparencia, 
                            participación ciudadana y anticorrupción
                        </Text>
                    </Flex>
                </Section>
                {/* FUNCION DEL COMITE  */}
                <Section bg="cpc.red" color="cpc.white">
                    <Text fontSize={["1em", "1.5em", "3em", "3em"]} fontFamily="cpc.gothamBold" textAlign="center" lineHeight="1.18em">
                        <b>¿Cuál es la función del Comité de Participación Ciudadana?</b>
                    </Text>
                    <Image src="/images/cpc.svg" alt="Manitas" my="3em" width={["10em", "15em", "17em", "17em"]} />   
                    <Text width={["300px", "400px", "500px", "750px"]} color="cpc.black" border="2px" borderRadius="lg" px={["1em", "1em", "3em", "3em"]} py="2em" fontFamily="cpc.spaceMonoItalic" borderColor="cpc.white" fontSize={["1em", "1em", "1em", "1.25em"]} textAlign="left">
                        Integrado por:
                        <List styleType="disc">
                            <ListItem><b>No</b> metemos gente a la cárcel</ListItem>
                            <ListItem><b>No</b> llevamos expedientes de investigación </ListItem>
                            <ListItem><b>No</b> investigamos, substanciamos ni sancionamos </ListItem>
                        </List>
                    </Text>   
                     <Text width={["300px", "400px", "500px", "750px"]} color="cpc.black" border="2px" borderRadius="lg" px={["1em", "1em", "3em", "3em"]} py="2em" mt="2em" fontFamily="cpc.spaceMonoItalic" borderColor="cpc.white" fontSize={["1em", "1em", "1em", "1.25em"]} textAlign="left">
                        <List styleType="disc">
                            <ListItem my={5}>Proponer políticas anticorrupción, metodologías e 
                                indicadores de medición que permitan prevenir,
                                detectar y sancionar faltas administrativas graves y no
                                graves así como actos de corrupción.
                            </ListItem>
                            <ListItem my={5}>
                                Vigilar el funcionamiento del Sistema EstatalAnticorrupción.
                            </ListItem>
                            <ListItem my={5}>
                                Vincular a sociedad civil, academia y sector empresarial
                                a través de: participación y vigilancia ciudadana.
                            </ListItem>
                             <ListItem my={5}>
                               Proponer mecanismos para que la sociedad participe en
                                la prevención y denuncia de faltas administrativas y
                                hechos de corrupción.
                            </ListItem>
                             <ListItem my={5}>
                                Llevar registro voluntario de las OSC que deseen
                                colaborar de manera coordinada con el Comité de
                                Participación Ciudadana.
                            </ListItem>
                        </List>
                    </Text>                        
                </Section>  

                {/* FOURTH SECTION */}
                 <Section bg="cpc.white" color="cpc.red"  desktopWidth="100%">
                    <Text fontSize={["1.25em", "1.5em", "3em", "3em"]} fontFamily="cpc.gothamBold" textAlign="center" lineHeight="1.18em" width={["90%","90%", "100%", "50%" ]}>
                        <b>¿Quienes integran al Comité de Participación Ciudadana?</b>
                    </Text> 
                    <Flex mt={10} direction="column" color="cpc.black" alignItems="center">
                        <Flex  direction="column" alignItems="center" my={["1em", "0.5em", "0em", "0em"]}>
                            <Image src="/images/anaterrazas.svg" alt="ana terrazas" width={["15em", "15em", "18em", "18em"]} />            
                            <Flex direction="column"  alignItems="center" mt={[-10]}>
                                <Text fontSize={["2em","3em", "3em", "3em"]} fontFamily="cpc.gothamCondensed"><b>Ana Terrazas</b></Text>    
                                <Text fontFamily="cpc.gothamCondensedBook" mt={[-4]} fontSize={["2em"]}>Presidenta</Text> 
                                <Text fontFamily="cpc.gothamCondensedBook" mt={[-4]} fontSize={["2em"]}>1 Año</Text>   
                            </Flex>  
                        </Flex>     
                    </Flex>

                    <Flex direction={["column", "column", "row", "row"]} color="cpc.black" alignItems="center" justify="space-evenly" width="100%" mt={["0em", "0em", "-2em", "-8em"]}>
                        <Flex  direction="column" alignItems="center" my={["1em", "0.5em", "0em", "0em"]}>
                            <Image src="/images/lilianaochoa.svg" alt="ana terrazas" width={["15em", "15em", "18em", "18em"]} />            
                            <Flex direction="column"  alignItems="center" mt={[-5]}>
                                <Text fontSize={["2em","3em", "3em", "3em"]} fontFamily="cpc.gothamCondensed"><b>Liliana Ochoa</b></Text>    
                                <Text fontFamily="cpc.gothamCondensedBook" mt={[-4]} fontSize={["2em"]}>Integrante - 2 Años</Text> 
                            </Flex>  
                        </Flex>  
                         <Flex  direction="column" alignItems="center" my={["1em", "0.5em", "0em", "0em"]}>
                            <Image src="/images/renemoreno.svg" alt="rene moreno" width={["15em", "15em", "18em", "18em"]} />            
                            <Flex direction="column"  alignItems="center" mt={[-5]}>
                                <Text fontSize={["2em","3em", "3em", "3em"]} fontFamily="cpc.gothamCondensed"><b>René Moreno</b></Text>    
                                <Text fontFamily="cpc.gothamCondensedBook" mt={[-4]} fontSize={["2em"]}>Integrante - 3 Años</Text> 
                            </Flex>  
                        </Flex>    
                    </Flex>

                    <Flex mt={10} direction={["column", "column", "row", "row"]} color="cpc.black" alignItems="center" justify="center" width="100%" mt={["1em"]}>
                        <Flex  direction="column" alignItems="center" mx={[10]} my={["1em", "0.5em", "0em", "0em"]}>
                            <Image src="/images/miguelgomez.svg" alt="miguel gomez" width={["15em", "15em", "18em", "18em"]} />            
                            <Flex direction="column"  alignItems="center" mt={[-5]}>
                                <Text fontSize={["2em","3em", "3em", "3em"]} fontFamily="cpc.gothamCondensed"><b>Miguel Gómez</b></Text>    
                                <Text fontFamily="cpc.gothamCondensedBook" mt={[-4]} fontSize={["2em"]}>Integrante - 4 Años</Text> 
                            </Flex>  
                        </Flex>  
                        <Flex  direction="column" alignItems="center" mx={[10]} my={["1em", "0.5em", "0em", "0em"]}>
                            <Image src="/images/carmenalvarez.svg" alt="carmen alvarez" width={["15em", "15em", "18em", "18em"]} />            
                            <Flex direction="column"  alignItems="center" mt={[-5]}>
                                <Text fontSize={["2em","3em", "3em", "3em"]} fontFamily="cpc.gothamCondensed"><b>Carmen Álvarez</b></Text>    
                                <Text fontFamily="cpc.gothamCondensedBook" mt={[-4]} fontSize={["2em"]}>Integrante - 5 Años</Text> 
                            </Flex>  
                        </Flex>    
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
    )
}


                    