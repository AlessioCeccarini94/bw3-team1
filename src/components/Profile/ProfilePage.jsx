import NavBar from "../NavBar"
import ProfileInfo from "../ProfileInfo"
import Informazioni from "../Informazioni"
import Experiences from "../Experiences"
import ProfileVolunteering from "./ProfileVolunteering"
import ProfileSkills from "./ProfileSkills"
import Footer from "../Footer"
import { Row, Col } from "react-bootstrap"

function ProfilePage() {
  return (
    <>
      {/* <NavBar/> */}
      <Row>
        <Col xs={12} lg={8} className="justify-content-center ms-5">
          <ProfileInfo />
          <Informazioni />
          <Experiences userId={"6937db48d322f500151076a1"} />
          <ProfileVolunteering />
          <ProfileSkills />
        </Col>
        <Col xs={0} lg={4}>
          ciao
        </Col>
      </Row>
      <Footer />
    </>
  )
}

export default ProfilePage
