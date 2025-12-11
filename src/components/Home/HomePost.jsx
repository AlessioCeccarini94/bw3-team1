import { useEffect } from "react"
import SinglePost from "./SinglePost"
import { Container, Alert, Row, Col, Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { fetchPostAction } from "../../redux/actions/actions"

const HomePage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPostAction())
  }, [dispatch])

  const post = useSelector((currentState) => currentState.posts.post)
  const loading = useSelector((currentState) => currentState.posts.loading)
  const error = useSelector((currentState) => currentState.posts.error)
  return (
    <>
      {/* ... (Spinner e Alert per Errori/Caricamento invariati) ... */}
      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="success" />
          <p className="text-white mt-2">Caricamento dati ...</p>
        </div>
      )}
      {error && (
        <Alert variant="danger" className="text-center">
          Errore durante il recupero dei dati, {error}
        </Alert>
      )}

      {post && (
        <Container fluid className="mt-2">
          <Row xs={12}>
            {post?.map((item, index) => {
              return (
                <Col xs={12} className="p-0" key={index}>
                  <SinglePost post={item} />
                </Col>
              )
            })}
          </Row>
        </Container>
      )}
    </>
  )
}
export default HomePage
