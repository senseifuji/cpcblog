import imageUrlBuilder from '@sanity/image-url';
import client from './sanity'

// Datos a obtener de las opciones de posts
const options = `
  _id, 
  title,
  slug,
  date,
  'author': author->{name, avatar},
  coverImage,
`

// ----------------CONSULTAS---------------

export async function getBanners() {
  console.log("Iniciando getBanners");
  const results = await client.fetch(`*[_type == "banner"] | order(_createdAt desc)`);
  console.log("Finalizando getBanners");
  return results;
}

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

// ---------UTILIDADES----------
// Constructor para recortar/ajustar imágenes...
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
