import SpendingsContainer from './containers/SpendingsContainer'

export const routes = [
  {
    isNavBar: true,
    isExact: true,
    path: '/',
    name: 'Spendings',
    component: SpendingsContainer,
  },
  {
    isNavBar: true,
    isExact: true,
    path: '/spendings',
    name: 'Spendings',
    component: SpendingsContainer,
  },
]
