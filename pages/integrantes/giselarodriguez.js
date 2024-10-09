import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content'
import Member from '../../components/member'
import CpcSeo from '../../components/cpcseo'
import { Box } from "@chakra-ui/react"

const GiselaRodriguezPage = () => {
    const links = [
        {title: "Declaraciones", url: "/datos/DeclaracionesGiselaRodriguez"},
        {title: "Entrevista", url: "/datos/entrevistagisela"},
        {title: "Currículum", url: "https://drive.google.com/file/d/1uT12FxI4Fs86y2teLTx4CjfY7B0lWj-n/view"},
        {title: "Nombramiento", url: "/datos/nombramientogisela"},
        {title: "Carta de Intención", url: "/datos/cartagisela"}
    ]

    return ( 
        <>
            <CpcSeo 
                title="Gisela Rodríguez - Comité de Participación Ciudadana de Chihuahua"
                description="Conoce a Gisela Rodríguez, integrante del Comité Participativo Ciudadano de Chihuahua"
                url={`${process.env.NEXT_PUBLIC_BASE_URL}/integrantes/giselarodriguez`}
                imageUrl="https://github.com/cpcwebchih/cpcblog/blob/master/public/images/giselaportada.png?raw=true"
            />
            <Layout>
                <Header position="fixed"/>
                <Content>
                    <Box maxWidth="800px" margin="auto" padding="2rem">
                        <Member 
                            title="Gisela Rodríguez"
                            role="Integrante"
                            membersince="2022-2027"
                            photouRL="/images/giselarodriguezfr2.png"
                            mail="gisela@comiteanticorrupcion.mx"
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

export default GiselaRodriguezPage