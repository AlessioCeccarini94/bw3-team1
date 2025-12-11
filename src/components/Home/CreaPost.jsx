import React from "react"
import { Card, Form, InputGroup } from "react-bootstrap"
import { useState, useRef } from "react"
import {
  BsPersonCircle,
  BsImage,
  BsPlayBtnFill,
  BsPencilSquare,
} from "react-icons/bs"

const CreaPost = ({ currentUser }) => {
  const [profileData, setProfileData] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const [profileImg, setProfileImg] = useState(null)
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef(null)
  const API_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZGI0OGQzMjJmNTAwMTUxMDc2YTEiLCJpYXQiOjE3NjUyNzQ4ODMsImV4cCI6MTc2NjQ4NDQ4M30.Q9Y9RBdw6vYbWZ6d5on0z8oXE_EA5RSmRYfa__uTGkY"
  const API_URL = "https://striveschool-api.herokuapp.com/api/profile/me"

  //inizio replica da copiare
  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    const previewUrl = URL.createObjectURL(file)
    setProfileImg(previewUrl)
    setIsUploading(true)

    // Carica l'immagine sul server
    try {
      const formData = new FormData()
      formData.append("profile", file)

      const response = await fetch(`${API_URL}/picture`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
        body: formData,
      })

      if (response.ok) {
        const data = await response.json()
        console.log("Immagine caricata con successo:", data)
        // Aggiorna con l'URL dal server
        setProfileImg(data.image)
        // Aggiorna anche i dati del profilo
        setProfileData((prev) => ({ ...prev, profileUrl: data.image }))
      } else {
        throw new Error("Errore nel caricamento dell'immagine")
      }
    } catch (error) {
      console.error("Errore durante il caricamento:", error)
      alert("Errore nel caricamento dell'immagine. Riprova.")
      // Ripristina l'immagine precedente in caso di errore
      setProfileImg(profileData.profileUrl)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div className="col-12 col-lg-10 mx-auto">
        <Card className="mb-3 shadow-sm mt-3">
          <Card.Body className="p-3">
            {/* Sezione Input: Profilo e Casella di testo */}
            <div className="d-flex align-items-center mb-3">
              <div className="me-3">
                {currentUser?.image ? (
                  <img
                    src={currentUser.image}
                    alt="Profile"
                    className="rounded-circle border"
                    style={{
                      width: "72px",
                      height: "72px",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <BsPersonCircle size={48} className="text-muted" />
                )}
              </div>

              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Crea un post"
                  className="rounded-pill bg-white border border-secondary py-3"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    console.log("Apro il modale per creare un post")
                  }
                />
              </InputGroup>
            </div>

            {/* Sezione Azioni: Video, Foto, Articolo */}
            <div className="d-flex justify-content-around">
              {/* Video */}
              <div
                className="d-flex align-items-center p-2 rounded"
                style={{ cursor: "pointer" }}
                onClick={() => fileInputRef.current.click()}
                disabled={isUploading}
              >
                <BsPlayBtnFill size={20} className="text-success me-2" />
                <span className="fw-semibold text-secondary small">Video</span>
              </div>

              {/* Foto */}
              <div
                className="d-flex align-items-center p-2 rounded"
                style={{ cursor: "pointer" }}
                onClick={() => fileInputRef.current.click()}
                disabled={isUploading}
              >
                <BsImage size={20} className="text-primary me-2" />
                <span className="fw-semibold text-secondary small">Foto</span>
              </div>

              {/* Foto */}
              <div
                className="d-flex align-items-center p-2 rounded"
                style={{ cursor: "pointer" }}
                onClick={() => console.log("Aggiungi Foto")}
              >
                <BsImage size={20} className="text-primary me-2" />
                <span className="fw-semibold text-secondary small">Foto</span>
              </div>

              {/* Scrivi un articolo (Articolo) */}
              <div
                className="d-flex align-items-center p-2 rounded"
                style={{ cursor: "pointer" }}
                onClick={() => console.log("Scrivi un articolo")}
              >
                <BsPencilSquare
                  size={20}
                  style={{ color: "#E0732A" }}
                  className="me-2"
                />
                <span className="fw-semibold text-secondary small">
                  Scrivi un articolo
                </span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default CreaPost
