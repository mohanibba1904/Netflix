import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.backgroundColor};
`

export const VideoItemDetailsRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`

export const VideoItemDetailsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 50px 10px 10px 10px;
`

export const FailureViewImage = styled.img`
  width: 50%;
`

export const FailureHeading = styled.h1`
  margin: 10px;
  color: ${props => props.color};
  text-align: center;
`

export const FailureText = styled.p`
  margin: 5px;
  color: ${props => props.color};
  font-size: 20px;
  text-align: center;
  width: 80%;
`

export const FailureRetryButton = styled.button`
  height: 40px;
  width: 120px;
  color: #ffffff;
  background-color: #3b82f6;
  font-weight: bold;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  margin: 10px 0px 20px 0px;
  cursor: pointer;
`

export const VideoItemContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  padding: 20px 0px 20px 0px;
`

export const VideoItemDescription = styled.p`
  color: ${props => props.color};
  width: 90%;
  margin: 10px 20px 0px 16px;
  align-self: flex-start;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    margin: 10px 20px 0px 42px;
    font-size: 24px;
  }
`

export const ParametersAndLikesContainer = styled.div`
  width: 92%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    width: 91%;
  }
`

export const ParametersAndLikesInnerContainer = styled.div`
  width: 170px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 210px;
  }
`
export const VideoItemDetailsText = styled.p`
  margin: 10px 0px 10px 0px;
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin: 10px 0px 10px 0px;
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

export const VideoItemLine = styled.hr`
  width: 90%;
  height: 2px;
  color: ${props => props.color};
`

export const VideoItemProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
`

export const VideoItemProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin: 5px 10px 0px 10px;
`

export const VideoItemProfileDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
`

export const VideoProfileChannelName = styled.p`
  font-size: 14px;
  margin: 3px;
  font-weight: 600;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const VideoProfileChannelSubscribers = styled.p`
  font-size: 14px;
  margin: 5px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const VideoProfileDescriptionLargeText = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    color: ${props => props.color};
    display: block;
    margin: 5px;
    font-size: 18px;
  }
`

export const VideoProfileDescriptionSmallText = styled.p`
  width: 80%;
  display: block;
  margin: 5px;
  font-size: 18px;
  font-size: 14px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
