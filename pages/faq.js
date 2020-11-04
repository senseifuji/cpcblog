import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content';
import FaqItem from '../components/faqItem';
import Section from '../components/section';
import {getAllFaqs} from '../lib/api'

export default function FaqPage({faqs}) {
    return (
        <Layout title="Preguntas frecuentes de - CPC Anticorrupcion">
            <Header position="fixed"/>
            <Content>
                <Section bg="cpc.yellow" color="cpc.white">
                    {faqs.map(faq => <FaqItem key={faq._id} question={faq.question} answer={faq.answer}/>)}
                </Section>
            </Content>
        </Layout>
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
        }
    }

}
