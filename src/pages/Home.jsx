import "../App.css"

import Navbar from "../components/Navbar";
import Content from "../components/Content";
// import Register from "./Register";
// import Login from "./Login";

const Home = () => {

	// const [currentForm, setCurrentForm] =useState('login');

	return (
		<div>
			<Navbar/>
			<div className="homeContainer">
				<Content/>
			</div>
			<div className="homeContainer">
				<Content/>
			</div>
		</div>
	)
}

export default Home;
