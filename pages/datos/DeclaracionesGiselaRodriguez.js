import Layout from '../../components/layout'
import { Container, VStack, Box, Text, Button, Image, Flex } from "@chakra-ui/react"
import CpcSeo from '../../components/cpcseo'
import customtheme from '../../customtheme'

export default function DeclaracionesGiselaRodriguez() {
  const { yellow, white, black, red, blue } = customtheme.colors.cpc
  
  const documents = [
    { title: "Declaración 3 de 3", url: "https://drive.google.com/file/d/1Fn8_KELM4-0YkvfbUV0ml1-3H4OuRgU-/view" },
    { title: "Declaración de conflicto de intereses 2022", url: "https://drive.google.com/file/d/1lR52mt3wAls5lNE_8IXHphALR-zIwuTr/view" },
    { title: "Declaración de código y conducta", url: "https://drive.google.com/file/d/1TOAGV-AkLpVlOyDh5kXJKEQsoSM2Fb8a/view" },	
  ]

  return (
    <Layout>
      <CpcSeo 
        title="Declaraciones 3 de 3 de Gisela Rodríguez | CPC Chihuahua"
        description="Accede a las declaraciones 3 de 3 y documentos relacionados de Gisela Rodríguez, miembro del Comité de Participación Ciudadana de Chihuahua."
      />
      <Container maxW="container.xl" py={10} bg={red} color={white}>
        <VStack spacing={8} align="center">
          <Image src="/images/giselarodriguezfr2.png" alt="Gisela Rodríguez" borderRadius="full" boxSize={["200px", "250px", "300px", "300px"]} objectFit="cover" />
          <Box textAlign="center">
            <Text fontSize={["2xl", "3xl"]} fontWeight="bold" mb={4} fontFamily="cpc.gothamCondensed">
              Declaraciones 3 de 3 de Gisela Rodríguez
            </Text>
            <Text fontSize="lg" mb={6} fontFamily="cpc.gothamCondensed">
              La transparencia y la rendición de cuentas son fundamentales para la confianza ciudadana. Aquí puedes acceder a mis declaraciones y documentos relacionados.
            </Text>
          </Box>
          <Flex direction="column" align="center">
            {documents.map((doc, index) => (
              <Box key={index} mb={4}>
                <Button as="a" href={doc.url} isExternal bg={blue} color={white} _hover={{ bg: "cpc.blueMedium" }} fontFamily="cpc.gothamCondensed" size="md" fontSize="lg" px={6} py={3}>
                  <i className="far fa-file-alt mr-2"></i> {doc.title}
                </Button>
              </Box>
            ))}
          </Flex>
        </VStack>
      </Container>
    </Layout>
  )
}