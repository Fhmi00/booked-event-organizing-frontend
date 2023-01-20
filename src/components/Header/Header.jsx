import "./index.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDataUser } from "../../stores/action/user";

export default function Header() {
  const [profilePicture, setProfilePicture] = useState("");
  const [profileName, setProfileName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.data);
  // console.log(userData);
  const userId = localStorage.getItem("userId");
  const navigateHandler = (path) => {
    navigate(`/${path}`);
  };
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(getDataUser(userId));
      setNavbarData();
    }
  }, [userId]);
  const setNavbarData = () => {
    if (userData[0]) {
      setProfilePicture(userData[0].image);
      setProfileName(userData[0].name);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg px-4">
      <div className="container-fluid navbar__container">
        <div
          className="navbar-brand navbar__item"
          onClick={() => {
            navigateHandler("");
          }}
        >
          <div className="navbar__title">
            <img
              src={require("../../assets/img/logo.png")}
              alt="logo"
              className="navbar__logo"
            />
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav mx-auto mb-2 mb-lg-0 navbar__center">
            <li className="nav-item navbar__link">
              <div
                className="nav-link active"
                aria-current="page"
                onClick={() => {
                  navigateHandler("");
                }}
              >
                Home
              </div>
            </li>
            <li
              className="nav-item navbar__link"
              onClick={() => navigate("/manage-event")}
            >
              <a className="nav-link active" aria-current="page" href="">
                Create Event
              </a>
            </li>
            <li className="nav-item navbar__link">
              <a className="nav-link active" aria-current="page" href="#">
                Location
              </a>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {!token ? (
            <ul className="nav navbar-nav ms-auto mb-2 mb-lg-0">
              <div
                className="navbar__button-signin"
                type="submit"
                onClick={() => {
                  navigateHandler("signin");
                }}
              >
                Sign In
              </div>
              <div
                className="navbar__button-signup"
                type="submit"
                onClick={() => {
                  navigateHandler("signup");
                }}
              >
                Sign Up
              </div>
            </ul>
          ) : (
            <ul
              className="nav navbar-nav ms-auto mb-2 mb-lg-0 navbar__profile"
              onClick={() => {
                navigateHandler("edit-profile");
              }}
            >
              <img
                src={
                  profilePicture
                    ? `https://res.cloudinary.com/dxjd1vzqg/image/upload/v1663839147/${profilePicture}`
                    : require("../../assets/img/avatar.jpg")
                }
                alt="profile"
                className="navbar__profile-picture"
              />
              <div className="navbar__profile-name">{profileName}</div>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import logo from "../../assets/img/logo.png";
// import AvatarDefault from "../../assets/img/avatar.jpg";
// import "./index.css";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// // import { getDataUser } from "../../stores/action/user";

// function Header() {
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.user);

//   const isImage = user.data.image;
//   const isLogin = localStorage.getItem("token");

//   const handleNavigate = (nav) => {
//     navigate(`/${nav}`);
//   };
//   // const handleLogout = () => {
//   //   localStorage.clear();
//   // };
//   return (
//     <Navbar bg="light" expand="lg" className="px-5">
//       <Container fluid>
//         <Navbar.Brand href="/">
//           <img src={logo} alt="" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="mx-auto my-2 my-lg-0"
//             style={{ maxHeight: "100px" }}
//             navbarScroll
//           >
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/manage-event">Create Event</Nav.Link>
//             <Nav.Link href="/">Location</Nav.Link>
//           </Nav>
//           <div className="d-flex gap-3">
//             {isLogin ? (
//               <>
//                 <div style={{ cursor: "pointer" }}>
//                   <div className="" onClick={() => navigate("/edit-profile")}>
//                     {isImage ? (
//                       <img
//                         className="dropdown-toggle avatar"
//                         src={`https://res.cloudinary.com/dxjd1vzqg/image/upload/v1663839147/${user.data.image}`}
//                         alt="avatar"
//                       />
//                     ) : (
//                       <img
//                         src={AvatarDefault}
//                         alt="avatar"
//                         className="avatar"
//                       />
//                     )}
//                   </div>
//                 </div>
//                 <p className="my-auto header-name">
//                   {user.data.username ? user.data.username : "Anonymous"}
//                 </p>
//               </>
//             ) : (
//               <>
//                 <Button
//                   variant="outline-light"
//                   className="rounded-4 px-5 text-dark"
//                   onClick={() => handleNavigate("signin")}
//                 >
//                   Log In
//                 </Button>{" "}
//                 <Button
//                   variant="primary"
//                   className="rounded-4 px-5"
//                   onClick={() => handleNavigate("signup")}
//                 >
//                   Sign Up
//                 </Button>{" "}
//               </>
//             )}
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;
