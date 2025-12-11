import "bootstrap-icons/font/bootstrap-icons.css"
import { useState } from "react"
import { FcLike } from "react-icons/fc"
import { FaHandsBubbles, FaArrowsRotate } from "react-icons/fa6"
import {
  Card,
  Row,
  Col,
  Container,
  Button,
  Dropdown,
  Toast,
  Modal,
  Form,
  Spinner,
} from "react-bootstrap"
import { BsPersonCircle } from "react-icons/bs"
import { useSelector } from "react-redux"
import {
  deletePostAction,
  fetchPostAction,
  modifyPostAction,
} from "../../redux/actions/actions"
import { useDispatch } from "react-redux"
import { useRef } from "react"

function SinglePost(props) {
  const { post } = props
  const { currentUser } = useSelector((state) => state.profile)
  const [showToast, setShowToast] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editText, setEditText] = useState(post.text) // Testo modificabile del post
  const [isUpdating, setIsUpdating] = useState(false) // Stato per il caricamento (Spinner)
  const dispatch = useDispatch()

  // NUOVI STATI PER L'IMMAGINE
  const [selectedFile, setSelectedFile] = useState(null) // Il file da caricare
  const [imagePreview, setImagePreview] = useState(post.image) // URL per l'anteprima

  const fileInputRef = useRef(null) // Riferimento per l'input file nascosto

  const handleEdit = () => {
    // Carica il testo e l'immagine attuali del post nello stato del modale
    setEditText(post.text)
    setImagePreview(post.image) // Inizializza l'anteprima con l'immagine esistente
    setSelectedFile(null) // Assicurati che non ci siano file selezionati
    setShowEditModal(true)
  }

  const handleCloseEdit = () => {
    setShowEditModal(false)
    setEditText(post.text)
    setImagePreview(post.image)
    setSelectedFile(null)
  }

  // NUOVA FUNZIONE: Gestione del file selezionato
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file)
      // Crea un URL locale per l'anteprima
      setImagePreview(URL.createObjectURL(file))
    } else {
      setSelectedFile(null)
      setImagePreview(post.image) // Ripristina l'immagine esistente se non è stato selezionato nulla
    }
  }

  // 3. LOGICA DI AGGIORNAMENTO DEL POST (UPDATE)
  const handleUpdate = async () => {
    setIsUpdating(true)

    try {
      // FASE 1: Aggiornamento del Testo (se modificato)
      if (editText.trim() !== post.text.trim()) {
        const updatedTextData = editText
        await dispatch(modifyPostAction(post._id, updatedTextData))
        // Se l'API restituisce il post aggiornato, potresti usarlo qui
      }

      // FASE 2: Upload della Nuova Immagine (se selezionata)
      if (selectedFile) {
        // uploadPostPictureAction si occuperà di creare l'oggetto FormData
        // await dispatch(uploadPostPictureAction(post._id, selectedFile))
        // L'API di Strive School aggiorna il post e restituisce i dati
      }

      // Successo: chiudi il modale e ricarica i post
      handleCloseEdit()
      dispatch(fetchPostAction())
    } catch (error) {
      console.error("Errore durante l'aggiornamento/upload:", error)
      alert("Errore nell'aggiornamento: " + error.message)
    } finally {
      setIsUpdating(false)
    }
  }
  const handleDelete = () => {
    if (window.confirm("Sei sicuro di voler eliminare questo post?")) {
      console.log("Elimina il post:", post._id)
      dispatch(deletePostAction(post._id))
      dispatch(fetchPostAction())
      setShowToast(true)
    }
  }
  // eslint-disable-next-line no-unused-vars
  const [likesCount, setLikesCount] = useState(() => {
    // Generazione del numero casuale tra 1 e 3000
    return Math.floor(Math.random() * 3000) + 1
  })

  // eslint-disable-next-line no-unused-vars
  const [commentCount, setCommentCount] = useState(() => {
    // Generazione del numero casuale tra 1 e 300
    return Math.floor(Math.random() * 300) + 1
  })
  const isMyPost = post?.user?._id === currentUser._id
  return (
    <>
      <div className="col-12 col-md-8 col-lg-10 mx-auto">
        <Card className="mb-3">
          {/* 1. Intestazione del Post (Acer, Follower, Sponsorizzato) */}
          <Card.Header className="bg-white border-0 py-3">
            <Container fluid className="px-0">
              <Row className="align-items-center">
                <Col xs="auto" className="pe-2">
                  {post?.user.image ? (
                    <img
                      src={post.user.image}
                      alt="Profile"
                      className="rounded-circle border"
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <BsPersonCircle size={48} className="text-muted" />
                  )}
                </Col>
                <Col className="text-truncate">
                  <div className="fw-bold">{post.username}</div>
                </Col>
                <Col xs="auto" className="ps-2">
                  {/* INIZIO: Dropdown per Modifica/Elimina */}
                  {isMyPost ? (
                    <Dropdown align="end">
                      <Dropdown.Toggle
                        variant="light"
                        id={`dropdown-post-${post._id}`}
                        className="p-0 border-0 bg-white"
                      >
                        <div className="text-muted fw-bold fs-5"></div>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={handleEdit}>
                          <i className="bi bi-pencil me-2"></i> Modifica post
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                          onClick={handleDelete}
                          className="text-danger"
                        >
                          <i className="bi bi-trash me-2"></i> Elimina post
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  ) : (
                    <div className="text-muted fw-bold fs-5">...</div> // Menu a 3 punti generico per altri utenti
                  )}
                  {/* FINE: Dropdown per Modifica/Elimina */}
                </Col>
              </Row>
            </Container>
          </Card.Header>

          {/* 2. Testo Descrittivo del Post */}
          <Card.Body className="py-2">
            <Card.Text>
              {post.text}
              <span className="text-muted small"> ... altro</span>
            </Card.Text>
          </Card.Body>

          {/* 3. Immagine Principale/Contenuto Multimediale */}
          <div className="p-0 border-0 overflow-hidden">
            <Card.Img
              variant="top"
              src={post.image}
              alt=""
              style={{ width: "100%", height: "auto", maxHeight: "500px" }}
            />
          </div>

          {/* 5. Sezione Interazioni (Mi Piace, Commenti, etc.) */}
          <Card.Body className="pt-0 pb-2">
            <Row className="align-items-center mb-2">
              {/* Contatore Mi Piace / Interazioni */}
              <Col xs="auto">
                {/* Le emoji simulano le icone di reazione (Pollice, Cuore, Applausi) */}
                <span className="me-2 fs-6">
                  <FcLike />
                </span>
                <span className="me-2 fs-6">
                  <FaHandsBubbles />
                </span>
                <span className="me-2 fs-6">
                  <FaArrowsRotate />
                </span>
                <span className="text-muted small fw-bold">{likesCount}</span>
              </Col>
              {/* Contatore Commenti */}
              <Col className="text-end">
                <span className="text-muted small">
                  {commentCount} Commenti
                </span>
              </Col>
            </Row>

            <hr className="my-0" />
            {/* Pulsanti di Interazione (Consiglia, Commenta, Diffondi, Invia) */}
            <Row className="justify-content-around py-1">
              <Col className="text-center p-0">
                <Button
                  variant="light"
                  className="text-muted d-flex align-items-center justify-content-center w-100 border-0"
                  style={{ padding: "8px 4px" }}
                >
                  <span className="me-2 fs-5">
                    <i className="bbi bi-heart"></i>
                  </span>
                  <span className="fw-bold small">Mi piace</span>
                </Button>
              </Col>

              <Col className="text-center p-0">
                <Button
                  variant="light"
                  className="text-muted d-flex align-items-center justify-content-center w-100 border-0"
                  style={{ padding: "8px 4px" }}
                >
                  <span className="me-2 fs-5">
                    {" "}
                    <i className="bi bi-chat"></i>{" "}
                  </span>
                  <span className="fw-bold small">Commenta</span>
                </Button>
              </Col>

              <Col className="text-center p-0">
                <Button
                  variant="light"
                  className="text-muted d-flex align-items-center justify-content-center w-100 border-0"
                  style={{ padding: "8px 4px" }}
                >
                  <span className="me-2 fs-5">
                    <i className="bi bi-send"></i>
                  </span>
                  <span className="fw-bold small"> Invia</span>
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
      <Modal show={showEditModal} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica il tuo post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Campo Testo (Descrizione) */}
            <Form.Group className="mb-3" controlId="formPostEdit">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                disabled={isUpdating}
              />
            </Form.Group>

            {/* Campo Immagine */}
            <Form.Group>
              {/* Anteprima dell'immagine (esistente o selezionata) */}
              {imagePreview && (
                <div className="mb-3">
                  <img
                    src={imagePreview}
                    alt="Anteprima post media"
                    className=" w-100 border rounded"
                    style={{ maxHeight: "300px", objectFit: "cover" }}
                  />
                  {/* Bottone per rimuovere l'anteprima/file selezionato */}
                  <Button
                    variant="link"
                    size="sm"
                    onClick={() => handleFileChange({ target: { files: [] } })}
                    className="text-danger p-0 mt-1"
                  >
                    Rimuovi
                  </Button>
                </div>
              )}

              {/* INPUT FILE NASCOSTO */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                hidden
              />

              {/* Bottone per selezionare un nuovo file */}
              <div className="d-flex justify-content-center mt-3">
                <div
                  className={`d-flex align-items-center p-2 rounded ${
                    !isUpdating ? "text-primary" : "text-muted"
                  }`}
                  style={{ cursor: !isUpdating ? "pointer" : "default" }}
                  onClick={
                    !isUpdating ? () => fileInputRef.current.click() : null
                  }
                >
                  {/* <BsImage size={20} className="me-2" /> */}
                  <span className="fw-semibold small">
                    {selectedFile
                      ? "Cambia Immagine"
                      : post.image
                      ? "Sostituisci Immagine"
                      : "Aggiungi Immagine"}
                  </span>
                </div>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleCloseEdit}
            disabled={isUpdating}
          >
            Annulla
          </Button>
          <Button
            variant="primary"
            onClick={handleUpdate}
            disabled={
              isUpdating ||
              (editText.trim() === post.text.trim() && !selectedFile)
            }
            // Disabilita se non è cambiato nulla (nè testo nè file)
          >
            {isUpdating ? (
              <>
                <Spinner animation="border" size="sm" className="me-2" />
                Salvataggio...
              </>
            ) : (
              "Salva Modifiche"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
      <Toast
        bg="success"
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={2500}
        autohide
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1050,
        }}
      >
        <Toast.Header>
          <strong className="me-auto">Eliminato!</strong>
          <small>ora</small>
        </Toast.Header>
        <Toast.Body>Post eliminato con successo!</Toast.Body>
      </Toast>
    </>
  )
}

export default SinglePost
