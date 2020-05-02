import React, {Component} from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends Component {
	render(){
		return (
			<TableRow>
				<TableCell>{this.props.id}</TableCell>
				<TableCell><img src={this.props.image} alt='profile'></img></TableCell>
				<TableCell>{this.props.name}</TableCell>
				<TableCell>{this.props.birthday}</TableCell>
				<TableCell>{this.props.gender}</TableCell>
				<TableCell>{this.props.job}</TableCell>
			</TableRow>
			// <div>
			// 	<CustomerProfile id={this.props.id} name={this.props.name} image={this.props.image}></CustomerProfile>
			// 	<CustomerInfo birthday={this.props.birthday} job={this.props.job}></CustomerInfo>
			// </div>	
		);
	}
}

// class CustomerProfile extends Component{
// 	render(){
// 		return (
// 			<div>
// 				<img src={this.props.image} alt="profile"></img>
// 				<h2>{this.props.name}({this.props.id})</h2>
// 			</div>
// 		)
// 	}
// }

// class CustomerInfo extends Component{
// 	render(){
// 		return(
// 			<div>
// 				<p>{this.props.birthday}</p>
// 				<p>{this.props.gender}</p>
// 				<p>{this.props.job}</p>
// 			</div>
// 		);
// 	}
// }

export default  Customer;