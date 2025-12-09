import NavBar from "../NavBar"
import ProfileInfo from "../ProfileInfo"
import Informazioni from "../Informazioni"
import Experiences from "../Experiences"
import ProfileVolunteering from "./ProfileVolunteering"
import ProfileSkills from "./ProfileSkills"
import Footer from "../Footer"
import { Row,Col } from "react-bootstrap"

function ProfilePage() {
  return <>
  {/* <NavBar/> */}
  <Row>
    <Col xs={12} lg={8} className="justify-content-center ms-5"> 
    <ProfileInfo/>
  <Informazioni/>
  <Experiences id={"5d84937322b7b54d848eb41b"}/>
  <ProfileVolunteering/>
  <ProfileSkills/>
 
    </Col>
    <Col xs={0} lg={4}>
    ciao
    </Col>
  </Row>
  <Footer/>

  </>
}

export default ProfilePage
