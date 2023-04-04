import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content';
import Member from '../../components/member'
import CpcSeo from '../../components/cpcseo';

const JesusAbbudPage = () => {

    const links = [
        
        {title: "Declaraciones 3 de 3 ", url: "https://comiteanticorrupcion.mx/publicaciones/Declaraciones3de3Jes%C3%BAsAbbud"},
        {title: "Entrevista", url: "https://comiteanticorrupcion.mx/publicaciones/entrevistajesus"},
        {title: "Currículum", url: "https://comiteanticorrupcion.mx/publicaciones/cvjesus"},
        {title: "Nombramiento", url: "https://comiteanticorrupcion.mx/publicaciones/nombramientojesus"},
        {title: "Carta de Intención", url: "https://comiteanticorrupcion.mx/publicaciones/cartajesus"}
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
                        membersince="2021-2026"
                        photouRL="/images/jesus.svg" 
                        mail="jesus@comiteanticorrupcion.mx"
                        twitter="pibe_abbud" 
                        links={links}
                    />
                </Content>
            </Layout>
        </>
     );
}
 
export default JesusAbbudPage;
