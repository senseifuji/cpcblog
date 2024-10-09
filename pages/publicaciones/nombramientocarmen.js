import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content'
import { Text, Flex, Box, Container, Button, Image, AspectRatio } from '@chakra-ui/react'
import CpcSeo from '../../components/cpcseo'
import customtheme from '../../customtheme'
import { FaFileDownload } from 'react-icons/fa'

export default function NombramientoCarmenAlvarez() {
  const { white, black, red } = customtheme.colors.cpc
  const { gothamCondensed, gothamCondensedBook } = customtheme.fonts.cpc
  
  return (
    <Layout>
      <CpcSeo 
        title="Nombramiento de Carmen Álvarez | CPC Chihuahua"
        description="Documento de nombramiento de Carmen Álvarez como miembro del Comité de Participación Ciudadana de Chihuahua."
      />
      <Header position="fixed" />
      <Content>
        <Container maxW="container.xl" py={10}>
          <Flex direction="column" alignItems="center">
            <Box width="100%" bg={red} color={white} p={8} mb={8}>
              <Flex direction={["column", "row"]} alignItems="center" justifyContent="center">
                <Image 
                  src="/images/carmenalvarezfr2.png" 
                  alt="Carmen Álvarez" 
                  borderRadius="full" 
                  boxSize={["200px", "250px"]} 
                  objectFit="cover"
                  mr={[0, 8]}
                  mb={[4, 0]}
                />
                <Box>
                  <Text fontSize={["3xl", "4xl"]} fontWeight="bold" mb={4} fontFamily={gothamCondensed} textAlign="center">
                    Nombramiento de Carmen Álvarez
                  </Text>
                  <Text fontSize="xl" mb={6} fontFamily={gothamCondensedBook} textAlign="center">
                    Documento oficial que acredita a Carmen Álvarez como miembro del Comité de Participación Ciudadana de Chihuahua.
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Box width="100%" maxW="800px" textAlign="center" mb={8}>
              <Text fontSize="xl" mb={6} fontFamily={gothamCondensedBook}>
                El nombramiento es un documento oficial que certifica la designación de Carmen Álvarez como miembro del Comité de Participación Ciudadana. Este documento es una prueba de su compromiso y responsabilidad en la lucha contra la corrupción en el estado de Chihuahua.
              </Text>
              <Button 
                leftIcon={<FaFileDownload />} 
                bg={red}
                color={white}
                size="md" 
                fontFamily={gothamCondensed}
                fontSize="sm"
                px={4}
                py={2}
                _hover={{ bg: "cpc.redMedium" }}
                onClick={() => window.open('/pdfs/nombramientocarmen.png', '_blank')}
              >
                Descargar Nombramiento
              </Button>
            </Box>
            <Box width="100%" maxW="800px">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src="/pdfs/nombramientocarmen.png"
                  alt="Nombramiento de Carmen Álvarez"
                  objectFit="contain"
                />
              </AspectRatio>
            </Box>
          </Flex>
        </Container>
      </Content>
    </Layout>
  )
}