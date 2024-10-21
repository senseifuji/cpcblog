import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content';
import Member from '../../components/member'
import CpcSeo from '../../components/cpcseo';

const JesusAbbudPage = () => {

    const links = [
        
        {title: "Declaraciones 3 de 3 ", url: "/datos/Declaraciones3de3JesusAbb"},
        {title: "Entrevista", url: "/datos/EntrevistaJesusAbb"},
        {title: "Currículum", url: "/pdfs/CV_JESUSA.pdf"},
        {title: "Nombramiento", url: "/datos/nombramientojesus"},
        {title: "Carta de Intención", url: "/datos/cartajesus"}
    ]

    return ( 
        <>
            <CpcSeo 
                title="Jesús Abbud - Comité de Participación Ciudadana de Chihuahua"
                description="Conoce a Jesús Abbud, integrante del Comité de Participación Ciudadana de Chihuahua"
                url={`${process.env.NEXT_PUBLIC_BASE_URL}/integrantes/jesusabbud`}
                imageUrl="https://comiteanticorrupcion.mx/images/cpcintegrante_jesus.jpg"
            />
            <Layout>
                <Header position="fixed"/>
                <Content>
                    <Member 
                        title="Jesús Abbud"
                        role="Integrante"
                        membersince="2024-2025"
                        photouRL="/images/jesusabuddfr2.png" 
                        mail="jesus@comiteanticorrupcion.mx"
                        twitter="pibe_abbud" 
                        links={links}
                            mailFontSize="sm"
                            linksFontSize="sm"
                    />
                </Content>
            </Layout>
        </>
     );
}
 
export default JesusAbbudPage;
