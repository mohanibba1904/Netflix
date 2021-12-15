import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {format, formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import SidebarSection from '../SidebarContainer'
import Context from '../../Context/Context'

import {
  VideoItemDetailsContainer,
  VideoItemDetailsRowContainer,
  VideoItemContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureHeading,
  FailureText,
  FailureRetryButton,
  VideoItemDescription,
  ParametersAndLikesContainer,
  ParametersAndLikesInnerContainer,
  VideoItemDetailsText,
  VideoItemDetailsSmallButton,
  VideoItemLine,
  VideoItemProfileContainer,
  VideoItemProfileImage,
  VideoItemProfileDescriptionContainer,
  VideoProfileChannelName,
  VideoProfileChannelSubscribers,
  VideoProfileDescriptionLargeText,
  VideoProfileDescriptionSmallText,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiConstants.initial,
    isLikeActive: false,
    isDislikeActive: false,
  }

  componentDidMount() {
    this.getVideoItemDetailsData()
  }

  formattedData = responseData =>
    responseData.similar_videos.map(eachItem => ({
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

  getVideoItemDetailsData = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const videoItemDetailsUrl = `http://127.0.0.1:8000/movies/movieid/${id}`
    // const options = {
    //   headers: {
    //     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU`,
    //   },
    //   method: 'GET',
    // }
    
    const videoDetailsResponse = await fetch(videoItemDetailsUrl)
    if (videoDetailsResponse.ok) {
      const videoDetailsData = await videoDetailsResponse.json()
      console.log(videoDetailsData)
      const formattedVideoDetailsData = {
        
          name: videoDetailsData.name,
          profileImageUrl:
            videoDetailsData.profile_image_url,
          subscriberCount:
            videoDetailsData.subscriber_count,
      
        id: videoDetailsData.id,
        description: videoDetailsData.description,
        publishedAt: videoDetailsData.published_at,
        thumbnailUrl: videoDetailsData.thumbnail_url,
        title: videoDetailsData.title,
        viewCount: videoDetailsData.view_count,
        videoUrl: videoDetailsData.video_url,
      }
      this.setState({
        videoDetails: formattedVideoDetailsData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
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
              We are having some trouble to complete your request. Please try
              again.
            </FailureText>
            <FailureRetryButton
              type="button"
              onClick={this.getVideoItemDetailsData}
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

  toggleLikeButton = () => {
    this.setState({isLikeActive: true, isDislikeActive: false})
  }

  toggleDislikeButton = () => {
    this.setState({isLikeActive: false, isDislikeActive: true})
  }

  renderVideoItemDetails = () => (
    <Context.Consumer>
      {value => {
        const {isLightThemeActive, saveOrDeleteVideo, savedVideosList} = value
        const {videoDetails, isLikeActive, isDislikeActive} = this.state
        const activeButtonColor = '#2563eb'
        const inActiveButtonColor = ' #64748b'
        const videoItemBgColor = isLightThemeActive ? '#f9f9f9' : '#0f0f0f'
        const videoItemDescriptionColor = isLightThemeActive
          ? '#475569'
          : '#cecece'
        const alreadySavedVideos = savedVideosList.filter(
          eachItem => eachItem.id === videoDetails.id,
        )
        const isThisVideoSaved = alreadySavedVideos.length !== 0

        const textColor = isLightThemeActive ? '#424242' : '#cccccc'
        const formattedDate = format(
          new Date(videoDetails.publishedAt),
          'yyyy, MM, dd',
        )
        const newDate = new Date(formattedDate)
        const publishedTimeAgo = formatDistanceToNow(newDate)
        const channelNameColor = isLightThemeActive ? '#1e293b' : '#cccccc'
        const channelSubscriberColor = isLightThemeActive
          ? '#475569'
          : '#f1f1f1'

        const onClickSaveOrDeleteButton = () => {
          saveOrDeleteVideo(videoDetails)
        }
        return (
          <VideoItemContainer
            backgroundColor={videoItemBgColor}
            data-testid="videoItemDetails"
          >
            <ReactPlayer controls width="90%" url={videoDetails.videoUrl} />
            <VideoItemDescription color={videoItemDescriptionColor}>
              {videoDetails.title}
            </VideoItemDescription>
            <ParametersAndLikesContainer>
              <ParametersAndLikesInnerContainer>
                <VideoItemDetailsText
                  color={textColor}
                >{`${videoDetails.viewCount} views`}</VideoItemDetailsText>
                <BsDot size="22" color={textColor} />
                <VideoItemDetailsText color={textColor}>
                  {publishedTimeAgo}
                </VideoItemDetailsText>
              </ParametersAndLikesInnerContainer>
              <ParametersAndLikesInnerContainer>
                <VideoItemDetailsSmallButton
                  type="button"
                  onClick={this.toggleLikeButton}
                  color={isLikeActive ? activeButtonColor : inActiveButtonColor}
                >
                  <AiOutlineLike />
                  Like
                </VideoItemDetailsSmallButton>
                <VideoItemDetailsSmallButton
                  type="button"
                  onClick={this.toggleDislikeButton}
                  color={
                    isDislikeActive ? activeButtonColor : inActiveButtonColor
                  }
                >
                  <AiOutlineDislike />
                  Dislike
                </VideoItemDetailsSmallButton>
                <VideoItemDetailsSmallButton
                  type="button"
                  onClick={onClickSaveOrDeleteButton}
                  color={
                    isThisVideoSaved ? activeButtonColor : inActiveButtonColor
                  }
                >
                  <CgPlayListAdd />
                  {isThisVideoSaved ? 'Saved' : 'Save'}
                </VideoItemDetailsSmallButton>
              </ParametersAndLikesInnerContainer>
            </ParametersAndLikesContainer>
            <VideoItemLine color={textColor} />
            <VideoItemProfileContainer>
              <VideoItemProfileImage
                src={videoDetails.profileImageUrl}
                alt="channel logo"
              />
              <VideoItemProfileDescriptionContainer>
                <VideoProfileChannelName color={channelNameColor}>
                  {videoDetails.name}
                </VideoProfileChannelName>
                <VideoProfileChannelSubscribers color={channelSubscriberColor}>
                  {videoDetails.subscriberCount}
                </VideoProfileChannelSubscribers>
                <VideoProfileDescriptionLargeText color={channelNameColor}>
                  {videoDetails.description}
                </VideoProfileDescriptionLargeText>
              </VideoItemProfileDescriptionContainer>
            </VideoItemProfileContainer>
          </VideoItemContainer>
        )
      }}
    </Context.Consumer>
  )

  renderVideoItemView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstants.failure:
        return this.renderFailureView()
      case apiConstants.inProgress:
        return this.renderLoaderView()
      case apiConstants.success:
        return this.renderVideoItemDetails()
      default:
        return null
    }
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isLightThemeActive} = value
          const videoItemBgColor = isLightThemeActive ? '#f9f9f9' : '#0f0f0f'
          return (
            <VideoItemDetailsContainer backgroundColor={videoItemBgColor}>
              <Header />
              <VideoItemDetailsRowContainer>
                <SidebarSection />
                {this.renderVideoItemView()}
              </VideoItemDetailsRowContainer>
            </VideoItemDetailsContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default VideoItemDetails
