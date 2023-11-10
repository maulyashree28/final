import React, { useState } from 'react';
import {Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Layout from "../components/Layout/Layout";
import "../styles/Register.css";
import {
  Button
} from "@mui/material";

function Cleanup_register(){
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [cleanupDrive,setCleanupDrive]=useState()
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/signup',{name,email,cleanupDrive})
    .then(()=>{
      navigate('/')
    })
    
    .catch((err)=>{  console.log(err)
    });
  }
  

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
            <Button variant="contained" color="success" sx={{float:'right'}}>Register</Button>
          </form>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default Cleanup_register;