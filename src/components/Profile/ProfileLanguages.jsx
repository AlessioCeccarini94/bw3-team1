import { Card } from "react-bootstrap"
import { BsFillPencilFill } from "react-icons/bs"

function ProfileLanguages() {
  return (
    <Card className="mb-3 shadow">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Lingue</h5>
          <BsFillPencilFill
            className="text-muted"
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="mb-3">
          <h6 className="mb-1">Italiano</h6>
          <p className="text-muted mb-0">Madrelingua o bilingue</p>
        </div>

        <hr />

        <div className="mb-3">
          <h6 className="mb-1">Inglese</h6>
          <p className="text-muted mb-0">Competenza professionale completa</p>
        </div>

        <hr />

        <div>
          <h6 className="mb-1">Spagnolo</h6>
          <p className="text-muted mb-0">Competenza professionale limitata</p>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProfileLanguages
