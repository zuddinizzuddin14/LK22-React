import React from "react";
import burger from "../../assets/images/items/burger.svg";
import search from "../../assets/images/items/search.png";

function NavbarItems() {
	return (
		<div className="nav-right absolute right-0.5 top-5 lg:text-xl md:text-lg sm:text-base grid">
			<ul>
				<li className="md:inline-block hidden mr-3.5">
					<a
						href="#"
						className="lg:text-lg md:text-sm no-underline p-1 text-font font-bold hover:text-primary hover:border-b-2 hover:border-primary">
						Now Playing
					</a>
				</li>
				<li className="md:inline-block hidden mr-3.5">
					<a
						href="#"
						className="lg:text-lg md:text-sm no-underline p-1 text-font font-bold hover:text-primary hover:border-b-2 hover:border-primary">
						Upcoming
					</a>
				</li>
				<li className="inline-block lg:mr-3.5 md:mr-0 mr-10">
					<form action="" className="nav-search w-full max-w-xs bg-transparent items-center rounded-lg py-1 px-1.5">
						<input
							className="bg-trans border-none outline-none placeholder:text-primary"
							type="text"
							placeholder="search movies.."
							name="q"
						/>
						<button type="submit" className="border-none rounded-full cursor-pointer w-7 h-7 bg-white">
							<img className="w-3 ml-2" src={search} />
						</button>
					</form>
				</li>
				<li className="md:inline-block hidden mr-3.5">
					<a
						href="#"
						className="login text-secondary md:text-sm md:py-2 md:px-2 lg:py-2 lg:px-6 lg:border-4 md:border-2 border-solid border-secondary rounded-full hover:shadow-xl ml-8">
						login
					</a>
				</li>
				<li className="md:inline-block hidden mr-3.5">
					<a
						href="#"
						className="signup text-bar lg:py-3 lg:px-7 rounded-full bg-secondary hover:shadow-xl md:text-sm md:py-2 md:px-3">
						sign up
					</a>
				</li>
				<li className="md:hidden inline-block w-7 h-7 rounded-full bg-white mr-4">
					<a href="#" className="cursor-pointer hover:shadow-xl">
						<img className="w-3 mx-auto my-2" src={burger} />
					</a>
				</li>
			</ul>
		</div>
	);
}

export default NavbarItems;
