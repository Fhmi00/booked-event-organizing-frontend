import bg from "../../assets/img/people.png";
import logo from "../../assets/img/logo.png";
import google from "../../assets/img/google.png";
import fb from "../../assets/img/fb.png";

function Signin() {
  return (
    <main className="container-fluid">
      <div className="row">
        <section className="col-md-7 d-none d-md-flex bg-primary d-flex justify-content-center align-items-center vh-100">
          <img src={bg} className="mx-auto my-5 d-block w-50" alt="bg" />
        </section>
        <section className="col-md-4 px-5 d-flex justify-content-center align-items-center">
          <div className="container d-flex flex-column gap-2 my-auto mx-auto">
            <img src={logo} className="w-25 mb-4 mt-5" alt="logo" />
            <span className="mb-3 auth-h1">Sign In</span>
            <p className="mb-5 auth-h3">Hi, Welcome back to Urticket!</p>
            <div className="input-group mb-3 auth-h4">
              <input
                type="text"
                className="form-control auth-input"
                placeholder="Username"
              />
            </div>
            <div className="input-group mb-3 auth-h4">
              <input
                type="text"
                className="form-control auth-input"
                placeholder="Email"
              />
            </div>
            <div className="input-group mb-4 auth-h4">
              <input
                type="password"
                className="form-control auth-input"
                placeholder="Password"
              />
            </div>
            <span className="auth-h2 text-end mb-4 text-primary">
              Forgot Password?
            </span>
            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="button">
                Sign In
              </button>
            </div>
            <p className="mt-5 mb-4 text-center auth-h3">or sign in with</p>
            <div className="d-flex flex-row justify-content-center gap-5">
              <img src={google} alt="google" />
              <img src={fb} alt="fb" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Signin;
