import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const TableHeadings = ({data}) => {
	return(
		<div>
			{data.map((heading)=>{
				return <th>{heading}</th>
			})}
		</div>
	);
}

export default TableHeadings;