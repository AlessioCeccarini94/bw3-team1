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
  }, [dispatch])
  console.log("jobs", jobs)
  const jobsArray = jobs.jobs.data;

  return (
    <Container>
      <Row className="mt-4">
        <h3 className="mb-4">Le principali offerte di lavoro per te</h3>
       { jobsArray && Array.isArray(jobsArray) && jobsArray.length > 0 ? (
          jobsArray.slice(0,9).map((job) => {
            // L'array è disponibile, esegui il map
            return <SingleJob key={job._id} jobData={job} />
          })
        ) : (
          // Mostra un messaggio di caricamento o di assenza dati
          <p className="text-center w-100">Caricamento lavori in corso o nessun dato trovato...</p>
        )}
      </Row>
    </Container>
  )
}

export default Jobs
