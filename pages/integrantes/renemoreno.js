import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content';
import Member from '../../components/member'

const ReneMorenoPage = () => {

    const links = [
        {title: "Contrato Anual", url: "#"},
        {title: "Declaraciones 3 de 3 ", url: "#"},
        {title: "Entrevista", url: "#"},
        {title: "Curriculum", url: "#"},
        {title: "Nombramiento", url: "#"},
        {title: "Carta de Intención", url: "#"}
    ]

    return ( 
        <Layout>
            <Header position="fixed"/>
            <Content>
                <Member 
                    title="René Moreno"
                    role="Integrante"
                    membersince="3 años"
                    photouRL="/images/renemoreno.svg" 
                    mail="rene@anticorrupcion.mx"
                    twitter="@elperrogacho" 
                    phone="+526142476818"
                    links={links}
                />
            </Content>
        </Layout>
     );
}
 
export default ReneMorenoPage;