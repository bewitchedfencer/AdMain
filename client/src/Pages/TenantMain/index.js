import React, {Component} from 'react';
import "./style.css";
import API from "../../utils/API.js";
import {render} from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";

class TenantMain extends Component{
	state = {
		mainData:[]
	};

	componentWillMount(){
		API.getTenMain().then((result)=>{
			console.log("front-end", result);
			this.setState({
				mainData:result
			})
			console.log("current state", this.state);
		});
	};

	render(props){
		const newData= this.state.mainData;
		console.log(newData);
		return (
			<div>
				{this.props.children}
				<ReactTable 
				data={newData.data}
				columns={[
					{
						Header:"Warehouse",
						accessor:"unit"
					},
					{
						Header:"Location",
						accessor:"site"
					},
					{
						Header:"Maintenance Category",
						accessor:"mainCat"
					},
					{
						Header:"Description",
						accessor:"description"
					},
					{
						Header:"Alarm?",
						accessor:"alarm"
					},
					{
						Header:"Best Times",
						accessor:"bestTimes"
					},
					{
						Header:"Resubmitted?",
						accessor:"resubmit"
					},
					{
						Header:"Contact Person",
						accessor:"contactName"
					},
					{
						Header:"Contact Information",
						accessor:"contact"
					}
				]}
				/>
			</div>
		);
	}
}

export default TenantMain;