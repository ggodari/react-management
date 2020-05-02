import React, { Component } from 'react';
class Test extends Component {
	constructor(props){
		super(props);
		this.state = {
			mode : 'read',
			selected_content_id : 2,
			subject : {
				title : 'WEB',
				sub : 'world wide web'
			},
			welcome : {title:'Welcome', desc : 'Hello, React'},
			contents : [
				{id : 1, title : 'HTML', desc : 'HTML is HyperText Markup Language'},
				{id : 2, title : 'CSS', desc : 'CSS is for design'},
				{id : 3, title : 'JavaScript', desc : 'JavaScript is for interactive'}
			]
		}
	}
	
	render() {
		let _title, _desc = null;
		if(this.state.mode === 'welcome'){
			_title = this.state.welcome.title;
			_desc = this.state.welcome.desc;
		}else{
			 _title = this.state.contents[0].title;
			 _desc = this.state.contents[0].desc;
		}
		return ( 
			<div className = "App">
				<Subject title = {this.state.subject.title} sub = {this.state.subject.sub}
					onChangePage={function(){
						this.setState({mode:'welcome'});
					}.bind(this)}
				> </Subject> 
				<Toc onChangePage={function(){
					// console.log('emit', id)
					// alert('hi');
					this.setState({
						mode : 'read',
					});
				}.bind(this)} data={this.state.contents}></Toc>
				<Content title={_title} desc={_desc}> </Content>
			</div >
		);
	}
}
