import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
      setError('Invalid email or password');
    }
  };

  return (
    <div>
    <h5 className='header d-flex align-items-center justify-content-center' style={{color:"white"}}>Please enter your credentials:</h5>
    <div className='container-fluid d-flex align-items-center justify-content-center' style={{ minHeight: '100vh', marginTop: '-30px'}}>
    
      <div className="card p-4" style={{ maxWidth: '400px', width: '100%', background: 'white' }}>
       
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="email" style={{fontWeight:"bold", fontSize:"15px"}}>Email</label>
          <input
          className="form-control"
            type="email"
            id="email"
            placeholder='Enter your Email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password" style={{fontWeight:"bold", fontSize:"15px"}}>Password</label>
          <input
          className="form-control"
            type="password"
            id="password"
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid">
        <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
      {error && <p>{error}</p>}
    </div>
    </div>
    </div>
  );
};

export default Login;
