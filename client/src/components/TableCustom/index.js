import React from 'react';
import "./style.css";

const TableCustom = (props) => {
	return(
		<div>
			<table name={props.name}>
				<TableRow>
					<TableHeadings data={headingPop}/>
				</TableRow>
				<tbody>
					{tableData.map((row)=>{
						return (
							<TableRow>
								<TableData headingNames={headingPop} data={tableData} />
							</TableRow>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default TableCustom;