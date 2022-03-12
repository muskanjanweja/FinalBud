import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import "./Home.css";
import homepage from "../../Pages/homepage.jpg";

const Home = () => {
  const history = useHistory();

  return (
    <div>
      <Navbar />
      <h1> WELCOME!!!</h1>
      <p>Click to check the progress...</p>
      <button
        style={{ marginLeft: "18%" }}
        type="button"
        class="btn btn-primary"
        onClick={() => history.push("/internhome")}
      >
        Get Started
      </button>
      <img
        style={{
          height: "500px",
          position: "absolute",
          right: "0",
          bottom: "15%",
        }}
        src={homepage}
      ></img>
    </div>
  );
};

export default Home;
