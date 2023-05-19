import React from "react";
import banner1 from "../../assets/images/items/banner1.jpg";
import banner2 from "../../assets/images/items/banner2.jpg";
import { Carousel as CarouselFlowbite } from "flowbite-react";

function Carousel() {
	return (
		<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
			<CarouselFlowbite className="!rounded-none">
				<img src={banner1} alt="banner1" />
				<img src={banner2} alt="banner2" />
			</CarouselFlowbite>
		</div>
	);
}

export default Carousel;
