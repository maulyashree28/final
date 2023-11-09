import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../components/Images/home.png";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="homeee" style={{ backgroundImage: `url(${Banner})` }}>
        
         
          
        </div>
      
    </Layout>
  );
};

export default Home;