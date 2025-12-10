import { FETCH_JOBS } from "../actions/actions"

const initialState = {
  jobs: [],
}

export const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        ...state,
        jobs: action.payload,
      }
    default:
      return state
  }
}
