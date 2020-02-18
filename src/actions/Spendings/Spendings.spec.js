import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { API_ROOT } from '../../constants/Defaults'
import * as t from './types'
import { getSpendings, addSpending, deleteSpending, editSpending } from './Spendings'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Spendings actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates GET_SPENDINGS_SUCCESS then fetching spendings has been done', () => {
    fetchMock.getOnce(`${API_ROOT}/spendings`, {
      headers: { 'content-type': 'application/json' },
      body: [
        { id: 1, data: 'someData' },
        { id: 2, data: 'someData2' },
      ],
    })

    const expectedActions = [
      {
        type: t.GET_SPENDINGS_REQUEST,
      },
      {
        type: t.GET_SPENDINGS_SUCCESS,
        payload: [
          { id: 1, data: 'someData' },
          { id: 2, data: 'someData2' },
        ],
      },
    ]

    const store = mockStore()

    return store.dispatch(getSpendings()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates ADD_SPENDING_SUCCESS then adding hew spending has been done', () => {
    fetchMock.postOnce(`${API_ROOT}/spendings`, {
      headers: { 'content-type': 'application/json' },
      body: [
        { id: 1, data: 'someData' },
        { id: 2, data: 'someData2' },
      ],
    })

    const expectedActions = [
      {
        type: t.ADD_SPENDING_REQUEST,
      },
      {
        type: t.ADD_SPENDING_SUCCESS,
        payload: [
          { id: 1, data: 'someData' },
          { id: 2, data: 'someData2' },
        ],
      },
    ]

    const store = mockStore()

    return store.dispatch(addSpending({ id: 3, data: 'someData3' })).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates DELETE_SPENDING_SUCCESS then deleting a spending has been done', () => {
    fetchMock.deleteOnce(`${API_ROOT}/spendings/1`, {
      headers: { 'content-type': 'application/json' },
      body: [
        { id: 1, data: 'someData' },
        { id: 2, data: 'someData2' },
      ],
    })

    const expectedActions = [
      {
        type: t.DELETE_SPENDING_REQUEST,
      },
      {
        type: t.DELETE_SPENDING_SUCCESS,
        payload: [
          { id: 1, data: 'someData' },
          { id: 2, data: 'someData2' },
        ],
      },
    ]

    const store = mockStore()

    return store.dispatch(deleteSpending(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates EDIT_SPENDING_SUCCESS then fetching an updated spendings has been done', () => {
    fetchMock.putOnce(`${API_ROOT}/spendings/2`, {
      headers: { 'content-type': 'application/json' },
      body: [
        { id: 1, data: 'someData' },
        { id: 2, data: 'someData2' },
      ],
    })

    const expectedActions = [
      {
        type: t.EDIT_SPENDING_REQUEST,
      },
      {
        type: t.EDIT_SPENDING_SUCCESS,
        payload: [
          { id: 1, data: 'someData' },
          { id: 2, data: 'someData2' },
        ],
      },
    ]

    const store = mockStore()

    return store.dispatch(editSpending({ id: 2, data: 'newData' })).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
