import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { response } from 'express';

const Register = () => {

	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [name, setName] = useState('');
	const [registerStatus, setRegisterStatus] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		Axios.post("http://localhost:3001/register", {
			name : name,
			email : email, 
			password : pass,
		}).then((response) => {
			if(response.data.message) {
				setRegisterStatus(response.data.message);
			}else{
				setRegisterStatus("Account Created Succesfully!")
			}
		});
	};

  return (
	<div>Register
		<form onSubmit={handleSubmit}>

				<label htmlFor='name'>Full name :</label>
				<input value={name} name='name' id="name" placeholder='Enter your Full Name' required/>

				<label htmlFor="email">email :</label>
				<input type='email' placeholder='abc123@example.com' id="email" name="email"
					value={email} onChange={ (e) => setEmail(e.target.value)} required
				/>

				<label htmlFor="password">password :</label>
				<input type='password' placeholder='Enter your password' id="password" name="password"
					value={pass} onChange={ (e) => {setPass(e.target.value)}} required
				/>

				<button type='submit' onClick={ () => navigate('/')}>Log In</button>
		</form>
			<span>Already have an account?</span>
			<button onClick={ () => navigate('/login')}>Log In</button>
	</div>
  )
};

export default Register;
