import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content';
import Member from '../../components/member'
import CpcSeo from '../../components/cpcseo';
import { Box } from "@chakra-ui/react"

const HectorVillanuevaPage = () => {
    const links = [
        {title: "Declaraciones 3 de 3", url: "/publicaciones/DeclaracionesHectorVillanueva"},
        {title: "Entrevista", url: "/publicaciones/EntrevistaHector"},
        {title: "Currículum", url: "/pdfs/CV_HECTORV.pdf"},
        {title: "Nombramiento", url: "/publicaciones/nombramientohector"},
        {title: "Carta de Intención", url: "/publicaciones/cartahector"}
    ]

    return ( 
        <>
            <CpcSeo 
                title="Héctor Villanueva - Comité de Participación Ciudadana de Chihuahua"
                description="Conoce a Héctor Villanueva, integrante del Comité de Participación Ciudadana de Chihuahua"
                url={`${process.env.NEXT_PUBLIC_BASE_URL}/integrantes/hectorvillanueva`}
                imageUrl="/images/hectorvillanuevaprofile.jpg"
            />
            <Layout>
                <Header position="fixed"/>
                <Content>
                    <Box maxWidth="800px" margin="auto" padding="2rem">
                        <Member 
                            title="Héctor Villanueva"
                            role="Integrante"
                            membersince="2022-2027"
                            photouRL="/images/hectorvillanuevaprofile.jpg"
                            mail="hector@comiteanticorrupcion.mx"
                            links={links}
                            mailFontSize="sm"
                            linksFontSize="sm"
                        />
                    </Box>
                </Content>
            </Layout>
        </>
     );
}

export default HectorVillanuevaPage;