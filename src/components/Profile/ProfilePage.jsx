import NavBar from '../NavBar';
import ProfileInfo from '../ProfileInfo';
import Informazioni from '../Informazioni';
import Experiences from '../Experiences';
import ProfileVolunteering from './ProfileVolunteering';
import ProfileSkills from './ProfileSkills';
import ProfileLanguages from './ProfileLanguages';
import Footer from '../Footer';
import { Row, Col } from 'react-bootstrap';
import Formazione from '../Formazione';
import Aside from '../Aside';

function ProfilePage() {
  return (
    <>
      {/* <NavBar/> */}
      <Row>
        <Col xs={12} lg={8} className="justify-content-center ms-0 ms-lg-5">
          <ProfileInfo />
          <Informazioni />
          <Experiences id={'6937db48d322f500151076a1'} />
          <Formazione />
          <ProfileVolunteering />
          <ProfileSkills />
          <ProfileLanguages />
        </Col>
        <Col lg={3} className="d-none d-lg-block">
          <Aside />
        </Col>
      </Row>
      <Footer />
    </>
  );
}

export default ProfilePage;
