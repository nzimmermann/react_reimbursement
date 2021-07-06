import { useAuthDispatch, useAuthState } from '../../Services/Auth/context';
import { logout } from '../../Services/Auth/actions';
import './Navbar.css';

function Navbar() {
  
  const userStatus = useAuthState();
  const dispatch = useAuthDispatch();


  const handleLogout = async (e) => {
    e.preventDefault();
    console.log('handling the logout')
    logout(dispatch)
  }


  if(userStatus.userId != ""){
    return (
      <>
        <nav className="navbar">
            <div className="container-fluid flex-row">
                <h1 className="navbar-text float-end">Employee Revabursement System</h1>
                <h2 className="navbar-text " onClick={handleLogout}>Sign Out</h2>
            </div>
        </nav>
        
      </>
    );
  } else {
 
    return (
      <>
        <nav className="navbar">
            <div className="container-fluid flex-row">
                <h1 className="navbar-text float-end">Employee Revabursement System</h1>
                <h2>{userStatus.jwt}</h2>
            </div>
        </nav>
        
      </>
    );
  }
  

  return (<h1>uhhh....</h1>)
  

  
}

export default Navbar;