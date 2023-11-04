import React, { useState } from "react";
import axios from "axios";
import Layout from '../components/Layout/Layout'
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Create = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
  
    const [_, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await axios.post("http://localhost:3000/Create", {
          username,
          email,
          password,
          
        });
        alert("Registration Completed!!! Now login.");
      } catch (error) {
        console.error(error);
      }
    };
  
  return (
 <Layout>
    <div className="login">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h2>Create new account</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
      </div>
      </Layout>
    );
  };

  export default Create;