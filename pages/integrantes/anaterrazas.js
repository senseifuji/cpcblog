import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content';
import Member from '../../components/member'

const AnaTerrazasPage = () => {
    const links = [
        {title: "Enlace de prueba 1", url: "#"},
        {title: "Enlace de prueba 2", url: "#"}
    ]

    return ( 
        <Layout>
            <Header position="fixed"/>
            <Content>
                <Member 
                    title="Ana Terrazas"
                    role="Presidenta"
                    membersince="1 año"
                    photouRL="/images/anaterrazas.svg" 
                    links={links}
                />
            </Content>
        </Layout>
     );
}
 
export default AnaTerrazasPage;