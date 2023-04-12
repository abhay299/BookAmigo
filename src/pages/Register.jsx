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
	<div className='login'>
		<form className='form'>
			<header className='signup'>Sign Up</header>
				<div className='inputContainer'>
					<label htmlFor='name'></label>
					<input type='text' className='input' value={name} name='name' id="name" placeholder='Enter your Full Name' 
					onChange={ (e) => setName(e.target.value)} required
					/>

					<label htmlFor="email"></label>
					<input type='email' className='input' placeholder='Enter your Email ID' id="email" name="email"
						value={email} onChange={ (e) => setEmail(e.target.value)} required
					/>

					<label htmlFor="password"></label>
					<input type='password' className='input' placeholder='Enter your Password' id="password" name="password"
						value={password} onChange={ (e) => {setPassword(e.target.value)}} required
					/>
				</div>

				<button type='submit' className='submitBtn'
				disabled={name.length < 3 || email.length < 3 || password.length < 3} 
				onClick={handleSubmit}>Submit</button>

				<div className='registerText'>Already have an account?</div>
				<button className='registerBtn' onClick={ () => navigate('/login')}>Log In</button>
		</form>
			
	</div>
  )
};

export default Register;
