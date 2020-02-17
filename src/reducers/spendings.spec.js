import { SpendingsReducer, initialState } from './spendings'
import {
  GET_SPENDINGS_SUCCESS,
  GET_SPENDINGS_REQUEST,
  GET_SPENDINGS_FAILURE,
  ADD_SPENDING_REQUEST,
  ADD_SPENDING_SUCCESS,
  ADD_SPENDING_FAILURE,
  DELETE_SPENDING_REQUEST,
  DELETE_SPENDING_SUCCESS,
  DELETE_SPENDING_FAILURE,
  EDIT_SPENDING_REQUEST,
  EDIT_SPENDING_SUCCESS,
  EDIT_SPENDING_FAILURE,
} from '../actions/Spendings'

describe('Spendings reducer', () => {
  it('Should return the initial state', () => {
    expect(SpendingsReducer(undefined, {})).toEqual(initialState)
  })

  describe('GET REDUCERS', () => {
    it('GET_SPENDINGS_REQUEST after situation without error', () => {
      const action = {
        type: GET_SPENDINGS_REQUEST,
      }
      expect(SpendingsReducer(initialState, action)).toEqual({
        ...initialState,
        isLoading: true,
        error: null,
      })
    })

    it('GET_SPENDINGS_REQUEST after an error', () => {
      const action = {
        type: GET_SPENDINGS_REQUEST,
      }

      const initialState = {
        error: 'Some error',
        isLoading: false,
        spendingsList: [],
      }

      expect(SpendingsReducer(initialState, action)).toEqual({
        ...initialState,
        error: null,
        isLoading: true,
      })
    })

    it('GET_SPENDINGS_SUCCESS', () => {
      const initialState = {
        error: null,
        isLoading: true,
        spendingsList: [],
      }

      const action = {
        type: GET_SPENDINGS_SUCCESS,
        payload: ['spend1', 'spend2', 'spend3'],
      }

      expect(SpendingsReducer(initialState, action)).toEqual({
        ...initialState,
        isLoading: false,
        spendingsList: action.payload,
      })
    })

    it('GET_SPENDINGS_FAILURE on request', () => {
      const initialState = {
        spendingsList: [],
        error: null,
        isLoading: false,
      }

      const action = {
        type: GET_SPENDINGS_FAILURE,
        payload: 'Some error',
      }

      expect(SpendingsReducer(initialState, action)).toEqual({
        ...initialState,
        isLoading: false,
        error: action.payload,
      })
    })

    it('GET_SPENDINGS_FAILURE on success', () => {
      const initialState = {
        spendingsList: ['some', 'data'],
        error: null,
        isLoading: true,
      }

      const action = {
        type: GET_SPENDINGS_FAILURE,
        payload: 'Some error',
      }

      expect(SpendingsReducer(initialState, action)).toEqual({
        ...initialState,
        isLoading: false,
        error: action.payload,
      })
    })
  })

  describe('ADD REDUCERS', () => {
    it('ADD_SPENDING_REQUEST after situation without error', () => {
      const action = {
        type: ADD_SPENDING_REQUEST,
      }
      expect(SpendingsReducer(initialState, action)).toEqual({
        ...initialState,
        isLoading: true,
        error: null,
      })
    })

    it('ADD_SPENDING_REQUEST after an error', () => {
      const action = {
        type: ADD_SPENDING_REQUEST,
      }

      const initialState = {
        error: 'Some error',
        isLoading: false,
        spendingsList: [],
      }

      expect(SpendingsReducer(initialState, action)).toEqual({
        ...initialState,
        error: null,
        isLoading: true,
      })
    })

    it('ADD_SPENDING_SUCCESS', () => {
      const initialState = {
        error: null,
        isLoading: true,
        spendingsList: [],
      }

      const action = {
        type: ADD_SPENDING_SUCCESS,
        payload: 'New spending',
      }

      const newList = initialState.spendingsList.concat()
      newList.push(action.payload)

      expect(SpendingsReducer(initialState, action)).toEqual({
        ...initialState,
        isLoading: false,
        spendingsList: newList,
      })
    })

    it('ADD_SPENDING_FAILURE on request', () => {
      const initialState = {
        spendingsList: [],
        error: null,
        isLoading: false,
      }

      const action = {
        type: ADD_SPENDING_FAILURE,
        payload: 'Some error',
      }

      expect(SpendingsReducer(initialState, action)).toEqual({
        ...initialState,
        isLoading: false,
        error: action.payload,
      })
    })

    it('ADD_SPENDING_FAILURE on success', () => {
      const initialState = {
        spendingsList: ['some', 'data'],
        error: null,
        isLoading: true,
      }

      const action = {
        type: ADD_SPENDING_FAILURE,
        payload: 'Some error',
      }

      expect(SpendingsReducer(initialState, action)).toEqual({
        ...initialState,
        isLoading: false,
        error: action.payload,
      })
    })
  })

  describe('DELETE REDUCERS', () => {
    it('DELETE_SPENDING_REQUEST after situation without error', () => {
      const action = {
        type: DELETE_SPENDING_REQUEST,
      }
      expect(SpendingsReducer(initialState, action)).toEqual({
        ...initialState,
        isLoading: true,
        error: null,
      })
    })

    it('DELETE_SPENDING_REQUEST after an error', () => {
      const action = {
        type: DELETE_SPENDING_REQUEST,
      }

      const initialState = {
        error: 'Some error',
        isLoading: false,
        spendingsList: [],
      }

      expect(SpendingsReducer(initialState, action)).toEqual({
        ...initialState,
        error: null,
        isLoading: true,
      })
    })

    it('DELETE_SPENDING_SUCCESS', () => {
      const initialState = {
        error: null,
        isLoading: true,
        spendingsList: [
          { id: 1, prop: 'test' },
          { id: 2, prop: 'test2' },
          { id: 3, prop: 'test3' },
        ],
      }

      const action = {
        type: DELETE_SPENDING_SUCCESS,
        payload: { id: 2, prop: 'test2' },
      }

      const newList = initialState.spendingsList.filter(item => action.payload.id !== item.id)

      expect(SpendingsReducer(initialState, action)).toEqual({
        ...initialState,
        isLoading: false,
        spendingsList: newList,
      })
    })

    it('DELETE_SPENDING_FAILURE on request', () => {
      const initialState = {
        spendingsList: [],
        error: null,
        isLoading: false,
      }

      const action = {
        type: DELETE_SPENDING_FAILURE,
        payload: 'Some error',
      }

      expect(SpendingsReducer(initialState, action)).toEqual({
        ...initialState,
        isLoading: false,
        error: action.payload,
      })
    })

    it('DELETE_SPENDING_FAILURE on success', () => {
      const initialState = {
        spendingsList: ['some', 'data'],
        error: null,
        isLoading: true,
      }

      const action = {
        type: DELETE_SPENDING_FAILURE,
        payload: 'Some error',
      }

      expect(SpendingsReducer(initialState, action)).toEqual({
        ...initialState,
        isLoading: false,
        error: action.payload,
      })
    })
  })

  describe('EDIT REDUCERS', () => {
    it('EDIT_SPENDING_REQUEST after situation without error', () => {
      const action = {
        type: EDIT_SPENDING_REQUEST,
      }
      console.log(initialState)
      //isLoading is false, because we don't wanna see Loader on edit request
      expect(SpendingsReducer(initialState, action)).toEqual({
        ...initialState,
        error: null,
        isLoading: false,
      })
    })

    it('EDIT_SPENDING_REQUEST after an error', () => {
      const action = {
        type: EDIT_SPENDING_REQUEST,
      }

      const initialState = {
        error: 'Some error',
        isLoading: false,
        spendingsList: [],
      }

      expect(SpendingsReducer(initialState, action)).toEqual({
        ...initialState,
        error: null,
      })
    })

    it('EDIT_SPENDING_SUCCESS', () => {
      const initialState = {
        error: null,
        isLoading: false,
        spendingsList: [
          { id: 1, prop: 'test' },
          { id: 2, prop: 'test2' },
          { id: 3, prop: 'test3' },
        ],
      }

      const action = {
        type: EDIT_SPENDING_SUCCESS,
        payload: { id: 2, prop: 'changed' },
      }

      const newList = initialState.spendingsList.map(item => {
        if (action.payload.id === item.id) {
          return action.payload
        }

        return item
      })

      expect(SpendingsReducer(initialState, action)).toEqual({
        ...initialState,
        isLoading: false,
        spendingsList: newList,
      })
    })

    it('EDIT_SPENDING_FAILURE', () => {
      const initialState = {
        spendingsList: [],
        error: null,
        isLoading: false,
      }

      const action = {
        type: EDIT_SPENDING_FAILURE,
        payload: 'Some error',
      }

      expect(SpendingsReducer(initialState, action)).toEqual({
        ...initialState,
        isLoading: false,
        error: action.payload,
      })
    })
  })
})
