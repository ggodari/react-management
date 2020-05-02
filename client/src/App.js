import React, { Component } from 'react';
import './App.css';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
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
	}
	
});


const customers =[
	{
		"id" : 1,
		"image" : "https://placeimg.com/64/64/any",
		"name" : "okki",
		"birthday" : "740407",
		"gender" : "남자",
		"job" : "프로그래머"
	},
	{
		"id" : 2,
		"image" : "https://placeimg.com/64/64/2",
		"name" : "이순신",
		"birthday" : "조선시대",
		"gender" : "남자",
		"job" : "수군"
	},
	{
		"id" : 3,
		"image" : "https://placeimg.com/64/64/3",
		"name" : "강감찬",
		"birthday" : "고려시대",
		"gender" : "남자",
		"job" : "육군"
	}

]

class App extends React.Component {
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
							customers.map(c =>{
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
							})
						}
					</TableBody>
				</Table>
			</Paper>
		);
	}
}

export default withStyles(styles)(App);