import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZGI0OGQzMjJmNTAwMTUxMDc2YTEiLCJpYXQiOjE3NjUyNzQ4ODMsImV4cCI6MTc2NjQ4NDQ4M30.Q9Y9RBdw6vYbWZ6d5on0z8oXE_EA5RSmRYfa__uTGkY"
const API_URL = "https://striveschool-api.herokuapp.com/api/profile"

// Thunk per il fetch del profilo dall'API
export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async (userId = "me") => {
    const response = await fetch(`${API_URL}/${userId}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error("Errore nel caricamento del profilo")
    }

    const data = await response.json()
    return data
  }
)

// Thunk per ottenere tutti i profili
export const fetchAllProfiles = createAsyncThunk(
  "profile/fetchAllProfiles",
  async () => {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error("Errore nel caricamento dei profili")
    }

    const data = await response.json()
    return data
  }
)

// Thunk per aggiornare il profilo
export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (profileData) => {
    const response = await fetch(API_URL, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileData),
    })

    if (!response.ok) {
      throw new Error("Errore nell'aggiornamento del profilo")
    }

    const data = await response.json()
    return data
  }
)

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    currentUser: null,
    allProfiles: [],
    loading: false,
    error: null,
    updating: false,
  },
  reducers: {
    setProfile: (state, action) => {
      state.currentUser = action.payload
    },
    clearProfile: (state) => {
      state.currentUser = null
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch singolo profilo
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false
        state.currentUser = action.payload
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      // Fetch tutti i profili
      .addCase(fetchAllProfiles.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchAllProfiles.fulfilled, (state, action) => {
        state.loading = false
        state.allProfiles = action.payload
      })
      .addCase(fetchAllProfiles.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      // Update profilo
      .addCase(updateProfile.pending, (state) => {
        state.updating = true
        state.error = null
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.updating = false
        state.currentUser = action.payload
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.updating = false
        state.error = action.error.message
      })
  },
})

export const { setProfile, clearProfile } = profileSlice.actions
export default profileSlice.reducer
