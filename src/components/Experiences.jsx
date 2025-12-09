import { useEffect, useState } from "react"
import { Container, Row, Col, ListGroup, Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchExperiencesAction,
  addExperienceAction,
} from "../redux/reducers/actions"

const Experiences = ({ userId }) => {
  const dispatch = useDispatch()
  const experiences = useSelector((state) => state.experiences.experiences)
  useEffect(() => {
    if (userId) dispatch(fetchExperiencesAction(userId))
  }, [dispatch, userId])
  const handleSubmit = (e) => {
    e.preventDefault()
    const newExperience = {
      role: role,
      company: company,
      startDate: "2022-06-16",
      endDate: "2023-06-16",
      description: description,
      area: "Milan",
    }
    dispatch(addExperienceAction(userId, newExperience))
  }
  const [role, setRole] = useState("")
  const [company, setCompany] = useState("")
  const [description, setDescription] = useState("")
  const newExperience = {
    role: "",
    company: "",
    startDate: "2022-06-16",
    endDate: "2023-06-16",
    description: "",
    area: "Milan",
  }
  dispatch(addExperienceAction(userId, newExperience))
  return (
    <Container>
      <Row>
        <Col>
          <ListGroup>
            {experiences.map((exp) => {
              return (
                <ListGroup.Item key={exp._id}>
                  <h4>{exp.role}</h4>
                  <p>{exp.company}</p>
                  <p>{exp.description}</p>
                </ListGroup.Item>
              )
            })}
          </ListGroup>
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
