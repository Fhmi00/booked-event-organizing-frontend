import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/img/logo.png";
import pp from "../../assets/img/pp.png";

import { useSelector } from "react-redux";

function Header() {
  const user = useSelector((state) => state.user);
  const isLogin = localStorage.getItem("token");
  return (
    <Navbar bg="light" expand="lg" className="px-5">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Create Event</Nav.Link>
            <Nav.Link href="#action3">Location</Nav.Link>
          </Nav>
          <div className="d-flex gap-3">
            {isLogin ? (
              <>
                <div style={{ cursor: "pointer" }}>
                  <img src={pp} alt="avatar" />
                </div>
                <p className="my-auto">
                  {user.data.name ? user.data.name : "Anonymous"}
                </p>
              </>
            ) : (
              <>
                <Button
                  variant="outline-light"
                  className="rounded-4 px-5 text-dark"
                >
                  Log In
                </Button>{" "}
                <Button variant="primary" className="rounded-4 px-5">
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
