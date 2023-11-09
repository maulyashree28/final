import React, { useState } from 'react';
import Layout from "../components/Layout/Layout";
import "../styles/Register.css";

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cleanupDrive, setCleanupDrive] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the registration data here, e.g., send it to an API

    // Reset the form
    setName('');
    setEmail('');
    setCleanupDrive('');
  };

  return (
    <Layout>
    <div className="Register">
     <h2>Register for clean up drive</h2>
      <div className="container">
        <div className="section">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Enter your Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Enter email address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cleanupDrive">Enter the Clean up drive</label>
              <input
                type="text"
                id="cleanupDrive"
                value={cleanupDrive}
                onChange={(e) => setCleanupDrive(e.target.value)}
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default Register;