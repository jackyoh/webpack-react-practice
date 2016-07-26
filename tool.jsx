require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import CreateDataSet from './createDataSet';
import UploadDataSet from './uploadDataSet';
import DeleteDataSet from './deleteDataSet';
import ModifyDataSetInfo from './modifyDataSetInfo';

export class Tool extends React.Component {
	
     handlerCreateDataSet () {
          ReactDOM.render(<CreateDataSet />, document.querySelector("#myApp"));
     } 

     handlerUploadDataSet() {
          ReactDOM.render(<UploadDataSet />, document.querySelector("#myApp"));
     }

     handlerDeleteDataSet() {
          ReactDOM.render(<DeleteDataSet />, document.querySelector("#myApp"));
     }

     handlerModifyDataSetInfo() {
     	     ReactDOM.render(<ModifyDataSetInfo />, document.querySelector("#myApp"))
     }

     handleExample5() {
           ReactDOM.render(<Example5 />, document.querySelector("#myApp"))
     }

	render() {
		return (
		
                      <ul>
			 <li onClick = { this.handlerCreateDataSet }><a tabindex="-1" href="#">建立資料集</a></li>
                         <li onClick = { this.handlerUploadDataSet }><a tabindex="-1" href="#">上傳資料集</a></li>
                         <li onClick = { this.handlerDeleteDataSet }><a tabindex="-1" href="#">刪除資料集</a></li>
                         <li onClick = { this.handlerModifyDataSetInfo }><a tabindex="-1" href="#">修改資料集資訊</a></li> 
                        
                      </ul>
		   
		);
	}
}

ReactDOM.render(<Tool/>, document.querySelector("#tool"));
