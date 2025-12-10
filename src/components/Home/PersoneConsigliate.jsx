import React from 'react';
import { Card, ListGroup, Button, Row, Col } from 'react-bootstrap';
import { BsPersonCircle } from 'react-icons/bs'; 

const PersoneConsigliate = () => {
  return (
    <Card className="shadow-sm">
      {/* Intestazione */}
      <Card.Header as="h5" className="bg-white border-0 py-3">
        Consigli per te
      </Card.Header>
      
      <ListGroup variant="flush">
        
        {/* ELEMENTO 1: Matteo Piantedosi */}
        <ListGroup.Item className="py-3 px-3">
          <Row className="align-items-center">
            <Col xs="auto" className="pr-2">
              {/* Placeholder Immagine Profilo */}
              <BsPersonCircle size={48} className="text-muted" />
            </Col>
            <Col>
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <div className="font-weight-bold mb-0">
                    Matteo Piantedosi
                    <span className="text-muted small ml-2 font-weight-normal">
                      • 3° e oltre
                    </span>
                  </div>
                  <p className="text-muted small mb-0 text-truncate" style={{ maxWidth: '250px' }}>
                    Ministro dell'Interno
                  </p>
                </div>
                <Button variant="outline-primary" size="sm" className="ml-2">
                  + Segui
                </Button>
              </div>
            </Col>
          </Row>
        </ListGroup.Item>

        {/* ELEMENTO 2: Mario Calabresi */}
        <ListGroup.Item className="py-3 px-3">
          <Row className="align-items-center">
            <Col xs="auto" className="pr-2">
              {/* Placeholder Immagine Profilo */}
             <BsPersonCircle size={48} className="text-muted" />
            </Col>
            <Col>
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <div className="font-weight-bold mb-0">
                    Mario Calabresi
                    <span className="text-muted small ml-2 font-weight-normal">
                      • 3° e oltre
                    </span>
                  </div>
                  <p className="text-muted small mb-0 text-truncate" style={{ maxWidth: '250px' }}>
                    Giornalista e scrittore | Direttore editoriale di Chora e Will | Presidente del Consiglio di Amministrazione di Be...
                  </p>
                </div>
                <Button variant="outline-primary" size="sm" className="ml-2">
                  + Segui
                </Button>
              </div>
              {/* Dettagli aggiuntivi */}
              <div className="text-muted mt-1 small">
               
                Le persone che vivono in Italia seguono anche queste persone
              </div>
            </Col>
          </Row>
        </ListGroup.Item>
        
        {/* ELEMENTO 3: Maria Giulia Scorza */}
        <ListGroup.Item className="py-3 px-3">
          <Row className="align-items-center">
            <Col xs="auto" className="pr-2">
              {/* Placeholder Immagine Profilo */}
             <BsPersonCircle size={48} className="text-muted" />
            </Col>
            <Col>
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <div className="font-weight-bold mb-0">
                    Maria Giulia Scorza
                    {/* Icona Verificata */}
                    <span className="text-muted small ml-2 font-weight-normal">
                      • 3° e oltre
                    </span>
                  </div>
                  <p className="text-muted small mb-0 text-truncate" style={{ maxWidth: '250px' }}>
                    Human Resources | HR Recruiter & Administrative | HR RPO | HR Ambassador Area Lazio-Campania @Synergi...
                  </p>
                </div>
                <Button variant="outline-primary" size="sm" className="ml-2">
                  + Segui
                </Button>
              </div>
              {/* Dettagli aggiuntivi */}
              <div className="text-muted mt-1 small">
              
                Le persone che vivono in Italia seguono anche queste persone
              </div>
            </Col>
          </Row>
        </ListGroup.Item>

        {/* Pulsante "Visualizza altro" */}
        <ListGroup.Item className="text-center py-2 bg-light">
          <a href="#" className="font-weight-bold text-dark text-decoration-none">
            Visualizza altro →
          </a>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default PersoneConsigliate;