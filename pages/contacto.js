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
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function Contact() {
    const {colors} = customtheme
    const router = useRouter()
    const path = process.env.NEXT_PUBLIC_BASE_URL + router.asPath
    
    const { handleSubmit, register } = useForm();
    const [isLoading, setIsloading] = useState(false);
    const [isOk, setIsOk] = useState(false);
    const [error, setError] = useState(false);

    const onSubmit = async values => {
        setIsloading(true)
        try {
            await axios.post("https://formspree.io/f/xwkwbgpd", values)
            setIsOk(true)
        } catch (error) {
            error(true)
        }
        setIsloading(false)
    }

    return (
        <>
            <CpcSeo 
                title="Contacto CPC - Comité Participativo Ciudadano de Chihuahua"
                description="Contacta a los integrantes del Comité Participativo Ciudadano de Chihuahua"
                url={path}
                imageUrl=""
            /> 
            <Layout >
                <Header position="fixed"/>
                <Content>
                    <Section bg="cpc.red" color="cpc.white" 
                        splitBiBottom="true"
                        splitBiBottomColorOne={colors.cpc.red}
                        splitBiBottomColorTwo={colors.cpc.white}
                    >
                        <Text fontSize={["1.25em", "1.5em", "3em", "3em"]} fontFamily="cpc.gothamBold" textAlign="center" lineHeight="1.18em">
                            <b>Contáctanos!</b>
                        </Text>
                        <Text lineheight="1em" px={5} display={{xs: "none", md: "inherit"}} textAlign="center">Llena el formulario para contactarnos o si prefieres da click en el integrante de tu preferencia.</Text>
                    </Section> 


                    <Flex justify="center" alignItems="center" p={2} mt={["1em", "2em", "3em", "3em"]} lineHeight="2em">
                       {isOk ? (
                            <Text fontSize={["2em"]}color="cpc.red" fontFamily="cpc.gothamCondensed" textAlign="center">Tu mensaje ha sido recibido <br/>Gracias por contactarnos!</Text>
                       ): 
                       
                        error ? (
                            <Text fontSize={["2em"]}color="cpc.red" fontFamily="cpc.gothamCondensed" textAlign="center">Lo sentimos, ha ocurrido un error recibiendo tu mensaje.</Text>
                        )
                        : 
                        (
                                <Flex width={["100%", "100%", "100%", "600px"]} direction="column" textAlign="center">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <Text fontSize={["2em"]}color="cpc.red" fontFamily="cpc.gothamCondensed">Contáctanos llenando el formulario</Text>
                                        <FormControl isRequired>
                                            <Input size="lg" my={3} type="email" placeholder="Email" name="email" ref={register()}/>
                                        </FormControl>
                                        <FormControl isRequired>
                                            <Textarea size="lg" my={2} placeholder="Escribe tu mensaje" name="message" ref={register()}/>
                                        </FormControl>
                                        <Button type="submit" bg="cpc.red" color="cpc.white" width="100%" _hover={{bg: "cpc.red"}} mt={3} isLoading={isLoading}>Enviar</Button>
                                    </form>
                                </Flex>
                        )
                       
                       }
                    </Flex>

                    {/* //Faces  */}
                    <Flex justify="space-around" alignItems="top"  direction={["column", "column", "row", "row"]} width="100%" mt={["2em", "2em", "5em", "5em"]}>
                        <Flex  bg="cpc.white" color="cpc.red" direction="column" justify="center" alignItems="center" width="100%" py={2}>
                            <PseudoBox _hover={{filter: "drop-shadow(2px 4px 6px black)"}}>
                                <Link href="/integrantes/anaterrazas">
                                    <a><Image src="/images/anaterrazas.svg" alt="anaterrazas" mt={[3]} width={["10em", "10em", "10em", "10em"]} />  </a>
                                </Link>
                            </PseudoBox>          
                            <Box fontSize={["1.5em", "1.5em", "1.5em", "1.5em"]} lineHeight={["1em"]} textAlign="center">
                                <Text fontFamily="cpc.gothamMedium" ><b>Ale Terrazas</b></Text>
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
