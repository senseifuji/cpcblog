import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content';
import Member from '../../components/member'


const MiguelGomezPage = () => {

    const links = [
        {title: "Enlace de prueba 1", url: "#"},
        {title: "Enlace de prueba 2", url: "#"}
    ]

    return ( 
        <Layout>
            <Header position="fixed"/>
            <Content>
                 <Member 
                    title="Miguel Gómez"
                    role="Integrante"
                    membersince="4 años"
                    photouRL="/images/miguelgomez.svg" 
                    links={links}
                />
            </Content>
        </Layout>
     );
}
 
export default MiguelGomezPage;