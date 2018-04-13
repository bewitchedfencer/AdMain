import React from 'react';
import "./style.css";



const Text = (props) => {
	return(
		<div>
			<section className="text-center">
				{props.children}
			</section>
		</div>
	);
}

export default Text;