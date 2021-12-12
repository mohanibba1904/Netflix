import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import SidebarSection from '../SidebarContainer'
import VideoListItemTrending from '../VideoListItemTrending'
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
  FailureViewContainer,
  FailureViewImage,
  FailureHeading,
  FailureText,
  FailureRetryButton,
  NoVideosViewContainer,
  NoVideosViewImage,
  NoVideosHeading,
  NoVideosText,
  NoVideosViewRetryButton,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({
      apiStatus: apiConstants.inProgress,
    })
    const JwtToken = Cookies.get('jwt_token')
    const videosListUrl = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${JwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(videosListUrl, options)
    if (response.ok) {
      const responseData = await response.json()
      const formattedData = responseData.videos.map(eachItem => ({
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        videosList: formattedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiConstants.failure,
      })
    }
  }

  onClickFailureRetry = () => {
    this.getVideosData()
  }

  renderFailureView = () => (
    <Context.Consumer>
      {value => {
        const {isLightThemeActive} = value
        const failureImage = isLightThemeActive
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        const failureHeadingColor = isLightThemeActive ? '#00306e' : '#ebebeb'
        const failureTextColor = isLightThemeActive ? '#64748b' : '#d7dfe9'
        return (
          <FailureViewContainer>
            <FailureViewImage src={failureImage} alt="failure view" />
            <FailureHeading color={failureHeadingColor}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureText color={failureTextColor}>
              We are having some trouble to complete you request. Please try
              again.
            </FailureText>
            <FailureRetryButton
              type="button"
              onClick={this.onClickFailureRetry}
            >
              Retry
            </FailureRetryButton>
          </FailureViewContainer>
        )
      }}
    </Context.Consumer>
  )

  renderLoaderView = () => (
    <Context.Consumer>
      {value => {
        const {isLightThemeActive} = value
        const loaderColor = isLightThemeActive ? '#000000' : '#ffffff'
        return (
          <div className="loader-container" data-testid="loader">
            <Loader
              type="ThreeDots"
              color={loaderColor}
              height="50"
              width="50"
            />
          </div>
        )
      }}
    </Context.Consumer>
  )

  noVideosView = () => (
    <Context.Consumer>
      {value => {
        const {isLightThemeActive} = value
        const headingColor = isLightThemeActive ? '#181818' : '#f9f9f9'
        const textColor = isLightThemeActive ? '#454545' : '#cecece'

        return (
          <NoVideosViewContainer>
            <NoVideosViewImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading color={headingColor}>
              No Search results found
            </NoVideosHeading>
            <NoVideosText color={textColor}>
              Try different key words or remove filter
            </NoVideosText>
            <NoVideosViewRetryButton type="button" onClick={this.getVideosData}>
              Retry
            </NoVideosViewRetryButton>
          </NoVideosViewContainer>
        )
      }}
    </Context.Consumer>
  )

  videosList = () => {
    const {videosList} = this.state
    if (videosList.length === 0) {
      return this.noVideosView()
    }
    return (
      <>
        {this.renderTrendingBannerContainer()}
        <VideosList>
          {videosList.map(eachItem => (
            <VideoListItemTrending key={eachItem.id} videoItem={eachItem} />
          ))}
        </VideosList>
      </>
    )
  }

  renderTrendingBannerContainer = () => (
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
              <HiFire color="#ff0000" size="90%" />
            </BannerIconHeadingContainer>
            <BannerHeading color={bannerHeadingColor}>Trending</BannerHeading>
          </BannerContainer>
        )
      }}
    </Context.Consumer>
  )

  renderAllVideosList = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstants.failure:
        return this.renderFailureView()
      case apiConstants.inProgress:
        return this.renderLoaderView()
      case apiConstants.success:
        return this.videosList()
      default:
        return null
    }
  }

  renderMainContainer = () => (
    <Context.Consumer>
      {value => {
        const {isLightThemeActive} = value
        const mainContainerBgColor = isLightThemeActive ? '#f1f5f9' : '#0f0f0f'

        return (
          <MainContainer backgroundColor={mainContainerBgColor}>
            {this.renderAllVideosList()}
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
          const trendingBgColor = isLightThemeActive ? '#f9f9f9' : '#0f0f0f'
          return (
            <HomeContainer
              backgroundColor={trendingBgColor}
              data-testid="trending"
            >
              <Header />
              <HomeBarsContainer backgroundColor={trendingBgColor}>
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

export default Trending
