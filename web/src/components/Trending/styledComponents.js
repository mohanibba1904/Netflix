import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${props => props.backgroundColor};
`

export const HomeBarsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${props => props.backgroundColor};
`

export const MainContainer = styled.div`
  width: 100%;
  background-color: ${props => props.backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`

export const BannerContainer = styled.div`
  display: ${props => props.display};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 0px 10px 10px;
  background-color: ${props => props.backgroundColor};
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`

export const BannerIconHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  border-radius: 50%;
  padding: 5px;
  background-color: ${props => props.backgroundColor};
  @media screen and (min-width: 768px) {
    width: 10%;
  }
`

export const BannerHeading = styled.h1`
  margin: 10px 0px 10px 10px;
  font-size: 44px;
  font-weight: 600;
  color: ${props => props.color};
  font-family: 'Roboto';
`

export const VideosList = styled.ul`
  list-style: none;
  padding: 5px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
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

export const NoVideosViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 50px 10px 10px 10px;
`

export const NoVideosViewImage = styled.img`
  width: 50%;
`

export const NoVideosHeading = styled.h1`
  margin: 10px;
  color: ${props => props.color};
  text-align: center;
`

export const NoVideosText = styled.p`
  margin: 5px;
  color: ${props => props.color};
  font-size: 20px;
  text-align: center;
  width: 80%;
`

export const NoVideosViewRetryButton = styled.button`
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
