
import {BsDot} from 'react-icons/bs'
import {format, formatDistanceToNow} from 'date-fns'
import {CgPlayListAdd} from 'react-icons/cg'
import {MdFavorite,MdFavoriteBorder} from 'react-icons/md'

import Context from '../../Context/Context'

import './index.css'
import {
  VideoListItem,
  VideoListItemContainer,
  VideoListItemThumbnailContainer,
  VideoListItemThumbnailImage,
  VideoListItemContentContainer,
  VideoListItemContentProfileContainer,
  VideoListItemContentProfileImage,
  VideoListItemContentItemsContainer,
  VideoListItemContentItemsHeading,
  VideoListItemChannelName,
  VideoListItemViewsTimeContainerSmall,
  VideoListItemViewsTimeContainerLarge,
  VideoItemDetailsSmallButton,
  VideoListItemContainerItemText,
} from './styledComponents'




const VideoItemCard = props => (
  <Context.Consumer>
    {value => {
      const {isLightThemeActive,savedVideosList,saveOrDeleteVideo} = value
      const {videoItem} = props
      const formattedDate = format(
        new Date(videoItem.publishedAt),
        'yyyy, MM, dd',
        
      )

      const onClickSaveOrDeleteButton = () => {
        saveOrDeleteVideo(videoDetails)
      }      

      const activeButtonColor = '#2563eb'
      const inActiveButtonColor = ' #64748b'
      const newDate = new Date(formattedDate)
      const publishedTimeAgo = formatDistanceToNow(newDate)

      const alreadySavedVideos = savedVideosList.filter(
        eachItem => eachItem.id === videoDetails.id,
      )
      const isThisVideoSaved = alreadySavedVideos.length !== 0

      const headTextColor = isLightThemeActive ? '#313131' : '#f9f9f9'
      const textColor = isLightThemeActive ? '#424242' : '#7e858e'
      return (
        
          <VideoListItem>
            <VideoListItemContainer>
              <VideoListItemThumbnailContainer>
                <VideoListItemThumbnailImage
                  src={videoItem.thumbnailUrl}
                  alt="video thumbnail"
                />
              </VideoListItemThumbnailContainer>
              <VideoListItemContentContainer>
                <VideoListItemContentProfileContainer>
                  <VideoListItemContentProfileImage
                    src={videoItem.profileImageUrl}
                    alt="channel logo"
                  />
                </VideoListItemContentProfileContainer>
                <VideoListItemContentItemsContainer>
                  <VideoListItemContentItemsHeading color={headTextColor}>
                    {videoItem.title}
                  </VideoListItemContentItemsHeading>
                  <VideoListItemChannelName color={textColor}>
                    {videoItem.name}
                  </VideoListItemChannelName>
                  <VideoListItemViewsTimeContainerLarge>
                    <VideoListItemContainerItemText
                      color={textColor}
                    >{`${videoItem.viewCount} views`}</VideoListItemContainerItemText>
                    <BsDot size="22" color={textColor} />
                    <VideoListItemContainerItemText color={textColor}>
                      {publishedTimeAgo}
                    </VideoListItemContainerItemText>
                    <VideoItemDetailsSmallButton
                  type="button"
                  onClick={onClickSaveOrDeleteButton}
                  color={
                    isThisVideoSaved ? activeButtonColor : inActiveButtonColor
                  }
                >
                  
                  {isThisVideoSaved ? <MdFavorite /> : <MdFavoriteBorder/>}
                </VideoItemDetailsSmallButton>
                  </VideoListItemViewsTimeContainerLarge>
                </VideoListItemContentItemsContainer>
              </VideoListItemContentContainer>
            </VideoListItemContainer>
          </VideoListItem>
      
      )
    }}
  </Context.Consumer>
)

export default VideoItemCard
