import React from 'react';
import ReactDOM from 'react-dom';

export default class Example4 extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			inputValue: '',
			showLi: ['bbb','cccc'],
		};
		this.handlerInputName = this.handlerInputName.bind(this);
		this.handlerSubmit = this.handlerSubmit.bind(this);
	}

	handlerInputName(e){
		this.setState({inputValue: e.target.value});
	}

	handlerSubmit(e){
		this.setState({showLi: this.state.showLi.concat(this.state.inputValue)});
		console.log(this.state.showLi.length);
	}

	render(){
		return (
			<div>
				<p>
					Input Your Name:
					<input type='text' name='yourname' value='aaaa' onChange={this.handlerInputName} />
				</p>
				<p>
					<button onClick={this.handlerSubmit}>Submit</button>
				</p>
				<p>
					<ul>{this.state.showLi.map(function(key){
						return <li>{key}</li> ;
					})}</ul>
				</p>
			</div>
		);
	}
}