import { useEffect, useState } from "react"
import { Container, Row, Col, ListGroup, Form, Button, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchExperiencesAction,
  addExperienceAction,
} from "../redux/reducers/actions"

const Experiences = ({ userId }) => {
  const dispatch = useDispatch()
  const experiences = useSelector((state) => state.experiences.experiences)
  const [role, setRole] = useState("")
  const [company, setCompany] = useState("")
  const [description, setDescription] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [area, setArea] = useState("")

  useEffect(() => {
    if (userId) dispatch(fetchExperiencesAction(userId))
  }, [dispatch, userId])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!role || !company || !description)
      return alert("Completa tutti i campi")
    const newExperience = {
      role,
      company,
      startDate,
      endDate,
      description,
      area,
    }
    dispatch(addExperienceAction(userId, newExperience))
    setRole("")
    setCompany("")
    setDescription("")
    setStartDate("")
    setEndDate("")
    setArea("")
  }
  return (
    <Container>
      <Row>
        <Col>
         <Card className="mb-3 shadow">
           <Card.Body>
            <h3 className="mb-3">Esperienze</h3>
            {experiences.length === 0 && (
        <div className="d-flex">
          <div>
            <h6 className="mb-0">Nessuna Esperienza</h6>
          </div>
        </div>
            )}
            {experiences.map((exp) => {
              return (<>
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

          <div key={exp._id}>
            <h6 className="mb-0 fw-semibold">{exp.role}</h6>
            <p className="mb-1">{exp.company}</p>
            <p className="mb-1 text-muted"> From {exp.startDate} To {exp.endDate}</p>
            <p className=" mb-0">{exp.description}</p>
          </div>
        </div>
        <hr />
              </>
              )
            })}
          </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <h3>Aggiungi esperienza</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label>Ruolo</Form.Label>
              <Form.Control
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Azienda</Form.Label>
              <Form.Control
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Data di inizio</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Data di fine</Form.Label>
              <Form.Control
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Area</Form.Label>
              <Form.Control
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" className="mt-2">
              Aggiungi esperienza
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Experiences
