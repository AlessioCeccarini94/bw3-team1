import { useEffect, useState } from "react"
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchExperiencesAction,
  addExperienceAction,
} from "../redux/actions/actions"
import SingleExperience from "./SingleExperience"

const Experiences = (props) => {
  console.log(props.id)

  const dispatch = useDispatch()
  const [role, setRole] = useState("")
  const [company, setCompany] = useState("")
  const [description, setDescription] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [area, setArea] = useState("")
  const newExperience = {
    role,
    company,
    startDate,
    endDate,
    description,
    area,
  }

  useEffect(() => {
    if (props.id) dispatch(fetchExperiencesAction(props.id))
  }, [dispatch, props.id])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!role || !company || !description)
      return alert("Completa tutti i campi")
    dispatch(addExperienceAction(props.id, newExperience))
    setRole("")
    setCompany("")
    setDescription("")
    setStartDate("")
    setEndDate("")
    setArea("")
  }
  const experiences = useSelector((state) => state.experiences.experiences)

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
              {experiences.map((experience, i) => {
                return (
                  <div key={experience._id}>
                    <SingleExperience
                      experienceData={experience}
                      itemIndex={i}
                    />
                    <hr />
                  </div>
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
