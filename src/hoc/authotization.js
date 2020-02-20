import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export const Authorization = WrappedComponent => {
  class WithAuthorization extends React.Component {
    render() {
      const { isLoggedIn } = this.props
      if (!isLoggedIn) {
        return <Redirect to="/login" />
      }

      return <WrappedComponent {...this.props} />
    }
  }

  const mapStateToProps = store => ({
    isLoggedIn: store.login.isLoggedIn,
  })

  return connect(mapStateToProps)(WithAuthorization)
}
