import React from 'react';
import "./style.css";


const TableData = (props) => {
	return(
		<div>
		{/* map over the data prop (as dataRow) */}
			{props.data.map((dataRow)=>{
				{/* map over headingPop prop. */}
				{props.headingNames.map((heading)=>{
					// forIn on dataRow
					for(let propertyKey in dataRow){
						//if heading === key
						if(heading ===propertyKey){
							//return <td>{dataRow[key]}</td>
							return <td>{dataRow[propertyKey]}</td>
						}
					}
				})}

			})}
		</div>
	);
}

export default TableData;