// CUSTOM MADE COMPONENTS
import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content';
import Section from '../components/section'
import IntegrantCard from '../components/IntegrantCard';

import customtheme from '../customtheme.js'

import {Flex, Text, Image, List, ListItem, Box} from '@chakra-ui/react';
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

    return <>
        {/* SEO OF ABOUT PAGE */}        
     <CpcSeo 
         title="Acerca del CPC - Comité de Participación Ciudadana de Chihuahua"
        description="Conoce lo que hacemos para combatir la corrupción en el Comité de Participación Ciudadana de Chihuahua (CPC)."
        url={path}
        imageUrl={process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_URL}
     /> 
    <Layout>
        <Header position="fixed"/>
        <Content>

            {/* Introducción al tema SECTION*/}
            <Section bg="cpc.red" color="cpc.white">
<Text fontSize={["1.75em", "2em", "2em", "2em"]} fontFamily="cpc.gothamBold" 
fontWeight="300" textAlign="center" lineHeight={["1em", "1em", "1.18em", "1.18em"]} 
letterSpacing={["-.05em", "-.05em", "0", "0"]} width={["100%", "90%", "80%", "60%"]}>
    ¿Has buscado en Google imágenes de la palabra corrupción?
</Text>
<Text fontFamily='cpc.gothamCondensedBook' fontSize={["1.5em", "1.5em", "1.7em", "1.7em"]} 
fontWeight="300" textAlign="center" d="inline-flex" alignItems="center" 
mt={["1em", "0.75em", "0em", "0em"]}>
    ¿Cuantas veces has visto este emoji 🤝 junto con este otro 💵?
</Text>
<Flex direction="column" alignItems="center">
    <ManitasDineros manitasSize="146px"/>
    <Text fontFamily='cpc.gothamCondensedBook' 
    fontSize={["1.5em", "1.5em", "1.7em", "1.7em"]} 
    fontWeight="300" textAlign="center" 
    lineHeight={["1em", "1em", "1.18em", "1.18em"]} mt="-1em">
        Creemos que las suficientes como para afirmar que
    </Text>
</Flex>
<Text my="0.5em" fontFamily="cpc.gothamBold" 
fontSize={["1.75em", "1.75em", "2em", "2em"]} 
fontWeight="300" lineHeight={["1em", "1em", "1.18em", "1.18em"]} 
textAlign="center" letterSpacing={["-.05em", "0", "0", "0"]} 
width={["100%", "90%", "80%", "60%"]}>
    Nos urge una mejor definición de corrupción
</Text>
</Section>
            {/* Problemas de Corrupción SECTION */}
            <Section bg="cpc.yellowLight" color="cpc.black">
               <Flex justify="space-evenly" direction={["column", 'column', 'column', 'row']}>
                    <Flex justify="space-evenly" width={["100%", '100%', '100%', '120px']} 
                    alignItems="center" alignSelf="center" 
                    direction={["column", 'row', 'row', 'column']}  mx={4}>
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
                    <Flex width={["100%", "100%", "600px", "420px" ]}>
                        <Text my={4} fontFamily="cpc.gothamCondensedBook" 
                        fontSize={["1.3em", "1.3em", "1.4em", "1.4em"]} 
                        textAlign={["left", "left", "left", "left"]} 
                        mt={["1em", "1em", "1em", "0"]} 
                        pl={["1em", "1em", "0", "1.5em"]} pr={[".5em", "0.5em", "0", "0"]} 
                        lineHeight={["1.2em", "1.2em", "1.2em", "1.2em"]}>
                            Agua destilada disfrazada de medicinas para el cáncer; carreteras que 
                            se abren en dos por tener materiales de segunda; 
                            personas arrolladas por no tener la seguridad mínima en eventos deportivos; 
                            niñas y niños enfermos por habitar en viviendas populares construidas en una 
                            zona contaminada; edificios colapsados por no cumplir con las regulaciones 
                            de construcción antisismos. 
                            <strong> La corrupción mata</strong> y muchas veces va más allá del soborno, 
                            por eso desde el Comité de Participación Ciudadana de Chihuahua 
                            creemos que la forma de definir la corrupción debe de ser mucho más amplia, 
                            porque <strong> lo que no se define no se puede combatir</strong>.
                        </Text>
                    </Flex>
               </Flex>
            </Section> 

             {/* Definicion de Corrupcion section*/}
            <Section bg="cpc.white" color="cpc.black">
                <Flex direction="column" alignItems="center" textAlign="center" py="1em">
                    <Text color="cpc.red" fontSize={["1.75em", "1.75em", "2em", "2em"]} 
                    fontFamily="cpc.gothamBold" fontWeight="300" textAlign="center" 
                    lineHeight={["1em", "1em", "1.18em", "1.18em"]} 
                    letterSpacing={["-.05em", "0", "0", "0"]}
                    width={["100%", "100%", "80%", "75%"]}>
                        Nuestra definición de corrupción*
                    </Text>
                    <Text my="0.8em" fontFamily="cpc.gothamCondensedBook" 
                    fontSize={["1.3em", "1.3em", "1.4em", "1.4em"]} textAlign={["left", "left", "left", "left"]} 
                    mt={["1em", "1em", "1em", "1em"]} pl={["1em", "1em", "0", "0"]} 
                    pr={[".5em", "0.5em", "0", "0"]} lineHeight={["1.2em", "1.2em", "1.2em", "1.2em"]} 
                    width={["100%", "100%", "600px", "600px"]}>
                        Es un problema de <b>captura</b> que se traduce en la incapacidad del Estado para 
                        controlar el <b>particularismo</b>. Se trata de una <b>forma de organización 
                        social</b> que se caracteriza por la distribución de bienes sobre 
                        una base no universalista que <b> refleja el acceso y distribución 
                        restringida al poder.</b>
                    </Text>
                    <Text fontFamily="cpc.gothamCondensedBook" fontSize={["1.1em", "1.1em", "1.2em", "1.2em"]} 
                    textAlign="left"
                    pl={["1em", "1em", "0", "0"]} 
                    pr={[".5em", "0.5em", "0", "0"]}
                    width={["100%", "100%", "600px", "600px"]}>
                        *Basado en el trabajo de la
                        <Link
                            href="http://rendiciondecuentas.org.mx/wp-content/uploads/2018/06/PNA-AccountWordPressEduHdez.pdf"
                            legacyBehavior>
                            <a className="redlink"> 
                                {" "}Red por la Rendición de Cuentas.
                            </a>
                        </Link>
                    </Text>
                </Flex>
            </Section>

            {/* Es por eso SECTION */}
            <Section bg="cpc.red" color="cpc.white">
                <Text fontSize={["1.75em", "1.75em", "2em", "2em"]} fontFamily="cpc.gothamBold" 
                fontWeight="300" textAlign="center" lineHeight={["1em", "1em", "1.18em", "1.18em"]} 
                letterSpacing={["-.05em", "0", "0", "0"]} width={["100%", "80%", "80%", "75%"]}>
                    es por eso que para combatir la corrupción, trabajamos en el
                </Text>
            </Section>  

            {/* Sistema Estatal SECTION */}
            <Section bg="cpc.blueDark" color="cpc.white">
               <Flex justify="space-evenly" direction={["column", 'column', 'row', 'row']}>
                    <Flex direction="column" alignItems="center" width={["100%", "100%", "70%", "60%" ]}>
                        <Image src="/images/sistemaestatal.svg" alt="SEA" 
                        height={["6em", "6em", "7em", "7em"]} mb={["0", "0", "1.2em", "1.2em"]} />                            
                        <Text lineHeight="1.1em" fontFamily="cpc.spaceMonoRegular" 
                        fontSize={["1em", "1em", "1em", "1em"]} fontWeight="300" 
                        textAlign={["left", "center", "left", "left"]} my={["1rem", "1em", "0", "0"]} 
                        pl={["1em", "0", "0", "0"]} pr={[".5em", "0", "0", "0"]} 
                        width={["100%", "80%", "70%", "75%"]}>
                            Ente creado para coordinar acciones
                            interinstitucionales orientadas a:
                            combatir, prevenir, disuadir, sancionar
                            y reducir
                            <Text fontFamily="cpc.spaceMonoBold" d="inline" 
                            color="cpc.redAnti">
                                {" "}los niveles de corrupción  
                            </Text>
                            {" "}en el Estado.
                        </Text>
                    </Flex>
               </Flex>
            </Section>    

            {/* Partes del SEA section*/}
            <Section bg="cpc.white" color="cpc.black" desktopWidth="58%">
                <Flex direction="column" alignItems="center" textAlign="center">
                    <Text color="cpc.black" pb={[".4em", "1em", "1em", "1em"]} 
                    fontFamily="cpc.gothamCondensedBook" textWeight="300" 
                    fontSize={["1.5em", "2em", "1.7em", "1.7em"]}>
                        Está formado por
                    </Text>
                    
                    <Text width={["90%", "400px", "400px", "400px"]} border="2px" 
                    borderRadius="lg" px={["1.5em", "1em", "1.2em", "1.2em"]} 
                    py={["0.5em", "1em", ".5em", ".5em"]} 
                    fontFamily="cpc.spaceMonoRegular" fontSize={["1em", "1em", "1em", "1em"]} 
                    lineHeight={["1.2em", "1.2em", "1.2em", "1.2em"]}>
                       Los <b>67 municipios</b> del estado de Chihuahua
                    </Text>
                    
                    <Text color="cpc.black" mt={["-.1em", "0", "0", "0"]} 
                    mb={["-.4em", "0", "0", "0"]} fontSize={["3em", "4em", "4em", "4em"]} > 
                        + 
                    </Text>
                    
                    <Image src="/images/comitecoordinador.svg" alt="Comité Coordinador" 
                    height={["6em", "6em", "7em", "7em"]} mt={["1em", "0", "0", "0"]} 
                    mb={[".6em", "0.6em", "0.6em", "0.6em"]} />            
                    <Text width={["90%", "400px", "400px", "400px"]} border="2px" 
                    borderRadius="lg" px={["1.5em", "1em", "1.2em", "1.2em"]} 
                    py={["0.5em", "1em", ".5em", ".5em"]} fontFamily="cpc.spaceMonoRegular" 
                    borderColor="cpc.redCoor" fontSize={["1em", "1em", "1em", "1em"]} 
                    textAlign="left" lineHeight={["1.2em", "1.2em", "1.2em", "1.2em"]}>
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
                <Text color="cpc.black" fontSize={["3em", "4em", "4em", "4em"]} 
                mt={["-1.5em", "-1em", "-.8em", "-.8em"]}> 
                    + 
                </Text>
                
                <Image src="/images/comiteparticipacion.svg" 
                alt="Comité de Participación Ciudadana" 
                width={["15em", "18em", "20em", "20em"]} 
                mt={["0", "1.25em", "1.25em", "1.25em"]} 
                mb={["0", "0em", "0em", "0em"]}/>            
                <Text width={["90%", "400px", "400px", "400px"]} border="2px" 
                borderRadius="lg" px={["1.5em", "1em", "1.2em", "1.2em"]} 
                py={["0.5em", "1em", ".5em", ".5em"]} my="0.8em" 
                fontFamily="cpc.spaceMonoRegular" borderColor="cpc.red" 
                fontSize={["1em", "1em", "1em", "1em"]} 
                textAlign={["center", "left", "center", "center"]} 
                lineHeight={["1.2em", "1.2em", "1.2em", "1.2em"]}>
                    5 personas de la academia o sociedad civil, con experiencia en: transparencia, 
                    participación ciudadana y anticorrupción
                </Text>
            </Section>

            {/* FUNCION DEL COMITE  */}
            <Section bg="cpc.red" color="cpc.white">
                <Text fontSize={["1.75em", "1.75em", "2em", "2em"]} 
                fontFamily="cpc.gothamBold" fontWeight="300" 
                textAlign="center" lineHeight={["1em", "1em", "1.18em", "1.18em"]} 
                letterSpacing={["-.05em", "0", "0", "0"]} 
                width={["100%", "100%", "80%", "75%"]}>
                    ¿Cuál es la función del Comité de Participación Ciudadana?
                </Text>
                <Image src="/images/cpc.svg" alt="CPC logo" 
                my="3em" width={["10em", "15em", "17em", "17em"]} 
                mt={["1em", "1em", "1em", "1em"]}/>   
                
                <Text fontFamily="cpc.gothamCondensed" 
                fontSize={["1.5em", "1.5em", "1.7em", "1.7em"]} 
                fontWeight="300">
                    ¿Qué <b>no</b> hacemos?
                </Text>
                <Text width={["90%", "400px", "400px", "400px"]} color="cpc.white" border="2px" 
                borderRadius="lg" px={[".7em", "1em", "1em", "1em"]} 
                py={["0.5em", "1em", "1em", "1em"]} fontFamily="cpc.gothamCondensedBook" 
                borderColor="cpc.white" fontSize={["1.3em", "1.3em", "1.4em", "1.4em"]} 
                textAlign="left" lineHeight={["1.2em", "1.2em", "1.2em", "1.2em"]}>
                    <List styleType="square">
                        <ListItem><b>No</b> metemos gente a la cárcel</ListItem>
                        <ListItem><b>No</b> llevamos expedientes de investigación </ListItem>
                        <ListItem><b>No</b> investigamos, substanciamos ni sancionamos</ListItem>
                    </List>
                </Text>   
            </Section>  

            <Section bg="cpc.red" color="cpc.white">
                <Text fontFamily="cpc.gothamCondensed" 
                fontSize={["1.5em", "1.5em", "1.7em", "1.7em"]} 
                fontWeight="300" mt="-1em">
                    ¿Qué <b>sí</b> hacemos?
                </Text>
                <Text width={["90%", "400px", "400px", "400px"]} 
                color="cpc.white" border="2px" borderRadius="lg" 
                mb="1.5em" px={[".7em", "1em", "1em", "1em"]} 
                py={["0.5em", "1em", "1em", "1em"]} fontFamily="cpc.gothamCondensedBook" 
                borderColor="cpc.white" fontSize={["1.3em", "1.3em", "1.4em", "1.4em"]} 
                textAlign="left" lineHeight={["1.2em", "1.2em", "1.2em", "1.2em"]}>
                    <List styleType="square">
                        <ListItem>Proponemos políticas públicas que permitan 
                        prevenir, detectar y sancionar actos de corrupción</ListItem>
                        <ListItem>Vigilamos el funcionamiento del 
                        Sistema Estatal Anticorrupción</ListItem>
                        <ListItem>Vinculamos a sociedad civil, academia, 
                        profesionistas y empresas a través de la Red Anticorrupción</ListItem>
                        <ListItem>Acompañamos a denunciantes de actos de corrupción</ListItem>
                    </List>
                </Text>   
            </Section>  

            {/* Integrantes del CPC*/}
            <Section bg="cpc.white" color="cpc.red" desktopWidth="58%">
<Text fontSize={["1.75em", "2em", "2em", "2em"]} fontFamily="cpc.gothamBold" fontWeight="300" textAlign="center" mb={6}>
    ¿Quiénes integran el Comité de Participación Ciudadana?
</Text>
<Flex direction={["column", "row"]} justify="center" alignItems="center" width="100%" flexWrap="wrap">
    <IntegrantCard
        name="Carmen Lucila Álvarez González"
        role="Presidenta del CPC"
        imageUrl="/images/carmenalvarezfr2.png"
        profileUrl="/integrantes/carmenalvarez"
        imageStyle={{ borderRadius: '50%', width: '200px', height: '200px', objectFit: 'cover' }}
    />
    <IntegrantCard
        name="Jesús Abdala Abbud Yepiz"
        role="Integrante del CPC"
        imageUrl="/images/jesusabuddfr2.png"
        profileUrl="/integrantes/jesusabbud"
        imageStyle={{ borderRadius: '50%', width: '200px', height: '200px', objectFit: 'cover' }}
    />
    <IntegrantCard
        name="Héctor José Villanueva Escamilla"
        role="Integrante del CPC"
        imageUrl="/images/josevillanuevafr2.png"
        profileUrl="/integrantes/hectorvillanueva"
        imageStyle={{ borderRadius: '50%', width: '200px', height: '200px', objectFit: 'cover' }}
    />
        <IntegrantCard
        name="Gisela Analí Rodríguez Burciaga"
        role="Integrante del CPC"
        imageUrl="/images/giselarodriguezfr2.png"
        profileUrl="/integrantes/giselarodriguez"
        imageStyle={{ borderRadius: '50%', width: '200px', height: '200px', objectFit: 'cover' }}
    />
                </Flex>
                <Text fontSize={["1.75em", "2em", "2em", "2em"]} fontFamily="cpc.gothamBold" fontWeight="300" textAlign="center" mt={10} mb={6}>
                    Exintegrantes del CPC
                </Text>
                <Flex direction={["column", "row"]} justify="center" alignItems="center" width="100%" flexWrap="wrap" spacing={4}>
                    <Box mb={4} mx={2}>
                        <IntegrantCard
                            name="Miguel Salvador Gómez"
                            imageUrl="/images/salvadordominguezfr2.png"
                            profileUrl="/integrantes/miguelgomez"
                            isFormer={true}
                        />
                    </Box>
                    <Box mb={4} mx={2}>
                        <IntegrantCard
                            name="René Moreno Medina"
                            imageUrl="/images/renemorenofr2.png"
                            profileUrl="/integrantes/renemoreno"
                            isFormer={true}
                        />
                    </Box>
                    <Box mb={4} mx={2}>
                        <IntegrantCard
                            name="Liliana Ochoa Ortega"
                            imageUrl="/images/lilianaochafr2.png"
                            profileUrl="/integrantes/lilianaochoa"
                            isFormer={true}
                        />
                    </Box>
                    <Box mb={4} mx={2}>
                        <IntegrantCard
                            name="Ana Isabel Terrazas"
                            imageUrl="/images/isabelterrazasfr2.png"
                            profileUrl="/integrantes/anaterrazas"
                            isFormer={true}
                        />
                    </Box>
                    <Box mb={4} mx={2}>
                        <IntegrantCard
                            name="Norma Yadira Lozano"
                            imageUrl="/images/yadiralozanofr2.png"
                            profileUrl="/integrantes/normalozano"
                            isFormer={true}
                        />
                    </Box>
                    <Box mb={4} mx={2}>
                        <IntegrantCard
                            name="Antonio Enríquez Tamez"
                            imageUrl="/images/enriquetamezfr2.png"
                            profileUrl="/integrantes/joseenriquez"
                            isFormer={true}
                        />
                    </Box>
                </Flex>
            </Section>

            {/* COMO HACEMOS POLITICA PUBLICA */}
            <Section bg="cpc.yellow" color="cpc.white">
                <Text fontSize={["1.75em", "2em", "2em", "2em"]} fontFamily="cpc.gothamBold" 
                fontWeight="300" textAlign="center" lineHeight={["1em", "1em", "1.18em", "1.18em"]} 
                letterSpacing={["-.05em", "0", "0", "0"]} width={["100%", "100%", "80%", "70%"]}>
                   ¿Cómo hacemos política pública en el Comité de Participación Ciudadana?
                </Text>
            </Section>

            {/* //Narrativa de Hechura de Políticas SECTION*/}
             <Section bg="cpc.white" color="cpc.black">
    
    
                <Flex direction={["column", "row", "row", "row"]} 
                width={["90%","500px", "600px", "600px"]} justify="center" alignItems="center">
                    <Text color="cpc.black" width={["100%", "400px", "400px", "400px"]} 
                    pl={[".7em", "0", "0", "0"]} 
                    pr={[".7em", "1em", "1em", "1em"]} 
                    pt={["-1em", "1em", "1em", "1em"]}
                    pb={["0.5em", "1em", "1em", "1em"]} fontFamily="cpc.gothamCondensedBook" 
                    fontSize={["1.3em", "1.3em", "1.4em", "1.4em"]} 
                    textAlign="left" lineHeight={["1.2em", "1.2em", "1.2em", "1.2em"]}>
                        Empresas 🏢 profesionistas 👷 organizaciones de la sociedad
                        civil 📢 y academia 👩‍🏫 tienen <b>muy buenas ideas para combatir la
                        corrupción</b>. A estos esfuerzos los conjuntamos 
                        en un espacio de trabajo denominado  
                    </Text>
                    <Image src="/images/redanticorrupcion.svg" alt="Red Anticorrupción" 
                    height={["6em", "6em", "7em", "7em"]} 
                    mt={["0", 5, 5, 5]}
                    mb={5}/>
                </Flex>

                <Flex direction={["column", "row", "row", "row"]} 
                width={["90%","500px", "600px", "600px"]} justify="center" alignItems="center">
                    <Image src="/images/4CPCs.svg" alt="4 integrantes del CPC" 
                    height={["6em", "6em", "7em", "7em"]} mt={["30px",5, 5, 5]}
                    mb={["0px", 5, 5, 5]}/>
                    <Text color="cpc.black" width={["100%", "400px", "400px", "400px"]} 
                    px={[".7em", "1em", "1em", "1em"]} 
                    py={["0.5em", "1em", "1em", "1em"]} fontFamily="cpc.gothamCondensedBook" 
                    fontSize={["1.3em", "1.3em", "1.4em", "1.4em"]} 
                    textAlign="left" lineHeight={["1.2em", "1.2em", "1.2em", "1.2em"]}>
                        Estas buenas ideas son retomadas por las 4 personas del Comité de
                        Participación Ciudadana que no están en la presidencia para analizarlas
                        y convertirlas en <b>Anteproyectos de Políticas Públicas</b>, es decir, buenas
                        ideas con potencial para ser trabajadas por el gobierno.  
                    </Text>
                </Flex>

                <Flex direction={["column", "column", "column", "column"]} 
                width={["90%","500px", "600px", "600px"]} justify="center" alignItems="center">
                    <Image src="/images/comisionejecutiva.svg" alt="Comisión Ejecutiva" 
                    height={["6em", "6em", "7em", "7em"]} mt={5}/>
                    <Text color="cpc.black" 
                    px={[".7em", "1em", "1em", "1em"]} 
                    py={["0.5em", "1em", "1em", "1em"]} fontFamily="cpc.gothamCondensedBook" 
                    fontSize={["1.3em", "1.3em", "1.4em", "1.4em"]} 
                    textAlign="left" lineHeight={["1.2em", "1.2em", "1.2em", "1.2em"]}>
                        El equipo de 4 personas del Comité de Participación Ciudadana junto a 
                        la persona titular de la Secretaría Ejecutiva del Sistema Estatal 
                        Anticorrupción trabajan en un espacio denominado la <b>Comisión Ejecutiva</b>.
                        Aquí se convierten los anteproyectos de política pública en 
                        <b> Proyectos de Política Pública</b> después de asegurar que tengan
                        factibilidad técnica y jurídica, es decir, que sea posible en realidad
                        hacer ese proyecto por el gobierno.
                    </Text>
                </Flex>

                <Flex direction={["column", "row", "row", "row"]} 
width={["90%","500px", "600px", "600px"]} justify="center" alignItems="center">
<Link href="/integrantes/carmenalvarez" legacyBehavior>
    <a>
        <Image src="/images/carmenalvarez.svg" alt="Presidenta del CPC" 
        height={["6em", "6em", "7em", "7em"]} 
        mt={5}
        mb={["0", 5, 5, 5]}
        mx={5}
        cursor="pointer"/>
    </a>
</Link>
<Text color="cpc.black" width={["100%", "400px", "400px", "400px"]} 
px={[".7em", "1em", "1em", "1em"]} 
py={["0.5em", "1em", "1em", "1em"]} fontFamily="cpc.gothamCondensedBook" 
fontSize={["1.3em", "1.3em", "1.4em", "1.4em"]} 
textAlign="left" lineHeight={["1.2em", "1.2em", "1.2em", "1.2em"]}>
    Los Proyectos de Políticas Públicas son enviados a la presidencia del 
    Comité de Participación de Participación Ciudadana <b>para que 
    defienda</b> el producto de buenas ideas de muchas personas 💪📝.
</Text>
</Flex>

                <Flex direction={["column", "column", "column", "column"]} 
                width={["90%","500px", "600px", "600px"]} justify="center" alignItems="center">
                    <Image src="/images/comitecoordinador.svg" alt="Comité Coordinador" 
                    height={["6em", "6em", "7em", "7em"]} mt={5}/>
                    <Text color="cpc.black" 
                    px={[".7em", "1em", "1em", "1em"]} 
                    py={["0.5em", "1em", "1em", "1em"]} fontFamily="cpc.gothamCondensedBook" 
                    fontSize={["1.3em", "1.3em", "1.4em", "1.4em"]} 
                    textAlign="left" lineHeight={["1.2em", "1.2em", "1.2em", "1.2em"]}>
                        Todo el trabajo que hemos platicado hasta ahora se aterriza en 
                        el Comité Coordinador del Sistema Estatal Anticorrupción donde
                        la presidencia del Comité de Participación Ciudadana tiene como
                        principal función el defender las propuestas que le llegaron
                        vía la Comisión Ejecutiva. <b>El objetivo es que se aprueben los
                        Proyectos de Políticas Públicas</b> ya que eso obliga al gobierno
                        a poner las buenas ideas en acción 💡📝. 
                    </Text>
                </Flex>
            </Section>   

            {/*CUAL ES NUESTRO PRINCIPAL PROYECTO DE POLITICA PUBLICA*/}
            <Section bg="cpc.blue" color="cpc.white">
                <Text fontSize={["1.75em", "2em", "2em", "2em"]} fontFamily="cpc.gothamBold" 
                fontWeight="300" textAlign="center" lineHeight={["1em", "1em", "1.18em", "1.18em"]} 
                letterSpacing={["-.05em", "0", "0", "0"]} width={["100%", "100%", "80%", "70%"]}>
                   ¿Cúal es el proyecto de política pública rector en el Comité de Participación Ciudadana?
                </Text>
            </Section>

            <Section bg="cpc.white" color="cpc.black">
                <Flex direction={["column", "column", "column", "column"]} 
                width={["90%","500px", "600px", "600px"]} justify="center" alignItems="center">
                    <Image src="/images/politicaanticorrupcion.svg" alt="Política Estatal Anticorrupción" 
                    height={["6em", "6em", "7em", "7em"]} mt={5}/>
                    <Text color="cpc.black" 
                    px={[".7em", "1em", "1em", "1em"]} 
                    py={["0.5em", "1em", "1em", "1em"]} fontFamily="cpc.gothamCondensedBook" 
                    fontSize={["1.3em", "1.3em", "1.4em", "1.4em"]} 
                    textAlign="left" lineHeight={["1.2em", "1.2em", "1.2em", "1.2em"]}>
                        Basado en una metodología que pone en primer lugar la participación de las 
                        personas comunes se realizó en el año 2020 un proceso único en México de 
                        <b> democracia deliberativa</b> observado por organismos internacionales
                        para discutir a profundidad que camino debería de seguir el estado de
                        Chihuahua para combatir la corrupción. 
                    </Text>
                    <Text color="cpc.black" 
                    px={[".7em", "1em", "1em", "1em"]} 
                    py={["0.5em", "1em", "1em", "1em"]} fontFamily="cpc.gothamCondensedBook" 
                    fontSize={["1.3em", "1.3em", "1.4em", "1.4em"]} 
                    textAlign="left" lineHeight={["1.2em", "1.2em", "1.2em", "1.2em"]}>
                        <Link
                            href="https://drive.google.com/file/d/1yiAP49RjZo20MBtTmT1nuBSpG3Jmogj9/view"
                            legacyBehavior>
                            <a className="redlink"> 
                               click aquí para ver la propuesta.
                            </a>
                        </Link>
                    </Text>
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
    </>;
}
