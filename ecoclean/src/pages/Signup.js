import  React, { useState,useEffect } from 'react';
import {Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'

function Signup(){


  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate=useNavigate()





  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/signup',{name,email,password})
    .then(()=>{
      navigate('/')
    })
    
    .catch((err)=>{  console.log(err)
    });
  }
  


  return(
    <div className="custom-container">
      <div className="login-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="custom-margin-bottom">
            <label htmlFor="TEXT"><strong>Name</strong></label>
            <input
              type="text"
              placeholder="Enter name"
              autoComplete="off"
              name="name"
              className="custom-input"
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="custom-margin-bottom">
            <label htmlFor="email"><strong>Email</strong></label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="custom-input"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="custom-margin-bottom">
            <label htmlFor="email"><strong>Password</strong></label>
            <input
              type="password"
              placeholder="Enter password"
              autoComplete="off"
              name="password"
              className="custom-input"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button type ="submit" className="custom-button">Signup</button>
        </form>
        <p> Already have an Account??</p>
        <Link  to="/login" className="custom-buttonn">Login</Link>
      </div>
    </div>
  );
}
export default Signup;