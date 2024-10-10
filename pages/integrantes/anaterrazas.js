import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content';
import Member from '../../components/member'
import CpcSeo from '../../components/cpcseo';

const AnaTerrazasPage = () => {
    return ( 
        <>
            <CpcSeo 
                title="Ana Terrazas - Comité Participativo Ciudadano de Chihuahua"
                description="Conoce a Ana Terrazas, presidenta del Comité Participativo Ciudadano de Chihuahua"
                url={`${process.env.NEXT_PUBLIC_BASE_URL}/integrantes/anaterrazas`}
                imageUrl="https://cdn.sanity.io/images/o2k6bnet/production/4d901a2cae16f3454e82b734f61f7d64615796a3-800x600.jpg"
            />
            <Layout>
                <Header position="fixed"/>
                <Content>
                    <Member 
                        title="Ana Terrazas"
                        role="Presidenta"
                        membersince="1 año"
                        photouRL="/images/isabelterrazasfr2.png"
                    />
                </Content>
            </Layout>
        </>
     );
}
 
export default AnaTerrazasPage;
