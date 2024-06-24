import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../css/signup.css'

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        setLoading(true);
        const res = await fetch('/api/auth/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        if(data.success === false){
            setLoading(false);
            setError(data.message)
            return;
        }
        setLoading(false)
        setError(null)
        navigate('/sign-in');
    } catch (error) {
        setLoading(error.message)
    }
  }


  return (
    <>
    <form onSubmit={handleSubmit}>
        <div className="container">
      <div className="header">
        <div className="text">Sign up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src="" alt="" />
          <input
            type="text"
            placeholder="Enter your Name"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <img src="" alt="" />
          <input type="email" 
            placeholder="Enter your email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <img src="" alt="" />
          <input type="password" 
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="submit-container">
        <button className=".btn .btn-primary">{loading ? 'loading..': 'SIGNUP'} </button>
      </div>
    </div>
    </form>
    <div>
        <p>Have an Account?</p>
        <Link to='/sign-in'><span>Sign</span></Link>
    </div>
    {error && <p>{error}</p>}
    </>
  );
};

export default SignUp;
