import logos from "../../assets/img/logos.png";
import logo from "../../assets/img/logo.png";

function Footer() {
  return (
    <footer className="container mt-5 px-5">
      <div className="row pt-5">
        <div className="col-md-6 d-flex flex-column gap-4 mt-4">
          <img src={logo} className="w-25" alt="" />
          <span className="footer-find">Find events you love with our</span>
          <img src={logos} className="w-50" alt="logos" />
        </div>
        <div className="col-md-2 d-flex flex-column gap-3 mt-4">
          <span className="footer-features">Wetick</span>
          <div className="d-flex flex-column gap-3 footer-base">
            <span>About Us</span>
            <span>Features</span>
            <span>Blog</span>
            <span>Payments</span>
            <span>Mobile App</span>
          </div>
        </div>
        <div className="col-md-2 d-flex flex-column gap-3 mt-4">
          <span className="footer-features">Features</span>
          <div className="d-flex flex-column gap-3 footer-base">
            <span>Booking</span>
            <span>Create Event</span>
            <span>Discover</span>
            <span>Register</span>
          </div>
        </div>
        <div className="col-md-2 d-flex flex-column gap-3 mt-4">
          <span className="footer-features">Company</span>
          <div className="d-flex flex-column gap-3 footer-base">
            <span>Partnership</span>
            <span>Help</span>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Sitemap</span>
          </div>
        </div>
        <span className="mt-5 mb-4 footer-copyright">
          © 2020 Wetick All Rights Reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
