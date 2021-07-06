import './Login.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Register() {

  const [username, changeUsername] = useState();
  const [password, changePassword] = useState();
  const [email,    changeEmail   ] = useState();
  const [firstName, changeFirstName] = useState();
  const [lastName, changeLastName] = useState();
  

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(username)
    console.log(password)
    console.log(email)
  }


  return (
    
      <div className="container-flex" >
        <form className="register-form" > {/* onSubmit={e => registerEmployee(e.target.value)}> */}
          <h1 className="form-row">Register</h1>
          <div className="row form-row">
            <input 
              className="form-control form-control-lg" 
              placeholder="New username" type="text"
              name="user" value={username}
              onChange={e => changeUsername(e.target.value)}
              required
              />
          </div>
          <div className="row form-row">
            <input 
              className="form-control form-control-lg"
              placeholder="New password" type="password" 
              name="pass" value={password}
              onChange={e => changePassword(e.target.value)}
              required
              />
          </div>

          <div className="row form-row">
            <input 
              className="form-control form-control-lg"
              placeholder="example@email.com" 
              type="text" name="email" value={email}
              onChange={e => changeEmail(e.target.value)}
              required
            />
          </div>

          <div className="row form-row">
            <div className="col" id="firstName">
              <input 
              className="form-control form-control-lg"
              placeholder="First" type="text"
              name="firstName" value={firstName}
              onChange={e => changeFirstName(e.target.value)}
              />
            </div>
            
            <div className="col" id="lastName">
              <input 
              className="form-control form-control-lg"
              placeholder="Last" type="text"
              name="lastName" value={lastName}
              onChange={e => changeLastName(e.target.value)}
              />
            </div>
            
          </div>

          <div className="row form-row" id="submit-btn">
              <button onClick={handleRegister} type="submit" className="btn btn-primary">
                  <h3 className="login-text">Register</h3>
              </button>
          </div>

        </form>
        <p>Already a user? Login <Link to='/login'>here</Link></p>
      </div>
    
  );
}




export default Register;