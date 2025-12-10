import React, { useState, useEffect, useRef } from "react"
import {
  Card,
  Image,
  Row,
  Col,
  Button,
  Container,
  Spinner,
} from "react-bootstrap"

// Chiave API
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZGI0OGQzMjJmNTAwMTUxMDc2YTEiLCJpYXQiOjE3NjUyNzQ4ODMsImV4cCI6MTc2NjQ4NDQ4M30.Q9Y9RBdw6vYbWZ6d5on0z8oXE_EA5RSmRYfa__uTGkY"

const API_URL = "https://striveschool-api.herokuapp.com/api/profile/me"

const ProfileInfo = () => {
  const [profileData, setProfileData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [profileImg, setProfileImg] = useState(null)
  const [isUploading, setIsUploading] = useState(false)

  const fileInputRef = useRef(null)

  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    // Mostra preview immediato
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

  //  Funzione per la chiamata API
  const fetchProfile = async () => {
    try {
      const response = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        // Creo un user temporaneo dove carico tutti i dati ottenuti dalla fetch e aggiungo i dati statici per completamento pagina
        const tempUser = {
          // Dati presi dall'API
          nome: data.name,
          surname: data.surname,
          title: data.title || "Professionista",
          posizione: data.area || "Area non specificata",
          profileUrl: data.image,
          email: data.email,
          id: data._id,
          coverUrl: data.coverImage || "https://placebear.com/800/200",

          // Dati Fittizi (Mantenuti statici perché non forniti dall'API /me)
          pronoun: "He/him",
          gradoDiConnessione: "2°",
          ruolo1: data.title || "Professionista",
          scuolaEducator: "EPICODE",
          universita: "Università degli Studi di Roma",
        }
        setProfileImg(tempUser.profileUrl)
        setProfileData(tempUser)
        setError(null)
        console.log("Dati profilo:", tempUser)
      } else {
        throw new Error(
          `Errore nella chiamata API: ${response.status} ${response.statusText}`
        )
      }
    } catch (err) {
      console.error("Errore nella chiamata", err)
      setError("Impossibile caricare i dati del profilo. Riprova più tardi.")
    } finally {
      setIsLoading(false)
    }
  }

  // Esegue la fetch al montaggio
  useEffect(() => {
    fetchProfile()
  }, [])

  // Gestione stati di Caricamento e Errore
  if (isLoading) {
    return (
      <div className="text-center p-5">
        <Spinner animation="border" role="status" className="me-2" />
        <p>Caricamento dati...</p>
      </div>
    )
  }

  if (error || !profileData) {
    return (
      <div className="text-center p-5 text-danger">
        <p>{error || "Dati profilo non disponibili."}</p>
      </div>
    )
  }

  // Assegna i dati utilizzare la variabile 'utente'
  const utente = profileData

  // Render del componente
  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <Card className="shadow-sm border-0 mx-auto mt-3 mb-3">
        {/* Immagine di Copertina */}
        <div
          className="bg-dark"
          style={{
            height: "200px",
            borderRadius: "8px 8px 0 0",
            overflow: "hidden",
          }}
        >
          <Card.Img
            variant="top"
            src={utente.coverUrl}
            alt="Immagine di Copertina"
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Immagine del Profilo */}
        <Card.Body className="pt-0">
          <div className="position-relative">
            {isUploading && (
              <Spinner
                animation="border"
                size="sm"
                className="position-absolute"
                style={{
                  top: "10px",
                  left: "90px",
                  zIndex: 12,
                }}
              />
            )}
            <Image
              src={profileImg}
              alt="Immagine del Profilo"
              className="border border-4 border-white rounded-circle position-absolute"
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                marginTop: "-60px",
                marginLeft: "1rem",
                zIndex: 10,
                opacity: isUploading ? 0.6 : 1,
              }}
            />
            <Button
              variant="primary"
              className="rounded-circle d-flex align-items-center justify-content-center position-absolute"
              size="sm"
              style={{
                width: "32px",
                height: "32px",
                left: "100px",
                top: "5px",
                zIndex: 11,
              }}
              onClick={() => fileInputRef.current.click()}
              disabled={isUploading}
            >
              {isUploading ? "..." : "+"}
            </Button>
          </div>

          <div style={{ height: "60px" }}></div>

          {/*  Informazioni Principali */}
          <Container fluid className="px-3">
            <Row className="align-items-start mb-2">
              {/* Colonna di Sinistra: Nome e Dettagli */}
              <Col>
                <h4 className="mb-0 fw-bold">
                  {utente.nome} {utente.surname}{" "}
                  <span className="ms-2 text-muted fw-normal fs-6">
                    {utente.pronoun}
                  </span>
                </h4>
              </Col>
              {/* Colonna di Destra: Azienda e Università */}
              <Col xs="auto" className="text-end">
                <div className="d-flex align-items-center text-secondary mb-1 justify-content-end">
                  <span className="fw-bold">{utente.scuolaEducator}</span>
                </div>
                <div className="d-flex align-items-center text-secondary justify-content-end">
                  <span className="fw-bold">{utente.universita}</span>
                </div>
              </Col>
            </Row>

            {/* Titolo e Posizione */}
            <p className="mb-1">{utente.title}</p>
            <div className="d-flex align-items-center text-muted fs-6 mb-1">
              <span>
                {utente.posizione} •{" "}
                <a
                  href={`mailto:${utente.email}`}
                  className="text-decoration-none"
                >
                  Informazioni di contatto
                </a>
              </span>
            </div>
            <p className="mt-2 mb-3 fw-bold">Più di 500 collegamenti</p>
          </Container>

          {/*  Pulsanti di Azione */}
          <div className="p-3">
            <Button variant="primary" className="me-2">
              Messaggio
            </Button>
            <Button variant="outline-secondary" className="me-2">
              In sospeso
            </Button>
            <Button variant="outline-secondary">Altro</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default ProfileInfo
