import React from 'react';
import "./style.css";
import API from "../../utils/API.js";
import TableCustom from "../../components/TableCustom";
// gather other componets
//import otherComponent from "../otherComponent";

class MainMain extends Component {
	state = {
		mainData=[]
	};

	componentDidMount(){
		API.getMainMaintenance().then((result)=>{
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
				headingPop = {[unit, site, mainCat, description, alarm, bestTimes, resubmit, contactName, contact]}
				tableData = {mainData}
				/>
			</div>
		</div>
	</div>
};
};

export default MainMain;