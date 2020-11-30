import { getSessionBySlug, getAllSessions } from '../../lib/api';
import Layout from '../../components/layout'
import Content from '../../components/content'
import Header from '../../components/header'
import DetailItem from '../../components/detailItem';
import CpcSeo from '../../components/cpcseo';
import {urlFor} from '../../lib/api';



const SessionDetail = ({session}) => {
    const title = `${session.title} - CPC Anticorrupcion`
    const openGraphImage = urlFor(session.coverImage).height(600).width(800).url()
    return ( 
        <>
        <CpcSeo 
            title={title}
            url={`${process.env.NEXT_PUBLIC_BASE_URL}/sesiones/${session.slug}`}
            imageUrl={openGraphImage}
        />
        <Layout >
            <Header position="fixed"/>
            <Content>
                <DetailItem 
                    title={session.title} 
                    author={session.author.name} 
                    date={session.date}
                    coverImage={session.coverImage}
                    content={session.content}
                /> 
            </Content>
        </Layout>
        </>
        
     );
}




export async function getStaticProps({params}){
    const session = await getSessionBySlug(params.slug);
    return {
        props: {session},
        revalidate: 10


    }
}

export async function getStaticPaths(){
    const sessions = await getAllSessions();
    const paths = sessions?.map(session => { return {params: {slug: session.slug}} })
    return {
        paths: paths,
        fallback: 'blocking'
    }
}

 
export default SessionDetail;

