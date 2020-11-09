import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content';
import ListItem from '../../components/listitem';
import Section from '../../components/section'
import customtheme from '../../customtheme.js'
import { getAllSessions } from '../../lib/api';
import {Flex, Text, Input} from '@chakra-ui/core'
import {useState} from 'react';

export default function SesionesPage({sessions}) {
    const {colors} = customtheme

        const [filteredSessions, setFilteredSessions] = useState(sessions);

        const handleFilter = (value) => {
            const sessionsCopy = [...sessions]

            if(value !== ''){
                let parsedValue = value.toLowerCase()
                let newSessions = sessionsCopy.filter(session =>  {
                    let parsedTitle = session.title.toLowerCase()
                    return parsedTitle.includes(parsedValue)
                })

                setFilteredSessions(newSessions)

            } else {
                setFilteredSessions(sessionsCopy)
            }
        }

    return (
        <Layout>
            <Header position="fixed"/>
            <Content>
                <Section bg="cpc.red" color="cpc.white" 
                    splitBiBottom="true"
                    splitBiBottomColorOne={colors.cpc.red}
                    splitBiBottomColorTwo={colors.cpc.white}
                >
                    <Flex direction="column" justify="center" alignItems="center" textAlign="center">
                        <Text fontSize={["1.25em", "1.5em", "3em", "3em"]} fontFamily="cpc.gothamBold" textAlign="center" lineHeight="1.18em">
                            <b>Sesiones del CPC</b>
                        </Text>
                        <Text lineheight="1em" px={5} display={{xs: "none", md: "inherit"}}>Aquí puedes encontrar las sesiones que hacemos comunmente en el cpc</Text>
                    </Flex>

                </Section>
                <Section bg="cpc.white" color="cpc.red" desktopWidth="95%">
                    <Input placeholder="Busca una sesión" borderColor="cpc.red" focusBorderColor="cpc.red" size="lg" width="90%" onChange={e => handleFilter(e.target.value)}/>
                   <Flex width="100%" justify={["center", "center", "space-around", "space-between"]} alignItems="top" wrap="wrap" px={["1em"]} mt={[6, 6, 10, 10]}>
                        {filteredSessions.length > 0 ? 
                            filteredSessions.map(session => 
                                <ListItem key={session._id} 
                                    title={session.title} 
                                    author={session.author} 
                                    date={session.date}
                                    image={session.coverImage}
                                    url={`/sesiones/${session.slug}`}
                                />
                            ) 
                            : 
                            (
                                <Text width="100%" ml={["0em", "3em", "3em", "3em"]}><b>No existen resultados para tu busqueda</b></Text>
                            )
                        }
                   </Flex>
                </Section>
            </Content>
        </Layout>
    )
}


//this functions run on build time on server.
//provides props to your page, and makes it static
export async function getStaticProps(context){
    console.log("context =>", context)
    let sessions;
    try{
        const response = await getAllSessions();
        sessions = response
    } catch(e){
        sessions = []
    }

    return {
        props: {
            sessions
        }
    }

}