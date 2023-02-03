import {FaMoon} from 'react-icons/fa'
import {BiSun} from 'react-icons/bi'

import {withRouter, Link} from 'react-router-dom'
import LogoutPopup from '../LogoutPopup'
import NavMenuList from '../NavMenuList'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  HeaderBgContainer,
  HeaderLogo,
  ThemeIconContainer,
  ProfileIcon,
} from './styledComponents'

const Header = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, onToggleThemeIcon} = value
      const onClickChangeTheme = () => {
        onToggleThemeIcon()
      }
      return (
        <HeaderBgContainer isDarkTheme={isDarkTheme}>
          <Link to="/">
            <HeaderLogo
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <ThemeIconContainer
            isDarkTheme={isDarkTheme}
            type="button"
            onClick={onClickChangeTheme}
            data-testid="theme"
          >
            {isDarkTheme ? <BiSun /> : <FaMoon />}
          </ThemeIconContainer>
          <ProfileIcon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
          <NavMenuList isDarkTheme={isDarkTheme} />
          <LogoutPopup isDarkTheme={isDarkTheme} />
        </HeaderBgContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
