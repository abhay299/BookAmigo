import "../App.css"
import { useState } from "react";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
// import Register from "./Register";
// import Login from "./Login";

const Home = () => {

	const [currentPage, setCurrentPage] = useState(1);

	return (
		<div>
			<Navbar setCurrentPage = {setCurrentPage}/>
			{currentPage == 1 &&
				<div>
					<div className="homeContainer">
						<Content />
					</div>
					<div className="homeContainer">
						<Content />
					</div>
				</div>
			}
			{currentPage == 2 &&
				<div>
					<h1>
						Something Booking
					</h1>
					{/* <div className="homeContainer">
						<Content />
					</div>
					<div className="homeContainer">
						<Content />
					</div> */}
				</div>
			}
		</div>
	)
}

export default Home;
