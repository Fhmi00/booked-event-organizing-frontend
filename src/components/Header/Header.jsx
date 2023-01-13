import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/img/logo.png";
import pp from "../../assets/img/pp.png";

import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const name = user.data.username;
  const avatar = `https://res.cloudinary.com/dxjd1vzqg/image/upload/v1663836308/${user.data.image}`;

  const isImage = user.data.image;
  const isLogin = localStorage.getItem("token");

  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };
  const handleLogout = () => {
    localStorage.clear();
  };
  return (
    <Navbar bg="light" expand="lg" className="px-5">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/manage-event">Create Event</Nav.Link>
            <Nav.Link href="/">Location</Nav.Link>
          </Nav>
          <div className="d-flex gap-3">
            {isLogin ? (
              <>
                <div style={{ cursor: "pointer" }}>
                  <div className="dropdown">
                    {isImage ? (
                      <img
                        className="dropdown-toggle avatar"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        src={avatar}
                        alt="avatar"
                      />
                    ) : (
                      <img
                        src={pp}
                        alt="avatar"
                        className="dropdown-toggle avatar"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      />
                    )}

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <li>
                        <Link to="/edit-profile" className="dropdown-item">
                          Profil
                        </Link>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handleLogout}
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="my-auto">{name ? name : "Anonymous"}</p>
              </>
            ) : (
              <>
                <Button
                  variant="outline-light"
                  className="rounded-4 px-5 text-dark"
                  onClick={() => handleNavigate("signin")}
                >
                  Log In
                </Button>{" "}
                <Button
                  variant="primary"
                  className="rounded-4 px-5"
                  onClick={() => handleNavigate("signup")}
                >
                  Sign Up
                </Button>{" "}
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
