import React from 'react';
import ReactDOM from 'react-dom';

export default class UploadDataSet extends React.Component {

	render(){
		return (
		  <div>
                     <p>上傳資料集</p>
                     <p>資料集名稱：<input type='text' /></p>
                     <p>設定資料集關鍵字：<input type='text' /></p>
                     <p>代表圖示：</p>
                     <p>來源網址：<input type='text' /></p>
                     <p>資料提供著：<input type='text' /></p>
                     <p>資料集提供著URL：<input type='text' /></p>
                     <p>資料集發布時間：<input type='text' /></p>
                     <p>資料分類:<input type='text' /></p>
                     <p>資料描述：<textarea></textarea></p>
		     <p>上傳資料：<input type='file' /></p>
                     <p><input type='button' value='Next' /></p>
	          </div>
		);
	}
}
