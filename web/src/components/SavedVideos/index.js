import {Component} from 'react'

import {BiListPlus} from 'react-icons/bi'

import Header from '../Header'
import SidebarSection from '../SidebarContainer'
import Context from '../../Context/Context'

import './index.css'

import {
  HomeContainer,
  HomeBarsContainer,
  MainContainer,
  BannerContainer,
  BannerIconHeadingContainer,
  BannerHeading,
  VideosList,
  NoVideosViewContainer,
  NoVideosViewImage,
  NoVideosHeading,
  NoVideosText,
} from './styledComponents'

class SavedVideos extends Component {
  noVideosView = () => (
    <Context.Consumer>
      {value => {
        const {isLightThemeActive} = value
        const headingColor = isLightThemeActive ? '#181818' : '#f9f9f9'
        const textColor = isLightThemeActive ? '#454545' : '#cecece'

        return (
          <NoVideosViewContainer>
            <NoVideosViewImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoVideosHeading color={headingColor}>
              No saved Movies found
            </NoVideosHeading>
            <NoVideosText color={textColor}>
              You can save your Movies while watching them
            </NoVideosText>
          </NoVideosViewContainer>
        )
      }}
    </Context.Consumer>
  )

  savedVideosList = () => (
    <Context.Consumer>
      {value => {
        const {savedVideosList} = value
        if (savedVideosList.length === 0) {
          return this.noVideosView()
        }
        return (
          <>
            {this.renderSavedBannerContainer()}
            <VideosList>
              {savedVideosList.map(eachItem => (
                <VideoListItemTrending key={eachItem.id} videoItem={eachItem} />
              ))}
            </VideosList>
          </>
        )
      }}
    </Context.Consumer>
  )

  renderSavedBannerContainer = () => (
    <Context.Consumer>
      {value => {
        const {isLightThemeActive} = value
        const bannerBackgroundColor = isLightThemeActive ? '#e2e8f0' : '#313131'
        const bannerIconBackgroundColor = isLightThemeActive
          ? '#f1f5f9'
          : '#231f20'
        const bannerHeadingColor = isLightThemeActive ? '#181818' : '#f9f9f9'
        return (
          <BannerContainer
            backgroundColor={bannerBackgroundColor}
            data-testid="banner"
          >
            <BannerIconHeadingContainer
              backgroundColor={bannerIconBackgroundColor}
            >
              <BiListPlus color="#ff0000" size="90%" />
            </BannerIconHeadingContainer>
            <BannerHeading color={bannerHeadingColor}>
              Saved Videos
            </BannerHeading>
          </BannerContainer>
        )
      }}
    </Context.Consumer>
  )

  renderMainContainer = () => (
    <Context.Consumer>
      {value => {
        const {isLightThemeActive} = value
        const mainContainerBgColor = isLightThemeActive ? '#f1f5f9' : '#0f0f0f'

        return (
          <MainContainer backgroundColor={mainContainerBgColor}>
            {this.savedVideosList()}
          </MainContainer>
        )
      }}
    </Context.Consumer>
  )

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isLightThemeActive} = value
          const savedVideosBgColor = isLightThemeActive ? '#f9f9f9' : '#0f0f0f'
          return (
            <HomeContainer
              backgroundColor={savedVideosBgColor}
              data-testid="savedVideos"
            >
              <Header />
              <HomeBarsContainer backgroundColor={savedVideosBgColor}>
                <SidebarSection />
                {this.renderMainContainer()}
              </HomeBarsContainer>
            </HomeContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default SavedVideos
