require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';

export class Tool extends React.Component {
	
     handleExample1 () {
     		console.log('click example1');
     }

     handleExample2() {
           console.log('click example2');
     }

     handleExample3() {
           console.log('click example3');
     }

     handleExample4() {
     	      console.log('click example4');
     }

     handleExample5() {
            console.log('click example5');
     }

	render() {
		return (
			<div>
                    <ul>
			       <li onClick = { this.handleExample1 }>example1</li>
			       <li onClick = { this.handleExample2 }>example2</li>
			       <li onClick = { this.handleExample3 }>example3</li>
			       <li onClick = { this.handleExample4 }>example4</li>
			       <li onClick = { this.handleExample5 }>example5</li>
                    </ul>
			</div>
		);
	}
}

ReactDOM.render(<Tool/>, document.querySelector("#tool"));