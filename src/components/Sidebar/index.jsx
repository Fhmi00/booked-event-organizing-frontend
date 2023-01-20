import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./index.css";
import ModalEvent from "../../components/ModalEvent";
import avatarDefault from "../../assets/img/avatar.jpg";
export default function Sidebar() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const username = user.data.username;
  const image = user.data.image;
  const avatar = `https://res.cloudinary.com/dxjd1vzqg/image/upload/v1663839147/${image}`;
  const isAdmin = user.data.role === "admin";

  const handleChangePassword = () => {
    navigate("/ChangePassword");
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleEditProfil = () => {
    navigate("/edit-profile");
  };

  const handleBooking = () => {
    navigate("/myBooking");
  };

  const handleWishlist = () => {
    navigate("/myWishlist");
  };
  return (
    <div id="sidebar">
      <div className="profil">
        {image ? (
          <img
            className="user_profil dropdown-toggle"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            src={avatar}
            alt="avatar"
          />
        ) : (
          <img
            src={avatarDefault}
            alt="avatar"
            className=" dropdown-toggle user_profil"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          />
        )}
        <p className="ms-4"> {username}</p>
      </div>
      <ul className="list_sidebar">
        <li className="mt-4 menu_profil ">
          <div
            className=" btn btn-toggle align-items-center rounded collapsed menu_profil link_sidebar"
            role="button"
            data-bs-toggle="collapse"
            data-bs-target="#dashboard-collapse"
            aria-expanded="false"
          >
            <i className="bi bi-person-circle me-2 text-secondary  "></i>
            Profil
          </div>

          <div
            className="collapse text-start sub_menu_profil"
            id="dashboard-collapse"
          >
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small menu_profil ">
              <li className="mt-4 ">
                <a
                  href="#"
                  className="link-dark rounded ms-3 mt-5 sub_menu menu_profil link_sidebar"
                >
                  <i className="bi bi-credit-card-fill me-3"></i> Card
                </a>
              </li>
              <li className="mt-4">
                <a
                  href=""
                  className="link-dark rounded ms-3 mt-3 sub_menu menu_profil link_sidebar"
                  onClick={handleEditProfil}
                >
                  <i className="bi bi-pencil-square me-3"></i>Edit Profil
                </a>
              </li>
              <li className="mt-4">
                <a
                  href=""
                  className="link-dark rounded ms-3 sub_menu menu_profil link_sidebar"
                  onClick={handleChangePassword}
                >
                  <i className="bi bi-lock-fill me-3"></i>Change Password
                </a>
              </li>
            </ul>
          </div>
        </li>
        {isAdmin ? (
          <>
            <li className="mt-3">
              <ModalEvent />
            </li>
          </>
        ) : (
          ""
        )}

        <li className="mt-3">
          <a
            href="#"
            className="link_sidebar menu_profil"
            onClick={handleBooking}
          >
            <i className="bi bi-list-check me-2 text-secondary"></i>My Booking
          </a>
        </li>
        <li className="mt-4">
          <a
            href="#"
            className="link_sidebar menu_profil"
            onClick={handleWishlist}
          >
            <i className="bi bi-heart-fill me-2"></i>My Wishlist
          </a>
        </li>
        <li className="mt-4">
          <a href="#" className="link_sidebar menu_profil">
            <i className="bi bi-gear-fill me-2 text-secondary"></i>Setting
          </a>
        </li>
        <li className="mt-4" onClick={handleLogout}>
          <a href="#" className="link_sidebar menu_profil text-danger">
            <i className="bi bi-box-arrow-right me-2 text-danger"></i>Logout
          </a>
        </li>
      </ul>
    </div>
  );
}
