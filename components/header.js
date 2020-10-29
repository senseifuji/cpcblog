import styled from '@emotion/styled'

const Header = () => {

    const HeaderContainer  = styled.header`

    `

    return (
        <header>
            <div className="headercontent">
                <div className="logocontainer">
                    here goes logo
                </div>
                <div className="linkscontainer">
                    here goes links
                </div>
                <div className="socialmediacontainer">
                    here goes social media
                </div>
            </div>
        </header>
      );
}


 
export default Header;