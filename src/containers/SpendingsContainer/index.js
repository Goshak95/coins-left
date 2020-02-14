import React from 'react'
import './styles.scss'
import { connect } from 'react-redux'
import { DayCard } from '../../components/DayCard'
import { getSpendings, addSpending, deleteSpending, editSpending } from '../../actions/Spendings'
import { getCategories, addCategory, deleteCategory } from '../../actions/Categories'
import { getIcons } from '../../actions/Icons'
import { ErrorComponent } from '../../components/ErrorComponent'
import { Tabs } from '../../components/Tabs'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'

class SpendingsContainer extends React.Component {
  componentDidMount() {
    this.props.getIcons()
    this.props.getCategories()
    this.props.getSpendings()
  }

  render() {
    const { spendings, categories, icons, ...actions } = this.props
    const { error, isLoading, spendingsList } = spendings
    if (error) {
      return <ErrorComponent message={error} />
    } else if (isLoading) {
      return <Loader className="loader" type="ThreeDots" color="#00BFFF" height={150} width={150} />
    } else {
      return (
        <Tabs>
          <Tabs.Tab path="/spendings/today" title="Current spendings">
            <DayCard
              spendingsList={spendingsList}
              categories={categories.categoriesData}
              icons={icons.iconsData}
              actions={actions}
            />
          </Tabs.Tab>
          <Tabs.Tab path="/spendings/categories" title="Categories">
            <h1>Categories!</h1>
          </Tabs.Tab>
        </Tabs>
      )
    }
  }
}

const mapStateToProps = store => {
  return {
    spendings: store.spendings,
    categories: store.categories,
    icons: store.icons,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSpendings: spendingsList => dispatch(getSpendings(spendingsList)),
    addSpending: spendingData => dispatch(addSpending(spendingData)),
    deleteSpending: id => dispatch(deleteSpending(id)),
    editSpending: id => dispatch(editSpending(id)),
    getCategories: () => dispatch(getCategories()),
    addCategory: categoryData => dispatch(addCategory(categoryData)),
    deleteCategory: id => dispatch(deleteCategory(id)),
    getIcons: () => dispatch(getIcons()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpendingsContainer)
