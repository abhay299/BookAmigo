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
				setLoginStatus(response.data[0].email);
				console.log(response.data[0].email, response.data[0].password);
			}
		});
	};

	return (
		<div className='login'>
			<form className='form'>
			<header>Create an account</header>
				<label htmlFor="email">email:</label>
				<input type='email' placeholder='abc123@example.com' id="email" name="email"
					value={email} onChange={ (e) => setEmail(e.target.value)} required
				/>

				<label htmlFor="password">password:</label>
				<input type='password' placeholder='password' id="password" name="password"
					value={password} onChange={ (e) => {setPassword(e.target.value)}} required
				/>

				<button type='submit' onClick={handleSubmit}>Log In</button>

				<div>Don't have an account?</div>
			<button onClick={ () => navigate('/register')}>Register</button>
			</form>
			
		</div>
	)
};

export default Login;