require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import Example1 from './example1';
import Example2 from './example2';
import Example3 from './example3';
import Example4 from './example4';
import Example5 from './example5';

export class Tool extends React.Component {
	
     handleExample1 () {
          ReactDOM.render(<Example1 />, document.querySelector("#myApp"));
     } 

     handleExample2() {
          ReactDOM.render(<Example2 />, document.querySelector("#myApp"));
     }

     handleExample3() {
          ReactDOM.render(<Example3 />, document.querySelector("#myApp"));
     }

     handleExample4() {
     	     ReactDOM.render(<Example4 />, document.querySelector("#myApp"))
     }

     handleExample5() {
           ReactDOM.render(<Example5 />, document.querySelector("#myApp"))
     }

	render() {
		return (
		
                      <ul>
			 <li onClick = { this.handleExample1 }><a tabindex="-1" href="#">建立資料集</a></li>
                         <li onClick = { this.handleExample2 }><a tabindex="-1" href="#">上傳資料集</a></li>
                         <li onClick = { this.handleExample3 }><a tabindex="-1" href="#">刪除資料集</a></li>
                         <li onClick = { this.handleExample4 }><a tabindex="-1" href="#">修改資料集資訊</a></li> 
                        
                      </ul>
		   
		);
	}
}

ReactDOM.render(<Tool/>, document.querySelector("#tool"));
