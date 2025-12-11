import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Form, NavDropdown } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProfile } from "../redux/reducers/profileSlice";
import {
  FaHome,
  FaUserFriends,
  FaBriefcase,
  FaCommentDots,
  FaBell,
  FaSearch,
  FaLinkedin,
} from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import "./NavBar.css";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/jobs?search=${searchQuery}`);

      setSearchQuery("");
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Navbar */}
      <Navbar
        bg="white"
        className="border-bottom shadow-sm sticky-top d-none d-lg-block py-2"
        style={{ zIndex: 1040 }}
      >
        <Container>
          <div
            className="d-flex align-items-center flex-grow-1"
            style={{ maxWidth: "320px" }}
          >
            <Navbar.Brand as={Link} to="/" className="me-2 p-0">
              <FaLinkedin size={40} color="#0a66c2" />
            </Navbar.Brand>

            <Form
              onSubmit={handleSearch}
              className="flex-grow-1 position-relative"
            >
              <FaSearch
                className="position-absolute text-muted"
                style={{
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "16px",
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              />
              <Form.Control
                type="search"
                placeholder="Cerca"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded bg-light border-0"
                style={{
                  paddingLeft: "38px",
                  height: "35px",
                  fontSize: "14px",
                }}
              />
            </Form>
          </div>

          <Nav className="ms-auto align-items-center">
            <Nav.Link
              as={Link}
              to="/"
              className={`text-center px-2 text-decoration-none ${
                isActive("/")
                  ? "text-dark border-bottom border-dark border-2"
                  : "text-secondary"
              }`}
            >
              <div
                className="d-flex flex-column align-items-center"
                style={{ minWidth: "60px" }}
              >
                <FaHome size={24} />
                <small style={{ fontSize: "12px" }}>Home</small>
              </div>
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/network"
              className={`text-center px-2 text-decoration-none ${
                isActive("/network")
                  ? "text-dark border-bottom border-dark border-2"
                  : "text-secondary"
              }`}
            >
              <div
                className="d-flex flex-column align-items-center"
                style={{ minWidth: "60px" }}
              >
                <FaUserFriends size={24} />
                <small style={{ fontSize: "12px" }}>Rete</small>
              </div>
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/jobs"
              className={`text-center px-2 text-decoration-none ${
                isActive("/jobs")
                  ? "text-dark border-bottom border-dark border-2"
                  : "text-secondary"
              }`}
            >
              <div
                className="d-flex flex-column align-items-center"
                style={{ minWidth: "60px" }}
              >
                <FaBriefcase size={24} />
                <small style={{ fontSize: "12px" }}>Lavoro</small>
              </div>
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/messaging"
              className={`text-center px-2 text-decoration-none ${
                isActive("/messaging")
                  ? "text-dark border-bottom border-dark border-2"
                  : "text-secondary"
              }`}
            >
              <div
                className="d-flex flex-column align-items-center"
                style={{ minWidth: "60px" }}
              >
                <FaCommentDots size={24} />
                <small style={{ fontSize: "12px" }}>Messaggi</small>
              </div>
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/notifications"
              className={`text-center px-2 text-decoration-none ${
                isActive("/notifications")
                  ? "text-dark border-bottom border-dark border-2"
                  : "text-secondary"
              }`}
            >
              <div
                className="d-flex flex-column align-items-center"
                style={{ minWidth: "60px" }}
              >
                <FaBell size={24} />
                <small style={{ fontSize: "12px" }}>Notifiche</small>
              </div>
            </Nav.Link>

            <NavDropdown
              title={
                <div
                  className="d-flex flex-column align-items-center text-secondary"
                  style={{ minWidth: "60px" }}
                >
                  {currentUser?.image ? (
                    <img
                      src={currentUser.image}
                      alt="Profile"
                      className="rounded-circle border"
                      style={{
                        width: "24px",
                        height: "24px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                      style={{
                        width: "24px",
                        height: "24px",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      {currentUser?.name?.charAt(0) || "U"}
                    </div>
                  )}
                  <div
                    className="d-flex align-items-center"
                    style={{ fontSize: "12px" }}
                  >
                    Tu{" "}
                    <span style={{ fontSize: "10px", marginLeft: "2px" }}>
                      ▼
                    </span>
                  </div>
                </div>
              }
              id="profile-dropdown"
              align="end"
              className="text-center px-2"
            >
              {currentUser && (
                <>
                  <div className="d-flex align-items-center p-3 border-bottom">
                    <img
                      src={
                        currentUser.image || "https://via.placeholder.com/60"
                      }
                      alt="Profile"
                      className="rounded-circle me-2"
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <div className="fw-bold">
                        {currentUser.name} {currentUser.surname}
                      </div>
                      <small className="text-muted">{currentUser.title}</small>
                    </div>
                  </div>
                  <NavDropdown.Item as={Link} to="/profile">
                    Visualizza profilo
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </>
              )}
              <NavDropdown.Item as={Link} to="/settings">
                Impostazioni
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/help">
                Guida
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => console.log("Logout")}>
                Esci
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={
                <div
                  className="d-flex flex-column align-items-center text-secondary"
                  style={{ minWidth: "80px" }}
                >
                  <BsFillGrid3X3GapFill size={24} />
                  <div
                    className="d-flex align-items-center"
                    style={{ fontSize: "12px" }}
                  >
                    Per le aziende{" "}
                    <span style={{ fontSize: "10px", marginLeft: "2px" }}>
                      ▼
                    </span>
                  </div>
                </div>
              }
              id="business-dropdown"
              align="end"
              className="text-center px-2 border-start border-secondary-subtle"
            >
              <NavDropdown.Header>Per le aziende</NavDropdown.Header>
              <NavDropdown.Item>Talent Solutions</NavDropdown.Item>
              <NavDropdown.Item>Marketing Solutions</NavDropdown.Item>
              <NavDropdown.Item>Sales Solutions</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="fw-bold"
                style={{ color: "#915907" }}
              >
                Prova Premium gratis
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

      {/* Mobile Navbar */}
      <div
        className="d-lg-none bg-white border-bottom shadow-sm sticky-top py-2"
        style={{ zIndex: 1040 }}
      >
        <Container fluid className="px-2">
          <div className="d-flex align-items-center gap-2">
            <Link to="/" className="text-decoration-none">
              <FaLinkedin size={32} color="#0a66c2" />
            </Link>

            <Form
              onSubmit={handleSearch}
              className="flex-grow-1 position-relative"
            >
              <FaSearch
                className="position-absolute text-muted"
                style={{
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "13px",
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              />
              <Form.Control
                type="search"
                placeholder="Cerca"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded bg-light border-0"
                style={{
                  paddingLeft: "38px",
                  height: "32px",
                  fontSize: "13px",
                }}
              />
            </Form>

            <div className="d-flex align-items-center gap-3">
              <Link
                to="/network"
                className={`text-decoration-none ${
                  isActive("/network") ? "text-dark" : "text-secondary"
                }`}
              >
                <FaUserFriends size={24} />
              </Link>

              <Link
                to="/messaging"
                className={`text-decoration-none position-relative ${
                  isActive("/messaging") ? "text-dark" : "text-secondary"
                }`}
              >
                <FaCommentDots size={24} />
                {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '10px' }}>3</span> */}
              </Link>

              <Link
                to="/notifications"
                className={`text-decoration-none position-relative ${
                  isActive("/notifications") ? "text-dark" : "text-secondary"
                }`}
              >
                <FaBell size={24} />
                {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '10px' }}>5</span> */}
              </Link>

              <Link
                to="/profile"
                className={`text-decoration-none ${
                  isActive("/profile") ? "text-dark" : "text-secondary"
                }`}
              >
                {currentUser?.image ? (
                  <img
                    src={currentUser.image}
                    alt="Profile"
                    className="rounded-circle border"
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div
                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                    style={{
                      width: "28px",
                      height: "28px",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    {currentUser?.name?.charAt(0) || "U"}
                  </div>
                )}
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NavBar;
