import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-03-25', // usa la fecha actual YYYY-MM-DD
  useCdn: process.env.NODE_ENV === 'production',
})

export default client