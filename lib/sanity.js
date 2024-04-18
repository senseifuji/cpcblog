import sanityClient from '@sanity/client';

const options = {
    dataset: process.env.SANITY_DATASET_NAME,
    projectId: process.env.SANITY_PROJECT_ID,
    apiVersion: '2024-04-18',
    useCdn: process.env.NODE_ENV === 'production'
    //use cdn === true, gives you fast response with cached data
    //use cdn === galse, gives you slower response with latest data
}

export default sanityClient(options);
