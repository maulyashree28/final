
// RegistrationPage.js
import React, { useState } from 'react';
import "../styles/Register.css";

function RegistrationPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [competition, setCompetition] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the registration data here, e.g., send it to an API

    // Reset the form
    setName('');
    setEmail('');
    setCompetition('');
  };

  return (
    <div className="Register">
     <h2>Register for Competition</h2>
      <div className="container2">
        <div className="section2">
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
              <label htmlFor="competition">Enter the Competition</label>
              <input
                type="text"
                id="competition"
                value={competition}
                onChange={(e) => setCompetition(e.target.value)}
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;