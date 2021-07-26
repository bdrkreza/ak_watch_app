import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/CheckOut/Checkout";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import NoMatch from "./components/NoMatch/NoMatch";
import { setAuthToken } from "./Context_api/api/api";
import AuthState from "./Context_api/Context/Auth/authAction";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import SignIn from "./User/Auth/SignIn/SignIn";
import Login from "./User/Auth/Signup/Signup";

// Set Axios Auth Token


if (localStorage.token) {
  setAuthToken(localStorage.token);
}


function App() {
  return (
    <AuthState>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/about" component={Checkout} />
          <Route path="/contact" component={Contact} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/signup" component={Login} />
          <Route path="*" component={NoMatch} />
        </Switch>
        <Footer />
      </Router>
    </AuthState>
  );
}

export default App;
