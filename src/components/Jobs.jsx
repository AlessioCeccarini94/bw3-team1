import { Container, Row } from "react-bootstrap"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchJobsAction } from "../redux/actions/actions"
import SingleJob from "./SingleJob"

const Jobs = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchJobsAction())
  }, [dispatch])
  const jobs = useSelector((state) => state.jobs)

  return (
    <Container>
      <Row>
        <SingleJob jobData={jobs} />
      </Row>
    </Container>
  )
}

export default Jobs
