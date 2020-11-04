import client from './sanity'

export async function getAllFaqs(){
    const faqs = await client.fetch(`*[_type == "questions"]{_id, question, answer}`)
    return faqs;
}