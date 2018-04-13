import React, {Component} from 'react';
import "./style.css";
import API from "../../utils/API.js";
import TableCustom from "../../components/TableCustom";

class TenantMain extends Component{
	state = {
		mainData=[]
	};

	componentDidMount(){
		API.getTenMaintenance().then((result)=>{
			mainData=result;
		});
	};

	render(props){
		{props.children}
		<div className="container">
			<div className="row">
				<div className="col-xs-10">
					<TableCustom
					name = {"Maintenance Requests and History"}
					headingPop = {[unit, site, mainCat, description, alarm, bestTimes, resubmit]}
					tableData = {mainData}
					/>
				</div>
			</div>
		</div>
	}
;}

export default TenantMain;