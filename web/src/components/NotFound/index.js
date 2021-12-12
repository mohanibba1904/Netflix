import Header from '../Header'
import SidebarSection from '../SidebarContainer'

import Context from '../../Context/Context'
import {
  NotFoundBgContainer,
  NotFoundContentContainer,
  NotFoundMainContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponents'

const NotFound = () => (
  <Context.Consumer>
    {value => {
      const {isLightThemeActive} = value
      const notFoundBackgroundColor = isLightThemeActive ? '#f1f5f9' : '#0f0f0f'
      const notFoundContainerBgColor = isLightThemeActive
        ? '#f9f9f9'
        : '#0f0f0f'
      const notFoundImage = isLightThemeActive
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      const notFoundTextColor = isLightThemeActive ? '#181818' : '#f9f9f9'
      return (
        <NotFoundBgContainer>
          <Header />
          <NotFoundContentContainer backgroundColor={notFoundContainerBgColor}>
            <SidebarSection />
            <NotFoundMainContainer backgroundColor={notFoundBackgroundColor}>
              <NotFoundImage src={notFoundImage} alt="not found" />
              <NotFoundHeading color={notFoundTextColor}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundPara color={notFoundTextColor}>
                we are sorry, the page you requested could not be found.
              </NotFoundPara>
            </NotFoundMainContainer>
          </NotFoundContentContainer>
        </NotFoundBgContainer>
      )
    }}
  </Context.Consumer>
)

export default NotFound
