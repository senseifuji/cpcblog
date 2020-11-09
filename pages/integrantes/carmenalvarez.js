import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content';
import Member from '../../components/member'


const CarmenAlvarezPage = () => {

    const links = [
       {title: "Enlace de prueba 1", url: "#"},
        {title: "Enlace de prueba 2", url: "#"}
    ]

    return ( 
        <Layout>
            <Header position="fixed"/>
            <Content>
                 <Member 
                    title="Carmen Álvarez"
                    role="Integrante"
                    membersince="5 años"
                    photouRL="/images/carmenalvarez.svg" 
                    links={links}
                />
            </Content>
        </Layout>
     );
}
 
export default CarmenAlvarezPage;