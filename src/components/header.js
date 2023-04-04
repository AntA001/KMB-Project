import React from "react";
import "./header.css";

function header() {
	return (
		<React.Fragment>
			<div className='top-bar'>
				<div className='circle'>
					<p className='circle-inner'>AT</p>
				</div>
				<p className='greeting'>Hi Antonis</p>
			</div>
			<div className='header'>
				<div>
					<div className='profile-image'></div>
					<p className='profile-name'>Antonis Techis</p>
				</div>

				<div className='background-image'></div>
			</div>
		</React.Fragment>
	);
}

export default header;
