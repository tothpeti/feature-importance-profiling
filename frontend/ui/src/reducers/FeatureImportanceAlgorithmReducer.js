import uuid from 'uuid'

export const featureImportanceAlgorithmReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_ALGORITHM':
      return [...state, {
        name: action.algorithm.name
      }]

    case 'REMOVE_ALGORITHM':
      return state.filter(algorithm => algorithm.id !== action.id)

    case 'EDIT_ALGORITHM':
      return {}

    default:
      return state
  }
}
