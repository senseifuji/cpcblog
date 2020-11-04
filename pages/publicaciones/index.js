import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content';
import PostItem from '../../components/postItem';
import Section from '../../components/section'

import { getAllPosts } from '../../lib/api';

export default function PublicacionesPage({posts}) {
    console.log("posts =>", posts)
    return (
        <Layout title="Publicaciones de CPC Anticorrupcion">
            <Header position="fixed"/>
            <Content>
                <Section bg="cpc.yellow" color="cpc.white">
                    { posts.map(post => 
                        <PostItem key={post._id} 
                            title={post.title} 
                            author={post.author} 
                            date={post.date}
                            image={post.coverImage}
                            url={`/publicaciones/${post.slug}`}
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
    let posts;
    try{
        const response = await getAllPosts();
        posts = response
    } catch(e){
        posts = []
    }

    return {
        props: {
            posts
        }
    }

}
