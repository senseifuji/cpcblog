import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content';
import ListItem from '../../components/listitem';
import Section from '../../components/section'
import customtheme from '../../customtheme.js'
import { getAllSessions } from '../../lib/api';
import {Flex, Text, Input} from '@chakra-ui/core'
import {useState} from 'react';
import { useRouter } from 'next/router'
import CpcSeo from '../../components/cpcseo'
import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')

export default function SesionesPage({sessions}) {
    const {colors} = customtheme
    const router = useRouter()
    const path = process.env.NEXT_PUBLIC_BASE_URL + router.asPath


        const [filteredSessions, setFilteredSessions] = useState(sessions);

        const handleFilter = (value) => {
            const sessionsCopy = [...sessions]

            if(value !== ''){
                let parsedValue = value.toLowerCase()
                let newSessions = sessionsCopy.filter(session =>  {
                    let parsedTitle = session.title.toLowerCase()
                    let parsedDate = moment(session.date, 'YYYY-MM-DD').format('D [de] MMMM  YYYY')
                    let parsedAuthor = post.author.name.toLowerCase()
                    let textContent = toPlainText(post.content)
                    return parsedTitle.includes(parsedValue) || parsedDate.includes(parsedValue) || textContent.includes(parsedValue) || parsedAuthor.includes(parsedValue)
                })

                setFilteredSessions(newSessions)

            } else {
                setFilteredSessions(sessionsCopy)
            }
        }

    return (
        <>
            <CpcSeo 
                title="Sesiones CPC - Comité Participativo Ciudadano de Chihuahua"
                description="Listado de sesiones del Comité Participativo Ciudadano de Chihuahua (CPC)."
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
                            <Text lineheight="1em" px={5} display={{xs: "none", md: "inherit"}}>Aquí puedes encontrar las sesiones que hacemos comunmente en el cpc</Text>
                        </Flex>

                    </Section>
                    <Section bg="cpc.white" color="cpc.red" desktopWidth="95%">
                        <Input placeholder="Filtra una sesión por titulo, fecha, autor o contenido." borderColor="cpc.red" focusBorderColor="cpc.red" size="lg" width="90%" onChange={e => handleFilter(e.target.value)}/>
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
        </>
    )
}

let toPlainText = (blocks = []) => {
  return blocks
    // loop through each block
    .map(block => {
      // if it's not a text block with children, 
      // return nothing
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      // loop through the children spans, and join the
      // text strings
      return block.children.map(child => child.text).join('')
    })
    // join the paragraphs leaving split by two linebreaks
    .join('\n\n')
}


//this functions run on build time on server.
//provides props to your page, and makes it static
export async function getStaticProps(context){
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
        },
        revalidate: 10
    }

}
