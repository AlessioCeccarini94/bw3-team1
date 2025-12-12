export const FETCH_EXPERIENCES = "FETCH_EXPERIENCES"
export const ADD_EXPERIENCES = "ADD_EXPERIENCES"
export const DELETE_EXPERIENCES = "DELETE_EXPERIENCES"
export const FETCH_JOBS = "FETCH_JOBS"
export const ADD_JOBS = "ADD_JOBS"
export const DELETE_JOBS = "DELETE_JOBS"
export const POST_POSTS = "POST_POSTS"
export const FETCH_POSTS = "FETCH_POSTS"
export const FETCH_POST_ERROR = "FETCH_POST_ERROR"
export const FETCH_POST_LOADING = "FETCH_POST_LOADING"
export const DELETE_POST = "DELETE_POST"
export const MODIFY_POST = "MODIFY_POST"

export const fetchExperiencesAction = (userId) => {
  const URL = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZGI0OGQzMjJmNTAwMTUxMDc2YTEiLCJpYXQiOjE3NjUyNzQ4ODMsImV4cCI6MTc2NjQ4NDQ4M30.Q9Y9RBdw6vYbWZ6d5on0z8oXE_EA5RSmRYfa__uTGkY"
  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState) => {
    fetch(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: FETCH_EXPERIENCES,
          payload: data,
        })
      })
      .catch((error) => console.log(error))
  }
}
export const addExperienceAction = (userId, experience) => {
  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState) => {
    const URL = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZGI0OGQzMjJmNTAwMTUxMDc2YTEiLCJpYXQiOjE3NjUyNzQ4ODMsImV4cCI6MTc2NjQ4NDQ4M30.Q9Y9RBdw6vYbWZ6d5on0z8oXE_EA5RSmRYfa__uTGkY"
    return fetch(URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(experience),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: ADD_EXPERIENCES,
          payload: data,
        })
      })
      .catch((error) => console.log(error))
  }
}

export const deleteExperienceAction = (userId, experienceId) => {
  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState) => {
    const URL = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceId}`
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZGI0OGQzMjJmNTAwMTUxMDc2YTEiLCJpYXQiOjE3NjUyNzQ4ODMsImV4cCI6MTc2NjQ4NDQ4M30.Q9Y9RBdw6vYbWZ6d5on0z8oXE_EA5RSmRYfa__uTGkY"
    fetch(URL, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        dispatch({
          type: DELETE_EXPERIENCES,
          payload: experienceId,
        })
        console.log("deleted")
      })
      .catch((error) => console.log(error))
  }
}

export const fetchJobsAction = (query = "") => {
  const URL = query
    ? `https://strive-benchmark.herokuapp.com/api/jobs?search=${query}`
    : "https://strive-benchmark.herokuapp.com/api/jobs"

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZGI0OGQzMjJmNTAwMTUxMDc2YTEiLCJpYXQiOjE3NjUyNzQ4ODMsImV4cCI6MTc2NjQ4NDQ4M30.Q9Y9RBdw6vYbWZ6d5on0z8oXE_EA5RSmRYfa__uTGkY"

  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState) => {
    fetch(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: FETCH_JOBS,
          payload: data.data,
        })
      })
      .catch((error) => console.log(error))
  }
}

export const fetchPostAction = () => {
  const URL = `https://striveschool-api.herokuapp.com/api/posts/`
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZGI0OGQzMjJmNTAwMTUxMDc2YTEiLCJpYXQiOjE3NjUyNzQ4ODMsImV4cCI6MTc2NjQ4NDQ4M30.Q9Y9RBdw6vYbWZ6d5on0z8oXE_EA5RSmRYfa__uTGkY"
  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState) => {
    fetch(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("la chiamata non è ok: " + response.status)
        }
      })
      .then((arrayOfPost) => {
        const array = arrayOfPost.slice(-50)
        dispatch({
          type: FETCH_POSTS,
          payload: array.reverse(-50),
        })
        dispatch({
          type: FETCH_POST_LOADING,
          payload: false,
        })
      })
      .catch((err) => {
        console.log("Errore nella chiamata", err)
        dispatch({
          type: FETCH_POST_ERROR,
          payload: JSON.stringify(err, Object.getOwnPropertyNames(err)),
        })
        dispatch({
          type: FETCH_POST_LOADING,
          payload: false,
        })
      })
  }
}
export const deletePostAction = (postId) => {
  const URL = `https://striveschool-api.herokuapp.com/api/posts/${postId}`
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZGI0OGQzMjJmNTAwMTUxMDc2YTEiLCJpYXQiOjE3NjUyNzQ4ODMsImV4cCI6MTc2NjQ4NDQ4M30.Q9Y9RBdw6vYbWZ6d5on0z8oXE_EA5RSmRYfa__uTGkY"
  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState) => {
    fetch(URL, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("la chiamata non è ok: " + response.status)
        }
      })
      .then(() => {
        dispatch({
          type: DELETE_POST,
          payload: postId,
        })
      })
      .catch((err) => {
        console.log("Errore nella chiamata", err)
      })
  }
}

export const modifyPostAction = (postId, newText) => {
  const URL = `https://striveschool-api.herokuapp.com/api/posts/${postId}`
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZGI0OGQzMjJmNTAwMTUxMDc2YTEiLCJpYXQiOjE3NjUyNzQ4ODMsImV4cCI6MTc2NjQ4NDQ4M30.Q9Y9RBdw6vYbWZ6d5on0z8oXE_EA5RSmRYfa__uTGkY"
  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState) => {
    fetch(URL, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: newText,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("la chiamata non è ok: " + response.status)
        }
      })
      .then((data) => {
        dispatch({
          type: MODIFY_POST,
          payload: data,
        })
      })
      .catch((err) => {
        console.log("Errore nella chiamata", err)
      })
  }
}

export const uploadFileAction = (postId, newFile) => {
  const URL = `https://striveschool-api.herokuapp.com/api/posts/${postId}`
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZGI0OGQzMjJmNTAwMTUxMDc2YTEiLCJpYXQiOjE3NjUyNzQ4ODMsImV4cCI6MTc2NjQ4NDQ4M30.Q9Y9RBdw6vYbWZ6d5on0z8oXE_EA5RSmRYfa__uTGkY"
  const formData = new FormData()
  formData.append("post", newFile)
  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState) => {
    fetch(URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(
            "Errore " +
              response.status +
              " durante l'upload: " +
              (response.message || "Errore sconosciuto. Controlla il token.")
          )
        }
      })
      .then(() => {
        dispatch(fetchPostAction())
      })
      .catch((err) => {
        console.log("Errore nella chiamata", err)
      })
  }
}
