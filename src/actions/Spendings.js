export const GET_SPENDINGS = 'GET_SPENDINGS'

export function getSpendings(spendingsList) {
  return {
    type: GET_SPENDINGS,
    payload: spendingsList,
  }
}
