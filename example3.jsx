import React from 'react';
import ReactDOM from 'react-dom';


export default class Example3 extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			englishName: '',
			showName:''
     		};

     		this.handlerInputName = this.handlerInputName.bind(this);
     		this.handlerSubmit = this.handlerSubmit.bind(this);
	}
   

	handlerInputName(e){
		this.setState({englishName: e.target.value});
	}

	handlerSubmit(e) {
		
		 this.setState({showName: this.state.englishName});
		// console.log();
	}


	render(){
		const result = this.inputName;
		return (
			<div>
				<p>
					Input Your Name:
					<input type='text' name='yourname' onChange={this.handlerInputName} />
				</p>
				<p>
					<button onClick={this.handlerSubmit}>Submit</button>
				</p>
				<p>
					{this.state.showName}
				</p>
			</div>
		);
	}
}
