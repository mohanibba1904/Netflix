import styled from 'styled-components'

export const VideoListItem = styled.li`
  list-style-type: none;
  margin: 10px;
  width: 350px;
  height: 300px;
  @media screen and (min-width: 768px) {
    width: 220px;
    height: 220px;
  }
`

export const VideoListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const VideoListItemThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const VideoListItemThumbnailImage = styled.img`
  width: 330px;
  margin: 0px 0px 10px 0px;
  @media screen and (min-width: 768px) {
    width: 220px;
    height: 250px;
    margin: 10px;
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
    height: 20px;
    width: 20px;
  }
`

export const VideoListItemContentItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const VideoListItemContentItemsHeading = styled.p`
  display: block;
  margin: 5px 0px 5px 0px;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Roboto';
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`
export const VideoListItemChannelName = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    margin: 3px 0px 3px 0px;
    font-size: 10px;
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
    font-size: 10px;
  }
`


export const VideoItemDetailsSmallButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 14px;
  padding: 0px;
  margin: 10px 0px 10px 0px;
  font-weight: 600;
  color: ${props => props.color};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

