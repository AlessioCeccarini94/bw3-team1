import { useEffect } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { fetchExperiencesAction } from "../redux/actions/actions"
import SingleExperience from "./SingleExperience"

const Experiences = (props) => {
  console.log(props.id)
  const dispatch = useDispatch()

  useEffect(() => {
    if (props.id) dispatch(fetchExperiencesAction(props.id))
  }, [dispatch, props.id])
  const experiences = useSelector((state) => state.experiences.experiences)

  return (
    <Card className="mb-3 p-2 shadow">
      <Card.Body>
        <h4 className="mb-3">Esperienze</h4>
        {experiences.length === 0 && (
          <div className="d-flex">
            <div>
              <h6 className="mb-0">Nessuna Esperienza</h6>
            </div>
          </div>
        )}
        {(experiences || []).map((experience, i) => {
          return (
            <div key={experience._id}>
              <SingleExperience
                experienceData={experience}
                itemIndex={i}
                userId={props.id}
              />
              <hr />
            </div>
          )
        })}
      </Card.Body>
    </Card>
  )
}

export default Experiences
