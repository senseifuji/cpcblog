import Layout from '../../components/layout'
import Section from '../../components/section'
import { Text, Flex, Link, Box, Image, Button, Container, VStack } from '@chakra-ui/react'
import CpcSeo from '../../components/cpcseo'
import customtheme from '../../customtheme'

export default function Declaraciones3de3JesusAbbud() {
  const { yellow, white, black, red, blue } = customtheme.colors.cpc
  
  const documents = [
    { title: "Declaración 3 de 3 - 2020", url: "/pdfs/Declaraciones_JesúsAbbud_TESTADO.pdf" },
    { title: "Declaración 3 de 3 - 2021", url: "/pdfs/dJesusAbbudTestada_2021.pdf" },
    { title: "Declaración Patrimonial - 2023", url: "/pdfs/DECLARACION_PATRIMONIAL_JESUSA.pdf" },
    { title: "Código de Ética y Conducta", url: "/pdfs/JESUS_CODIGO_DE_ETICA_Y_CONDUCTA_CPC.pdf" },
    { title: "Posibles Conflictos de Interés", url: "public/pdfs/Exposicion_de_motivos_jesus.pdf" }
  ]

  return (
    <Layout>
      <CpcSeo 
        title="Declaraciones 3 de 3 de Jesús Abbud | CPC Chihuahua"
        description="Accede a las declaraciones 3 de 3 y documentos relacionados de Jesús Abbud, miembro del Comité de Participación Ciudadana de Chihuahua."
      />
      <Container maxW="container.xl" py={10} bg={red} color={white}>
        <VStack spacing={8} align="center">
          <Image src="/images/jesusabuddfr2.png" alt="Jesús Abbud" borderRadius="full" boxSize={["200px", "250px", "300px", "300px"]} objectFit="cover" />
          <Box textAlign="center">
            <Text fontSize={["2xl", "3xl"]} fontWeight="bold" mb={4} fontFamily="cpc.gothamCondensed">
              Declaraciones 3 de 3 de Jesús Abbud
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
