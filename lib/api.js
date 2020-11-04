import client from './sanity'
import imageUrlBuilder from '@sanity/image-url';


//data to get from posts options
const postOptions = `
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
    const posts = await client.fetch(`*[_type == "posts"] | order(date desc) {${postOptions}}`)
    return posts;
}

// ---------UTILS----------
// builder for cropping/hotspot images...
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}



