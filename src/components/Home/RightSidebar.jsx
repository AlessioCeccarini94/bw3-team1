import { Card } from "react-bootstrap"
import { BsInfoCircleFill,BsChevronDown } from "react-icons/bs"
import { FaLinkedin } from 'react-icons/fa';

const RightSidebar = () => {
  // Dati statici delle notizie
  const news = [
    {
      id: 1,
      title: "Com'è andato il Black Friday",
      timeAgo: "22 ore fa",
      readers: "309 lettori",
    },
    {
      id: 2,
      title: "In malattia con la televista",
      timeAgo: "17 ore fa",
      readers: "206 lettori",
    },
    {
      id: 3,
      title: "Netflix compra Warner Bros.",
      timeAgo: "1 giorno fa",
      readers: "450 lettori",
    },
    {
      id: 4,
      title: "Mediaset acquisisce Radio Norba",
      timeAgo: "17 ore fa",
      readers: "180 lettori",
    },
    {
      id: 5,
      title: "La Bei finanzia Scalapay",
      timeAgo: "2 ore fa",
      readers: "95 lettori",
    },
  ]

  return (
    <div
      className="sticky-top me-5"
      style={{ top: "70px", paddingTop: "1rem" }}
    >
      {/* Card LinkedIn Notizie */}
      <Card className="mb-3 shadow-sm w-100">
        <Card.Body className="p-3">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="mb-0 fw-bold">LinkedIn Notizie</h6>
            <BsInfoCircleFill
              className="text-muted"
              style={{ cursor: "pointer" }}
            />
          </div>

          <p className="text-muted mb-3" style={{ fontSize: "13px" }}>
            Storie principali
          </p>

          {/* Lista delle notizie */}
          {news.map((item) => (
            <div key={item.id} className="mb-3" style={{ cursor: "pointer" }}>
              <div>
                <p
                  className="mb-1 fw-semibold"
                  style={{ fontSize: "14px", lineHeight: "1.3" }}
                >
                  {item.title}
                </p>
                <p className="text-muted mb-0" style={{ fontSize: "12px" }}>
                  {item.timeAgo} • {item.readers}
                </p>
              </div>
            </div>
          ))}

          {/* Link "Mostra altro" */}
          <div className="mt-2">
            <span
              className="text-muted fw-semibold d-flex align-items-center"
              style={{ fontSize: "14px", cursor: "pointer" }}
            >
              Mostra altro
              <span className="ms-1" style={{ fontSize: "12px" }}>
                ▼
              </span>
            </span>
          </div>
        </Card.Body>
      </Card>

      {/* Card Giochi */}
      <Card className="shadow-sm w-100">
        <Card.Body className="p-3">
          <div className="d-flex align-items-center mb-2">
            <div
              className="me-2 bg-warning d-flex align-items-center justify-content-center"
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "4px",
              }}
            >
              <span style={{ fontSize: "12px" }}>🎮</span>
            </div>
            <span className="fw-bold" style={{ fontSize: "14px" }}>
              Giochi
            </span>
          </div>

          <div className="border-top pt-2">
            <p className="mb-2" style={{ fontSize: "13px", cursor: "pointer" }}>
              <span className="text-dark">🔤</span>
              <span className="ms-2 fw-semibold">Indovinelli di oggi</span>
            </p>
            <p className="mb-2" style={{ fontSize: "13px", cursor: "pointer" }}>
              <span className="text-dark">👑</span>
              <span className="ms-2 fw-semibold">Queens</span>
            </p>
            <p className="mb-0" style={{ fontSize: "13px", cursor: "pointer" }}>
              <span className="text-dark">🧩</span>
              <span className="ms-2 fw-semibold">Crossclimb</span>
            </p>
          </div>
        </Card.Body>
      </Card>
      <div className="mt-3 text-center">
      
      {/* Prima riga di link (Informazioni, Accessibilità) */}
      <div className="d-flex justify-content-center flex-wrap">
        <a href="#informazioni" className="text-secondary small me-3 mb-1" style={{textDecoration:"none"}}>Informazioni</a>
        <a href="#accessibilita" className="text-secondary small me-3 mb-1" style={{textDecoration:"none"}}>Accessibilità</a>
      </div>

      <div className="d-flex justify-content-center flex-wrap mt-1"> 
        <a href="#assistenza" className="text-secondary small mb-1" style={{textDecoration:"none"}}>Centro assistenza</a>
      </div>
      
      {/* Seconda riga di link (Privacy, Annunci) */}
      <div className="d-flex justify-content-center flex-wrap mt-1">
        <a href="#privacy" className="text-secondary small me-3 mb-1" style={{textDecoration:"none"}}>
            Privacy e condizioni <BsChevronDown size={10} className="ms-1" /> {/* Usato un'icona placeholder per il dropdown/info */}
        </a>
        <a href="#annunci" className="text-secondary small mb-1" style={{textDecoration:"none"}}>Opzioni per gli annunci pubblicitari</a>
      </div>

      {/* Terza riga di link (Pubblicità, Servizi, App) */}
      <div className="d-flex justify-content-center flex-wrap mt-1">
        <a href="#pubblicita" className="text-secondary small me-3 mb-1" style={{textDecoration:"none"}}>Pubblicità</a>
        <a href="#servizi" className="text-secondary small me-3 mb-1" style={{textDecoration:"none"}}>
            Servizi alle aziende <BsChevronDown size={10} className="ms-1" />
        </a>
        <a href="#app" className="text-secondary small mb-1" style={{textDecoration:"none"}}>Scarica l'app LinkedIn</a>
        <a href="#altro" className="text-secondary small ms-3 mb-1" style={{textDecoration:"none"}}>Altro</a> 
      </div>
      
      {/* Copyright */}
      <div className="text-center mt-3 mb-4">
        <span className="text-muted small">
          <span className="fw-bold me-1">LinkedIn</span> 
          <span role="img" aria-label="LinkedIn Logo">
          <FaLinkedin style={{ color: '#0A66C2' }} size={18} />
          </span> 
          LinkedIn Corporation © 2025
        </span>
      </div>
      
    </div>
    </div>
  )
}

export default RightSidebar
