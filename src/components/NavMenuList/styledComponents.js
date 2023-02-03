import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import styled from 'styled-components'

export const StyledPopup = styled(Popup)`
  &-content {
    width: 100%;
    height: 100%;
    background-color: ${props => (props.isDarkTheme ? '#313131 ' : '#f9f9f9')};
    text-align: center;
    border-radius: 8px;
    padding: 24px;
  }
  &-overlay {
    background: rgba(0, 0, 0, 0.5);
  }
`
export const HamBurgerButton = styled.button`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
  background-color: transparent;
  margin-right: 10px;
  border: none;
  outline: none;
  font-size: 30px;
  align-items: center;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const MenuListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#ffffff')};
  align-items: center;
  height: 80vh;
  width: 100vw;
`
export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 90vh;
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#ffffff')};
`

export const NavLinksContainer = styled.ul`
  margin-top: 16px;
  list-style-type: none;
  padding: 0;
`

export const SideBarNavLink = styled.button`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 100vw;
  border: none;
  background-color: ${props =>
    props.isSelected ? props.background : 'transparent'};
  font-weight: ${props => (props.isSelected ? 700 : 'normal')};
  color: ${props => (props.isSelected ? '#ff0000' : '#606060')};
`

export const NavLinkIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  padding-right: 10px;
  font-size: 34px;
`

export const NavLinkText = styled.p`
  font-family: Roboto;
  font-size: 24px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#212121')};
  width: 80%;
  text-align: left;
`
export const LinkRoute = styled(Link)`
  text-decoration: none;
  width: 100%;
`

export const FooterContainer = styled.div`
  padding: 16px;
`

export const FooterHeading = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-weight: 600;
  margin-bottom: 24px;
`
export const SocialMediaHandlesContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
`
export const SocialMediaIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 8px;
`
export const FooterDescription = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
  font-weight: 500;
  line-height: 1.5;
  margin-top: 0;
`
export const CloseButton = styled.button`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
  background-color: transparent;
  align-self: flex-end;
  margin-right: 80px;
  border: none;
  outline: none;
  font-size: 30px;
`
