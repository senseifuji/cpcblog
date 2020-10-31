import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content';
import Section from '../components/section'
import ManitasDineros from '../components/svgs/manitasdineros';
import { Box, Flex, Text, Image} from '@chakra-ui/core';

export default function AboutPage() {
    return (
        <Layout title="Acerca de - CPC Anticorrupcion">
            <Header position="fixed"/>
            <Content>
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
            </Content>
        </Layout>
    )
}


                    