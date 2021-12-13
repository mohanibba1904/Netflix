import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import './index.css'

import {HiMoon} from 'react-icons/hi'
import {FiSun} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'

import Context from '../../Context/Context'
import {
  HeaderContainer,
  HeaderLinksContainer,
  HeaderLogo,
  HeaderThemeButton,
  HeaderUserImageContainer,
  HeaderLargeUserImage,
  HeaderLogoutButton,
  LogoutModalContainer,
  LogoutModalText,
  LogoutButtonsContainer,
  LogoutModalCancelButton,
  LogoutModalLogoutButton,
} from './styledComponents'

class Header extends Component {
  removeJwtToken = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isLightThemeActive, alterTheme, alterActiveRoute} = value
          const headerBackgroundColor = isLightThemeActive
            ? '#ffffff'
            : '#181818'
          const headerLogoImage = isLightThemeActive
            ? 'https://res.cloudinary.com/dnbrzqhbk/image/upload/v1639388967/wp5063339_dyoz5m.png'
            : 'https://res.cloudinary.com/dnbrzqhbk/image/upload/v1639388967/wp5063339_dyoz5m.png'
          const onClickLogoImage = () => {
            alterActiveRoute('home')
          }
          const themeButtonImage = isLightThemeActive ? (
            <HiMoon size="35" />
          ) : (
            <FiSun size="35" color="#f9f9f9" />
          )
          const headerUserIconColor = isLightThemeActive ? '#181818' : '#f9f9f9'
          const popupModalBgColor = isLightThemeActive ? '#f9f9f9' : '#181818'
          const popupModalTextColor = isLightThemeActive ? '#181818' : '#f9f9f9'
          return (
            <HeaderContainer backgroundColor={headerBackgroundColor}>
              <Link to="/" onClick={onClickLogoImage}>
                <HeaderLogo src={headerLogoImage} alt="website logo" />
              </Link>
              <HeaderLinksContainer>
                <HeaderThemeButton
                  type="button"
                  onClick={alterTheme}
                  data-testid="theme"
                >
                  {themeButtonImage}
                </HeaderThemeButton>
                <HeaderLargeUserImage
                  src="https://res.cloudinary.com/dnbrzqhbk/image/upload/v1620298225/IMG_20200207_120942_m9auoa.jpg"
                  alt="profile"
                />
                <Popup
                  trigger=<HeaderLogoutButton type="button">
                    Logout
                  </HeaderLogoutButton>
                  modal
                  className="popup-content"
                >
                  {close => (
                    <LogoutModalContainer backgroundColor={popupModalBgColor}>
                      <LogoutModalText color={popupModalTextColor}>
                        Are you sure, you want to logout?
                      </LogoutModalText>
                      <LogoutButtonsContainer>
                        <LogoutModalCancelButton type="button" onClick={close}>
                          Cancel
                        </LogoutModalCancelButton>
                        <LogoutModalLogoutButton
                          type="button"
                          onClick={this.removeJwtToken}
                        >
                          Confirm
                        </LogoutModalLogoutButton>
                      </LogoutButtonsContainer>
                    </LogoutModalContainer>
                  )}
                </Popup>
              </HeaderLinksContainer>
            </HeaderContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default withRouter(Header)
