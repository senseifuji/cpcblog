import { getSessionBySlug, getAllSessions } from '../../lib/api';
import Layout from '../../components/layout'
import Content from '../../components/content'
import Header from '../../components/header'
import DetailItem from '../../components/detailItem';

const SessionDetail = ({session}) => {
    const title = `${session.title} - CPC Anticorrupcion`
    return ( 

        <Layout title={title}>
            <Header position="fixed"/>
            <Content>
                <DetailItem 
                    title={session.title} 
                    author={session.author.name} 
                    date={session.date}
                    coverImage={session.coverImage}
                /> 
            </Content>
        </Layout>
        
     );
}




export async function getStaticProps({params}){
    const session = await getSessionBySlug(params.slug);
    return {
        props: {session}
    }
}

export async function getStaticPaths(){
    const sessions = await getAllSessions();
    const paths = sessions?.map(session => { return {params: {slug: session.slug}} })
    return {
        paths: paths,
        fallback: false
    }
}

 
export default SessionDetail;

