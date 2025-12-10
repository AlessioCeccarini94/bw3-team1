import { Form, Button, Col, Row } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import {
  fetchExperiencesAction,
  addExperienceAction,
} from "../redux/actions/actions"

const AddExperiences = ({ userId }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log("userid", userId)

    dispatch(fetchExperiencesAction(userId))
  }, [dispatch, userId])
  const [role, setRole] = useState("")
  const [company, setCompany] = useState("")
  const [description, setDescription] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [area, setArea] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!role || !company || !description)
      return alert("Completa tutti i campi")
    dispatch(
      addExperienceAction(userId, {
        role,
        company,
        startDate,
        endDate,
        description,
        area,
      })
    )
    dispatch(fetchExperiencesAction(userId))
    setRole("")
    setCompany("")
    setDescription("")
    setStartDate("")
    setEndDate("")
    setArea("")
  }

  return (
    <Row className="justify-content-center">
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
  )
}

export default AddExperiences
