import React from 'react'
import './styles.scss'
import { connect } from 'react-redux'
import { Login } from '../../components/Login'
import { handleLogin, handleLogout } from '../../actions/Login'

class LoginContainer extends React.Component {
  render() {
    const { login, handleLogin } = this.props
    return <Login handleLogin={handleLogin} error={login.error} isLoggedIn={login.isLoggedIn} />
  }
}

const mapStateToProps = store => {
  return {
    login: store.login,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: credentials => dispatch(handleLogin(credentials)),
    handleLogout: () => dispatch(handleLogout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
