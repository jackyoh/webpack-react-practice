
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default class Example5 extends React.Component {
	static get defaultProps() {
		    return {
		     	inputTest: 'abce'
		    };
     }
	constructor(props){
		super(props);
		this.state = {
			inputValue: 'DEFAULT VALUE',
			clickState: '',
		};

		this.handlerChnageTextBox1 = this.handlerChnageTextBox1.bind(this);
		this.handlerSubmit = this.handlerSubmit.bind(this);
	}

	handlerChnageTextBox1(e){
		console.log(this.state.inputValue);
		this.setState({inputValue: e.target.value});
	}

	handlerSubmit(e){
		this.setState({clickState: this.state.inputValue});
	}

	render(){

		return (
			<div>
			{this.props.inputTest}
				<p>
					input you name:
					<input type='text' id='textBox1' value={this.state.inputValue} onChange={this.handlerChnageTextBox1} />
				</p>
				<p>
					<button onClick={this.handlerSubmit}>Submit</button>
				</p>
				<p>
					{this.state.clickState}
				</p>
			</div>
		);
	}
}