import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    width: 16%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.backgroundColor};
  }
`

export const SidebarTopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-direction: center;
  align-items: center;
`

export const SidebarTopContainerList = styled.ul`
  width: 100%;
  list-style: none;
  padding: 5px;
  margin: 5px 0px 5px 0px;
`

export const SidebarTopContainerListItem = styled.li`
  list-style-type: none;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 5px 5px 15px;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
`
export const SidebarTopContainerListItemText = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  margin: 5px 0px 5px 15px;
  font-weight: 500;
  color: ${props => props.color};
`

export const SidebarBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 5px 5px 5px 15px;
`

export const SidebarBottomHeading = styled.p`
  margin: 5px 0px 5px 0px;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.color};
`

export const SidebarBottomIconsContainer = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const SidebarBottomIconImage = styled.img`
  height: 30px;
  width: 30px;
  margin: 3px;
`

export const SidebarBottomContainerText = styled.p`
  margin: 3px 0px 3px 0px;
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.color};
  font-weight: 500;
`
