import { createClient } from '@sanity/client'

console.log('Configuración de Sanity:')
console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
console.log('Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET)
console.log('Modo de producción:', process.env.NODE_ENV === 'production')

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-03-25', // usa la fecha actual YYYY-MM-DD
  useCdn: process.env.NODE_ENV === 'production',
})

console.log('Cliente Sanity creado:', client)

export default client