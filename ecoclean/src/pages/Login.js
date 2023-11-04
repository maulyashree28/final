import  React, { useState } from 'react';
import {Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import Layout from '../components/Layout/Layout';

function Login(){
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/login',{email,password})
    .then(result=>{
      console.log(result)
      if(result.data==="Success"){
        navigate('/')
        // navigate to dashboard
      }
    })
    .catch(err=>console.log(err))
  }
  return(
    <Layout>
    <div className="custom-container">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
          <button type ="submit" className="custom-button">Login</button>
        </form>
        <p> Don't have an Account??</p>
        <Link  to="/Signup" className="custom-buttonn">Signup</Link>
      </div>
    </div>
    </Layout>
  );
}
export default Login;