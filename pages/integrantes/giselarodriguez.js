import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content';
import Member from '../../components/member'
import CpcSeo from '../../components/cpcseo';


const GiselaRodriguezPage = () => {

    const links = [
      
        {title: "Declaraciones", url: "https://comiteanticorrupcion.mx/publicaciones/DeclaracionesGiselaRodr%C3%ADguez"},
        {title: "Entrevista", url: "https://comiteanticorrupcion.mx/publicaciones/entrevistagisela"},
        {title: "Currículum", url: "https://comiteanticorrupcion.mx/publicaciones/cvgisela"},
        {title: "Nombramiento", url: "https://comiteanticorrupcion.mx/publicaciones/nombramientogisela"},
        {title: "Carta de Intención", url: "https://comiteanticorrupcion.mx/publicaciones/cartamotivosgisela"}
    ]

    return ( 
        <>
            <CpcSeo 
                title="Gisela Rodríguez - Comité de PArticipación Ciudadana de Chihuahua"
                description="Conoce a Gisela Rodríguez, integrante del Comité Participativo Ciudadano de Chihuahua"
                url={`${process.env.NEXT_PUBLIC_BASE_URL}/integrantes/giselarodriguez`}
                imageUrl="https://github.com/cpcwebchih/cpcblog/blob/master/public/images/giselaportada.png?raw=true"
            />
            <Layout>
                <Header position="fixed"/>
                <Content>
                    <Member 
                        title="Gisela Rodríguez"
                        role="Integrante"
                        membersince="2022-2027"
                        photouRL="/images/giselarodriguez.svg"
                        mail="gisela@comiteanticorrupcion.mx"
                        links={links}
                    />
                </Content>
            </Layout>
        </>
     );
}
 
export default GiselaRodriguezPage;
