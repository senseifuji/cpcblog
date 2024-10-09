import { getPostBySlug, getAllPosts } from '../../lib/api';
import Layout from '../../components/layout'
import Content from '../../components/content'
import Header from '../../components/header'
import DetailItem from '../../components/detailItem';
import CpcSeo from '../../components/cpcseo';
import {urlFor} from '../../lib/api';

const PostDetail = ({post}) => {
    const title = `${post.title} - CPC Anticorrupcion`
    const openGraphImage = post.coverImage ? urlFor(post.coverImage).height(600).width(800).url() : '/ruta/a/imagen/por/defecto.jpg'

    return ( 
        <>
            <CpcSeo 
                title={title}
                url={`${process.env.NEXT_PUBLIC_BASE_URL}/publicaciones/${post.slug}`}
                imageUrl={openGraphImage}
            />
            <Layout >
                <Header position="fixed"/>
                <Content>
                    <DetailItem 
                        title={post.title} 
                        author={post.author} 
                        date={post.date}
                        coverImage={post.coverImage}
                        content={post.content}
                    /> 
                </Content>
            </Layout> 
        </>
     );
}

export async function getStaticProps({params}){
    const post = await getPostBySlug(params.slug);
    return {
        props: {post},
        revalidate: 1
    }
}

export async function getStaticPaths(){
    const posts = await getAllPosts();
    const paths = posts?.map(post => ({ params: { slug: post.slug } }))
    return {
        paths,
        fallback: 'blocking'
    }
}

export default PostDetail;
