import { Card, Row, Col } from 'react-bootstrap';
import { BsFillPencilFill } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillPersonPlusFill } from 'react-icons/bs';

function Aside() {
  return (
    <>
      <Card className="mb-3 shadow mt-5">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-baseline">
            <div>
              <span>Lingua del profilo</span>
              <p>Italiano</p>
            </div>
            <BsFillPencilFill />
          </div>
          <hr />
          <div>
            <div className="d-flex justify-content-between">
              <span>Profilo pubblico e URL</span>
              <BsFillPencilFill />
            </div>
            <p>www.linkedin.com/in/stefanocasasola</p>
          </div>
        </Card.Body>
      </Card>

      <Card className="mb-3 shadow">
        <Card.Body>
          <h6>Altri profili consultati</h6>
          <p className="text-muted">Solo per te</p>

          <Row>
            <Col lg={4}>
              <BsFillPersonFill className="border border-1 rounded-5 p-3" />
            </Col>
            <Col lg={8}>
              <p className="fw-bold">Lorem ipsum</p>
              <p>Lorem ipsum</p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col lg={4}>
              <BsFillPersonFill className="border border-1 rounded-5 p-3" />
            </Col>
            <Col lg={8}>
              <p className="fw-bold">Lorem ipsum</p>
              <p>Lorem ipsum</p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col lg={4}>
              <BsFillPersonFill className="border border-1 rounded-5 p-3" />
            </Col>
            <Col lg={8}>
              <p className="fw-bold">Lorem ipsum</p>
              <p>Lorem ipsum</p>
            </Col>
          </Row>
          <hr />
        </Card.Body>
      </Card>

      <Card className="mb-3 shadow">
        <Card.Body>
          <h6>Persone che potresti conoscere</h6>
          <p className="text-muted">Dal tuo settore</p>

          <Row>
            <Col lg={4}>
              <BsFillPersonFill className="border border-1 rounded-5 p-3" />
            </Col>
            <Col lg={8}>
              <p className="fw-bold">Lorem ipsum</p>
              <p>Lorem ipsum</p>
            </Col>
            <div className="d-flex justify-content-center">
              <button className="border rounded-5 bg-transparent border-dark border-2 d-flex align-items-center">
                <BsFillPersonPlusFill className="me-2" />
                Collegati
              </button>
            </div>
          </Row>
          <hr />
          <Row>
            <Col lg={4}>
              <BsFillPersonFill className="border border-1 rounded-5 p-3" />
            </Col>
            <Col lg={8}>
              <p className="fw-bold">Lorem ipsum</p>
              <p>Lorem ipsum</p>
            </Col>
            <div className="d-flex justify-content-center">
              <button className="border rounded-5 bg-transparent border-dark border-2 d-flex align-items-center">
                <BsFillPersonPlusFill className="me-2" />
                Collegati
              </button>
            </div>
          </Row>
          <hr />
          <Row>
            <Col lg={4}>
              <BsFillPersonFill className="border border-1 rounded-5 p-3" />
            </Col>
            <Col lg={8}>
              <p className="fw-bold">Lorem ipsum</p>
              <p>Lorem ipsum</p>
            </Col>
            <div className="d-flex justify-content-center">
              <button className="border rounded-5 bg-transparent border-dark border-2 d-flex align-items-center">
                <BsFillPersonPlusFill className="me-2" />
                Collegati
              </button>
            </div>
          </Row>
          <hr />
        </Card.Body>
      </Card>
    </>
  );
}

export default Aside;
