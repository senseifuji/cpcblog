import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content'
import { Text, Flex, Box, Container, Button, Image, AspectRatio } from '@chakra-ui/react'
import CpcSeo from '../../components/cpcseo'
import customtheme from '../../customtheme'
import { FaFileDownload } from 'react-icons/fa'

export default function CartaIntencionJesusAbbud() {
  const { white, black, red } = customtheme.colors.cpc
  const { gothamCondensed, gothamCondensedBook } = customtheme.fonts.cpc
  
  return (
    <Layout>
      <CpcSeo 
        title="Carta de Intención de Jesús Abbud | CPC Chihuahua"
        description="Carta de intención y exposición de motivos de Jesús Abbud para el Comité de Participación Ciudadana de Chihuahua."
      />
      <Header position="fixed" />
      <Content>
        <Container maxW="container.xl" py={10}>
          <Flex direction="column" alignItems="center">
            <Box width="100%" bg={red} color={white} p={8} mb={8}>
              <Flex direction={["column", "row"]} alignItems="center" justifyContent="center">
                <Image 
                  src="/images/jesusabuddfr2.png" 
                  alt="Jesús Abbud" 
                  borderRadius="full" 
                  boxSize={["200px", "250px"]} 
                  objectFit="cover"
                  mr={[0, 8]}
                  mb={[4, 0]}
                />
                <Box>
                  <Text fontSize={["3xl", "4xl"]} fontWeight="bold" mb={4} fontFamily={gothamCondensed} textAlign="center">
                    Carta de Intención de Jesús Abbud
                  </Text>
                  <Text fontSize="xl" mb={6} fontFamily={gothamCondensedBook} textAlign="center">
                    Exposición de motivos de Jesús Abbud para formar parte del Comité de Participación Ciudadana de Chihuahua.
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Box width="100%" maxW="800px" textAlign="center" mb={8}>
              <Text fontSize="xl" mb={6} fontFamily={gothamCondensedBook}>
                La carta de intención es un documento que expone las razones y motivaciones de Jesús Abbud para formar parte del Comité de Participación Ciudadana. Este documento refleja su compromiso con la transparencia y la lucha contra la corrupción en el estado de Chihuahua.
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
                onClick={() => window.open('/pdfs/exposicion_de_motivos_jesus.pdf', '_blank')}
              >
                Descargar Carta de Intención
              </Button>
            </Box>
            <Box width="100%" maxW="800px">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="/pdfs/exposicion_de_motivos_jesus.pdf"
                  title="Carta de Intención de Jesús Abbud"
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                />
              </AspectRatio>
            </Box>
          </Flex>
        </Container>
      </Content>
    </Layout>
  )
}