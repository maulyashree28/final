import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../components/Images/home.png";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>TURNING</h1>
          <br/>
          <h1> TRASH </h1>
          <br/>
          <h1>INTO</h1>
          <br/>
          <h1>TREASURE</h1>
          
        </div>
      </div>
    </Layout>
  );
};

export default Home;