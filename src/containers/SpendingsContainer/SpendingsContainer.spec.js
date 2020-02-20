import React from 'react'
import { shallow } from 'enzyme'
import { SpendingsContainer } from '.'

describe('Spendings container', () => {
  const props = {
    spendings: {
      error: null,
      isLoading: false,
      spendingsList: [],
    },
    categories: { error: null, categoriesData: [] },
    icons: { error: null, iconsData: [] },
    getSpendings: () => {},
    addSpending: () => {},
    deleteSpending: () => {},
    editSpending: () => {},
    getCategories: () => {},
    addCategory: () => {},
    deleteCategory: () => {},
    getIcons: () => {},
  }

  describe('Spendings container initial render', () => {
    const mockFetchGetSpendings = jest.fn()
    const mockFetchGetCategories = jest.fn()
    const mockFetchGetIcons = jest.fn()

    const nextProps = {
      ...props,
      getSpendings: mockFetchGetSpendings,
      getCategories: mockFetchGetCategories,
      getIcons: mockFetchGetIcons,
    }

    const spendingsContainer = shallow(<SpendingsContainer {...nextProps} />)

    it('renders properly', () => {
      expect(spendingsContainer).toMatchSnapshot()
    })

    it("dispatches the 'getSpendings' method froms props", () => {
      expect(mockFetchGetSpendings).toHaveBeenCalledTimes(1)
    })

    it("dispatches the 'getCategories' method froms props", () => {
      expect(mockFetchGetCategories).toHaveBeenCalledTimes(1)
    })

    it("dispatches the 'getIcons' method froms props", () => {
      expect(mockFetchGetIcons).toHaveBeenCalledTimes(1)
    })
  })

  describe('Spendings container is loading', () => {
    const nextProps = { ...props, spendings: { ...props.spendings, isLoading: true } }
    const spendingsContainer = shallow(<SpendingsContainer {...nextProps} />)

    it('Renders properly', () => {
      expect(spendingsContainer).toMatchSnapshot()
    })

    it('Loader renders', () => {
      expect(spendingsContainer.find('Loader')).toHaveLength(1)
    })
  })

  describe('Spendings container Tabs render', () => {
    const nextProps = {
      ...props,
      spendings: {
        ...props.spendings,
        spendingsList: [
          { id: 1, name: 'some' },
          { id: 2, name: 'lists' },
        ],
      },
    }
    const spendingsContainer = shallow(<SpendingsContainer {...nextProps} />)

    it('Renders properly', () => {
      expect(spendingsContainer).toMatchSnapshot()
    })
  })

  describe('Spendings container on error', () => {
    const nextProps = {
      ...props,
      spendings: {
        ...props.spendings,
        error: 'Some error message',
      },
    }
    const spendingsContainer = shallow(<SpendingsContainer {...nextProps} />)

    it('Renders properly', () => {
      expect(spendingsContainer).toMatchSnapshot()
    })

    it('ErrorComponent renders', () => {
      expect(spendingsContainer.find('ErrorComponent')).toHaveLength(1)
    })
  })
})
