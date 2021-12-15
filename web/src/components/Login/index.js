import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import Context from '../../Context/Context'
import {
  LoginContainer,
  LoginForm,
  LoginFormLogo,
  LoginFormLabel,
  CheckboxLabel,
  LoginFormInput,
  LoginFormCheckboxInput,
  CheckboxContainer,
  FormSubmitButton,
  ErrorTextPara,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
    displayErrorMsg: false,
    displayPassword: false,
  }

  getUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  getPassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSuccessfulLogin = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onLoginFailure = errorMessage => {
    this.setState({displayErrorMsg: true, errorMessage})
  }

  attemptLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const user_name =username
    const userDetails = {user_name, password}
    const loginUrl = 'http://127.0.0.1:8000/login'
    const loginOptions = {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, loginOptions)
    const responseData = await response.json()
    if (response.ok) {
      this.onSuccessfulLogin(responseData.access_token)
      
    } else {
      this.onLoginFailure(responseData.error_msg)
    }
  }

  showPassword = event => {
    this.setState({displayPassword: event.target.checked})
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isLightThemeActive} = value
          const loginFormLogo = isLightThemeActive
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          const loginBgColor = isLightThemeActive ? '#f9f9f9' : '#181818'
          const loginFormBgColor = isLightThemeActive ? '#f9f9f9' : '#0f0f0f'
          const loginFormLabelColor = isLightThemeActive ? '#181818' : '#f9f9f9'
          const {errorMessage, displayErrorMsg, displayPassword} = this.state
          const token = Cookies.get('jwt_token')
          if (token !== undefined) {
            return <Redirect to="/" />
          }
          return (
            <LoginContainer backgroundColor={loginBgColor}>
              <LoginForm
                backgroundColor={loginFormBgColor}
                onSubmit={this.attemptLogin}
              >
                <LoginFormLogo src={loginFormLogo} alt="website logo" />
                <LoginFormLabel color={loginFormLabelColor} htmlFor="username">
                  USERNAME
                </LoginFormLabel>
                <LoginFormInput
                  id="username"
                  placeholder="Username"
                  type="text"
                  onChange={this.getUsername}
                />
                <LoginFormLabel color={loginFormLabelColor} htmlFor="password">
                  PASSWORD
                </LoginFormLabel>
                <LoginFormInput
                  id="password"
                  placeholder="Password"
                  type={displayPassword ? 'text' : 'password'}
                  onChange={this.getPassword}
                />
                <CheckboxContainer>
                  <LoginFormCheckboxInput
                    id="showPassword"
                    type="checkbox"
                    onChange={this.showPassword}
                  />
                  <CheckboxLabel
                    color={loginFormLabelColor}
                    htmlFor="showPassword"
                  >
                    Show Password
                  </CheckboxLabel>
                </CheckboxContainer>
                <FormSubmitButton>Login</FormSubmitButton>
                {displayErrorMsg && (
                  <ErrorTextPara>*{errorMessage}</ErrorTextPara>
                )}
              </LoginForm>
            </LoginContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Login
