import React from 'react';
import "./style.css";
import TableHeadings from "../TableHeadings";
import TableData from "../TableData";

const TableCustom = (props) => {
	return(
		<div>
			<table name={props.name}>
					<TableHeadings data={props.headingPop}/>
				<tbody>
					{props.tableData.map((row)=>{
						return (
							<tr>
								<TableData headingNames={props.headingPop} data={props.tableData} />
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default TableCustom;