import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import authContext from "../../../Context_api/Context/Auth/AuthContext";

export default function Signup(props ) {
  const auth_context = useContext(authContext);

  const { register, isAuthenticated } = auth_context;

  const [user, setUser] = useState({
    name: "",
    email: "",
    username: '',
    password: "",
    cPassword: "",
  });

  console.log(user)
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
  }, [isAuthenticated, props.history]);

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === ""|| username==="" || email === "" || password === "") {
      alert({ icon: "error", title: "Please fill in all fields." });
    } else if (password !== cPassword) {
      alert({ icon: "error", title: "Passwords do not match." });
    } else if (password.length < 6) {
      alert({
        icon: "error",
        title: "Password should be atleast 6 characters long.",
      });
    } else {
      register(user);
    }
  };

  const { name, username, email, password, cPassword } = user;
  return (
    <>
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
                                name="name"
                                value={name}
                                onChange={onChange}
                          className="auth_info_input"
                          type="text"
                          required
                        />
                        <span class="highlight"></span>
                        <span class="auth_bar"></span>
                        <label>Name</label>
                      </div>
                      
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
                        <label>Username</label>
                      </div>

                      <div class="group ">
                        <input
                          name="email"
                          value={email}
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
                          type="password"
                          required
                        />
                        <span class="highlight"></span>
                        <span class="auth_bar"></span>
                        <label>Password</label>
                      </div>

                      <div class="group ">
                        <input
                                name="cPassword"
                                value={cPassword}
                                onChange={onChange}
                          className="auth_info_input"
                          type="password"
                          required
                        />
                        <span class="highlight"></span>
                        <span class="auth_bar"></span>
                        <label>Confirm Password</label>
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
                            SignUp
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h6 className="text-white">Already have an account?</h6>
                    <Link
                      to="signIn"
                      className="text-warning text-decoration-none h6"
                    >
                      Sign In
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
