import React from 'react';
import "./style.css";



const Text = (props) => {
	return(
		<div>
			<section>
				{props.children}
			</section>
		</div>
	);
}

export default Text;