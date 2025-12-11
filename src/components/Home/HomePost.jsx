import { useState, useEffect } from "react"
import SinglePost from "./SinglePost"
import { Container, Alert, Row, Col, Spinner } from "react-bootstrap"

const HomePage = () => {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchPost = () => {
    const URL = `https://striveschool-api.herokuapp.com/api/posts/`
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZGI0OGQzMjJmNTAwMTUxMDc2YTEiLCJpYXQiOjE3NjUyNzQ4ODMsImV4cCI6MTc2NjQ4NDQ4M30.Q9Y9RBdw6vYbWZ6d5on0z8oXE_EA5RSmRYfa__uTGkY"
    fetch(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("la chiamata non è ok: " + response.status)
        }
      })
      .then((arrayOfPost) => {
        setPost(arrayOfPost.slice(-50))
        setLoading(false)
      })
      .catch((err) => {
        console.log("Errore nella chiamata", err)
        setError(err.message)
        setLoading(false)
      })
  }
  useEffect(() => {
    fetchPost()
  }, [])

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
            {post.map((item, index) => {
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
