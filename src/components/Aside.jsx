import { Card, Row, Col } from "react-bootstrap"
import { BsFillPencilFill } from "react-icons/bs"
import { BsFillPersonFill } from "react-icons/bs"
import { BsFillPersonPlusFill } from "react-icons/bs"

function Aside() {
  const url = window.location.href
  return (
    <>
      <Card className="mb-3 shadow mt-5">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-baseline">
            <div>
              <span>Lingua del profilo</span>
              <p>Italiano</p>
            </div>
            <BsFillPencilFill style={{ cursor: "pointer" }} />
          </div>
          <hr />
          <div>
            <div className="d-flex justify-content-between">
              <span>Profilo pubblico e URL</span>
              <BsFillPencilFill style={{ cursor: "pointer" }} />
            </div>
            <p>{url}</p>
          </div>
        </Card.Body>
      </Card>
      <Card className="mb-3 shadow">
        <Card.Body>
          <h6>Altri profili consultati</h6>
          <p className="text-muted">Solo per te</p>
          <Row className="mb-3">
            {/* Colonna Icona/Immagine */}
            <Col xs="auto" className="p-0 me-3">
              <BsFillPersonFill
                size={70}
                className="border border-1 rounded-circle p-2"
                style={{ width: "64px", height: "64px" }}
              />
            </Col>
            {/* Colonna Dati (TESTO E PULSANTE) */}
            <Col className="d-flex flex-column justify-content-center p-0">
              {/* Contenitore Testo */}
              <div className="mb-2">
                <p
                  className="fw-bold mb-0 text-truncate"
                  style={{ fontSize: "0.95rem" }}
                >
                  Lorem ipsum
                </p>
                <p className="text-muted small mb-0 text-truncate">
                  Lorem ipsum, descrizione del ruolo
                </p>
              </div>
              {/* Pulsante in basso a DESTRA (ms-auto spinge il pulsante a destra) */}
              <div className="mt-auto d-flex">
                <button className="border rounded-pill bg-transparent border-dark border-2 d-flex align-items-center py-1 px-3 fw-bold small **ms-auto**">
                  <BsFillPersonPlusFill className="me-2" />
                  Collegati
                </button>
              </div>
            </Col>
          </Row>
          <hr className="my-3" />
          <Row className="mb-3">
            {/* Colonna Icona/Immagine */}
            <Col xs="auto" className="p-0 me-3">
              <BsFillPersonFill
                size={70}
                className="border border-1 rounded-circle p-2"
                style={{ width: "64px", height: "64px" }}
              />
            </Col>

            {/* Colonna Dati (TESTO E PULSANTE) */}
            <Col className="d-flex flex-column justify-content-center p-0">
              {/* Contenitore Testo */}
              <div className="mb-2">
                <p
                  className="fw-bold mb-0 text-truncate"
                  style={{ fontSize: "0.95rem" }}
                >
                  Lorem ipsum
                </p>
                <p className="text-muted small mb-0 text-truncate">
                  Lorem ipsum, descrizione del ruolo
                </p>
              </div>

              {/* Pulsante in basso a DESTRA (ms-auto spinge il pulsante a destra) */}
              <div className="mt-auto d-flex">
                <button className="border rounded-pill bg-transparent border-dark border-2 d-flex align-items-center py-1 px-3 fw-bold small **ms-auto**">
                  <BsFillPersonPlusFill className="me-2" />
                  Collegati
                </button>
              </div>
            </Col>
          </Row>
          <hr className="my-3" />
          <Row className="mb-3">
            {/* Colonna Icona/Immagine */}
            <Col xs="auto" className="p-0 me-3">
              <BsFillPersonFill
                size={70}
                className="border border-1 rounded-circle p-2"
                style={{ width: "64px", height: "64px" }}
              />
            </Col>
            {/* Colonna Dati (TESTO E PULSANTE) */}
            <Col className="d-flex flex-column justify-content-center p-0">
              {/* Contenitore Testo */}
              <div className="mb-2">
                <p
                  className="fw-bold mb-0 text-truncate"
                  style={{ fontSize: "0.95rem" }}
                >
                  Lorem ipsum
                </p>
                <p className="text-muted small mb-0 text-truncate">
                  Lorem ipsum, descrizione del ruolo
                </p>
              </div>
              {/* Pulsante in basso a DESTRA (ms-auto spinge il pulsante a destra) */}
              <div className="mt-auto d-flex">
                <button className="border rounded-pill bg-transparent border-dark border-2 d-flex align-items-center py-1 px-3 fw-bold small **ms-auto**">
                  <BsFillPersonPlusFill className="me-2" />
                  Collegati
                </button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-3 shadow">
        <Card.Body>
          <h6>Persone che potresti conoscere</h6>
          <p className="text-muted">Dal tuo settore</p>

          <Row className="mb-3">
            {/* Colonna Icona/Immagine */}
            <Col xs="auto" className="p-0 me-3">
              <BsFillPersonFill
                size={70}
                className="border border-1 rounded-circle p-2"
                style={{ width: "64px", height: "64px" }}
              />
            </Col>

            {/* Colonna Dati (TESTO E PULSANTE) */}
            <Col className="d-flex flex-column justify-content-center p-0">
              {/* Contenitore Testo */}
              <div className="mb-2">
                <p
                  className="fw-bold mb-0 text-truncate"
                  style={{ fontSize: "0.95rem" }}
                >
                  Lorem ipsum
                </p>
                <p className="text-muted small mb-0 text-truncate">
                  Lorem ipsum, descrizione del ruolo
                </p>
              </div>

              {/* Pulsante in basso a DESTRA (ms-auto spinge il pulsante a destra) */}
              <div className="mt-auto d-flex">
                <button className="border rounded-pill bg-transparent border-dark border-2 d-flex align-items-center py-1 px-3 fw-bold small **ms-auto**">
                  <BsFillPersonPlusFill className="me-2" />
                  Collegati
                </button>
              </div>
            </Col>
          </Row>
          <hr className="my-3" />
          <Row className="mb-3">
            {/* Colonna Icona/Immagine */}
            <Col xs="auto" className="p-0 me-3">
              <BsFillPersonFill
                size={70}
                className="border border-1 rounded-circle p-2"
                style={{ width: "64px", height: "64px" }}
              />
            </Col>

            {/* Colonna Dati (TESTO E PULSANTE) */}
            <Col className="d-flex flex-column justify-content-center p-0">
              {/* Contenitore Testo */}
              <div className="mb-2">
                <p
                  className="fw-bold mb-0 text-truncate"
                  style={{ fontSize: "0.95rem" }}
                >
                  Lorem ipsum
                </p>
                <p className="text-muted small mb-0 text-truncate">
                  Lorem ipsum, descrizione del ruolo
                </p>
              </div>

              {/* Pulsante in basso a DESTRA (ms-auto spinge il pulsante a destra) */}
              <div className="mt-auto d-flex">
                <button className="border rounded-pill bg-transparent border-dark border-2 d-flex align-items-center py-1 px-3 fw-bold small **ms-auto**">
                  <BsFillPersonPlusFill className="me-2" />
                  Collegati
                </button>
              </div>
            </Col>
          </Row>
          <hr className="my-3" />
          <Row className="mb-3">
            {/* Colonna Icona/Immagine */}
            <Col xs="auto" className="p-0 me-3">
              <BsFillPersonFill
                size={70}
                className="border border-1 rounded-circle p-2"
                style={{ width: "64px", height: "64px" }}
              />
            </Col>

            {/* Colonna Dati (TESTO E PULSANTE) */}
            <Col className="d-flex flex-column justify-content-center p-0">
              {/* Contenitore Testo */}
              <div className="mb-2">
                <p
                  className="fw-bold mb-0 text-truncate"
                  style={{ fontSize: "0.95rem" }}
                >
                  Lorem ipsum
                </p>
                <p className="text-muted small mb-0 text-truncate">
                  Lorem ipsum, descrizione del ruolo
                </p>
              </div>

              {/* Pulsante in basso a DESTRA (ms-auto spinge il pulsante a destra) */}
              <div className="mt-auto d-flex">
                <button className="border rounded-pill bg-transparent border-dark border-2 d-flex align-items-center py-1 px-3 fw-bold small **ms-auto**">
                  <BsFillPersonPlusFill className="me-2" />
                  Collegati
                </button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  )
}

export default Aside
