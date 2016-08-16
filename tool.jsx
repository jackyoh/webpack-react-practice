require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import Example1 from './example1';
import Example2 from './example2';
import Example3 from './example3';
import Example4 from './example4';
import Example5 from './example5';
import Example6 from './example6';

export class Tool extends React.Component {
	
     handleExample1 () {
          ReactDOM.render(<Example1 />, document.querySelector("#myApp"));
     } 

     handleExample2() {
          var data = [
               {'When':'2 minutes ago', 'Who':'Jill Dupre', 'Description':'Created new acount'},
               {'When':'1 hour ago', 'Who': 'Lose White', 'Description':'Added fist chapter'}, 
               {'When':'2 hours ago', 'Who':'Jordan Whash', 'Description': 'Created new account'}

          ]

          ReactDOM.render(<Example2 headings={['When', 'Who', 'Description']} data={data} />, document.querySelector("#myApp"));
     }

     handleExample3() {
          ReactDOM.render(<Example3 />, document.querySelector("#myApp"));
     }

     handleExample4() {
     	     ReactDOM.render(<Example4 />, document.querySelector("#myApp"));
     }

     handleExample5() {
           ReactDOM.render(<Example5 />, document.querySelector("#myApp"));
     }

     handleExample6(){
          var data = [
               {'When':'2 minutes ago', 'Who':'Jill Dupre', 'Description':'Created new acount'},
               {'When':'1 hour ago', 'Who': 'Lose White', 'Description':'Added fist chapter'}, 
               {'When':'2 hours ago', 'Who':'Jordan Whash', 'Description': 'Created new account'}
          ]

           ReactDOM.render(<Example6 data={data} />, document.querySelector("#myApp"));
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
                           <li onClick = { this.handleExample6 }>example6</li>
                    </ul>
			</div>
		);
	}
}

ReactDOM.render(<Tool/>, document.querySelector("#tool"));