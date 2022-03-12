import React from "react";
import "./App.css";
import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Profile from "./Components/Pages/Profile/Profile";
import Project from "./Components/Pages/Project/Project";
import Notification from "./Components/Pages/Notification/Notification";
import Login from "./Components/Login/Login";
import InternHome from "./Components/Pages/Home/InternHome";

function App() {
  return (
    <Routes>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/notification" component={Notification} />
        <Route exact path="/internhome" component={InternHome} />
      </Switch>
    </Routes>
  );
}

export default App;
