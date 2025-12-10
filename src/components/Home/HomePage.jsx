import { Row, Col } from 'react-bootstrap';
import LeftSidebar from './LeftSideBar';
function HomePage() {
  return (
    <>
     <Row>
      
      <Col lg={3} className="d-none d-lg-block">
        <LeftSidebar />
      </Col>
      
    
      <Col xs={12} lg={6}>
        {/* Parte centrale dove andranno i post */}
      </Col>

      <Col xs={12} lg={3}>
        {/* parte destra sidebar */}
      </Col>
    </Row>
    </>
  );
}

export default HomePage