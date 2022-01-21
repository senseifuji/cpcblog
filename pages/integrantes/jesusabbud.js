import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content';
import Member from '../../components/member'
import CpcSeo from '../../components/cpcseo';

const JesusAbbudPage = () => {

    const links = [
        {title: "Contrato Anual", url: "#"},
        {title: "Declaraciones 3 de 3 ", url: "#"},
        {title: "Entrevista", url: "#"},
        {title: "Currículum", url: "#"},
        {title: "Nombramiento", url: "#"},
        {title: "Carta de Intención", url: "#"}
    ]

    return ( 
        <>
            <CpcSeo 
                title="Jesús Abbud - Comité de Participación Ciudadana de Chihuahua"
                description="Conoce a Jesús Abbud, integrante del Comité de Participación Ciudadana de Chihuahua"
                url={`${process.env.NEXT_PUBLIC_BASE_URL}/integrantes/jesusabbud`}
                imageUrl="https://cdn.sanity.io/images/o2k6bnet/production/ef4efbd86d6543de7975b94a243673461c230a81-800x600.jpg"
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
