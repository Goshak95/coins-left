import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const Tab = ({ path, active, title, clickHandler, ...props }) => {
  return (
    <a onClick={clickHandler} className={`tabs__tab ${active ? 'tabs__tab_active' : ''}`}>
      {title}
    </a>
  )
}

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 0,
    }
  }

  static Tab = Tab

  handleClick = (e, index) => {
    e.preventDefault()
    this.setState({ activeTab: index })
  }

  isActive = index => index === this.state.activeTab

  render() {
    return (
      <section className="tabs">
        {React.Children.map(this.props.children, (child, index) =>
          React.cloneElement(
            child,
            {
              active: this.isActive(index),
              clickHandler: e => this.handleClick(e, index),
            },
            child.props.title
          )
        )}

        {React.Children.map(
          this.props.children,
          (child, index) =>
            this.isActive(index) && <div className="tabs__content">{child.props.children}</div>
        )}
      </section>
    )
  }
}

Tab.propTypes = {
  path: PropTypes.string,
  active: PropTypes.bool,
  title: PropTypes.string,
  onClick: PropTypes.func,
}
export { Tabs }
