import React from 'react';
import ReactDOM from 'react-dom';

export default class Example3 extends React.Component {

	render(){
		return (
	          <div>
                      <p>刪除資料集</p>
                      <p>資料集名稱：
                         <select>
                            <option>select dataset</option>
                         </select>
                      </p>
                      <p><input type="checkbox" />全選/全不選</p>
                      <p>檔案列表:依上傳著時間排序</p>
                      <p><input type="button" value="DELETE" /></p>
                  </div>
		);
	}
}
