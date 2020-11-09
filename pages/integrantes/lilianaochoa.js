import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content';
import Member from '../../components/member'

const LilianaochoaPage = () => {
    const links = [
        {title: "Enlace de prueba 1", url: "#"},
        {title: "Enlace de prueba 2", url: "#"}
    ]

    return ( 
        <Layout>
            <Header position="fixed"/>
            <Content>
                <Member 
                    title="Liliana Ochoa"
                    role="Integrante"
                    membersince="2 años"
                    photouRL="/images/lilianaochoa.svg" 
                    links={links}
                />
            </Content>
        </Layout>
     );
}
 
export default LilianaochoaPage;