import React from 'react';
import "./style.css";

const headingPop = [
	"unit",
	"site",
	"contact"
];

const tableData = [{
	unit: "1662",
	site: "asda",
	contact: "asdaaaa"
},{
	unit: "1663",
	site: "abbb",
	contact: "bbbbb"
}];

const Table = (props) => {
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

export default Table;