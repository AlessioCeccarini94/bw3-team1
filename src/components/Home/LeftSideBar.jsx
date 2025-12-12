import React from "react"
import { Card, Button, Collapse } from "react-bootstrap"
// Ho usato react-icons/bs come nelle tue componenti precedenti
import {
  BsBookmarkFill,
  BsPeopleFill,
  BsNewspaper,
  BsCalendarEvent,
  BsPersonCircle,
  BsChevronDown,
  BsChevronUp,
} from "react-icons/bs"
import { GiTakeMyMoney } from "react-icons/gi"
import { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchProfile } from "../../redux/reducers/profileSlice"

import { Link } from "react-router-dom"

const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const [profileData, setProfileData] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const [profileImg, setProfileImg] = useState(null)
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef(null)

  useEffect(() => {
    dispatch(fetchProfile())
  }, [dispatch])
  const { currentUser } = useSelector((state) => state.profile)

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

  // Funzione per invertire lo stato
  const toggleCollapse = () => setIsOpen(!isOpen)
  console.log("currentuser", currentUser)

  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <div className="sticky-top " style={{ top: "70px", paddingTop: "1rem" }}>
        {" "}
        {/* 1. Card Profilo Utente */}
        <Card className="mb-2 shadow-sm w-100">
          {currentUser?.coverUrl ? (
            <img
              src={currentUser.coverUrl}
              alt="Cover"
              className="card-img-top"
              style={{ height: "80px", objectFit: "cover" }}
            />
          ) : (
            <div
              className="position-relative"
              style={{
                height: "80px",
                backgroundColor: "#9e9e9e",
                borderTopLeftRadius: "0.25rem",
                borderTopRightRadius: "0.25rem",
              }}
            >
              {/* Sfondo Placeholder */}
            </div>
          )}

          <Card.Body className="p-0">
            <div className="pt-2">
              {/* Immagine Profilo Placeholder (con allineamento a sinistra) */}
              <div
                className="position-relative ms-3"
                style={{
                  marginTop: "-34px",
                  width: "72px",
                  height: "72px",
                  border: "2px solid white",
                  borderRadius: "50%",
                  backgroundColor: "#bdbdbd",
                }}
              >
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
                  <BsPersonCircle
                    size={68}
                    color="#757575"
                    className="position-relative"
                    style={{ top: "-1px" }}
                  />
                )}
                {/* Icona/Avatar all'interno del cerchio */}

                {/* Bottone "+" per aggiungere esperienza - Posizionato in basso a destra dell'avatar */}
                <Button
                  variant="primary"
                  className="rounded-circle d-flex align-items-center justify-content-center position-absolute"
                  size="sm"
                  style={{
                    width: "24px",
                    height: "24px",
                    bottom: "-4px",
                    right: "-4px",
                    zIndex: "10",
                  }}
                  onClick={() => fileInputRef.current.click()}
                  disabled={isUploading}
                >
                  {isUploading ? "..." : "+"}
                </Button>
              </div>

              <div className="mt-2 pt-2 pb-1 px-3 ">
                <h5 className="mb-0 fw-bold">
                  {currentUser?.name} {currentUser?.surname}
                </h5>
                <p className="text-muted mb-2">{currentUser?.area}</p>
              </div>
            </div>

            <div className="pb-4 px-3 pt-1">
              <Button
                as={Link}
                to="/add-experiences"
                variant="outline-secondary"
                className="w-100 py-1 fw-bold d-flex justify-content-start align-items-center"
                style={{ border: "2px dashed #D6D6D6" }} // Bordo più fedele
              >
                <span className="me-2">+</span>
                Esperienza
              </Button>
            </div>
          </Card.Body>
        </Card>
        {/* 2. Bottone per attivare il collasso (VISIBILE SOLO SU SCHERMI SMALL) */}
        <Button
          onClick={toggleCollapse}
          aria-controls="extra-cards-collapse"
          aria-expanded={isOpen}
          variant="link"
          className="w-100 text-center text-decoration-none d-lg-none p-2 shadow-sm border-0 text-secondary"
          style={{ backgroundColor: "white" }}
        >
          {isOpen ? (
            <>
              Mostra meno <BsChevronUp className="ms-1" size={12} />
            </>
          ) : (
            <>
              Mostra tutto <BsChevronDown className="ms-1" size={12} />
            </>
          )}
        </Button>
        {/* 3. Collapse Componente: Avvolge le card da nascondere */}
        {/* La classe d-lg-block assicura che il contenuto sia sempre visibile su schermi grandi */}
        <Collapse in={isOpen} className="d-lg-block" id="extra-cards-collapse">
          <div>
            {/* 4. Card Collegamenti (Espandi la tua rete) */}
            <Card className="mb-2 shadow-sm w-100">
              <Card.Body className="p-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <span className="d-block fw-bold small">Collegamenti</span>
                    <span className="d-block text-secondary ">
                      Espandi la tua rete
                    </span>
                  </div>
                  <span className="fw-bold text-primary">3</span>
                </div>
              </Card.Body>
            </Card>
            {/* 5. Card Premium */}
            <Card className="mb-2 shadow-sm w-100">
              <Card.Body className="p-3">
                <span className="d-block text-secondary small">
                  Una rete più smart con Premium
                </span>
                <p className="fw-bold mb-0 mt-1">
                  <span role="img" aria-label="premium" className="me-2">
                    <span style={{ fontSize: "1.2rem" }}>
                      <GiTakeMyMoney />
                    </span>
                  </span>
                  Prova per 0 EUR
                </p>
              </Card.Body>
            </Card>
            {/* 6. Menu Navigazione Inferiore */}
            <Card className="mb-3 shadow-sm w-100">
              <Card.Body className="p-3">
                <div className="d-flex align-items-center mb-2">
                  <BsBookmarkFill className="me-2 text-secondary" />
                  <span className="fw-bold small" style={{ cursor: "pointer" }}>
                    Elementi salvati
                  </span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <BsPeopleFill className="me-2 text-secondary" />
                  <span className="fw-bold small" style={{ cursor: "pointer" }}>
                    Gruppi
                  </span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <BsNewspaper className="me-2 text-secondary" />
                  <span className="fw-bold small" style={{ cursor: "pointer" }}>
                    Newsletter
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <BsCalendarEvent className="me-2 text-secondary" />
                  <span className="fw-bold small" style={{ cursor: "pointer" }}>
                    Eventi
                  </span>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Collapse>
      </div>
    </>
  )
}

export default LeftSidebar
