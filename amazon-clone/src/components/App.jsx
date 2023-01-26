import React from "react";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Home from "./Home";
import SignIn from "./SignIn";
import SignInAuth from "./SignInAuth";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<><Header1/><Header2 /><Home /></>}/>
          <Route exact path="/signin" element={<SignIn/>}/>
          <Route exact path="/signin/auth" element={<SignInAuth/>}/>
          <Route exact path="/register" element={<SignUp/>}/>
          {/* <Route path="/">
            <Header1 />
            <Header2 />
          </Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
