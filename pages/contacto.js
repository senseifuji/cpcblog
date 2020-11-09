import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content';
import { useRouter } from 'next/router'
import CpcSeo from '../components/cpcseo'

export default function Contact() {

    const router = useRouter()
    const path = process.env.NEXT_PUBLIC_BASE_URL + router.asPath

    return (
        <>
            <CpcSeo 
                title="Acerca del CPC - Comité Participativo Ciudadano de Chihuahua"
                description="Conocé que es lo que hacemos en el Comité Participativo Ciudadano de Chihuahua"
                url={path}
                imageUrl=""
            /> 
            <Layout >
                
                <Header position="fixed"/>
                <Content>
                    <h1>Contacto</h1>
                </Content>
            </Layout>
        </>
    )
}
