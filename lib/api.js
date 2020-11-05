import client from './sanity'
import imageUrlBuilder from '@sanity/image-url';


//data to get from posts options
const options = `
  _id, 
  title,
  slug,
  date,
  'author': author->{name, 'avatar': avatar.asset->url},
  coverImage,
`

// ----------------QUERYS---------------
export async function getAllFaqs(){
    const faqs = await client.fetch(`*[_type == "questions"]{_id, question, answer}`)
    return faqs;
}

export async function getAllPosts(){
    const posts = await client.fetch(`*[_type == "posts"] | order(date desc) {${options}}`)
    return posts;
}

export async function getAllSessions(){
    const sessions = await client.fetch(`*[_type == "sessions"] | order(date desc) {${options}}`)
    return sessions;
}

export async function getPostBySlug(slug){
  console.log("slug slug from api =>", slug)
  const results = await client.fetch(`*[_type == "posts" && slug == $slug] {
    ${options} 
  }`, {slug})

  console.log("results =>", results)

  return results[0]
}

// ---------UTILS----------
// builder for cropping/hotspot images...
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}



