import React from 'react'
import './styles.scss'
import { connect } from 'react-redux'
import { DayCard } from '../../components/DayCard'
import { getSpendings, addSpending, deleteSpending, editSpending } from '../../actions/Spendings'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'

class SpendingsContainer extends React.Component {
  componentDidMount() {
    this.props.getSpendings()
  }

  render() {
    const { spendings, ...actions } = this.props
    const { error, isLoading, spendingsList } = spendings
    if (error) {
      return <div>Ошибка: {error.message}</div>
    } else if (isLoading) {
      return <Loader className="loader" type="ThreeDots" color="#00BFFF" height={150} width={150} />
    } else {
      return <DayCard spendingsList={spendingsList} actions={actions} />
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
    addSpending: spendingData => dispatch(addSpending(spendingData)),
    deleteSpending: id => dispatch(deleteSpending(id)),
    editSpending: id => dispatch(editSpending(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpendingsContainer)
