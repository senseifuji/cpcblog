import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content'
import { Text, Flex, Box, AspectRatio, Container, UnorderedList, ListItem } from '@chakra-ui/react'
import CpcSeo from '../../components/cpcseo'
import customtheme from '../../customtheme'

export default function EntrevistaCarmenAlvarez() {
  const { yellow, white, black, red } = customtheme.colors.cpc
  const { gothamCondensed, gothamCondensedBook } = customtheme.fonts.cpc
  
  return (
    <Layout>
      <CpcSeo 
        title="Entrevista a Carmen Álvarez | CPC Chihuahua"
        description="Mira la entrevista a Carmen Álvarez, miembro del Comité de Participación Ciudadana de Chihuahua."
      />
      <Header position="fixed" />
      <Content>
        <Container maxW="container.xl" py={10}>
          <Flex direction="column" alignItems="center">
            <Box width="100%" bg={red} color={white} p={8} mb={8}>
              <Text fontSize={["3xl", "4xl"]} fontWeight="bold" mb={4} fontFamily={gothamCondensed} textAlign="center">
                Entrevista a Carmen Álvarez
              </Text>
              <Text fontSize="xl" mb={6} fontFamily={gothamCondensedBook} textAlign="center">
                Conoce más sobre Carmen Álvarez, su trayectoria y su visión como miembro del Comité de Participación Ciudadana de Chihuahua.
              </Text>
            </Box>
            <Box width="100%" maxW="800px">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://www.youtube.com/embed/K4MMU9jOK1c"
                  title="Entrevista a Carmen Álvarez"
                  allowFullScreen
                />
              </AspectRatio>
            </Box>
            <Box width="100%" mt={8}>
              <Text fontSize="xl" mb={4} fontFamily={gothamCondensed}>
                En esta entrevista, Carmen Álvarez comparte su experiencia y perspectivas sobre:
              </Text>
              <UnorderedList pl={4} fontFamily={gothamCondensedBook} fontSize="lg" spacing={2}>
                <ListItem>Su trayectoria profesional y académica</ListItem>
                <ListItem>Su visión para el Comité de Participación Ciudadana</ListItem>
                <ListItem>Los retos en la lucha contra la corrupción en Chihuahua</ListItem>
                <ListItem>Propuestas para fomentar la participación ciudadana</ListItem>
              </UnorderedList>
            </Box>
          </Flex>
        </Container>
      </Content>
    </Layout>
  )
}