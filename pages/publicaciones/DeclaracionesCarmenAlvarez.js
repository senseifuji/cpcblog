import Layout from '../../components/layout'
import Section from '../../components/section'
import { Text, Flex, Link, Box, Image, Button, Container, VStack } from '@chakra-ui/react'
import CpcSeo from '../../components/cpcseo'
import customtheme from '../../customtheme'

export default function DeclaracionesCarmenAlvarez() {
  const { yellow, white, black, red, blue } = customtheme.colors.cpc
  
  const documents = [
    { title: "Declaración patrimonial 2022", url: "https://drive.google.com/file/d/1KrxQVBL9tzd-R7TDBs1a3gtC-5icI_9r/view" },
    { title: "Declaración de conflicto de intereses 2022", url: "https://drive.google.com/file/d/1YhEsS6kQChFy15Ze592JhfkoJjxVhNQO/view" },
  ]

  return (
    <Layout>
      <CpcSeo 
        title="Declaraciones 3 de 3 de Carmen Álvarez | CPC Chihuahua"
        description="Accede a las declaraciones 3 de 3 y documentos relacionados de Carmen Álvarez, miembro del Comité de Participación Ciudadana de Chihuahua."
      />
      <Container maxW="container.xl" py={10} bg={red} color={white}>
        <VStack spacing={8} align="center">
          <Image src="/images/carmenalvarezfr2.png" alt="Carmen Álvarez" borderRadius="full" boxSize={["200px", "250px", "300px", "300px"]} objectFit="cover" />
          <Box textAlign="center">
            <Text fontSize={["2xl", "3xl"]} fontWeight="bold" mb={4} fontFamily="cpc.gothamCondensed">
              Declaraciones 3 de 3 de Carmen Álvarez
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