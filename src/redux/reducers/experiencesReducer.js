import { FETCH_EXPERIENCES } from "./actions"
const initialState = {
  experiences: [],
}
const experiencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXPERIENCES:
      return {
        ...state,
        experiences: action.payload,
      }
    default:
      return state
  }
}
export default experiencesReducer
