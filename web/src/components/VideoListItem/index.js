import {Link} from 'react-router-dom'

import {BsDot} from 'react-icons/bs'
import {format, formatDistanceToNow} from 'date-fns'

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
  VideoListItemContainerItemText,
} from './styledComponents'

const VideoItemCard = props => (
  <Context.Consumer>
    {value => {
      const {isLightThemeActive} = value
      const {videoItem} = props
      const formattedDate = format(
        new Date(videoItem.publishedAt),
        'yyyy, MM, dd',
      )
      const newDate = new Date(formattedDate)
      const publishedTimeAgo = formatDistanceToNow(newDate)

      const headTextColor = isLightThemeActive ? '#313131' : '#f9f9f9'
      const textColor = isLightThemeActive ? '#424242' : '#7e858e'
      return (
        <Link className="link-style" to={`videos/${videoItem.id}`}>
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
                    src={videoItem.channel.profileImageUrl}
                    alt="channel logo"
                  />
                </VideoListItemContentProfileContainer>
                <VideoListItemContentItemsContainer>
                  <VideoListItemContentItemsHeading color={headTextColor}>
                    {videoItem.title}
                  </VideoListItemContentItemsHeading>
                  <VideoListItemChannelName color={textColor}>
                    {videoItem.channel.name}
                  </VideoListItemChannelName>
                  <VideoListItemViewsTimeContainerLarge>
                    <VideoListItemContainerItemText
                      color={textColor}
                    >{`${videoItem.viewCount} views`}</VideoListItemContainerItemText>
                    <BsDot size="22" color={textColor} />
                    <VideoListItemContainerItemText color={textColor}>
                      {publishedTimeAgo}
                    </VideoListItemContainerItemText>
                  </VideoListItemViewsTimeContainerLarge>
                </VideoListItemContentItemsContainer>
              </VideoListItemContentContainer>
            </VideoListItemContainer>
          </VideoListItem>
        </Link>
      )
    }}
  </Context.Consumer>
)

export default VideoItemCard
