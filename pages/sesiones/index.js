import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content';
import ListItem from '../../components/listitem';
import Section from '../../components/section'

import { getAllSessions } from '../../lib/api';

export default function SesionesPage({sessions}) {
    return (
        <Layout title="Sesiones de CPC Anticorrupcion">
            <Header position="fixed"/>
            <Content>
                <Section bg="cpc.yellow" color="cpc.white">
                    { sessions.map(session => 
                        <ListItem key={session._id} 
                            title={session.title} 
                            author={session.author} 
                            date={session.date}
                            image={session.coverImage}
                            url={`/sesiones/${session.slug}`}
                        />
                    )}
                </Section>
            </Content>
        </Layout>
    )
}


//this functions run on build time on server.
//provides props to your page, and makes it static
export async function getStaticProps(){
    let sessions;
    try{
        const response = await getAllSessions();
        sessions = response
    } catch(e){
        sessions = []
    }

    return {
        props: {
            sessions
        }
    }

}
