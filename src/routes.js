import { Expenses } from './containers/Expenses'

export const routes = [
    {
        isNavBar: true,
        isExact: true,
        path: "/",
        name: "Expenses",
        component: Expenses
      },
      {
        isNavBar: true,
        isExact: true,
        path: "/expenses",
        name: "Expenses",
        component: Expenses
      },
]