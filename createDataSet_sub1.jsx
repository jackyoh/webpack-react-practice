import React from 'react';
import ReactDOM from 'react-dom';


export default class CreateDataSet_sub1 extends React.Component {


   render(){

       return (
          <div>
             <p>Seperator:<input type='text' /></p>
             <p>資料欄位：</p>
             <p>資料權限：
                 <input type='radio' name='grant' />public
                 <input type='radio' name='grant' />private
             </p>
             <p><input type='button' value='Create' /></p>
          </div>
       );
   }

}
