import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const Register = () => {

	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [registerStatus, setRegisterStatus] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		Axios.post("http://localhost:3001/register", {
			name : name,
			email : email, 
			password : password,
		}).then((response) => {
			if(response.data.message) {
				setRegisterStatus(response.data.message);
			}else{
				setRegisterStatus("Account Created Succesfully!")
			}
			console.log(response.data.message);
		});
	};

  return (
	<div>Register
		<form>

				<label htmlFor='name'>Full name :</label>
				<input type='text' value={name} name='name' id="name" placeholder='Enter your Full Name' 
				onChange={ (e) => setName(e.target.value)} required
				/>

				<label htmlFor="email">email :</label>
				<input type='email' placeholder='abc123@example.com' id="email" name="email"
					value={email} onChange={ (e) => setEmail(e.target.value)} required
				/>

				<label htmlFor="password">password :</label>
				<input type='password' placeholder='Enter your password' id="password" name="password"
					value={password} onChange={ (e) => {setPassword(e.target.value)}} required
				/>

				<button type='submit' 
				disabled={name.length < 3 || email.length < 3 || password.length < 3} 
				onClick={handleSubmit}>Submit</button>
		</form>
			<span>Already have an account?</span>
			<button onClick={ () => navigate('/login')}>Log In</button>
	</div>
  )
};

export default Register;
