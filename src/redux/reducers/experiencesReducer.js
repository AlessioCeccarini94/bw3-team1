import { FETCH_EXPERIENCES, ADD_EXPERIENCES } from "../actions/actions"
const initialState = {
  experiences: [],
}
const experiencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXPERIENCES:
      return {
        ...state,
        experiences: [...state.experiences, action.payload],
      }
    case ADD_EXPERIENCES:
      return {
        ...state,
        experiences: [...state.experiences, action.payload],
      }
    default:
      return state
  }
}
export default experiencesReducer
