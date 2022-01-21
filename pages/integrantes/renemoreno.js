import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content';
import Member from '../../components/member'
import CpcSeo from '../../components/cpcseo';

const ReneMorenoPage = () => {

    const links = [
        {title: "Contrato Anual", url: "https://comiteanticorrupcion.mx/publicaciones/ContratosRene"},
        {title: "Declaraciones 3 de 3 ", url: "#"},
        {title: "Entrevista", url: "https://comiteanticorrupcion.mx/publicaciones/EntrevistaReneMoreno"},
        {title: "Currículum", url: "https://comiteanticorrupcion.mx/publicaciones/CVReneMoreno"},
        {title: "Nombramiento", url: "https://comiteanticorrupcion.mx/publicaciones/nombramientorene"},
        {title: "Carta de Intención", url: "#"}
    ]

    return ( 
        <>
            <CpcSeo 
                title="René Moreno - Comité de Participación Ciudadana de Chihuahua"
                description="Conoce a René Moreno, integrante del Comité de Participación Ciudadana de Chihuahua"
                url={`${process.env.NEXT_PUBLIC_BASE_URL}/integrantes/renemoreno`}
                imageUrl="https://cdn.sanity.io/images/o2k6bnet/production/ef4efbd86d6543de7975b94a243673461c230a81-800x600.jpg"
            />
            <Layout>
                <Header position="fixed"/>
                <Content>
                    <Member 
                        title="René Moreno"
                        role="Integrante"
                        membersince="2018-2023"
                        photouRL="/images/renemoreno.svg" 
                        mail="rene@comiteanticorrupcion.mx"
                        twitter="elperrogacho" 
                        phone="+526142476818"
                        links={links}
                    />
                </Content>
            </Layout>
        </>
     );
}
 
export default ReneMorenoPage;
