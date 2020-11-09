import { NextSeo } from 'next-seo';


const CpcSeo = ({title, description, url, imageUrl}) => {
    return ( 

        <NextSeo
            title={title}
            description={description}
            canonical="http://comiteanticorrupcion.mx/"
            openGraph={{
            url: url,
            locale: 'es_mx',
            title: {title},
            description: {description},
            images: [
                {
                    url: {imageUrl},
                    width: 800,
                    height: 600,
                    alt: {title},
                }
            ],
            site_name: "CPC Comité Participativo Ciudadano de Chihuahua",
            }}
            twitter={{
                handle: '@cpc_chih',
                site: '@cpc_chih',
                cardType: 'summary_large_image',
            }}
        />


    );
}
 
export default CpcSeo;