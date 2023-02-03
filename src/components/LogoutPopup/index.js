import {withRouter} from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  StyledPopup,
  LogoutPopupBgContainer,
  LogoutQuestion,
  CancelButton,
  ConfirmButton,
  LogoutButton,
  MobileButtonIcon,
  LargeScreenText,
} from './styledComponents'

const LogoutPopup = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      // On Click Logout Button
      const onClickConfirmLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }
      return (
        <StyledPopup
          isDarkTheme={isDarkTheme}
          trigger={
            <LogoutButton isDarkTheme={isDarkTheme}>
              <MobileButtonIcon isDarkTheme={isDarkTheme}>
                <FiLogOut />
              </MobileButtonIcon>
              <LargeScreenText isDarkTheme={isDarkTheme}>
                Logout
              </LargeScreenText>
            </LogoutButton>
          }
          modal
        >
          {close => (
            <LogoutPopupBgContainer isDarkTheme={isDarkTheme}>
              <LogoutQuestion isDarkTheme={isDarkTheme}>
                Are you sure, you want to logout?
              </LogoutQuestion>
              <CancelButton type="button" onClick={close}>
                Cancel
              </CancelButton>
              <ConfirmButton type="button" onClick={onClickConfirmLogout}>
                Confirm
              </ConfirmButton>
            </LogoutPopupBgContainer>
          )}
        </StyledPopup>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(LogoutPopup)
