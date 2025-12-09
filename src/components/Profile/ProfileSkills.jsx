import { Card } from "react-bootstrap";

function ProfileSkills() {
  return (
    <Card className="mb-3">
      <Card.Body>
        <h5 className="mb-3">Competenze</h5>

        <div>
          <h6 className="mb-1">JavaScript</h6>
          <p className="text-muted mb-1">Confermata da 3 colleghi</p>
          <p className="text-muted">21 conferme</p>
        </div>

        <hr />

        <div>
          <h6 className="mb-1">React.js</h6>
          <p className="text-muted mb-1">
            Confermata da 1 persona negli ultimi 6 mesi
          </p>
          <p className="text-muted">11 conferme</p>
        </div>

        <button className="btn btn-link p-0 mt-2">
          Mostra tutte le competenze (17)
        </button>
      </Card.Body>
    </Card>
  );
}

export default ProfileSkills;
