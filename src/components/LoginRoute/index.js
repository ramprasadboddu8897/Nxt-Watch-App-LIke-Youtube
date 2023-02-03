import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  ResponsiveContainer,
  FormContainer,
  Logo,
  InputContainer,
  Label,
  Input,
  ShowInput,
  ShowPasswordContainer,
  ShowLabel,
  LoginButton,
  ErrorText,
} from './styledComponents'

class LoginRoute extends Component {
  state = {
    showPassword: false,
    showErrorMessage: false,
    username: '',
    password: '',
    errorMessage: '',
  }

  // Api Calls
  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMessage =>
    this.setState({showErrorMessage: true, errorMessage})

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const apiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  // OnChange Events
  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  // Function Calls
  onClickShowButton = () =>
    this.setState(prevState => ({showPassword: !prevState.showPassword}))

  // Render Username Input
  renderUsername = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkThemeOn} = value
        const {username} = this.state
        return (
          <InputContainer>
            <Label isDark={isDarkThemeOn} htmlFor="username">
              USERNAME
            </Label>
            <Input
              value={username}
              onChange={this.onChangeUsername}
              isDark={isDarkThemeOn}
              id="username"
              placeholder="Username"
              type="text"
            />
          </InputContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  // Render Password Input
  renderPassword = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkThemeOn} = value
        const {showPassword, password} = this.state
        const inputType = showPassword ? 'text' : 'password'
        return (
          <InputContainer>
            <Label isDark={isDarkThemeOn} htmlFor="password">
              PASSWORD
            </Label>
            <Input
              value={password}
              onChange={this.onChangePassword}
              isDark={isDarkThemeOn}
              id="password"
              placeholder="Password"
              type={inputType}
            />
          </InputContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  // Render Show Password
  renderShowPassword = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkThemeOn} = value
        return (
          <ShowPasswordContainer>
            <ShowInput
              onClick={this.onClickShowButton}
              id="show-password"
              type="checkbox"
            />
            <ShowLabel isDark={isDarkThemeOn} htmlFor="show-password">
              Show Password
            </ShowLabel>
          </ShowPasswordContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkThemeOn} = value
          const {showErrorMessage, errorMessage} = this.state
          const imageLogo = isDarkThemeOn
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <ResponsiveContainer isDark={isDarkThemeOn}>
              <FormContainer
                onSubmit={this.onSubmitForm}
                isDark={isDarkThemeOn}
              >
                <Logo src={imageLogo} />
                {this.renderUsername()}
                {this.renderPassword()}
                {this.renderShowPassword()}
                <LoginButton type="submit">Login</LoginButton>
                {showErrorMessage && (
                  <ErrorText isDark={isDarkThemeOn}>*{errorMessage}</ErrorText>
                )}
              </FormContainer>
            </ResponsiveContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginRoute
