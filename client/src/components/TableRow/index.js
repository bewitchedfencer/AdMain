import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const TableRow = (props) => {
	return(
		<tr>
			{...props}
		</tr>
	);
}

export default TableRow;