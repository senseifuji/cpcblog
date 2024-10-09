import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content';
import Member from '../../components/member'
import CpcSeo from '../../components/cpcseo';
import { Box } from "@chakra-ui/react"


const CarmenAlvarezPage = () => {
    const links = [
        {title: "Declaraciones 3 de 3", url: "/datos/DeclaracionesCarmenAlvarez"},
        {title: "Entrevista", url: "/datos/EntrevistaCarmen"},
        {title: "Currículum", url: "https://drive.google.com/file/d/1GHk48kAoBRL0weNv_dgyxLolLxdJA3Wv/view"},
        {title: "Nombramiento", url: "/datos/nombramientocarmen"},
        {title: "Carta de Intención", url: "/datos/cartacarmen"}
    ]

    return ( 
        <>
            <CpcSeo 
                title="Carmen Álvarez - Comité Participativo Ciudadano de Chihuahua"
                description="Conoce a Carmen Álvarez, integrante del Comité Participativo Ciudadano de Chihuahua"
                url={`${process.env.NEXT_PUBLIC_BASE_URL}/integrantes/carmenalvarez`}
                imageUrl="https://cdn.sanity.io/images/o2k6bnet/production/f97a7bc67276ca81e00244bbe8c1155cff186cf9-800x600.jpg"
            />
            <Layout>
                <Header position="fixed"/>
                <Content>
    <Box maxWidth="800px" margin="auto" padding="2rem">
        <Member 
            title="Carmen Álvarez"
            role="Integrante"
            membersince="2020-2025"
            photouRL="/images/carmenalvarezfr2.png"
            mail="carmen@comiteanticorrupcion.mx"
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

export default CarmenAlvarezPage;