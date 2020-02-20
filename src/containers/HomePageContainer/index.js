import React from 'react'
import './styles.scss'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class HomePageContainer extends React.Component {
  render() {
    const { isLoggedIn } = this.props

    if (isLoggedIn) {
      return <Redirect to="/spendings" />
    }
    return (
      <div className="home">
        <h1>Welcome! Please log in to continue</h1>
        <a href="/login">Log in</a>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  isLoggedIn: store.login.isLoggedIn,
})

export default connect(mapStateToProps)(HomePageContainer)
