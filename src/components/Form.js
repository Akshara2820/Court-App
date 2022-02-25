// this component for about page
import React, { Component } from 'react';
import { useState } from 'react';
import "./navbar.css"
 
function Form(){
            
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [court, setCourt] = useState('');
  const [police, setPolice] = useState('');
  const [fir, setFir] = useState('');
  const [lastDate, setLastDate] = useState('');
  const [presentDate, setPresentDate] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };



  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };


  // Handling the Name of Court
  const handleCourt= (e) => {
    setCourt(e.target.value);
    setSubmitted(false);
  };

  // Handling the Type of Case
  const handleCase = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  //Handling the PoliceStartion name
  const handlePolice = (e) => {
    setPolice(e.target.value);
    setSubmitted(false);
  };
 

  //Handling the Date of Fir
  const handleFir = (e) => {
    setFir(e.target.value);
    setSubmitted(false);
  };

  // Handling the LastDate
  const handleLastDate = (e) => {
    setLastDate(e.target.value);
    setSubmitted(false);
  };


  // Handle the Present Date
  const handlePresentDate = (e) => {
    setPresentDate(e.target.value);
    setSubmitted(false);
  };

  // program to generate random strings

// declare all characters
const characters ='0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!   Your CNR No.Is{generateString(5)} </h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
 
  return (
    <div className="form">
      <div>
        <center><h1> Add New Case</h1></center>
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        <center>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input onChange={handleName} className="input"
          value={name} type="text" />
 
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" />
 
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" />

		<label className="label">Name Of Court</label>
        <input onChange={handleCourt} className="input"
          value={court} type="text" />
		
		<label className="label">Name Of Police Station</label>
        <input onChange={handlePolice} className="input"
          value={police} type="text" />

		<label className="label">Date of Fir</label>
        <input onChange={handleFir} className="input"
          value={fir} type="date" />

		<label className="label">Last Date Of Hering</label>
        <input onChange={handleLastDate} className="input"
          value={lastDate} type="date" />
		
		<label className="label">Present Date Of Hearing</label>
        <input onChange={handlePresentDate} className="input"
          value={presentDate} type="date" />
	
      </center>
      <center><button onClick={handleSubmit} className="btn" type="submit">
          <h3>Submit</h3>
        </button>
      </center>
      </form>
    </div>
  );
}

export default Form;