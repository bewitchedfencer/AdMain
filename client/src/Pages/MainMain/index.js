import React, {Component} from 'react';
import "./style.css";
import API from "../../utils/API.js";
import {render} from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";


class MainMain extends Component {
	state = {
		mainData:[]
	};

	componentDidMount(){
		API.getMainMaintenance().then((result)=>{
			this.setState({
				mainData:result
			});
		});
	};

	render(props){
		const {data}=this.state;
		return(
			<div>
				{this.props.children}
				<ReactTable 
				data={data}
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
					},
					{
						Header:"Priority",
						accessor:"priority"
					},
					{
						Header:"Assigned",
						accessor:"assigned"
					}
				]}
				/>
			</div>
	);
};
};

export default MainMain;