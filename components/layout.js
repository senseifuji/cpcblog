import Head from 'next/head'

const Layout = ({children, title}) => {
    return ( 
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container">
                {children}
            </div>  
        </>
     );
}
 
export default Layout;