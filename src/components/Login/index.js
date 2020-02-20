import React from 'react'
import { Redirect } from 'react-router-dom'
import { ErrorComponent } from '../ErrorComponent'
import PropTypes from 'prop-types'
import './styles.scss'
export class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: '',
      password: '',
    }
  }

  handleOnChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleLogin(this.state)
  }

  renderForm = () => {
    return (
      <form className="login__form" name="login" onSubmit={this.handleSubmit}>
        <fieldset className="login">
          <div>
            <h3>Logging in</h3>
            <label>
              <input
                name="login"
                type="text"
                onChange={this.handleOnChange}
                value={this.state.login}
                placeholder="Enter login"
              />
            </label>
            <label>
              <input
                name="password"
                type="password"
                onChange={this.handleOnChange}
                value={this.state.password}
                placeholder="Enter password"
              />
            </label>
          </div>
          <button type="submit">Log in</button>
        </fieldset>
      </form>
    )
  }

  render() {
    const { error, isLoggedIn } = this.props

    if (isLoggedIn) {
      return <Redirect to="/spendings" />
    }
    return (
      <div className="login">
        {error && <ErrorComponent message={error} />}
        {this.renderForm()}
      </div>
    )
  }
}

Login.propTypes = {
  error: PropTypes.string,
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
}
