import { useNavigate } from "react-router-dom";
import "../App.css";


const Navbar = ({ setCurrentPage }) => {

	const navigate = useNavigate();

	return (
		<div>
			<div className="App">BookAmigo</div>
			<div className="navbarContainer">

				<div className="navbarItems">
					<span className='li' onClick={() => {
						// navigate("/");
						setCurrentPage(1);
					}}>Home</span>
					<span className='li' onClick={() => {
						// navigate("/myBooking")
						setCurrentPage(2)
					}}>My Bookings</span>
					<span className='li' onClick={() => { navigate("/contactUs") }}>Contact Us</span>
				</div>
				<button className="navbarButton" onClick={() => { navigate("/register") }}>Register</button>
				<button className="navbarButton" onClick={() => { navigate("/login") }}>Login</button>
			</div>
		</div>
	)
}

export default Navbar;