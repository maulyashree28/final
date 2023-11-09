import React, { useState } from 'react';
import "../styles/Compreg.css";

function Register() {
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
      
      <h1>Register for Competition</h1>
      <div className="cont">
        <div className="sect">
          <form onSubmit={handleSubmit} className="center-form">
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
              <label htmlFor="competition">Enter Phone Number</label>
              <input
                type="text"
                id="competition"
                value={competition}
                onChange={(e) => setCompetition(e.target.value)}
                required
              />
            </div >
            <div className="buttondisplay">
            <button type="submit"> Submit </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;