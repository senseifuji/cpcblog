import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content';
import FaqItem from '../components/faqItem';
import Section from '../components/section';
import {getAllFaqs} from '../lib/api'
import customtheme from '../customtheme.js'
import { Flex, Text } from '@chakra-ui/core';
import { useRouter } from 'next/router'
import CpcSeo from '../components/cpcseo'

export default function FaqPage({faqs}) {
    const {colors} = customtheme
    const router = useRouter()
    const path = process.env.NEXT_PUBLIC_BASE_URL + router.asPath

    return (
        <>
            <CpcSeo 
                title="Preguntas frecuentes CPC - Comité Participativo Ciudadano de Chihuahua"
                description="Preguntas más frecuentes acerca del Comité Participativo Ciudadano de Chihuahua (CPC)."
                url={path}
                imageUrl={process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_URL}
            />
            <Layout >
                <Header position="fixed"/>
                <Content>
                    {/* Top SECTION */}
                    <Section bg="cpc.red" color="cpc.white">
                        <Text fontSize={["2em", "1.5em", "3em", "3em"]} fontFamily="cpc.gothamBold" textAlign="center" lineHeight="1.18em">
                            <b>Preguntas <br/> frecuentes al CPC</b>
                        </Text>
                    </Section>  
                    <Section bg="cpc.white" color="cpc.red">
                        <Flex direction="column" height="auto">
                            {faqs.map(faq => <FaqItem key={faq._id} question={faq.question} answer={faq.answer}/>)}
                        </Flex>
                    </Section>
                </Content>
            </Layout>
        </>
    )
}

//this functions run on build time on server.
//provides props to your page, and makes it static
export async function getStaticProps(){
    let faqs;
    try{
        const response = await getAllFaqs();
        faqs = response
    } catch(e){
        faqs = []
    }

    return {
        props: {
            faqs
        },
        revalidate: 10

    }

}
