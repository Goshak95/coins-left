import SpendingsContainer from './containers/SpendingsContainer'
import LoginContainer from './containers/LoginContainer'
import HomePageContainer from './containers/HomePageContainer'

export const routes = [
  {
    isNavBar: true,
    isExact: true,
    path: '/',
    name: 'Home',
    component: HomePageContainer,
    isPrivate: false,
  },
  {
    isNavBar: true,
    isExact: true,
    path: '/login',
    name: 'Login',
    component: LoginContainer,
    isPrivate: false,
  },
  {
    isNavBar: true,
    isExact: true,
    path: '/spendings',
    name: 'Spendings',
    component: SpendingsContainer,
    isPrivate: true,
  },
]
