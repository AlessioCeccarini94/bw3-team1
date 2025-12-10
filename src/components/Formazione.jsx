import { Card } from 'react-bootstrap';

function Formazione() {
  return (
    <Card className="mb-3 p-2 shadow">
      <Card.Body>
        <h5 className="mb-3">Formazione</h5>

        <div className="d-flex">
          <div className="me-3">
            <div
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#e9ecef',
                borderRadius: '4px',
              }}
            ></div>
          </div>

          <div>
            <h6 className="mb-0">Università degli studi di Roma</h6>
            <p className="mb-1">Laurea magistrale in Informatica</p>
            <p className="mb-1 text-muted">2019 – 2024</p>
            <p className="mb-0">Votazione: 110/110</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Formazione;
