import { configureStore } from "@reduxjs/toolkit"
import profileReducer from "./reducers/profileSlice"
import experiencesReducer from "./reducers/experiencesReducer"

const store = configureStore({
  reducer: {
    profile: profileReducer,
    experiences: experiencesReducer,
  },
})

export default store
