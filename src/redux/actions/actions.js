import { data } from "react-router-dom";

export const FETCH_EXPERIENCES = "FETCH_EXPERIENCES";
export const ADD_EXPERIENCES = "ADD_EXPERIENCES";
export const DELETE_EXPERIENCES = "DELETE_EXPERIENCES";
export const FETCH_JOBS = "FETCH_JOBS";
export const ADD_JOBS = "ADD_JOBS";
export const DELETE_JOBS = "DELETE_JOBS";
export const POST_POSTS = "POST_POSTS";

export const fetchExperiencesAction = (userId) => {
  const URL = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZGI0OGQzMjJmNTAwMTUxMDc2YTEiLCJpYXQiOjE3NjUyNzQ4ODMsImV4cCI6MTc2NjQ4NDQ4M30.Q9Y9RBdw6vYbWZ6d5on0z8oXE_EA5RSmRYfa__uTGkY";
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
        });
      })
      .catch((error) => console.log(error));
  };
};
export const addExperienceAction = (userId, experience) => {
  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState) => {
    const URL = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZGI0OGQzMjJmNTAwMTUxMDc2YTEiLCJpYXQiOjE3NjUyNzQ4ODMsImV4cCI6MTc2NjQ4NDQ4M30.Q9Y9RBdw6vYbWZ6d5on0z8oXE_EA5RSmRYfa__uTGkY";
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
        });
        return data;
      })
      .catch((error) => console.log(error));
  };
};

export const deleteExperienceAction = (userId, experienceId) => {
  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState) => {
    const URL = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceId}`;
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZGI0OGQzMjJmNTAwMTUxMDc2YTEiLCJpYXQiOjE3NjUyNzQ4ODMsImV4cCI6MTc2NjQ4NDQ4M30.Q9Y9RBdw6vYbWZ6d5on0z8oXE_EA5RSmRYfa__uTGkY";
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
        });
        console.log("deleted");
      })
      .catch((error) => console.log(error));
  };
};

export const fetchJobsAction = () => {
  const URL = "https://strive-benchmark.herokuapp.com/api/jobs";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZGI0OGQzMjJmNTAwMTUxMDc2YTEiLCJpYXQiOjE3NjUyNzQ4ODMsImV4cCI6MTc2NjQ4NDQ4M30.Q9Y9RBdw6vYbWZ6d5on0z8oXE_EA5RSmRYfa__uTGkY";

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
          payload: data,
        });
      })
      .catch((error) => console.log(error));
  };
};

export const addPostsAction = (e) => {
  const URL = `https://striveschool-api.herokuapp.com/api/posts`;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZGI0OGQzMjJmNTAwMTUxMDc2YTEiLCJpYXQiOjE3NjUyNzQ4ODMsImV4cCI6MTc2NjQ4NDQ4M30.Q9Y9RBdw6vYbWZ6d5on0z8oXE_EA5RSmRYfa__uTGkY";
  const file = e.target.files[0];
  if (!file) return;
  const formData = new FormData();
  formData.append("post", file);
  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState) => {
    fetch(URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("la chiamata non é ok: " + res.status);
        }
      })
      .then((arrayOfPost) => {
        dispatch({
          type: POST_POSTS,
          payload: arrayOfPost,
        });
      })
      .catch((err) => {
        console.log("Errore nella chiamata", err);
      });
  };
};
