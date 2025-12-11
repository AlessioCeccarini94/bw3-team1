import { Card, Form, InputGroup, Button, Modal, Toast} from "react-bootstrap"
import { useState, useRef } from "react"
import {
  BsPersonCircle,
  BsImage,
  BsPlayBtnFill,
  BsPencilSquare,
} from 'react-icons/bs';
import { useSelector } from "react-redux"

const CreaPost = () => {
  const { currentUser } = useSelector((state) => state.profile)
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    // Pulisci lo stato del post al momento della chiusura
    setPostText('');
    setPostMedia(null);
  }
  // eslint-disable-next-line no-unused-vars
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef(null)
  const [postText, setPostText] = useState("");
  const [postMedia, setPostMedia] = useState(null);
  const API_URL = "https://striveschool-api.herokuapp.com/api/posts"; // Endpoint
  const API_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZGI0OGQzMjJmNTAwMTUxMDc2YTEiLCJpYXQiOjE3NjUyNzQ4ODMsImV4cCI6MTc2NjQ4NDQ4M30.Q9Y9RBdw6vYbWZ6d5on0z8oXE_EA5RSmRYfa__uTGkY"

  const handlePostMediaChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Crea un URL di anteprima per visualizzare subito il file selezionato
    const previewUrl = URL.createObjectURL(file);
    setPostMedia({ file: file, previewUrl: previewUrl });

    // Pulisci l'input file in modo che onChange si attivi anche se
    // l'utente seleziona lo stesso file due volte.
    e.target.value = null;
  };
  
  // Questa è la funzione che gestisce la creazione del post (solo testo)
  const createPost = async () => {
    setIsUploading(true); // Uso isUploading per bloccare i bottoni
    let createdPost;
    
    // 1. CREA IL POST (SOLO TESTO)
    try {
      const postResponse = await fetch(API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: postText }),
      });

      if (!postResponse.ok) {
        throw new Error("Errore nella creazione del post: " + postResponse.status);
      }
      
      createdPost = await postResponse.json();
      console.log("Post creato con successo:", createdPost);
      
    } catch (error) {
      console.error("Errore durante la creazione del post:", error);
      alert("Errore nella creazione del post. Riprova.");
      setIsUploading(false);
      return;
    }

    // 2. CARICA IL MEDIA (SE ESISTE)
    if (postMedia) {
      const postId = createdPost._id;
      const formData = new FormData();
      formData.append("post", postMedia.file); // 'post' è il nome del campo richiesto dall'API

      try {
        const mediaResponse = await fetch(`${API_URL}/${postId}`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            // NON includere "Content-Type": "application/json" quando usi FormData
          },
          body: formData,
        });

        if (!mediaResponse.ok) {
          throw new Error("Errore nel caricamento del media: " + mediaResponse.status);
        }

        console.log("Media caricato con successo sul post.");

      } catch (error) {
        console.error("Errore durante il caricamento del media:", error);
        alert("Post creato ma Errore nel caricamento del media. Riprova.");
      }
    }

    // 3. COMPLETAMENTO
    // alert("Post pubblicato con successo!");
    setShowToast(true)
    setIsUploading(false);
    handleClose(); // Chiudi il modale
    // A questo punto, dovresti chiamare una funzione o dispatchare un'azione
    // per aggiornare la lista dei post nella tua applicazione.
    // ESEMPIO: dispatch(fetchPostsAction()); 
  };

  return (
    <>
      <input
        type="file"
        accept="image/*,video/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handlePostMediaChange}
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
                 onClick={handleShow}
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
              {/* Scrivi un articolo (Articolo) */}
              <div
                className="d-flex align-items-center p-2 rounded"
                style={{ cursor: "pointer" }}
               onClick={handleShow}
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


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crea un post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descrizione</Form.Label>
              <Form.Control as="textarea" 
                rows={3} 
                value={postText} 
                onChange={(e) => setPostText(e.target.value)} 
                disabled={isUploading} />
            </Form.Group>
            <Form.Group>
             {postMedia?.previewUrl && (
                  <div className="mb-3">
                    <img
                      src={postMedia.previewUrl}
                      alt="Anteprima post media"
                      className=" w-100"
                      style={{
                        maxHeight: "300px", 
                        objectFit: "cover",
                      }}
                    />
                  </div>
                )}


              {/* Bottoni per caricare Foto/Video */}
               <div className="d-flex justify-content-around mt-3">
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
             </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} disabled={isUploading}>
            Annulla
          </Button>
          <Button 
            variant="primary" 
            onClick={createPost} // CHIAMATA ALLA FUNZIONE DI CREAZIONE/UPLOAD
            disabled={isUploading || postText.trim() === ""} // Disabilita se non c'è testo
          >
            {isUploading ? "Pubblicazione..." : "Pubblica Post"}
          </Button>
        </Modal.Footer>
      </Modal>
       <Toast bg='success' onClose={() => setShowToast(false)} show={showToast} delay={2500} autohide 
               style={{
                position: 'fixed', 
                bottom: 20,         
                right: 20,   
                zIndex: 1050,     
             }}>
          <Toast.Header>
            <strong className="me-auto">Pubblicato!</strong>
            <small>ora</small>
          </Toast.Header>
          <Toast.Body>Post pubblicato con successo!</Toast.Body>
        </Toast>
    </>
  )
}

export default CreaPost
