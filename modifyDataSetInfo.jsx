import React from 'react';
import ReactDOM from 'react-dom';

export default class ModifyDataSetInfo extends React.Component {

	render(){
		return (
		   <div>
                     <p>修改資料集資訊</p>
                     <p>資料集名稱：<input type='text' /></p>
                     <p>設定資料集關鍵字：<input type='text' /></p>
                     <p>代表圖示：</p>
                     <p>來源網址：<input type='text' /></p>
                     <p>資料集提供著：<input type='text' /></p>
                     <p>資料集提供著URL:<input type='text' /></p>
                     <p>資料集發布時間：<input type='text' /></p>
                     <p>資料集描述：<input type='text' /></p>
                     <p>資料欄位：</p>
                     <p>資料權限：
                           <input type='radio' name='grant' value='public' />public
                           <input type='radio' name='grant' value='private' />private
                     </p>
                     <p><input type='button' value='Modify' /></p>
                   </div>
		);
	}
}
