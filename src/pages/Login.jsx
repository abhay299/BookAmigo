import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from "axios";

const Login = () => {

	const navigate = useNavigate();


	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loginStatus, setLoginStatus] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		
		Axios.post("http://localhost:3001/login", {
			email : email, 
			password : password,
		}).then((response) => {
			if(response.data.message) {
				setLoginStatus(response.data.message);
				console.log(response.data.message);
			}else{
				setLoginStatus("Login Successful!");
				console.log(response.data[0].email, response.data[0].password);
			}
		});
	};

	return (
		<div className='login'>
			<form className='form'>
				<header className='signup'>Sign In</header>
					<div className='inputContainer'>
						<label htmlFor="email" ></label>
						<input type='email' className='input' placeholder='Email' id="email" name="email"
							value={email} onChange={ (e) => setEmail(e.target.value)} required
						/>

						<label htmlFor="password" ></label>
						<input type='password' className='input' placeholder='Password' id="password" name="password"
							value={password} onChange={ (e) => {setPassword(e.target.value)}} required
						/>
					</div>
					<button type='submit' className='loginBtn' onClick={handleSubmit}>Log In</button>
					{/* <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1> */}
					
					<div className='registerText'>Don't have an account?</div>
					<button className='registerBtn' onClick={ () => navigate('/register')}>Register</button>
					
			</form>
			
		</div>
	)
};

export default Login;