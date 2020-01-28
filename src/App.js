import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { routes } from './routes'
import './App.css'

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
          <Navigation />
          <Switch>{this.renderRoutes()}</Switch>
        </div>
      </Router>
    )
  }
}

export default App
