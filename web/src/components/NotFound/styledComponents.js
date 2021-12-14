import styled from 'styled-components'

export const NotFoundBgContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`

export const NotFoundContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.backgroundColor};
`

export const NotFoundMainContainer = styled.div`
  min-height: 100vh;
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

export const NotFoundImage = styled.img`
  width: 50%;
  margin: 50px 10px 10px 10px;
`

export const NotFoundHeading = styled.h1`
  margin: 10px 0px 10px 0px;
  text-align: center;
  color: ${props => props.color};
`

export const NotFoundPara = styled.p`
  margin: 5px 0px 5px 0px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: ${props => props.color};
`
