import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import authContext from "../../../Context_api/Context/Auth/AuthContext";
import "./signIn.css";

export default function SignIn(props) {
  console.log(props)
  const auth_context = useContext(authContext);
  const { login, isAuthenticated } = auth_context;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
  }, [isAuthenticated, props.history]);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });


  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      login(user);
    } else {
      // eslint-disable-next-line
      alert({ icon: "error", title: "Please fill in all the fields." });
    }
  };
  const { username, password } = user;
  return (
    <div className="user">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-2"></div>
          <div class="col-lg-6 col-md-8 login-box">
            <div class="col-lg-12 login-key">
              <i class="fa fa-key" aria-hidden="true"></i>
            </div>
            <div class="col-lg-12 login-title">ADMIN PANEL</div>
            <div class="col-lg-12 login-form">
              <div class="col-lg-12 login-form">
                <div className="ms-5">
                  <form onSubmit={onSubmit}>
                    <div class="group ">
                      <input
                        name="username"
                        value={username}
                        onChange={onChange}
                        className="auth_info_input"
                        type="text"
                        required
                      />
                      <span class="highlight"></span>
                      <span class="auth_bar"></span>
                      <label>Email</label>
                    </div>

                    <div class="group ">
                      <input
                        name="password"
                        value={password}
                        onChange={onChange}
                        className="auth_info_input"
                        type="text"
                        required
                      />
                      <span class="highlight"></span>
                      <span class="auth_bar"></span>
                      <label>Password</label>
                    </div>

                    <div class="col-lg-12 loginbttm">
                      <div class="col-lg-6 login-btm login-text">
                        {/* Error Message  */}
                      </div>
                      <div class="mb-4 d-flex justify-content-center align-items-center">
                        <button
                          type="submit"
                          class="btn btn-outline-primary w-50"
                        >
                          LOGIN
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h6 className="text-white">Don't have an account?</h6>
                  <Link
                    to="signup"
                    className="text-warning text-decoration-none h6"
                  >
                    Create an account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
