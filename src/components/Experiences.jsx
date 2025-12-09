import { useEffect, useState } from "react"
import { Container, Row, Col, ListGroup } from "react-bootstrap"

const Experiences = (prop) => {
  const [experiences, setExperiences] = useState([])
  const URL = `https://striveschool-api.herokuapp.com/api/profile/${prop}/experiences`
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZGI0OGQzMjJmNTAwMTUxMDc2YTEiLCJpYXQiOjE3NjUyNzQ4ODMsImV4cCI6MTc2NjQ4NDQ4M30.Q9Y9RBdw6vYbWZ6d5on0z8oXE_EA5RSmRYfa__uTGkY"

  const getExperiences = () => {
    fetch(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setExperiences(data)
        console.log(data)
      })
      .catch((error) => console.log(error))
  }
  useEffect(() => {
    getExperiences()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Container>
      <Row>
        <Col>
          <ListGroup>
            {experiences.map((experience) => {
              return (
                <ListGroup.Item>
                  <h4>{experience.role}</h4>
                  <p>{experience.company}</p>
                  <p>{experience.description}</p>
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}
export default Experiences
