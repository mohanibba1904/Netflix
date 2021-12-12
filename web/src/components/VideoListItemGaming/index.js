import {Link} from 'react-router-dom'

import Context from '../../Context/Context'

import './index.css'

import {
  VideoListItem,
  VideoListItemContainer,
  VideoListItemThumbnailImage,
  VideoListItemContentItemsHeading,
  VideoListItemCountText,
} from './styledComponents'

const VideoItemCardGaming = props => (
  <Context.Consumer>
    {value => {
      const {isLightThemeActive} = value
      const {videoItem} = props

      const headTextColor = isLightThemeActive ? '#313131' : '#f9f9f9'
      const textColor = isLightThemeActive ? '#424242' : '#7e858e'
      return (
        <Link className="link-style-gaming" to={`videos/${videoItem.id}`}>
          <VideoListItem>
            <VideoListItemContainer>
              <VideoListItemThumbnailImage
                src={videoItem.thumbnailUrl}
                alt="video thumbnail"
              />
              <VideoListItemContentItemsHeading color={headTextColor}>
                {videoItem.title}
              </VideoListItemContentItemsHeading>
              <VideoListItemCountText color={textColor}>
                {`${videoItem.viewCount} Watching Worldwide`}
              </VideoListItemCountText>
            </VideoListItemContainer>
          </VideoListItem>
        </Link>
      )
    }}
  </Context.Consumer>
)

export default VideoItemCardGaming
