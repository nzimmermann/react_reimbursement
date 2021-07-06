import './Login.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthDispatch, useAuthState } from '../../Services/Auth/context';
import { loginUser } from '../../Services/Auth/actions';


function Login() {

    const [username, changeUsername] = useState("");
    const [password, changePassword] = useState("");
    
    const dispatch = useAuthDispatch();
    const {loading, errorMessage} = useAuthState();

    let navigate = useNavigate();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: password})
    }
  
    

    const handleLogin = async (e) => {
      e.preventDefault();
      console.log('handling the login...')

      let payload = {username: username, password: password}
      console.log(payload);
      
      try {
        let response = await loginUser(dispatch, payload)
        if(!response.userId){
          return;
        }
        
        

        console.log('about to push...')
        navigate('/');
        
        
      } catch(error) {
          console.log('error location at handle login catch block')
          console.log(error)
      }


    }

    return (
      <>
        <div className="container-flex" id="login-card">
          <form>
            <h1 className="form-row">Sign In</h1>
            <div className="row form-row">
              <input 
                className="form-control form-control-lg" 
                placeholder="Username" type="text"
                name="user" id="user"
                value={username} disabled={loading}
                onChange={e => changeUsername(e.target.value)}
                />
            </div>
            <div className="row form-row">
              <input 
                className="form-control form-control-lg"
                placeholder="Password" type="password" 
                name="pass" id="pass"
                value={password} disabled={loading}
                onChange={e => changePassword(e.target.value)}
                />
            </div>
            <div className="row form-row" id="submit-btn">
                <button onClick={handleLogin} type="button" className="btn btn-primary" disabled={loading}>
                    <h3 className="login-text">Login</h3>
                </button>
            </div>
          </form>
          <p>New user? Register <Link to='/register' >here</Link></p>
        </div>
        <div className="stretch">
          <br></br>
        </div>
      </>
    );
}

export default Login;

