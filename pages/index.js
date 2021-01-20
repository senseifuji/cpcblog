import Layout from '../components/layout'
import Section from '../components/section'
import customtheme from '../customtheme';
import Header from '../components/header';
import { Text, Flex, Button} from '@chakra-ui/core';

import YoElijoRegidor from '../components/svgs/yoelijoregidor'
import InformeAnual from '../components/svgs/informeanual'
import Chihuahua from '../components/svgs/chihuahua'

import { useState, useEffect } from 'react';
import Link from 'next/link'
import CountUp from 'react-countup';
import useWindowSize from '../hooks/usewindowsize';
import useScrollPosition from '@react-hook/window-scroll'
import CpcSeo from '../components/cpcseo';


export default function Home() {
  const homeWords = ["vigilamos", "combatimos", "eliminamos"];
  const [currentHomeWord, setCurrentHomeWord] = useState(homeWords[0]);
  const [headerPosition, setHeaderPosition] = useState(false)
  const {yellow, white, black, red, yellowLight, blue, purple} = customtheme.colors.cpc
  
  let configsDefault = { regidorSize: "350px"};

  const [configs, setConfigs] = useState(configsDefault)
  let size = useWindowSize() //window hook, to resize logo...
  const scrollY = useScrollPosition(30 /*fps*/) //hook for knowing y axis of scroll

  //Iterating in homeWords
  useEffect(() => {
    let index = 0;
   setInterval(() => {
      if(index === homeWords.length-1){index = -1};
      index ++;
      setCurrentHomeWord(homeWords[index])
    }, 2500);
  }, [])

  //custom sizes for some svgs
  useEffect(() => {
    //desktop 
    if(size.width > 990){ setConfigs({...configs, regidorSize: "350px"}) } 
    if(size.width < 990){  } //tablet 
      //mobile
    if(size.width < 768){ setConfigs({...configs, regidorSize: "280px"}) } 

    //header fixed
    if(scrollY > 193){
      setHeaderPosition("fixed")
    } else {
      setHeaderPosition("relative")
    }


  }, [size, scrollY])

 
  return (
    <>
      {/* SEO OF INDEX PAGE */}
        <CpcSeo 
            title="CPC - Comité Participativo Ciudadano de Chihuahua"
            description="En el Comité de Participación Ciudadana de Chihuahua (CPC) sabemos que solo juntas, las personas,
            podremos hacerle frente a la corrupción."
            url={process.env.NEXT_PUBLIC_BASE_URL}
            imageUrl={process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_URL}
        /> 
        {/* ----------TOP BANNER ------ */}
        <Layout direction="column">
            <Section bg="cpc.white" color="cpc.blackLight" desktopWidth="100%">
              <Flex direction="column" fontFamily="cpc.gothamMedium" alignItems="center" textAlign="center" px="2em" >
                <Text pb={4} fontSize={["2em", "2em", "2.7em", "2.7em"]} fontWeight="600" lineHeight="1em"><b>Las personas <span id="changinText">{currentHomeWord}</span> la corrupción</b></Text>
                <Text fontFamily="cpc.gothamCondensed" fontSize={["0.95em", "0.9em", "19.2px", "19.2px"]} mb="14px">
                  En el Comité de Participación Ciudadana de Chihuahua (CPC) 
                  sabemos que solo juntas, las personas, <br/>podremos hacerle frente a la corrupción.
                </Text>
              </Flex>
              <style jsx>{`
                  #changinText{
                    color: ${customtheme.colors.cpc.red}
                  }
              `}</style>
            </Section>
        </Layout>


        {/* -------HEADER------ */}
        <Header position={headerPosition}/>

        {/* --------VACUNA A LA CORRUPCIÓN-------- */}
        <Layout direction="column">
          <Section bg="cpc.yellowLight" color="cpc.blackLight" desktopWidth="100%">
            <Flex direction={["column", "column", "row", "row"]} alignItems="center">
              <Flex direction="column" width="100%" justify="center" alignItems="center" py={["2em"]}>
                <Flex direction="column" alignItems="center" transform="translateY(150px)" zIndex="50" mt="-10em">
                  <Text fontFamily="cpc.gothamMedium" fontSize={["2.2em", "2.8em", "2.8em", "2.8em"]}  color={white} textShadow="0px 0px 10px rgba(0,0,0,0.3)">
                    <b>vacuna a la</b>
                    </Text>
                  <Text fontFamily="cpc.gothamMedium" fontSize={["2.5em", "2.8em", "2.8em", "3.3em"]} mt="-0.75em" color={white} fontWeight=""textShadow="0px 0px 10px rgba(0,0,0,0.3)" letterSpacing="-0.9px">
                    <b>CORRUPCIÓN</b>
                    </Text>
                  <Text fontSize={["2em", "2em", "2em", "2em"]} mt={["-0.5em"]} px={5} py={0} fontFamily="cpc.gothamCondensed" color={white} bg={blue} width="fit-content">durante el COVID19</Text>
                </Flex>
                <img src="/images/covid.png" id="covidimage"/>
              </Flex>
              <Flex fontFamily="cpc.gothamCondensed" lineHeight="1.1em" fontSize="1.2em" direction="column" width="100%" textAlign="center" alignItems="center" px="1em">
                <Text fontFamily="cpc.gothamCondensed" mb={3}>
                  Sabemos que estamos en un momento complicado como planeta y 
                  como especie. Son justo estos momentos en los que necesitamos 
                  respuestas públicas a la altura.
                </Text>
                <Text fontFamily="cpc.gothamCondensed" mb={3}>
                  Es por eso que desde el CPC estamos vigilando como está reaccionando 
                  el gobierno estatal ante la emergencia.
                </Text>
                  <Link href="https://comiteanticorrupcion.mx/publicaciones/investigacioncovid">
                <Button size="lg" bg={blue} color={yellow} rounded="10px" _hover={{ bg: "cpc.blueMedium" }} width={["250px", "200px", "200px", "200px"]}>
                  <i aria-hidden="true" className="far fa-file-alt"></i>
                    &nbsp; Conoce la investigación
                </Button>
                <Text fontFamily="cpc.gothamCondensed" my={4}>¿Ya conoces nuestras exigencias y quieres aportar?</Text>
                <Link href="/contacto">
                  <Button size="lg" bg={yellowLight} color={blue} borderColor={blue} border="2px" rounded="10px" _hover={{ bg: "cpc.blueLight" }} width="200px">
                    <i aria-hidden="true" className="fas fa-hand-peace"></i>
                    &nbsp; Me interesa sumarme
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </Section>


        {/* --------- YO ELIJO REGIDOR SECTION-------- */}

          <Section bg="cpc.black" color="cpc.white" desktopWidth="80%">
          <Flex justify="space-around" direction={["column", "column", "column", "row"]}>
            {/* //wrapper one  */}
              <Flex direction="column" fontFamily="cpc.gothamMedium" lineHeight="1.2em" alignItems={["center"]} fontSize={["1.5em", "2em", "2em", "2em"]} >
                  <Text fontWeight="600" textAlign="center" mt={["0em", "0em", "0em", "2em"]}><strong>El CPC se une <br/> a la iniciativa</strong></Text>
                  <YoElijoRegidor size={configs.regidorSize}/> 
              </Flex>
                {/* wrapper two */}
              <Flex mt={["-6em", "-7em", "-6em", "0em"]} justify="center" alignItems="center" px={["1em", "3em", "1em", "1em"]} direction={["column", "column", "row", "row"]}>
                {/* //second part */}
                <Flex direction="column" alignItems="center" alignItems="center" width={["100%", "100%", "48%", "17em"]}  mx={["2em"]}>
                  <Flex direction="column" alignItems="center">
                    <Text color={red} fontSize={["4.25em"]}>
                      <b><CountUp end={76} /></b>
                    </Text>
                    <Text fontFamily="cpc.gothamMedium" fontSize="19px" mt="-1em">organizaciones</Text>
                  </Flex>
                  <Flex justify="center">
                    <Text my="1em" fontFamily="cpc.gothamCondensed" fontSize="1.2em" lineHeight="1.3em" width={["100%"]} textAlign="center">
                    <b>
                        Se han sumado a esta iniciativa ciudadana que busca 
                        <span className="redText"> reducir la captura de los puestos públicos</span> de 
                        las personas tomadoras de decisiones 
                        dentro de los ayuntamientos del estado de Chihuahua.
                    </b>
                    </Text>
                  </Flex>
                </Flex>
                  {/* //third part  */}
                <Flex direction="column" justify="center"  alignItems="center" width={["100%", "100%", "35%", "15em"]} mx={["2em"]}>
                    <Text fontFamily="cpc.gothamCondensed" textAlign="center" fontSize="1.2em" lineHeight="1.3em">
                      <b>
                        Se está buscando que la iniciativa de reforma a la Constitución Política del Estado de Chihuahua; 
                        el Código Municipal y la Ley Electoral del Estado de Chihuahua, 
                        <span className="redText"> se apruebe antes del 30 de junio del 2020.</span>
                      </b>
                    </Text>
                    <Link href="http://regidor.mx/yoelijo">
                      <Button fontFamily="cpc.gothamCondensed" mt="1em" size="lg" bg={red} color={white} rounded="10px" _hover={{ bg: "cpc.redLight" }} width="150px">
                        <i aria-hidden="true" className="fas fa-vote-yea"></i>
                        &nbsp; Conoce Más
                      </Button>
                    </Link>
                </Flex>
              </Flex>
          </Flex>
          </Section>


          {/* --------ANUAL ANTICORRUPCION -------- */}
          <Section bg="cpc.blue" color="cpc.white" desktopWidth="80%">
          <Flex justify="space-around" direction={["column", "column", "column", "row"]}>
            {/* //wrapper one  */}
              <Flex direction="column" fontFamily="cpc.gothamMedium" lineHeight="1.2em" alignItems={["center"]} fontSize={["1.5em", "2em", "2em", "2em"]} >
                  <InformeAnual size={configs.regidorSize}/> 
              </Flex>
                {/* wrapper two */}
              <Flex mt={["-6em", "-7em", "-6em", "0em"]} justify="center" alignItems="center" px={["1em", "3em", "1em", "1em"]} direction={["column", "column", "row", "row"]}>
                {/* //second part */}
                <Flex direction="column" alignItems="center" alignItems="center" width={["100%", "100%", "48%", "17em"]}  mx={["2em"]}>
                  <Flex direction="column" alignItems="center">
                    <Text color={yellow} fontSize={["4.25em"]}>
                      <b><CountUp end={775} /></b>
                    </Text>
                    <Text fontFamily="cpc.gothamMedium" fontSize="19px" mt="-1em">días</Text>
                  </Flex>
                  <Flex justify="center">
                    <Text my="1em" fontFamily="cpc.gothamCondensed" fontSize="1.2em" lineHeight="1.3em" width={["100%"]} textAlign="center">
                    <b>
                        Tenemos sin que avance la 
                        <span className="yellowText"> investigación por presunta corrupción </span>
                        que presentamos en Función Pública
                    </b>
                    </Text>
                  </Flex>
                </Flex>
                  {/* //third part  */}
                <Flex direction="column" justify="center"  alignItems="center" width={["100%", "100%", "35%", "15em"]} mx={["2em"]}>
                    <Text fontFamily="cpc.gothamCondensed" textAlign="center" fontSize="1.2em" lineHeight="1.3em">
                      <b>
                        La hipótesis es simple: 	&nbsp;
                        <span className="yellowText">
                          si al CPC no le hacen caso ¿Qué le espera al resto de las personas?
                        </span>   
                      </b>
                    </Text>
                    <Text fontFamily="cpc.gothamCondensed" textAlign="center" fontSize="1.2em" lineHeight="1.3em">
                      <b>
                        Decidimos investigar qué frena la detección e investigación de corrupción en Chihuahua.   
                      </b>
                    </Text>
                    <Link href="http://informe2019.anticorrupcion.org/">
                      <Button fontFamily="cpc.gothamCondensed" mt="1em" size="lg" bg={yellow} color={white} rounded="10px" _hover={{ bg: "cpc.yellowLight" }} width="150px">
                        <i aria-hidden="true" className="fab fa-readme"></i>
                        &nbsp; Lee el informe
                      </Button>
                    </Link>
                </Flex>
              </Flex>
          </Flex>
          </Section>
          {/*------------ESTADO DE CHIHUAHUA------------*/}
          <Section bg="cpc.purple" color="cpc.white" desktopWidth="810%">
              
            <Flex justify="space-between" direction={["column", "column", "column", "row"]}>
              <Flex direction="column"  fontFamily="cpc.gothamMedium" lineHeight="1.2em" alignItems={["center"]} fontSize={["1.5em", "2em", "2em", "2em"]} >
                <Chihuahua size="200px"/> 
              </Flex>
              <Flex direction="column" justify="center" fontFamily="cpc.gothamMedium" lineHeight="1.2em" alignItems={["center"]} fontSize={["1.5em", "2em", "2em", "2em"]} >
                <Text fontWeight="600" textAlign="center" mt={["1em", "1em", "0em", "2em"]}><strong>Comité de Participación Ciudadana <br/> del estado de <span className="yellowText"> Chihuahua </span></strong></Text>
              </Flex>
            </Flex>
          </Section>
          

          <style jsx>{`
            #covidimage{
              filter: brightness( 127% ) contrast( 96% ) saturate( 99% ) blur( 0.9px ) hue-rotate( 350deg );
              opacity: 0.7;
              width: 184px
            }

            .redText {
                color: ${red};
            }  

            .yellowText{
              color: ${yellow}
            }
          `}</style>
        </Layout>
      </>
  )   
}
