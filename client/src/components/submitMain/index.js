import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const submitMain = (props) => {
	return(
		<form>
			Unit Maintenance:
			<input type="text" name="unit"/>
			<br/>
			Site:
			<input type="text" name="site"/>
			<br/>
			Maintenance Category:
			<input type="text" name="mainCat"/>
			<br/>
			Contact Person:
			<input type="text" name="contactName"/>
			<br/>
			Phone/Email:
			<input type= "text" name="contact"/>
			<br/>
			Description:
			<input type="text" name="description"/>
			<br/>
			Best Times:
			<input type="text" name="bestTimes"/>
			<br/>
			Have you submitted this request in the last six months?:
			<input type="radio" name="resubmit" value="false"/>No<br/>
			<input type="radio" name="resubmit" value="true"/>Yes<br/>
			Do you have an alarm system here?:
			<input type="radio" name="alarm" value="false"/>No<br/>
			<input type="radio" name="alarm" value="true"/>Yes<br/>	
					
			</form>
	);
}

export default submitMain;