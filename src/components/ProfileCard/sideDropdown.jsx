import {
  FiUser,
  FiLock,
  FiDatabase,
  FiLogOut,
  FiSettings,
  FiHeart,
} from "react-icons/fi";
import { AiFillEdit } from "react-icons/ai";

function SideMenu() {
  return (
    <div className="col-3 px-5 mt-5">
      <div className="d-flex flex-row">
        pp
        <div className="d-flex flex-column">
          <span>Jhon Tomson</span>
          <span>Entrepreneur, ID</span>
        </div>
      </div>
      <div>
        <div className="d-flex flex-column gap-3 mt-5">
          <span className="d-flex gap-3 align-items-center">
            <FiUser /> Profile
          </span>
          <span className="ms-4 d-flex gap-3 align-items-center">
            <AiFillEdit /> Edit Profile
          </span>
          <span className="ms-4 d-flex gap-3 align-items-center">
            <FiLock /> Change Password
          </span>
          <span className="d-flex gap-3 align-items-center">
            <FiDatabase /> My Booking
          </span>
          <span className="d-flex gap-3 align-items-center">
            <FiHeart /> My Wishlist
          </span>
          <span className="d-flex gap-3 align-items-center">
            <FiSettings /> Settings
          </span>
          <span className="d-flex gap-3 align-items-center text-danger">
            <FiLogOut /> Logout
          </span>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
