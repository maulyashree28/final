import React from 'react';
import { Link } from 'react-router-dom';
import Im from '../components/Images/cleanup.png';
import '../styles/Cleanup.css';
import Layout from '../components/Layout/Layout';

function Cleanupdrive() {
  return (
    <Layout>
    <div className="Cleanupdrive" style={{ backgroundImage: `url(${Im})` }}>
      <div className="hContainer">
        <h1>BE A HERO FOR A CLEANER PLANET</h1>
        <h2>"Clean up the Earth, it's the only Home we have got"</h2>
        <div className="h2container">
          <div className="section">
            <h3>Mithi River Clean Up</h3>
            <p>Date: 10th December 2023</p>
            <p>Timings: 04:00pm to 06:00pm</p>
            <p>At the Causeway slope, Mangalore</p>
          </div>
          
        <p>REGISTRATION IS MANDATORY</p>
        <p>Open Invitation,</p>
        <p>Everyone is Welcome!</p>
        <Link to="/Cleanup_register">
          <button>Register</button>
        </Link>
        <div className="section">
            <h3>Kadri Park Clean Up</h3>
            <p>Date: 22nd December 2023</p>
            <p>Timings: 04:00am to 06:00am</p>
            <p>At Kadri Park, Mangalore</p>
          </div>
          
          <p>REGISTRATION IS MANDATORY</p>
        <p>Open Invitation,</p>
        <p>Everyone is Welcome!</p>
        <Link to="/Cleanup_register">
          <button>Register</button>
        </Link>
        </div>
      </div>
      </div>
    </Layout>
  );
}

export default Cleanupdrive;