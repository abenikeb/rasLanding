import React from "react";

function Map() {
	return (
		// <div className="google-map">
		// 	<iframe
		// 		id="gmap_canvas"
		// 		src="https://maps.google.com/maps?q=hollwood&t=&z=11&ie=UTF8&iwloc=&output=embed"></iframe>
		// </div>
		<div className="google-map">
			<iframe
				id="gmap_canvas"
				src="https://maps.google.com/maps?q=8.9990,38.7630&z=15&ie=UTF8&output=embed"
				width="600"
				height="450"
				// style="border:0;"
				allowfullscreen=""
				loading="lazy"></iframe>
		</div>
	);
}

export default Map;
