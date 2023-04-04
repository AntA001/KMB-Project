import React from "react";
import "./footer.css";

function footer() {
	return (
		<footer>
			<p className='left-cp'>Copyright Antonios Antoniadis</p>
			<div className='links'>
				<a href='https://www.google.com/'>Privacy</a>
				<a href='https://www.google.com/'>Terms</a>
				<a href='https://www.google.com/'>Cookies</a>
				<a href='https://www.google.com/'>More</a>
			</div>
			<p className='right-cp'>KMB © 2023</p>
		</footer>
	);
}

export default footer;
