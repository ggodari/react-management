import React, { Component } from 'react';
import './App.css';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress'
import {withStyles} from '@material-ui/core/styles';
import Customer from './components/customer'

const styles = theme =>({
	root : {
		width : '100%',
		marginTop : theme.spacing(3),
		overflow : 'auto'
	},
	table : {
		minWidth : 1080
	},
	progress : {
		margin : theme.spacing(2)
	}
	
});

/*
	1) constructor()

	2) componentWillMount()

	3) render()

	4 componentDidMount()

	props or state => shouldComponentUpdate()
*/


class App extends React.Component {
	state = {
		customers : "",
		completed : 0
	}

	componentDidMount(){
		this.timer = setInterval(this.progress, 20);
		this.callApi().then(res => this.setState({customers: res}))
		.catch(err => console.log(err));
	}

	callApi = async () =>{
		const response = await fetch('/api/customers');
		const body = await response.json();
		return body
	}

	progress = () =>{
		const {completed} = this.state;
		this.setState({completed : completed >= 100 ? 0 : completed + 1})
	}
	render() {
		const {classes} = this.props;
		return ( 
			<Paper className={classes.root}>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<TableCell>순번</TableCell>
							<TableCell>사진</TableCell>
							<TableCell>이름</TableCell>
							<TableCell>생일</TableCell>
							<TableCell>성별</TableCell>
							<TableCell>직업</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{
							this.state.customers ? this.state.customers.map(c =>{
								return (
									<Customer
										key={c.id}
										id={c.id}
										image={c.image}
										name={c.name}
										birthday={c.birthday}
										gender={c.gender}
										job={c.job}
									>
									</Customer>
								);
							}) : 
							<TableRow>
								<TableCell colspan="6" align="center">
									<CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
								</TableCell>
							</TableRow>
						}
					</TableBody>
				</Table>
			</Paper>
		);
	}
}

export default withStyles(styles)(App);