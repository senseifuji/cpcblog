import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content';
import Member from '../../components/member'
import CpcSeo from '../../components/cpcseo';
import { Box } from "@chakra-ui/react"


const MiguelGomezPage = () => {

    const links = [
      
        {title: "Declaraciones 3 de 3 ", url: "https://comiteanticorrupcion.mx/publicaciones/DeclaracionesMiguelG%C3%B3mez"},
        {title: "Entrevista", url: "https://comiteanticorrupcion.mx/publicaciones/entrevistamiguel"},
        {title: "Currículum", url: "https://comiteanticorrupcion.mx/publicaciones/cvmiguel"},
        {title: "Nombramiento", url: "https://comiteanticorrupcion.mx/publicaciones/nombramientomiguel"},
        {title: "Carta de Intención", url: "https://comiteanticorrupcion.mx/publicaciones/cartamiguel"}
    ]

    return ( 
        <>
            <CpcSeo 
                title="Miguel Gómez - Comité Participativo Ciudadano de Chihuahua"
                description="Conoce a Miguel Gómez, integrante del Comité Participativo Ciudadano de Chihuahua"
                url={`${process.env.NEXT_PUBLIC_BASE_URL}/integrantes/miguelgomez`}
                imageUrl="https://cdn.sanity.io/images/o2k6bnet/production/bd81d5d12a7104ae14fe85599510aa0859f9693c-800x600.jpg"
            />
            <Layout>
                <Header position="fixed"/>
                <Content>
                    <Box maxWidth="800px" margin="auto" padding="2rem">
                    <Member 
                        title="Miguel Gómez"
                        role="Integrante"
                        membersince="2019-2024"
                        photouRL="/images/salvadordominguezfr2.png"
                        mail="miguel@comiteanticorrupcion.mx"
                        twitter="MiguelSGomezGlz"
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
 
export default MiguelGomezPage;
