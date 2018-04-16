import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const TableHeadings = (props) => {
	return(
		<thead>
			{props.data.map(heading=>{
				return <th key={props.data.indexOf(heading)}>{heading}</th>
			})}
		</thead>
	);
}

export default TableHeadings;