import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content';
import ListItem from '../../components/listitem';
import Section from '../../components/section'
import { Flex, Text, Input, Box } from '@chakra-ui/react';
import { getAllPosts } from '../../lib/api';
import customtheme from '../../customtheme.js'
import { useState, useCallback } from 'react';
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

export default function PublicacionesPage({posts}) {
    const {colors} = customtheme
    const router = useRouter()
    const path = process.env.NEXT_PUBLIC_BASE_URL + router.asPath
    const [filteredPosts, setFilteredposts] = useState(posts);
    const [isFiltering, setIsFiltering] = useState(false);

    const handleFilter = useCallback((value) => {
        setIsFiltering(true);
        const postsCopy = [...posts]

        if(value !== ''){
            let parsedValue = value.toLowerCase()
            let newPosts = postsCopy.filter(post =>  {
                let parsedTitle = post.title.toLowerCase()
                let parsedDate = moment(post.date, 'YYYY-MM-DD').format('D [de] MMMM  YYYY')
                let textContent = toPlainText(post.content).toLowerCase()
                let parsedAuthor = post.author.name.toLowerCase()
                return parsedTitle.includes(parsedValue) || parsedDate.includes(parsedValue) || textContent.includes(parsedValue) || parsedAuthor.includes(parsedValue)
            })

            setFilteredposts(newPosts)
        } else {
            setFilteredposts(postsCopy)
        }
        setIsFiltering(false);
    }, [posts]);

    return (
       <>
        <CpcSeo 
            title="Publicaciones CPC - Comité de Participación Ciudadana de Chihuahua"
            description="Listado de publicaciones del Comité de Participación Ciudadana de Chihuahua (CPC) del Sistema Estatal Anticorrupción."
            url={path}
            imageUrl={process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_URL}
        /> 
        <Layout>
            <Header position="fixed"/>
            <Content>
                <Section bg="cpc.red" color="cpc.white">
                    <Flex direction="column" justify="center" alignItems="center" textAlign="center">
                        <Text fontSize={["1.25em", "1.5em", "3em", "3em"]} fontFamily="cpc.gothamBold" textAlign="center" lineHeight="1.18em">
                            <b>Publicaciones del CPC</b>
                        </Text>
                        <Text lineHeight="1em" px={5} display={["none", null, "inherit"]}>Aquí puedes encontrar las publicaciones que hacemos comúnmente en el CPC</Text>
                    </Flex>
                </Section>
                <Section bg="cpc.white" color="cpc.red" desktopWidth="95%">
                    <Input 
                        placeholder="Filtra una publicación por título, fecha, autor o contenido" 
                        borderColor="cpc.red" 
                        focusBorderColor="cpc.red" 
                        size="lg" 
                        width="90%" 
                        onChange={e => handleFilter(e.target.value)}
                    />
                    <Box mt={[6, 6, 10, 10]}>
                        {isFiltering ? (
                            <Text>Filtrando publicaciones...</Text>
                        ) : filteredPosts.length > 0 ? (
                            <Flex width="100%" justify={["center", "center", "space-around", "space-between"]} alignItems="top" wrap="wrap" px={["1em"]}>
                                {filteredPosts.map(post => 
                                    <ListItem 
                                        key={post._id} 
                                        title={post.title} 
                                        author={post.author} 
                                        date={post.date}
                                        image={post.coverImage}
                                        url={`/publicaciones/${post.slug}`}
                                    />
                                )}
                            </Flex>
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
    let posts;
    try{
        const response = await getAllPosts();
        posts = response
    } catch(e){
        posts = []
    }

    return {
        props: {
            posts
        },
        revalidate: 5
    }
}