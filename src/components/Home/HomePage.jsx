import { Row, Col, Container } from "react-bootstrap"
import LeftSidebar from "./LeftSideBar"
import RightSidebar from "./RightSidebar"

function HomePage() {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        {/* Sidebar Sinistra */}
        <Col lg={3} className="d-none d-lg-block">
          <LeftSidebar />
        </Col>

        <Col xs={12} lg={6}>
          {/* Parte centrale dove andranno i post */}
          <div className="mt-3">
            <p className="text-center text-muted">
              Il feed dei post apparirà qui
            </p>
          </div>
        </Col>

        {/* Sidebar Destra - Notizie */}
        <Col lg={3} className="d-none d-lg-block">
          <RightSidebar />
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage
