import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content';
import Section from '../components/section';
import { useRouter} from 'next/router'
import {useState} from 'react';
import CpcSeo from '../components/cpcseo'
import customtheme from '../customtheme.js'
import { Flex, Text, Box, Input, Textarea, Button, FormControl} from '@chakra-ui/react';
import Link from 'next/link'
import { useForm } from "react-hook-form";
import axios from 'axios';
import Image from 'next/image';

export default function Contact() {
    const {colors} = customtheme
    const router = useRouter()
    const path = process.env.NEXT_PUBLIC_BASE_URL + router.asPath
    
    const { handleSubmit, register } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [isOk, setIsOk] = useState(false);
    const [error, setError] = useState(false);

    const onSubmit = async values => {
        setIsLoading(true)
        try {
            await axios.post("https://formspree.io/f/xwkwbgpd", values)
            setIsOk(true)
        } catch (error) {
            setError(true)
        }
        setIsLoading(false)
    }

    return (
        <>
            <CpcSeo 
                title="Contacto CPC - Comité de Participación Ciudadana de Chihuahua"
                description="Contacta a las personas que integran el Comité de Participación Ciudadana del Sistema Estatal Anticorrupción de Chihuahua"
                url={path}
                imageUrl={process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_URL}
            /> 
            <Layout>
                <Header position="fixed"/>
                <Content>
                    <Section bg="cpc.red" color="cpc.white">
                        <Text fontSize={["1.25em", "1.5em", "3em", "3em"]} fontFamily="cpc.gothamBold" textAlign="center" lineHeight="1.18em">
                            <b>Contáctanos!</b>
                        </Text>
                        <Text lineHeight="1em" px={5} display={["none", null, "inherit"]} textAlign="center">Llena el formulario para contactarnos o si prefieres da click en el integrante de tu preferencia.</Text>
                    </Section> 

                    {/* Form section */}
                    <Flex justify="center" alignItems="center" p={2} my={["1em", "2em", "3em", "3em"]} lineHeight="2em">
                       {isOk ? (
                            <Text fontSize={["2em"]} color="cpc.red" fontFamily="cpc.gothamCondensed" textAlign="center">Tu mensaje ha sido recibido <br/>Gracias por contactarnos!</Text>
                       ) : error ? (
                            <Text fontSize={["2em"]} color="cpc.red" fontFamily="cpc.gothamCondensed" textAlign="center">Lo sentimos, ha ocurrido un error recibiendo tu mensaje.</Text>
                        ) : (
                            <Flex width={["100%", "80%", "80%", "600px"]} direction="column" textAlign="center">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Text fontSize={["2em"]} color="cpc.red" fontFamily="cpc.gothamCondensed">Contáctanos llenando el formulario</Text>
                                    <FormControl isRequired>
                                        <Input size="lg" my={3} type="email" placeholder="Email" name="email" ref={register()}/>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <Textarea size="lg" my={2} placeholder="Escribe tu mensaje" name="message" ref={register()}/>
                                    </FormControl>
                                    <Button type="submit" bg="cpc.red" color="cpc.white" width="100%" _hover={{bg: "cpc.redLight"}} mt={3} isLoading={isLoading}>Enviar</Button>
                                </form>
                            </Flex>
                        )
                       }
                    </Flex>

                    {/* Faces section */}
                    <Section bg="#fcd46f" color="#3d3d3d">
                        <Text fontSize={["1.5em", "2em"]} fontFamily="cpc.gothamCondensed" textAlign="center" lineHeight="1.18em" mb={6}>
                            Da click en la persona integrante de la que quieras conocer más información
                        </Text>
                        <Flex justify="center" alignItems="center" flexWrap="wrap" width="100%" mt={["2em", "2em", "0em", "0em"]}>
                            {[
                                {name: "Carmen Álvarez", href: "/integrantes/carmenalvarez", image: "/images/carmenalvarezfr2.png", role: "Presidenta del CPC"},
                                {name: "Jesús Abbud", href: "/integrantes/jesusabbud", image: "/images/jesusabuddfr2.png", role: "Integrante del CPC"},
                                {name: "Héctor Villanueva", href: "/integrantes/hectorvillanueva", image: "/images/josevillanuevafr2.png", role: "Integrante del CPC"},
                                {name: "Gisela Rodríguez", href: "/integrantes/giselarodriguez", image: "/images/giselarodriguezfr2.png", role: "Integrante del CPC"}
                            ].map((member, index) => (
                                <Box key={index} textAlign="center" m={4} width={["100%", "40%", "20%", "20%"]}>
                                    <Flex direction="column" alignItems="center">
                                        <Link href={member.href} passHref legacyBehavior>
                                            <a>
                                                <Image 
                                                    src={member.image} 
                                                    alt={member.name} 
                                                    width={150}
                                                    height={150}
                                                    style={{ borderRadius: '50%', objectFit: 'cover' }}
                                                />
                                            </a>
                                        </Link>
                                        <Text mt={2} fontFamily="cpc.gothamBold" fontSize={["1.2em", "1.3em", "1.4em", "1.4em"]} textAlign="center" isTruncated>{member.name}</Text>
                                        <Text fontFamily="cpc.gothamCondensedBook" fontSize={["1em", "1.1em", "1.2em", "1.2em"]} textAlign="center">{member.role}</Text>
                                    </Flex>
                                </Box>
                            ))}
                        </Flex>
                    </Section>
                </Content>
            </Layout>
        </>
    );
}
