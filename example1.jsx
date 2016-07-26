import React from 'react';
import ReactDOM from 'react-dom';

export default class Example1 extends React.Component {

	render(){
		return (
		   <div>
                     <p>建立資料集</p>
                     <p>資料集名稱：<input type='text' /></p>
		     <p>設定資料集關鍵字：<input type='text' /></p>
		     <p>代表圖示：<input type='text' /></p>
                     <p>來源網址：<input type='text' /></p>
                     <p>資料集提供：<input type='text' /></p>
                     <p>資料集提供URL:<input type='text' /></p>
                     <p>資料集發佈時間：<input type='text' /></p>
                     <p>資料集分類：<input type='text' /></p>
                     <p>資料集描述：<textarea></textarea></p>
		     <p>上傳資料：<input type='file' /></p>
                     <p><input type='button' value='Next'/></p>
		   </div>
		);
	}
}
