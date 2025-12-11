import { configureStore } from "@reduxjs/toolkit"
import profileReducer from "./reducers/profileSlice"
import experiencesReducer from "./reducers/experiencesReducer"
import jobsReducer from "./reducers/jobsReducer"
import postReducer from "./reducers/postReducer"

const store = configureStore({
  reducer: {
    profile: profileReducer,
    experiences: experiencesReducer,
    jobs: jobsReducer,
    posts: postReducer,
  },
})

export default store
