import "bootstrap-icons/font/bootstrap-icons.css"
import { useState } from "react"
import { FcLike } from "react-icons/fc"
import { FaHandsBubbles, FaArrowsRotate } from "react-icons/fa6"
import { Card, Row, Col, Container, Button, Dropdown } from "react-bootstrap"
import { BsPersonCircle } from "react-icons/bs"
import { useSelector } from "react-redux"
import {
  deletePostAction,
  fetchPostAction,
  modifyPostAction,
} from "../../redux/actions/actions"
import { useDispatch } from "react-redux"

function SinglePost(props) {
  const { currentUser } = useSelector((state) => state.profile)
  const dispatch = useDispatch()

  // Funzioni placeholder per la gestione dell'azione
  const handleEdit = () => {
    console.log("Modifica il post:", post._id)
    // Qui andrebbe la logica per aprire un modale o navigare alla pagina di modifica
    dispatch(modifyPostAction(post._id, post.text))
    dispatch(fetchPostAction())
  }

  const handleDelete = () => {
    if (window.confirm("Sei sicuro di voler eliminare questo post?")) {
      console.log("Elimina il post:", post._id)
      dispatch(deletePostAction(post._id))
      dispatch(fetchPostAction())
      // Qui andrebbe la chiamata API per l'eliminazione del post
    }
  }
  // eslint-disable-next-line no-unused-vars
  const [likesCount, setLikesCount] = useState(() => {
    // Generazione del numero casuale tra 1 e 3000
    return Math.floor(Math.random() * 3000) + 1
  })

  // eslint-disable-next-line no-unused-vars
  const [commentCount, setCommentCount] = useState(() => {
    // Generazione del numero casuale tra 1 e 300
    return Math.floor(Math.random() * 300) + 1
  })
  const { post } = props
  const isMyPost = post?.user?._id === currentUser._id
  return (
    <div className="col-12 col-md-8 col-lg-10 mx-auto">
      <Card className="mb-3">
        {/* 1. Intestazione del Post (Acer, Follower, Sponsorizzato) */}
        <Card.Header className="bg-white border-0 py-3">
          <Container fluid className="px-0">
            <Row className="align-items-center">
              <Col xs="auto" className="pe-2">
                {post?.user.image ? (
                  <img
                    src={post.user.image}
                    alt="Profile"
                    className="rounded-circle border"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <BsPersonCircle size={48} className="text-muted" />
                )}
              </Col>
              <Col className="text-truncate">
                <div className="fw-bold">{post.username}</div>
              </Col>
              <Col xs="auto" className="ps-2">
                {/* INIZIO: Dropdown per Modifica/Elimina */}
                {isMyPost ? (
                  <Dropdown align="end">
                    <Dropdown.Toggle
                      variant="light"
                      id={`dropdown-post-${post._id}`}
                      className="p-0 border-0 bg-white"
                    >
                      <div className="text-muted fw-bold fs-5"></div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={handleEdit}>
                        <i className="bi bi-pencil me-2"></i> Modifica post
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        onClick={handleDelete}
                        className="text-danger"
                      >
                        <i className="bi bi-trash me-2"></i> Elimina post
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <div className="text-muted fw-bold fs-5">...</div> // Menu a 3 punti generico per altri utenti
                )}
                {/* FINE: Dropdown per Modifica/Elimina */}
              </Col>
            </Row>
          </Container>
        </Card.Header>

        {/* 2. Testo Descrittivo del Post */}
        <Card.Body className="py-2">
          <Card.Text>
            {post.text}
            <span className="text-muted small"> ... altro</span>
          </Card.Text>
        </Card.Body>

        {/* 3. Immagine Principale/Contenuto Multimediale */}
        <div className="p-0 border-0 overflow-hidden">
          <Card.Img
            variant="top"
            src={post.image}
            alt=""
            style={{ width: "100%", height: "auto", maxHeight: "500px" }}
          />
        </div>

        {/* 5. Sezione Interazioni (Mi Piace, Commenti, etc.) */}
        <Card.Body className="pt-0 pb-2">
          <Row className="align-items-center mb-2">
            {/* Contatore Mi Piace / Interazioni */}
            <Col xs="auto">
              {/* Le emoji simulano le icone di reazione (Pollice, Cuore, Applausi) */}
              <span className="me-2 fs-6">
                <FcLike />
              </span>
              <span className="me-2 fs-6">
                <FaHandsBubbles />
              </span>
              <span className="me-2 fs-6">
                <FaArrowsRotate />
              </span>
              <span className="text-muted small fw-bold">{likesCount}</span>
            </Col>
            {/* Contatore Commenti */}
            <Col className="text-end">
              <span className="text-muted small">{commentCount} Commenti</span>
            </Col>
          </Row>

          <hr className="my-0" />
          {/* Pulsanti di Interazione (Consiglia, Commenta, Diffondi, Invia) */}
          <Row className="justify-content-around py-1">
            <Col className="text-center p-0">
              <Button
                variant="light"
                className="text-muted d-flex align-items-center justify-content-center w-100 border-0"
                style={{ padding: "8px 4px" }}
              >
                <span className="me-2 fs-5">
                  <i className="bbi bi-heart"></i>
                </span>
                <span className="fw-bold small">Mi piace</span>
              </Button>
            </Col>

            <Col className="text-center p-0">
              <Button
                variant="light"
                className="text-muted d-flex align-items-center justify-content-center w-100 border-0"
                style={{ padding: "8px 4px" }}
              >
                <span className="me-2 fs-5">
                  {" "}
                  <i className="bi bi-chat"></i>{" "}
                </span>
                <span className="fw-bold small">Commenta</span>
              </Button>
            </Col>

            <Col className="text-center p-0">
              <Button
                variant="light"
                className="text-muted d-flex align-items-center justify-content-center w-100 border-0"
                style={{ padding: "8px 4px" }}
              >
                <span className="me-2 fs-5">
                  <i className="bi bi-send"></i>
                </span>
                <span className="fw-bold small"> Invia</span>
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SinglePost
