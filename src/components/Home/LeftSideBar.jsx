import React from "react"
import { Card, Button, Row, Col } from "react-bootstrap"
// Ho usato react-icons/bs come nelle tue componenti precedenti
import {
  BsBookmarkFill,
  BsPeopleFill,
  BsNewspaper,
  BsCalendarEvent,
  BsPersonCircle,
} from "react-icons/bs"
import { GiTakeMyMoney } from "react-icons/gi"

import { Link } from "react-router-dom"

const LeftSidebar = () => {
  return (
    <div
      className="sticky-top ms-5"
      style={{ top: "70px", paddingTop: "1rem" }}
    >
      {" "}
      {/* 1. Card Profilo Utente */}
      <Card className="mb-2 shadow-sm w-75">
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

        <Card.Body className="p-0">
          <div className="pt-2">
            {/* Immagine Profilo Placeholder (con allineamento a sinistra) */}
            <div
              className="position-relative ms-4"
              style={{
                marginTop: "-34px",
                width: "72px",
                height: "72px",
                border: "2px solid white",
                borderRadius: "50%",
                backgroundColor: "#bdbdbd",
              }}
            >
              {/* Icona/Avatar all'interno del cerchio */}
              <BsPersonCircle
                size={68}
                color="#757575"
                className="position-relative"
                style={{ top: "-1px" }}
              />

              {/* Bottone "+" per aggiungere esperienza - Posizionato in basso a destra dell'avatar */}
              <Button
                variant="primary"
                className="rounded-circle d-flex align-items-center justify-content-center p-0 position-absolute"
                // Regolato il posizionamento per stare in basso a destra del cerchio
                style={{
                  width: "24px",
                  height: "24px",
                  bottom: "-4px",
                  right: "-4px",
                  zIndex: "10",
                }}
              >
                +
              </Button>
            </div>

            <div className="mt-4 pt-2 pb-2 px-3 border-bottom">
              <h5 className="mb-0 fw-bold">Vincenzo Calvaruso</h5>
              <p className="text-muted mb-2">Alcamo, Sicilia</p>
            </div>
          </div>

          <div className="p-3">
            <Button
              as={Link}
              to="/add-experiences"
              variant="outline-secondary"
              className="w-100 py-2 fw-bold d-flex justify-content-center align-items-center"
              style={{ border: "2px dashed #D6D6D6" }} // Bordo più fedele
            >
              <span className="me-2">+</span>
              Esperienza
            </Button>
          </div>
        </Card.Body>
      </Card>
      {/* 2. Card Collegamenti (Espandi la tua rete) */}
      <Card className="mb-2 shadow-sm w-75">
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
      {/* 3. Card Premium */}
      <Card className="mb-2 shadow-sm w-75">
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
      {/* 4. Menu Navigazione Inferiore */}
      <Card className="mb-3 shadow-sm w-75">
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
  )
}

export default LeftSidebar
