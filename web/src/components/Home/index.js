import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {RiCloseFill} from 'react-icons/ri'
import {BsSearch} from 'react-icons/bs'

import Header from '../Header'
import SidebarSection from '../SidebarContainer'
import VideoItemCard from '../VideoListItem'
import Context from '../../Context/Context'

import './index.css'
import {
  HomeContainer,
  HomeBarsContainer,
  MainContainer,
  BannerContainer,
  BannerContentContainer,
  BannerCloseButton,
  BannerHeading,
  BannerImage,
  BannerButton,
  VideosListHome,
  FailureViewContainer,
  FailureViewImage,
  FailureHeading,
  FailureText,
  FailureRetryButton,
  SearchForm,
  SearchInput,
  SearchButton,
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

class Home extends Component {
  state = {
    isBannerActive: true,
    apiStatus: apiConstants.initial,
    videosList: [],
    searchInput: '',
    searchParameter: '',
  }

  componentDidMount() {
    this.getVideosData()
  }

  updateSearchValue = event => {
    this.setState({searchInput: event.target.value})
  }

  onSubmitSearchForm = () => {
    const {searchInput} = this.state
    this.setState({searchParameter: searchInput}, this.getVideosData)
  }

  changeActiveRoute = () => (
    <Context.Consumer>
      {value => {
        const {alterActiveRoute, activeRoute} = value
        alterActiveRoute('home')
        console.log(activeRoute)
      }}
    </Context.Consumer>
  )

  getVideosData = async () => {
    this.setState({
      apiStatus: apiConstants.inProgress,
    })
    const {searchParameter} = this.state
    const JwtToken = Cookies.get('jwt_token')
    const videosListUrl = `https://apis.ccbp.in/videos/all?search=${searchParameter}`
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

  hideBanner = () => {
    this.setState({
      isBannerActive: false,
    })
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
              Try different key words or remove search filter
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
      <VideosListHome>
        {videosList.map(eachItem => (
          <VideoItemCard key={eachItem.id} videoItem={eachItem} />
        ))}
      </VideosListHome>
    )
  }

  renderBannerContainer = () => (
    <BannerContainer data-testid="banner">
      <BannerContentContainer>
        <BannerImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerHeading>Buy Nxt Watch Premium</BannerHeading>
        <BannerButton type="button">GET IT NOW</BannerButton>
      </BannerContentContainer>
      <BannerCloseButton
        type="button"
        onClick={this.hideBanner}
        data-testid="close"
      >
        <RiCloseFill size="22" />
      </BannerCloseButton>
    </BannerContainer>
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

  renderSearchContainer = () => (
    <Context.Consumer>
      {value => {
        const {isLightThemeActive} = value
        const inputTextColor = isLightThemeActive ? '#181818' : '#f9f9f9'
        const buttonBackgroundColor = isLightThemeActive ? '#f9f9f9' : '#181818'
        return (
          <SearchForm>
            <SearchInput
              placeholder="Search"
              type="search"
              color={inputTextColor}
              onChange={this.updateSearchValue}
            />
            <SearchButton
              type="button"
              backgroundColor={buttonBackgroundColor}
              data-testid="searchButton"
              onClick={this.onSubmitSearchForm}
            >
              <BsSearch size="22" color={inputTextColor} />
            </SearchButton>
          </SearchForm>
        )
      }}
    </Context.Consumer>
  )

  renderMainContainer = () => (
    <Context.Consumer>
      {value => {
        const {isBannerActive} = this.state
        const {isLightThemeActive} = value
        const mainContainerBgColor = isLightThemeActive ? '#f1f5f9' : '#0f0f0f'

        return (
          <MainContainer backgroundColor={mainContainerBgColor}>
            {isBannerActive ? this.renderBannerContainer() : null}
            {this.renderSearchContainer()}
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
          const homeBgColor = isLightThemeActive ? '#f9f9f9' : '#181818'
          return (
            <HomeContainer backgroundColor={homeBgColor} data-testid="home">
              <Header />
              <HomeBarsContainer backgroundColor={homeBgColor}>
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

export default Home
