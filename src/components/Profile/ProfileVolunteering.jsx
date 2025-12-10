import { Card } from "react-bootstrap";

function ProfileVolunteering() {
  return (
    <Card className="mb-3 p-2 shadow">
      <Card.Body>
        <h5 className="mb-3">Volontariato</h5>

        <div className="d-flex">
          <div className="me-3">
            <div
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#e9ecef",
                borderRadius: "4px",
              }}
            ></div>
          </div>

          <div>
            <h6 className="mb-0">Core Maintainer</h6>
            <p className="mb-1 text-muted">HospitalRun</p>
            <p className="mb-1 text-muted">ago 2019 – dic 2019 · 5 mesi</p>
            <p className="text-muted mb-0">Scienza e tecnologia</p>
          </div>
        </div>

        <hr />

        <div className="d-flex">
          <div className="me-3">
            <div
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#e9ecef",
                borderRadius: "4px",
              }}
            ></div>
          </div>

          <div>
            <h6 className="mb-0">Donatore di sangue</h6>
            <p className="mb-1 text-muted">Adsvg Fidas Gorizia</p>
            <p className="mb-1 text-muted">set 2013 – presente · 12 anni</p>
            <p className="text-muted mb-0">Salute</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProfileVolunteering;
