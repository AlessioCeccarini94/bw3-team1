import { Card, Button } from 'react-bootstrap';

const SingleJob = ({ jobData }) => {
  if (!jobData || !jobData.title) return null;
  const { title, company_name, candidate_required_location, url } = jobData;

  return (
    // Colonna per limitare la larghezza della card in una Row di Bootstrap
    <div className="col-12 col-md-6 col-lg-4 mb-4"> 
      <Card>
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center">
             <h6 className="mb-0 text-muted">{company_name || 'Azienda Sconosciuta'}</h6>
             <small className="text-success">{candidate_required_location}</small>
          </div>
        </Card.Header>
        
        {/* Corpo della Card */}
        <Card.Body>
          {/* Titolo Principale del Lavoro */}
          <Card.Title className="text-primary">{title}</Card.Title>
          
          {/* Testo Descrittivo */}
          <Card.Text>
             Tipo di Contratto: **{jobData.job_type || 'Non specificato'}**
          </Card.Text>

          {/* Pulsante per Visualizzare l'Offerta Completa */}
          <Button 
            variant="primary" 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Visualizza Dettagli
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleJob;