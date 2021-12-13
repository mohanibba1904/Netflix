import {Component} from 'react'
import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import Context from '../../Context/Context'

import './index.css'
import {
  SidebarContainer,
  SidebarTopContainer,
  SidebarTopContainerList,
  SidebarTopContainerListItem,
  SidebarTopContainerListItemText,
  SidebarBottomContainer,
  SidebarBottomHeading,
  SidebarBottomIconsContainer,
  SidebarBottomIconImage,
  SidebarBottomContainerText,
} from './styledComponents'

class SideBarSection extends Component {
  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isLightThemeActive, activeRoute, alterActiveRoute} = value
          const onClickHomeRoute = () => {
            alterActiveRoute('home')
          }
          const onClickTrendingRoute = () => {
            alterActiveRoute('trending')
          }
          const onClickGamingRoute = () => {
            alterActiveRoute('gaming')
          }
          const onClickSavedVideosRoute = () => {
            alterActiveRoute('savedVideos')
          }
          const sidebarContainerBackgroundColor = isLightThemeActive
            ? '#ffffff'
            : '#181818'

          const sidebarContainerIconsColor = isLightThemeActive
            ? '#181818'
            : '#f9f9f9'

          const sidebarContainerTextColor = isLightThemeActive
            ? '#181818'
            : '#f9f9f9'

          return (
            <SidebarContainer backgroundColor={sidebarContainerBackgroundColor}>
              <SidebarTopContainer>
                <SidebarTopContainerList>
                  <SidebarTopContainerListItem
                    onClick={onClickHomeRoute}
                    backgroundColor={
                      activeRoute === 'home' ? '#909090' : 'transparent'
                    }
                  >
                    <AiFillHome
                      size="22"
                      color={
                        activeRoute === 'home'
                          ? '#ff0000'
                          : sidebarContainerTextColor
                      }
                    />
                    <SidebarTopContainerListItemText
                      color={sidebarContainerTextColor}
                    >
                      <Link
                        to="/"
                        style={{
                          textDecoration: 'none',
                          color: `${sidebarContainerTextColor}`,
                        }}
                      >
                        Home
                      </Link>
                    </SidebarTopContainerListItemText>
                  </SidebarTopContainerListItem>
                  <SidebarTopContainerListItem
                    onClick={onClickTrendingRoute}
                    backgroundColor={
                      activeRoute === 'trending' ? '#909090' : 'transparent'
                    }
                  >
                   
                  </SidebarTopContainerListItem>
                  
                  <SidebarTopContainerListItem
                    onClick={onClickSavedVideosRoute}
                    backgroundColor={
                      activeRoute === 'savedVideos' ? '#909090' : 'transparent'
                    }
                  >
                    <BiListPlus
                      color={
                        activeRoute === 'savedVideos'
                          ? '#ff0000'
                          : sidebarContainerTextColor
                      }
                      size="22"
                    />
                    <SidebarTopContainerListItemText
                      color={sidebarContainerTextColor}
                    >
                      <Link
                        to="/saved-videos"
                        style={{
                          textDecoration: 'none',
                          color: `${sidebarContainerTextColor}`,
                        }}
                      >
                        Favorite Movies
                      </Link>
                    </SidebarTopContainerListItemText>
                  </SidebarTopContainerListItem>
                </SidebarTopContainerList>
              </SidebarTopContainer>
              <SidebarBottomContainer>
                <SidebarBottomHeading color={sidebarContainerTextColor}>
                  CONTACT US
                </SidebarBottomHeading>
                <SidebarBottomIconsContainer>
                  <SidebarBottomIconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SidebarBottomIconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SidebarBottomIconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SidebarBottomIconsContainer>
                <SidebarBottomContainerText color={sidebarContainerTextColor}>
                  Enjoy! Now to see your channels and recommendations!
                </SidebarBottomContainerText>
              </SidebarBottomContainer>
            </SidebarContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default SideBarSection
