import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { routes } from './routes'
import './App.scss'
import { NotFound } from './components/NotFound'

class App extends React.Component {
  renderRoutes = () => {
    return routes.map(route => {
      return (
        <Route
          key={route.path}
          path={route.path}
          exact={route.isExact}
          component={route.component}
        />
      )
    })
  }

  render() {
    return (
      <Router>
        <div className="app">
          <header className="menu">
            <Navigation />
          </header>
          <main className="content">
            <Switch>
              {this.renderRoutes()}
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}

export default App
