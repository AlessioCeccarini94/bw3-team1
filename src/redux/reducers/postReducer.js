const initialState = {
  post: [],
  loading: true,
  error: "",
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        ...state,
        post: action.payload,
      }
    case "POST_POSTS":
      return {
        ...state,
        post: action.payload,
      }
    case "FETCH_POST_ERROR":
      return {
        ...state,
        error: action.payload,
      }
    case "FETCH_POST_LOADING":
      return {
        ...state,
        loading: action.payload,
      }
    case "DELETE_POST":
      return {
        ...state,
        post: state.post.filter((post) => {
          return post._id !== action.payload
        }),
      }
    default:
      return state
  }
}

export default postReducer
