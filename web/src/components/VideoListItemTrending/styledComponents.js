import styled from 'styled-components'

export const VideoListItem = styled.li`
  list-style-type: none;
  margin: 10px;
  width: 350px;
  height: 300px;
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 220px;
  }
`

export const VideoListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`

export const VideoListItemThumbnailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 330px;
  }
`

export const VideoListItemThumbnailImage = styled.img`
  width: 100%;
  margin: 0px 0px 10px 0px;
  @media screen and (min-width: 768px) {
    width: 220px;
    height: 180px;
  }
`

export const VideoListItemContentContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center: 
align-items: center;
width: 100%;
`

export const VideoListItemContentProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const VideoListItemContentProfileImage = styled.img`
  width: 100%;
  margin: 5px 10px 5px 5px;
  height: 30px;
  width: 30px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const VideoListItemContentItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    margin: 0px 0px 0px 20px;
  }
`

export const VideoListItemContentItemsHeading = styled.p`
  display: block;
  margin: 5px 0px 5px 0px;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Roboto';
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const VideoListItemChannelName = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    margin: 3px 0px 3px 0px;
    font-size: 16px;
    font-family: 'Roboto';
    font-weight: bold;
    color: ${props => props.color};
  }
`

export const VideoListItemViewsTimeContainerSmall = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const VideoListItemViewsTimeContainerLarge = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`

export const VideoListItemContainerItemText = styled.p`
  margin: 3px 0px 3px 0px;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
