const initialState = {
  posts: [],
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_POSTS":
      return {
        ...state,
        posts: action.payload,
      }
    default:
      return state
  }
}

export default postReducer
