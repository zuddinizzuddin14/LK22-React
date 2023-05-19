import React from "react";
import NavbarItems from "./NavbarItems";
import logo from "../../assets/images/items/logoc.png";

function Navbar() {
	return (
		<nav className="h-20 w-full block bg-bar sticky top-0 z-50">
			<div className="container max-w-screen-xl w-full py-0 px-4 my-0 mx-auto relative">
				<div className="nav-left absolute top-4">
					<div className="nav-logo">
						<a href="#">
							<img className="md:w-20 w-16" src={logo} />
						</a>
					</div>
				</div>
			</div>
			<NavbarItems />
		</nav>
	);
}

export default Navbar;
