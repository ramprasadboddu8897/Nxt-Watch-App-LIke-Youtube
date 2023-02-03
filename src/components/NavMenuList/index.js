import {AiFillHome, AiOutlineClose} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {MdPlaylistAdd} from 'react-icons/md'
import {GiConsoleController, GiHamburgerMenu} from 'react-icons/gi'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  StyledPopup,
  HamBurgerButton,
  MenuListContainer,
  NavLinksContainer,
  SideBarNavLink,
  NavLinkIconContainer,
  NavLinkText,
  LinkRoute,
  CloseButton,
} from './styledComponents'

const NavMenuList = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, selectedOption, changeOption} = value
      const selectOption = option => {
        changeOption(option)
      }
      return (
        <StyledPopup
          isDarkTheme={isDarkTheme}
          trigger={
            <HamBurgerButton isDarkTheme={isDarkTheme}>
              <GiHamburgerMenu />
            </HamBurgerButton>
          }
          modal
        >
          {close => (
            <MenuListContainer isDarkTheme={isDarkTheme}>
              <CloseButton isDarkTheme={isDarkTheme} onClick={close}>
                <AiOutlineClose />
              </CloseButton>
              <NavLinksContainer>
                <LinkRoute to="/">
                  <li>
                    <SideBarNavLink
                      isSelected={selectedOption === 'HOME'}
                      background={isDarkTheme ? '#424242' : '#f1f5f9'}
                      onClick={() => {
                        selectOption('HOME')
                      }}
                    >
                      <NavLinkIconContainer>
                        <AiFillHome />
                      </NavLinkIconContainer>
                      <NavLinkText isDarkTheme={isDarkTheme}>Home</NavLinkText>
                    </SideBarNavLink>
                  </li>
                </LinkRoute>
                <LinkRoute to="/trending">
                  <li>
                    <SideBarNavLink
                      isSelected={selectedOption === 'TRENDING'}
                      background={isDarkTheme ? '#424242' : '#f1f5f9'}
                      onClick={() => {
                        selectOption('TRENDING')
                      }}
                    >
                      <NavLinkIconContainer>
                        <HiFire />
                      </NavLinkIconContainer>
                      <NavLinkText isDarkTheme={isDarkTheme}>
                        Trending
                      </NavLinkText>
                    </SideBarNavLink>
                  </li>
                </LinkRoute>
                <LinkRoute to="/gaming">
                  <li>
                    <SideBarNavLink
                      isSelected={selectedOption === 'GAMING'}
                      background={isDarkTheme ? '#424242' : '#f1f5f9'}
                      onClick={() => {
                        selectOption('GAMING')
                      }}
                    >
                      <NavLinkIconContainer>
                        <GiConsoleController />
                      </NavLinkIconContainer>
                      <NavLinkText isDarkTheme={isDarkTheme}>
                        Gaming
                      </NavLinkText>
                    </SideBarNavLink>
                  </li>
                </LinkRoute>
                <LinkRoute to="/saved-videos">
                  <li>
                    <SideBarNavLink
                      isSelected={selectedOption === 'SAVED'}
                      background={isDarkTheme ? '#424242' : '#f1f5f9'}
                      onClick={() => {
                        selectOption('SAVED')
                      }}
                    >
                      <NavLinkIconContainer>
                        <MdPlaylistAdd />
                      </NavLinkIconContainer>
                      <NavLinkText isDarkTheme={isDarkTheme}>
                        Saved Videos
                      </NavLinkText>
                    </SideBarNavLink>
                  </li>
                </LinkRoute>
              </NavLinksContainer>
            </MenuListContainer>
          )}
        </StyledPopup>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NavMenuList
