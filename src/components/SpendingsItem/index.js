import React from 'react'
import './styles.scss'

export class SpendingsItem extends React.Component {
  constructor(props) {
    super(props)
    this.iconSize = {
      width: this.props.size === 'large' ? 50 : 30,
      height: this.props.size === 'large' ? 60 : 40,
    }
    this.state = {
      fieldsData: this.props.data,
      shouldUpdate: true,
      edit: false,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.shouldUpdate
  }

  deleteHandler = () => {
    const { data, deleteSpending } = this.props
    deleteSpending(data.id)
  }

  inputHandler = e => {
    const fieldname = e.target.dataset.fieldname
    const text = e.target.textContent
    this.setState(state => {
      return {
        fieldsData: { ...state.fieldsData, [fieldname]: text },
        shouldUpdate: false,
      }
    })
  }

  toggleEdit = () => {
    this.setState(state => {
      return { edit: !state.edit, shouldUpdate: true }
    })
  }

  toggleSave = e => {
    let isUpdated = false
    const { data, categoriesList } = this.props
    const { fieldsData } = this.state
    const foundCategory = categoriesList.find(category => category.id == fieldsData.category)
    const changedData = {
      id: fieldsData.id,
      title: fieldsData.title,
      cost: fieldsData.cost,
      category: foundCategory ? foundCategory.id : 1,
      date: fieldsData.date,
    }

    for (let key in changedData) {
      if (changedData[key] !== data[key]) {
        isUpdated = true
        break
      }
    }

    if (isUpdated) {
      this.props.editSpending(changedData)
    }
    this.toggleEdit(true)
  }

  render() {
    const { data, size = 'large', category_title, icon_filename } = this.props
    const { edit } = this.state
    return (
      <div className={`spending-item-wrapper spending-item-wrapper_${size}`}>
        <div className="spending-item">
          <div className="spending-item__general-info">
            <img
              src={`/images/icons/${icon_filename}.png`}
              className="spending-item__icon"
              width={this.iconSize.width}
              height={this.iconSize.height}
              alt="Logo"
            />
            <div className="spending-item__info">
              <p
                data-fieldname="category"
                onInput={e => this.inputHandler(e)}
                contentEditable={edit}
                className={`spending-item__category ${edit ? 'spending-item_editable edit' : ''}`}
              >
                {category_title}
              </p>
              <p className={`spending-item__date`}>{data.date}</p>
            </div>
          </div>
          <div className="spending-item__title">
            <p
              data-fieldname="title"
              onInput={e => this.inputHandler(e)}
              className={`${edit ? 'spending-item_editable edit' : ''}`}
              contentEditable={edit}
            >
              {data.title}
            </p>
          </div>
          <div className={`spending-item__money-info ${edit ? 'spending-item_editable' : ''}`}>
            <span
              data-fieldname="cost"
              onInput={e => this.inputHandler(e)}
              contentEditable={edit}
              className={`spending-item__cost ${edit ? 'edit' : ''}`}
            >
              {data.cost}
            </span>{' '}
            ₽
          </div>
        </div>
        <div className="spending-item-wrapper__controls spending-controls">
          {edit ? (
            <button className="spending-controls__item" onClick={e => this.toggleSave(e)}>
              <i className="material-icons">save</i>
            </button>
          ) : (
            <button className="spending-controls__item" onClick={this.toggleEdit}>
              <i className="material-icons">edit</i>
            </button>
          )}

          <button className="spending-controls__item" onClick={this.deleteHandler}>
            <i className="material-icons">delete</i>
          </button>
        </div>
      </div>
    )
  }
}
