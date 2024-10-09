import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content';
import ListItem from '../../components/listitem';
import Section from '../../components/section'
import customtheme from '../../customtheme.js'
import { getAllSessions } from '../../lib/api';
import { Flex, Text, Input, Box, Button } from '@chakra-ui/react'
import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router'
import CpcSeo from '../../components/cpcseo'

import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')

const toPlainText = (blocks = []) => {
  return blocks
    .filter(block => block._type === 'block' && block.children)
    .map(block => block.children.map(child => child.text).join(''))
    .join('\n\n')
}

const SESSIONS_PER_PAGE = 6;

export default function SesionesPage({sessions}) {
    const {colors} = customtheme
    const router = useRouter()
    const path = process.env.NEXT_PUBLIC_BASE_URL + router.asPath

    const [filteredSessions, setFilteredSessions] = useState(sessions);
    const [isFiltering, setIsFiltering] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedSessions, setPaginatedSessions] = useState([]);

    const handleFilter = useCallback((value) => {
        setIsFiltering(true);
        const sessionsCopy = [...sessions]

        if(value !== ''){
            let parsedValue = value.toLowerCase()
            let newSessions = sessionsCopy.filter(session =>  {
                let parsedTitle = session.title.toLowerCase()
                let parsedDate = moment(session.date, 'YYYY-MM-DD').format('D [de] MMMM  YYYY')
                let parsedAuthor = session.author?.name?.toLowerCase() || ''
                let textContent = toPlainText(session.content).toLowerCase()
                return parsedTitle.includes(parsedValue) || parsedDate.includes(parsedValue) || textContent.includes(parsedValue) || parsedAuthor.includes(parsedValue)
            })

            setFilteredSessions(newSessions)
        } else {
            setFilteredSessions(sessionsCopy)
        }
        setIsFiltering(false);
        setCurrentPage(1);
    }, [sessions]);

    useEffect(() => {
        const startIndex = (currentPage - 1) * SESSIONS_PER_PAGE;
        const endIndex = startIndex + SESSIONS_PER_PAGE;
        setPaginatedSessions(filteredSessions.slice(startIndex, endIndex));
    }, [currentPage, filteredSessions]);

    const totalPages = Math.ceil(filteredSessions.length / SESSIONS_PER_PAGE);

    return (
        <>
            <CpcSeo 
                title="Sesiones del CPC - Comité de Participación Ciudadana de Chihuahua"
                description="Listado de sesiones del Comité de Participación Ciudadana de Chihuahua (CPC) del Sistema Estatal Anticorrupción."
                url={path}
                imageUrl={process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_URL}
            />
            <Layout>
                <Header position="fixed"/>
                <Content>
                    <Section bg="cpc.red" color="cpc.white">
                        <Flex direction="column" justify="center" alignItems="center" textAlign="center">
                            <Text fontSize={["1.25em", "1.5em", "3em", "3em"]} fontFamily="cpc.gothamBold" textAlign="center" lineHeight="1.18em">
                                <b>Sesiones del CPC</b>
                            </Text>
                            <Text lineHeight="1em" px={5} display={["none", null, "inherit"]}>Aquí puedes encontrar las sesiones que hacemos comúnmente en el CPC</Text>
                        </Flex>
                    </Section>
                    <Section bg="cpc.white" color="cpc.red" desktopWidth="95%">
                        <Input 
                            placeholder="Filtra una sesión por título, fecha, autor o contenido." 
                            borderColor="cpc.red" 
                            focusBorderColor="cpc.red" 
                            size="lg" 
                            width="90%" 
                            onChange={e => handleFilter(e.target.value)}
                        />
                        <Box mt={[6, 6, 10, 10]}>
                            {isFiltering ? (
                                <Text>Filtrando sesiones...</Text>
                            ) : paginatedSessions.length > 0 ? (
                                <>
                                    <Flex width="100%" justify={["center", "center", "space-around", "space-between"]} alignItems="top" wrap="wrap" px={["1em"]}>
                                        {paginatedSessions.map(session => 
                                            <ListItem 
                                                key={session._id} 
                                                title={session.title} 
                                                author={session.author} 
                                                date={session.date}
                                                image={session.coverImage}
                                                url={`/sesiones/${session.slug}`}
                                            />
                                        )}
                                    </Flex>
                                    <Flex justify="center" mt={6}>
                                        <Button 
                                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                                            isDisabled={currentPage === 1}
                                            mr={2}
                                        >
                                            Anterior
                                        </Button>
                                        <Text mx={4}>Página {currentPage} de {totalPages}</Text>
                                        <Button 
                                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                                            isDisabled={currentPage === totalPages}
                                            ml={2}
                                        >
                                            Siguiente
                                        </Button>
                                    </Flex>
                                </>
                            ) : (
                                <Text width="100%" ml={["0em", "3em", "3em", "3em"]}><b>No existen resultados para tu búsqueda</b></Text>
                            )}
                        </Box>
                    </Section>
                </Content>
            </Layout>
        </>
    )
}

export async function getStaticProps(){
    let sessions;
    try{
        const response = await getAllSessions();
        sessions = response
    } catch(e){
        console.error("Error fetching sessions:", e);
        sessions = []
    }

    return {
        props: {
            sessions
        },
        revalidate: 10
    }
}