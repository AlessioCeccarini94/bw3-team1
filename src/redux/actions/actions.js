export const FETCH_EXPERIENCES = "FETCH_EXPERIENCES"
export const ADD_EXPERIENCES = "ADD_EXPERIENCES"

export const fetchExperiencesAction = (userId) => {
  // eslint-disable-next-line no-unused-vars
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
        console.log("data", data)
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
    fetch(URL, {
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
