import { getPostBySlug, getAllPosts } from '../../lib/api';
import { Heading, Text } from '@chakra-ui/core';
import Layout from '../../components/layout'
import Content from '../../components/content'
import Header from '../../components/header'
import DetailItem from '../../components/detailItem';

const PostDetail = ({post}) => {
    const title = `${post.title} - CPC Anticorrupcion`
    return ( 

        <Layout >
            <Header position="fixed"/>
            <Content>
                <DetailItem 
                    title={post.title} 
                    author={post.author.name} 
                    date={post.date}
                    coverImage={post.coverImage}
                    content={post.content}
                /> 
            </Content>
        </Layout>
     );
}


export async function getStaticProps({params}){
    const post = await getPostBySlug(params.slug);
    return {
        props: {post}
    }
}

export async function getStaticPaths(){
    const posts = await getAllPosts();
    const paths = posts?.map(post => { return {params: {slug: post.slug}} })
    return {
        paths: paths,
        fallback: false
    }
}

 
export default PostDetail;