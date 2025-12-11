import { Row, Col, Container } from "react-bootstrap"
import LeftSidebar from "./LeftSideBar"
import RightSidebar from "./RightSidebar"
import CreaPost from "./CreaPost"
import PersoneConsigliate from "./PersoneConsigliate"
import HomePost from "./HomePost"

function HomePage() {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        {/* Sidebar Sinistra */}
        <Col lg={2} className="p-0" >
          <LeftSidebar />
        </Col>

        <Col xs={12} lg={6} className="p-0" >
          {/* Parte centrale dove andranno i post */}
         <CreaPost/> 
         <PersoneConsigliate/>
         <HomePost/>
        </Col>

        {/* Sidebar Destra - Notizie */}
        <Col lg={3} className="d-none d-lg-block p-0">
          <RightSidebar />
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage
