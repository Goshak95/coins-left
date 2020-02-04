import React from 'react'
import { connect } from 'react-redux'
import { DayCard } from '../../components/DayCard'

class SpendingsContainer extends React.Component {
  render() {
    return <DayCard />
  }
}

const mapStateToProps = store => {
  return {
    spendings: store.spendings,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SpendingsContainer)
