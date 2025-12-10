import { Container, Row } from "react-bootstrap"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchJobsAction } from "../redux/actions/actions"
import SingleJob from "./SingleJob"

const Jobs = () => {
  const dispatch = useDispatch()
  const jobs = useSelector((state) => state.jobs)
  useEffect(() => {
    dispatch(fetchJobsAction())
  }, [dispatch, jobs])
  console.log("jobs", jobs)

  return (
    <Container>
      <Row>
        {jobs.jobs.map((job) => {
          return <SingleJob key={job._id} jobData={job} />
        })}
      </Row>
    </Container>
  )
}

export default Jobs
