import client from './sanity'
import imageUrlBuilder from '@sanity/image-url';


//data to get from posts options
const options = `
  _id, 
  title,
  slug,
  date,
  'author': author->{name, avatar},
  coverImage,
`

// ----------------QUERYS---------------
export async function getAllFaqs(){
    const faqs = await client.fetch(`*[_type == "questions"] | order(_createdAt asc) {_id, question, answer}`)
    return faqs;
}

export async function getAllPosts(){
    const posts = await client.fetch(`*[_type == "posts"] | order(date desc) {${options} content}`)
    return posts;
}

export async function getAllSessions(){
    const sessions = await client.fetch(`*[_type == "sessions"] | order(date desc) {${options} content}`)
    return sessions;
}

export async function getPostBySlug(slug){
  const results = await client.fetch(`*[_type == "posts" && slug == $slug] {
    ${options} 
    content[]{..., "asset": asset->}
  }`, {slug}).then(res => res?.[1] ? res[1] : res[0])

  return results
}

export async function getSessionBySlug(slug){
  const results = await client.fetch(`*[_type == "sessions" && slug == $slug] {
    ${options} 
    content[]{..., "asset": asset->}
  }`, {slug}).then(res => res?.[1] ? res[1] : res[0])

  return results
}

// ---------UTILS----------
// builder for cropping/hotspot images...
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}



