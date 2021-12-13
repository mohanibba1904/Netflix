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
    width: 80%;
    height: 100vh;
  }
`

export const BannerContainer = styled.div`
  display: ${props => props.display};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 20px;
  margin: 0px;
`

export const BannerContentContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

export const BannerCloseButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
`

export const BannerImage = styled.img`
  width: 100px;
  height: 40px;
  @media screen and (min-width: 768px) {
    width: 120px;
    height: 50px;
  }
`

export const BannerHeading = styled.p`
  margin: 10px 0px 10px 0px;
  font-size: 22px;
  font-weight: 600;
  color: #424242;
`

export const BannerPara = styled.p`
  margin: 3px 0px 3px 0px;
  font-size: 16px;
  color: #424242;
`

export const BannerButton = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 8px;
  border: 2px solid #424242;
  color: #424242;
  font-weight: bold;
  background-color: transparent;
`

export const VideosListHome = styled.div`
  list-style: none;
  padding: 5px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    flex-direction: row;
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

export const SearchForm = styled.div`
  border: 2px solid #424242;
  width: 80%;
  height: 40px;
  margin: 20px 0px 0px 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  border: 2px solid #42424242;
  @media screen and (min-width: 768px) {
    width: 60%;
    align-self: flex-start;
    margin: 20px 0px 0px 15px;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  margin: 1px;
  padding: 5px;
  background: transparent;
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
`

export const SearchButton = styled.button`
  height: 37px;
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: ${props => props.backgroundColor};
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
