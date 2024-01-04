import React from 'react'
import '../Assets/Login.css'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';
function Loging() {
    const displayLoginNotification = () => {
        toast.success("LoggedIn Successfully!");
      };
    const displayRegNotification = () => {
        toast.success("Registered Successfully");
      };
  return (
    <div className='body'>
        <ToastContainer
        
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
        <div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>
			<div class="login"  >
				<form class="form">
					<label for="chk" aria-hidden="true">Log in</label>
					<input class="input" type="email" name="email" placeholder="Email" required/>
					<input class="input" type="password" name="pswd" placeholder="Password" required/>
					<Link to='/dash'>
            <button type="button"  onClick={displayLoginNotification} >Log in</button>
          </Link>
				</form>
			</div>

      <div class="register">
				<form class="form">
					<label for="chk" aria-hidden="true">Register</label>
					<input class="input" type="text" name="txt" placeholder="Username" required/>
					<input class="input" type="email" name="email" placeholder="Email" required/>
					<input class="input" type="password" name="pswd" placeholder="Password" required/>
          
          <Link to='/dash'>
					<button type="button" onClick={displayRegNotification}>Register</button>
          </Link>
				</form>
			</div>
	   </div>
    </div>
  )
}

export default Loging