import Layout from '../components/layout'
import Content from '../components/content'
import Section from '../components/section'
import customtheme from '../customtheme';
import Header from '../components/header';
import { useState, useEffect } from 'react';
import { Text, Flex, Button} from '@chakra-ui/core';

const homeWords = ["vigilamos", "combatimos", "eliminamos"];

export default function Home() {

  const [currentHomeWord, setCurrentHomeWord] = useState(homeWords[0]);
  const {yellow, white, black, red, blackLight, blue} = customtheme.colors.cpc

  //Iterating in homeWords
  useEffect(() => {
    let index = 0;
   setInterval(() => {
      if(index === homeWords.length-1){index = -1};
      index ++;
      setCurrentHomeWord(homeWords[index])
    }, 2500);
  }, [])

  return (
    <>

      {/* ----------TOP BANNER ------ */}
      <Layout direction="column" title="CPC Anticorrupción – En Chihuahua las personas juntas buscamos combatir la corrupción.">
          <Section bg="cpc.white" color="cpc.blackLight" desktopWidth="100%">
            <Flex direction="column" fontFamily="cpc.gothamMedium" alignItems="center" textAlign="center">
              <Text pb={4} fontSize="2.7em"><b>Las personas <span id="changinText">{currentHomeWord}</span> la corrupción</b></Text>
              <Text fontFamily="cpc.gothamCondensedBook" fontSize={["19.2px"]} mb="14px">
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
      <Header/>

      {/* --------VACUNA A LA CORRUPCIÓN-------- */}
      <Layout direction="column">
        <Section bg="cpc.yellow" color="cpc.blackLight" desktopWidth="100%"
          splitBiBottom={true} 
          splitBiBottomColorOne={yellow}
          splitBiBottomColorTwo={black}
          splitBiBottomInverse={false}
        >

          <Flex direction="row">
            <Flex direction="column" width="100%">
              Aqui va la imagen del coronavirus
            </Flex>
            <Flex fontFamily="cpc.gothamCondensedBook" fontSize="1.2em" direction="column" width="100%" textAlign="center" alignItems="center">
              <Text fontFamily="cpc.gothamCondensedBook" mb={3}>
                Sabemos que estamos en un momento complicado como planeta y 
                como especie. Son justo estos momentos en los que necesitamos 
                respuestas públicas a la altura.
              </Text>
              <Text fontFamily="cpc.gothamCondensedBook" mb={3}>
                Es por eso que desde el CPC estamos vigilando como está reaccionando 
                el gobierno estatal ante la emergencia.
              </Text>

              <Button size="lg" bg={blue} color={yellow} rounded="10px" _hover={{ bg: "cpc.blueMedium" }} width="200px">
                <i aria-hidden="true" class="far fa-file-alt"></i>
                	&nbsp; Conocé nuestra investigación
              </Button>
              <Text fontFamily="cpc.gothamCondensedBook" my={4}>¿Ya conoces nuestras exigencias y quieres aportar?</Text>
              <Button size="lg" bg={yellow} color={blue} borderColor={blue} border="2px" rounded="10px" _hover={{ bg: "cpc.blueLight" }} width="200px">
                  <i aria-hidden="true" class="fas fa-hand-peace"></i>
                 	&nbsp; Me interesa sumarme
              </Button>
            </Flex>
          </Flex>
        </Section>
      </Layout>
      </>
  )   
}
