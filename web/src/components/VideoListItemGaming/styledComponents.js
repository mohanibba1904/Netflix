import styled from 'styled-components'

export const VideoListItem = styled.li`
  list-style-type: none;
  margin: 10px;
  width: 350px;
  height: 300px;
  @media screen and (min-width: 768px) {
    width: 220px;
    height: 240px;
    margin: 20px 20px 40px 20px;
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
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`

export const VideoListItemThumbnailImage = styled.img`
  width: 90%;
  height: 200px;
  margin: 0px 0px 10px 0px;
  @media screen and (min-width: 768px) {
    width: 220px;
    height: 180px;
  }
`

export const VideoListItemContentItemsHeading = styled.p`
  display: block;
  margin: 5px 0px 5px 18px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto';
  align-self: flex-start;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin: 5px 0px 5px 0px;
  }
`
export const VideoListItemCountText = styled.p`
  margin: 3px 0px 3px 18px;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => props.color};
  align-self: flex-start;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin: 5px 0px 5px 0px;
  }
`
