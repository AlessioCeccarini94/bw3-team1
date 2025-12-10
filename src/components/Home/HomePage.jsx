import { Row, Col, Container } from "react-bootstrap"
import LeftSidebar from "./LeftSideBar"
import RightSidebar from "./RightSidebar"
import CreaPost from "./CreaPost"
import PersoneConsigliate from "./PersoneConsigliate"

function HomePage() {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        {/* Sidebar Sinistra */}
        <Col lg={2} >
          <LeftSidebar />
        </Col>

        <Col xs={12} lg={6} >
          {/* Parte centrale dove andranno i post */}
         <CreaPost/>
         <PersoneConsigliate/>
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
