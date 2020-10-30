import Logo from '../svgs/cpclogo';
import Link from 'next/link'
import {useState} from 'react';
import customTheme from '../../config/theme';

const Header = () => {

    //Extracting colors
    const {yellow, white, red} = customTheme.colors.cpc

    //state that is passed to the logo component on hover and unhover
    const [logoColor, setLogoColor] = useState(white)

    return (
        <header>
            <div className="headercontent">
                <div className="logocontainer" >
                    <Link href="/">
                        <a id="logo" 
                            onMouseEnter={() => setLogoColor(yellow)} 
                            onMouseLeave={() => setLogoColor(white)}
                        >
                            <Logo logofill={logoColor} letrasfill={white} width="1em" height="1em"/>
                        </a>
                    </Link>
                </div>
                <div className="linkscontainer">
                    here goes links
                </div>
                <div className="socialmediacontainer">
                    here goes social media
                </div>
            </div>
            <style jsx>{`
                header {
                    background: ${red}
                }  

                #logo{
                    font-size: 5em;
                }

            `}</style>
        </header>
      );
}

 
export default Header;