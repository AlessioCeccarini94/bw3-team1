import React from "react"
import { Card, Form, InputGroup } from "react-bootstrap"

import {
  BsPersonCircle,
  BsImage,
  BsPlayBtnFill,
  BsPencilSquare,
} from "react-icons/bs"

const CreaPost = ({ currentUser }) => {
  const renderProfileImage = () => {
    if (currentUser && currentUser.image) {
      return (
        <img
          src={currentUser.image}
          alt="Profilo"
          className="rounded-circle"
          style={{ width: "48px", height: "48px", objectFit: "cover" }}
        />
      )
    }

    return <BsPersonCircle size={48} className="text-muted" />
  }

  return (
    <div className="col-12 col-lg-10 mx-auto">
      <Card className="mb-3 shadow-sm mt-3">
        <Card.Body className="p-3">
          {/* Sezione Input: Profilo e Casella di testo */}
          <div className="d-flex align-items-center mb-3">
            <div className="me-3">{renderProfileImage()}</div>

            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Crea un post"
                className="rounded-pill bg-white border border-secondary py-3"
                style={{ cursor: "pointer" }}
                onClick={() => console.log("Apro il modale per creare un post")}
              />
            </InputGroup>
          </div>

          {/* Sezione Azioni: Video, Foto, Articolo */}
          <div className="d-flex justify-content-around">
            {/* Video */}
            <div
              className="d-flex align-items-center p-2 rounded"
              style={{ cursor: "pointer" }}
              onClick={() => console.log("Aggiungi Video")}
            >
              <BsPlayBtnFill size={20} className="text-success me-2" />
              <span className="fw-semibold text-secondary small">Video</span>
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
  )
}

export default CreaPost
