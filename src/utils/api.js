// Configurazione API centralizzata
export const API_CONFIG = {
  baseURL: "https://striveschool-api.herokuapp.com/api",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZWQ2NWQzMjJmNTAwMTUxMDc2YmUiLCJpYXQiOjE3NjUyNzI5MzMsImV4cCI6MTc2NjQ4MjUzM30.W9kBVgNP5OrdPm8qu6a_oEkJPfFmUA_KlW_XzwcHb3Y",
}

// Headers comuni per tutte le richieste
export const getHeaders = () => ({
  Authorization: `Bearer ${API_CONFIG.token}`,
  "Content-Type": "application/json",
})

// Helper per le chiamate API
export const apiCall = async (endpoint, options = {}) => {
  const url = `${API_CONFIG.baseURL}${endpoint}`

  const config = {
    ...options,
    headers: {
      ...getHeaders(),
      ...options.headers,
    },
  }

  try {
    const response = await fetch(url, config)

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || "Errore nella richiesta API")
    }

    return await response.json()
  } catch (error) {
    console.error("API Error:", error)
    throw error
  }
}

// API Profili
export const profileAPI = {
  // GET - Ottieni il tuo profilo
  getMe: () => apiCall("/profile/me"),

  // GET - Ottieni un profilo specifico
  getProfile: (userId) => apiCall(`/profile/${userId}`),

  // GET - Ottieni tutti i profili
  getAllProfiles: () => apiCall("/profile/"),

  // PUT - Aggiorna il tuo profilo
  updateProfile: (profileData) =>
    apiCall("/profile/", {
      method: "PUT",
      body: JSON.stringify(profileData),
    }),

  // POST - Carica immagine profilo
  uploadProfileImage: (file) => {
    const formData = new FormData()
    formData.append("profile", file)

    return fetch(`${API_CONFIG.baseURL}/profile/me/picture`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_CONFIG.token}`,
      },
      body: formData,
    }).then((res) => res.json())
  },
}
