import React from 'react'
import { connect } from 'react-redux'
import { DayCard } from '../../components/DayCard'
import { getSpendings } from '../../actions/Spendings'

class SpendingsContainer extends React.Component {
  componentDidMount() {
    fetch('https://5e3ed04a64c3f60014550d95.mockapi.io/api/v1/coinsleft/spendings')
      .then(response => response.json())
      .then(data => this.props.getSpendings(data))
  }

  render() {
    const { error, isLoaded, spendingsList } = this.props.spendings
    if (error) {
      return <div>Ошибка: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Загрузка...</div>
    } else {
      return <DayCard spendingsList={spendingsList} />
    }
  }
}

const mapStateToProps = store => {
  return {
    spendings: store.spendings,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSpendings: spendingsList => dispatch(getSpendings(spendingsList)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpendingsContainer)
