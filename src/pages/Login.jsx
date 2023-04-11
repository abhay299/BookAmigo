import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from "axios";

const Login = () => {

	const navigate = useNavigate();


	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [loginStatus, setLoginStatus] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		
		Axios.post("http://localhost:3001/register", {
			email : email, 
			password : pass,
		}).then((response) => {
			if(response.data.message) {
				setLoginStatus(response.data.message);
			}else{
				setLoginStatus(response.data[0].email);
			}
		});	
	};

	return (
		<div className='login'>
			<form onSubmit={handleSubmit} className='form'>
			<header>Create an account</header>
				<label for="email">email:</label>
				<input type='email' placeholder='abc123@example.com' id="email" name="email"
					value={email} onChange={ (e) => setEmail(e.target.value)} required
				/>

				<label for="password">password:</label>
				<input type='password' placeholder='password' id="password" name="password"
					value={pass} onChange={ (e) => {setPass(e.target.value)}} required
				/>

				<button type='submit' onClick={ () => navigate('/')}>Log In</button>

				<div>Don't have an account?</div>
			<button onClick={ () => navigate('/register')}>Register</button>
			</form>
			
		</div>
	)
};

export default Login;