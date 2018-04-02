import React from 'react';
import "./style.css";


const Table = (props) => {
	return(
		<div>
			<table name={props.name}>
				<TableRow>
					<TableHeadings data={props.headingPop}/>
				</TableRow>
				<tbody>
					{props.children}
				</tbody>
			</table>
		</div>
	);
}

export default Table;