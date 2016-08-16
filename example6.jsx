import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default class Example5 extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			willMount: '',
			didMount: '',
			buttonClick: '',
			willUpdate:''
		};
		this.handleMount = this.handleMount.bind(this);
	}

	componentWillMount(){
		console.log('COMPONENT WILL MOUNT!1');
		this.setState({willMount: 'COMPONENT WILL MOUNT!1'});
	}

	componentDidMount(){
		console.log('COMPONENT DID MOUNT!3');
		this.setState({didMount: 'COMPONENT DID MOUNT!3'});
	}

	componentWillReceiveProps(nextProps){
		console.log('COMPONENT WILL RECEIVE PROPS');
	}

	shouldComponentUpdate(nextProps, nextState){
		console.log('SHOULD COMPONENT UPDATE');
		return true;
	}

	componentWillUpdate(){
		//this.setState({willUpdate: 'COMPONENT WILL UPDATE!'});
		console.log('COMPONENT WILL UPDATE');
	}

	handleMount(e){
		this.setState({buttonClick: 'BUTTON IS CLICK'});
		this.setState({willMount: ''});
		this.setState({didMount: ''});
	}
	render(){
		console.log('RENDER 2');
	
		return(
			<div>
				<p>{this.state.willMount}</p>
				<p>{this.state.didMount}</p>
			
				<p>{this.state.buttonClick}</p>
				<p><button onClick={this.handleMount}>Submit</button></p>
			</div>
		);

	}


}